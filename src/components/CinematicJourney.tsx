"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  type MotionStyle,
  type MotionValue,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import AeriaWordmark from "./AeriaWordmark";
import { Arrow } from "./Icons";
import WingDissolve from "./WingDissolve";
import { setMotionPaused, useMotionSettings } from "@/lib/motion";

export function Feather({ className = "" }: { className?: string }) {
  return <span className={`film-feather ${className}`} aria-hidden="true" />;
}

function LightField({ active, progress }: { active: boolean; progress: MotionValue<number> }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const elapsed = useRef(0);
  useEffect(() => {
    const el = canvas.current;
    if (!el || !active) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;
    let width = 0,
      height = 0,
      frame = 0,
      last = 0;
    const particles = Array.from({ length: 85 }, (_, i) => {
      const depth = (i % 5) / 4;
      return {
        x: ((i * 73.71) % 100) / 100,
        y: ((i * 37.13) % 100) / 100,
        depth,
        radius: 0.4 + depth * 0.95,
        speed: 0.004 + depth * 0.009,
      };
    });
    const resize = () => {
      width = el.clientWidth;
      height = el.clientHeight;
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      el.width = width * dpr;
      el.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    resize();
    const draw = (now: number) => {
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;
      if (!document.hidden) {
        elapsed.current += dt;
        const time = elapsed.current;
        const descent = progress.get();
        const submerged = Math.max(0, Math.min(1, (descent - 0.25) / 0.4));
        const light = `rgb(${Math.round(246 - 69 * submerged)}, ${Math.round(232 - 9 * submerged)}, ${Math.round(184 + 63 * submerged)})`;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = light;
        particles.forEach((p, i) => {
          const y = (((p.y - time * p.speed - descent * (0.025 + p.depth * 0.1)) % 1) + 1) % 1;
          const x = p.x * width + Math.sin(time * 0.25 + i) * (8 + p.depth * 16);
          const edge = Math.min(1, y / 0.08, (1 - y) / 0.08);
          ctx.globalAlpha = edge * (0.12 + (Math.sin(time * 0.8 + i) + 1) * (0.1 + p.depth * 0.08));
          ctx.beginPath();
          ctx.arc(x, y * height, p.radius * (1 + descent * p.depth * 0.25), 0, Math.PI * 2);
          ctx.fill();
        });
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [active, progress]);
  return (
    <canvas ref={canvas} className="film-light-field" aria-hidden="true" />
  );
}

export default function CinematicJourney() {
  const ref = useRef<HTMLElement>(null);
  const timeline = useRef<HTMLDivElement>(null);
  const wings = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { margin: "100px" });
  const { ready, reduced, paused, visible } = useMotionSettings();
  const scrollActive = ready && !reduced && visible && active;
  const playing = scrollActive && !paused;
  const { scrollYProgress: progress } = useScroll({
    target: timeline,
    // The end is measured against the document, not the changing visual viewport.
    // The track ends exactly where the native sticky stage releases.
    offset: ["start start", "end start"],
  });
  const skyOpacity = useTransform(progress, [0, 0.28, 0.66], [1, 1, 0]);
  const depthOpacity = useTransform(progress, [0.25, 0.65], [0, 1]);
  const titleOpacity = useTransform(progress, [0, 0.2, 0.43], [1, 1, 0]);
  const titleY = useTransform(progress, [0, 0.5], ["0px", "-100px"]);
  const deepTextOpacity = useTransform(progress, [0.58, 0.82], [0, 1]);
  const deepTextY = useTransform(progress, [0.55, 0.84], ["45px", "0px"]);
  const wingY = useTransform(progress, [0, 0.45, 1], ["0px", "-50px", "-195px"]);
  const wingScale = useTransform(progress, [0, 1], [1, 0.68]);
  const wingOpacity = useTransform(progress, [0, 0.3, 0.67], [1, 1, 0]);
  const cameraScale = useTransform(progress, [0, 1], [1.04, 1.24]);
  const lineScale = useTransform(progress, [0, 1], [0.05, 1]);
  const skySpectrum = useTransform(progress, [0, 0.56], ["12%", "82%"]);
  const seaSpectrum = useTransform(progress, [0.25, 0.9], ["15%", "87%"]);
  const spectralStrength = useTransform(progress, [0, 0.34, 0.55, 1], [0.25, 0.85, 0.85, 0.45]);
  const distantFeathersY = useTransform(progress, [0, 1], [0, -16]);
  const nearFeathersY = useTransform(progress, [0, 1], [0, -54]);
  return (
    <motion.section
      ref={ref}
      id="hero"
      className={`cinematic-journey ${paused ? "film-paused" : ""} ${active ? "film-active" : ""}`}
      aria-label="Aeria — a new dimension of payments"
      style={reduced ? undefined : {
        "--film-sky-opacity": skyOpacity,
        "--film-depth-opacity": depthOpacity,
        "--film-camera-scale": cameraScale,
        "--film-title-opacity": titleOpacity,
        "--film-title-y": titleY,
        "--film-deep-opacity": deepTextOpacity,
        "--film-deep-y": deepTextY,
        "--film-wing-y": wingY,
        "--film-wing-scale": wingScale,
        "--film-wing-opacity": wingOpacity,
        "--film-sky-spectrum": skySpectrum,
        "--film-sea-spectrum": seaSpectrum,
        "--film-spectrum-strength": spectralStrength,
      } as MotionStyle}
    >
      <div ref={timeline} className="film-scroll-track" aria-hidden="true" />
      <div className="film-stage">
        <div className="film-world film-sky">
          <Image
            src="/visuals/aeria-film-ascent-iridescent.webp"
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
          />
          <div className="film-rays film-rays--sky" aria-hidden="true" />
        </div>
        <div className="film-world film-depth">
          <Image
            src="/visuals/aeria-film-depth-iridescent.webp"
            alt=""
            fill
            unoptimized
            sizes="100vw"
          />
          <div className="film-rays film-rays--sea" aria-hidden="true" />
        </div>
        <div className="film-vignette" />
        <LightField active={playing} progress={progress} />
        <div className="film-grain" aria-hidden="true" />
        <div className="film-intro">
          <p className="film-kicker">A NEW DIMENSION OF PAYMENTS</p>
          <h1 aria-label="Aeria"><AeriaWordmark /></h1>
          <p className="film-signature">Fly with Aeria.</p>
        </div>
        <div ref={wings} className="film-wings" aria-hidden="true">
          <div className="wing-half wing-left" />
          <div className="wing-half wing-right" />
        </div>
        <WingDissolve progress={progress} active={scrollActive} wings={wings} />
        <div className="film-cloud-drift" aria-hidden="true" />
        <motion.div className="film-feathers film-feathers--distant" style={{ y: distantFeathersY }} aria-hidden="true">
          {[0, 3, 4, 6].map((i) => (
            <Feather key={i} className={`feather-${i}`} />
          ))}
        </motion.div>
        <motion.div className="film-feathers film-feathers--near" style={{ y: nearFeathersY }} aria-hidden="true">
          {[1, 2, 5].map((i) => (
            <Feather key={i} className={`feather-${i}`} />
          ))}
        </motion.div>
        <div className="film-deep-copy">
          <p className="film-kicker">CONNECTION, WITHOUT BOUNDARIES</p>
          <h2>
            One identity.
            <br />
            <em>Every currency.</em>
            <br />
            Everywhere.
          </h2>
          <p>
            A familiar connection.
            <br />A world of possibility.
          </p>
        </div>
        <div className="film-bottom">
          <span className="film-platform">
            THE WORLD’S UNIVERSAL
            <br />
            PROXIMITY PAYMENT PLATFORM
          </span>
          <a href="#vision" className="film-discover">
            Discover Aeria <Arrow />
            <span className="film-progress">
              <motion.i style={reduced ? undefined : { scaleX: lineScale }} />
            </span>
          </a>
          <button
            className="film-motion-toggle"
            aria-pressed={paused}
            onClick={() => setMotionPaused(!paused)}
          >
            {paused ? "Resume atmosphere" : "Pause atmosphere"}
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
          </button>
        </div>
      </div>
    </motion.section>
  );
}
