"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { drawMerchantScreen, type MerchantPhase } from "./merchant-screen";

function triangle() {
  const shape = new THREE.Shape();
  shape.moveTo(0, 1.25);
  shape.quadraticCurveTo(0.16, 1.25, 0.29, 1.02);
  shape.lineTo(1.36, -0.84);
  shape.quadraticCurveTo(1.56, -1.18, 1.15, -1.18);
  shape.lineTo(-1.15, -1.18);
  shape.quadraticCurveTo(-1.56, -1.18, -1.36, -0.84);
  shape.lineTo(-0.29, 1.02);
  shape.quadraticCurveTo(-0.16, 1.25, 0, 1.25);
  return shape;
}

function roundedRectangle(width: number, height: number, radius: number) {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
}

/** Shared physical scene with a native, stateful payment interface. */
export default function MerchantHardware({ phase = "ready", playing = false }: { phase?: MerchantPhase; playing?: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const controller = useRef<{ setPhase: (phase: MerchantPhase) => void; setPlaying: (value: boolean) => void } | null>(null);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let active = true;
    let currentPhase: MerchantPhase = "ready";
    let screenReady = false;
    let markingsReady = false;
    let contextAvailable = true;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }
    const scene = new THREE.Scene();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    element.appendChild(renderer.domElement);

    const environment = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environmentMap = pmrem.fromScene(environment, 0.04);
    scene.environment = environmentMap.texture;
    scene.environmentIntensity = 0.55;
    environment.dispose();
    pmrem.dispose();

    const camera = new THREE.PerspectiveCamera(32, 500 / 600, 0.1, 100);
    camera.position.set(5.8, 8.2, 12.2);
    const target = new THREE.Vector3(-0.05, -0.75, 1.35);
    camera.lookAt(target);
    scene.add(new THREE.HemisphereLight(0xc7e8ff, 0x101e35, 2));
    const key = new THREE.DirectionalLight(0xfff4de, 5);
    key.position.set(-4, 8, 5);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x8fbaff, 3);
    rim.position.set(4, 2, -5);
    scene.add(rim);

    const terminal = new THREE.Group();
    terminal.rotation.x = -Math.PI / 2;
    terminal.rotation.z = -0.08;
    terminal.position.set(1.3, -1.1, -0.1);
    terminal.scale.setScalar(1.18);
    scene.add(terminal);
    const shell = new THREE.Mesh(
      new THREE.ExtrudeGeometry(triangle(), {
        depth: 0.25, bevelEnabled: true, bevelSize: 0.065,
        bevelThickness: 0.065, bevelSegments: 6, curveSegments: 30,
      }),
      new THREE.MeshStandardMaterial({ color: 0x294463, metalness: 0.85, roughness: 0.24 }),
    );
    terminal.add(shell);
    const glass = new THREE.Mesh(
      new THREE.ShapeGeometry(triangle(), 40),
      new THREE.MeshPhysicalMaterial({
        color: 0x061831, metalness: 0.12, roughness: 0.31,
        clearcoat: 0.45, clearcoatRoughness: 0.24,
      }),
    );
    glass.scale.set(0.985, 0.985, 1);
    glass.position.z = 0.317;
    terminal.add(glass);

    const artwork = document.createElement("canvas");
    artwork.width = 1024;
    artwork.height = 1024;
    const texture = new THREE.CanvasTexture(artwork);
    texture.colorSpace = THREE.SRGBColorSpace;
    const markings = new THREE.Mesh(
      new THREE.PlaneGeometry(2.9, 2.9),
      new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, toneMapped: false }),
    );
    markings.position.z = 0.319;
    terminal.add(markings);
    const drawMarkings = () => {
      if (!active) return;
      const context = artwork.getContext("2d");
      if (!context) return;
      context.clearRect(0, 0, 1024, 1024);
      const font = getComputedStyle(element).getPropertyValue("--font-display").trim() || "serif";
      context.textAlign = "center";
      context.fillStyle = "#d9d9ca";
      context.font = `74px ${font}`;
      context.fillText("Aeria", 512, 375);
      context.strokeStyle = "#b0c8d1";
      context.lineWidth = 7;
      context.lineCap = "round";
      for (let i = 0; i < 3; i++) {
        context.beginPath();
        context.arc(485, 610, 25 + i * 25, -0.85, 0.85);
        context.stroke();
      }
      context.fillStyle = currentPhase === "complete" ? "#9be1b9" : currentPhase === "ready" ? "#9cb7c8" : "#c6e7f3";
      context.beginPath(); context.arc(512, 800, 4, 0, Math.PI * 2); context.fill();
      texture.needsUpdate = true;
      markingsReady = true;
      render();
    };

    const phone = new THREE.Group();
    phone.position.set(-0.2, -1.0, 2.8);
    phone.rotation.set(-1.18, 0.02, -0.08);
    scene.add(phone);
    const phoneBody = new THREE.Mesh(
      new THREE.ExtrudeGeometry(roundedRectangle(2.19, 4.63, 0.37), {
        depth: 0.12, bevelEnabled: true, bevelSize: 0.025,
        bevelThickness: 0.025, bevelSegments: 5, curveSegments: 24,
      }),
      new THREE.MeshStandardMaterial({ color: 0x919692, metalness: 1, roughness: 0.26 }),
    );
    phoneBody.position.z = -0.15;
    phone.add(phoneBody);
    const button = new THREE.Mesh(
      new THREE.BoxGeometry(0.035, 0.42, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x8c9495, metalness: 1, roughness: 0.25 }),
    );
    button.position.set(1.115, 0.75, -0.08);
    phone.add(button);

    let frame = 0;
    let playing = false;
    let elapsed = 0;
    let ambientTime = 0;
    let lastFrame = 0;
    let lastPaint = -100;
    const finalPosition = phone.position.clone();
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 880;
    screenCanvas.height = 1856;
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.colorSpace = THREE.SRGBColorSpace;
    screenTexture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    const style = getComputedStyle(element);
    const fonts = {
      display: style.getPropertyValue("--font-display").trim() || "serif",
      body: style.getPropertyValue("--font-manrope").trim() || "sans-serif",
    };
    const paintScreen = (progress = 1) => {
      drawMerchantScreen(screenCanvas, currentPhase, fonts, progress, ambientTime);
      screenTexture.needsUpdate = true;
      screenReady = true;
    };
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 4.64),
      new THREE.MeshBasicMaterial({
        map: screenTexture, transparent: true, alphaTest: 0.1, toneMapped: false,
      }),
    );
    screen.position.z = 0.012;
    phone.add(screen);

    const render = () => {
      if (!contextAvailable) return;
      renderer.render(scene, camera);
      if (screenReady && markingsReady) element.dataset.ready = "true";
    };
    const resize = () => {
      const width = element.clientWidth;
      const height = element.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.setViewOffset(width, height, 0, height * 0.14, width, height);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      render();
    };
    const duration = () => currentPhase === "tapping" ? 1500 : 1250;
    const applyMotion = (progress: number) => {
      phone.position.copy(finalPosition);
      if (currentPhase === "tapping") {
        const remaining = Math.pow(1 - progress, 3);
        phone.position.y += 0.12 * remaining;
        phone.position.z += 0.5 * remaining;
      }
    };
    const animate = (now: number) => {
      if (!active || !contextAvailable || !playing || document.hidden || motionPreference.matches) return;
      const delta = lastFrame ? Math.min(now - lastFrame, 100) : 0;
      lastFrame = now;
      elapsed += delta;
      ambientTime += delta / 1000;
      const progress = Math.min(elapsed / duration(), 1);
      applyMotion(progress);
      const repaint = now - lastPaint >= 83;
      if (repaint) {
        paintScreen(currentPhase === "processing" ? (elapsed % duration()) / duration() : progress);
        lastPaint = now;
      }
      if (progress < 1 || repaint) render();
      frame = requestAnimationFrame(animate);
    };
    const setPhase = (next: MerchantPhase) => {
      cancelAnimationFrame(frame);
      currentPhase = next;
      element.dataset.phase = next;
      elapsed = motionPreference.matches ? duration() : 0;
      lastFrame = 0;
      lastPaint = -100;
      const progress = motionPreference.matches ? 1 : 0;
      applyMotion(progress);
      paintScreen(progress);
      drawMarkings();
      render();
      if (playing) frame = requestAnimationFrame(animate);
    };
    const setPlaying = (value: boolean) => {
      cancelAnimationFrame(frame);
      playing = value && !motionPreference.matches && !document.hidden;
      element.dataset.motion = playing ? "running" : "paused";
      lastFrame = 0;
      if (playing && contextAvailable) frame = requestAnimationFrame(animate);
    };
    controller.current = { setPhase, setPlaying };
    const contextLost = (event: Event) => {
      event.preventDefault();
      contextAvailable = false;
      cancelAnimationFrame(frame);
      delete element.dataset.ready;
    };
    const contextRestored = () => {
      contextAvailable = true;
      phone.position.copy(finalPosition);
      resize();
      if (playing) { lastFrame = 0; frame = requestAnimationFrame(animate); }
    };
    renderer.domElement.addEventListener("webglcontextlost", contextLost);
    renderer.domElement.addEventListener("webglcontextrestored", contextRestored);
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    resize();
    void document.fonts.ready.then(() => {
      if (!active) return;
      paintScreen(Math.min(elapsed / duration(), 1));
      drawMarkings();
    });
    return () => {
      active = false;
      controller.current = null;
      observer.disconnect();
      cancelAnimationFrame(frame);
      renderer.domElement.removeEventListener("webglcontextlost", contextLost);
      renderer.domElement.removeEventListener("webglcontextrestored", contextRestored);
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return;
        object.geometry.dispose();
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        materials.forEach((material) => material.dispose());
      });
      texture.dispose();
      screenTexture.dispose();
      environmentMap.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  useEffect(() => {
    controller.current?.setPhase(phase);
  }, [phase]);

  useEffect(() => {
    controller.current?.setPlaying(playing);
  }, [playing]);

  return <div ref={host} className="merchant-hardware" />;
}
