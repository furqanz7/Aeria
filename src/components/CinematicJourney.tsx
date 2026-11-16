"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Arrow } from "./Icons";
import WingDissolve from "./WingDissolve";
import { setMotionPaused, useMotionSettings } from "@/lib/motion";

export function Feather({ className = "" }: { className?: string }) {
  return <span className={`film-feather ${className}`} aria-hidden="true" />;
}

export function LightField({ active = true }: { active?: boolean }) {
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
    const particles = Array.from({ length: 85 }, (_, i) => ({
      x: ((i * 73.71) % 100) / 100,
      y: ((i * 37.13) % 100) / 100,
      r: 0.4 + (i % 4) * 0.35,
      speed: 0.004 + (i % 7) * 0.0015,
    }));
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
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p, i) => {
          const y = (((p.y - time * p.speed) % 1) + 1) % 1;
          const x = p.x * width + Math.sin(time * 0.25 + i) * 24;
          const alpha = 0.14 + (Math.sin(time * 0.8 + i) + 1) * 0.19;
          ctx.fillStyle = `rgba(246,232,184,${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y * height, p.r, 0, Math.PI * 2);
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
  }, [active]);
  return (
    <canvas ref={canvas} className="film-light-field" aria-hidden="true" />
  );
}

export default function CinematicJourney() {
  const ref = useRef<HTMLElement>(null);
  const active = useInView(ref, { margin: "100px" });
  const { ready, reduced, paused, visible } = useMotionSettings();
  const playing = ready && !reduced && !paused && visible && active;
  const { scrollYProgress: progress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const skyOpacity = useTransform(progress, [0, 0.28, 0.66], [1, 1, 0]);
  const depthOpacity = useTransform(progress, [0.25, 0.65], [0, 1]);
  const titleOpacity = useTransform(progress, [0, 0.2, 0.43], [1, 1, 0]);
  const titleY = useTransform(progress, [0, 0.5], [0, -100]);
  const deepTextOpacity = useTransform(progress, [0.58, 0.82], [0, 1]);
  const deepTextY = useTransform(progress, [0.55, 0.84], [45, 0]);
  const wingY = useTransform(progress, [0, 0.45, 1], [0, -50, -195]);
  const wingScale = useTransform(progress, [0, 1], [1, 0.68]);
  const wingOpacity = useTransform(progress, [0, 0.3, 0.67], [1, 1, 0]);
  const cameraScale = useTransform(progress, [0, 1], [1.04, 1.24]);
  const lineScale = useTransform(progress, [0, 1], [0.05, 1]);
  return (
    <section
      ref={ref}
      id="hero"
      className={`cinematic-journey ${paused ? "film-paused" : ""} ${active ? "film-active" : ""}`}
      aria-label="Aeria — a new dimension of payments"
    >
      <div className="film-stage">
        <motion.div
          className="film-world film-sky"
          style={
            reduced ? undefined : { opacity: skyOpacity, scale: cameraScale }
          }
        >
          <Image
            src="/visuals/aeria-film-ascent.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        <motion.div
          className="film-world film-depth"
          style={
            reduced
              ? { opacity: 0 }
              : { opacity: depthOpacity, scale: cameraScale }
          }
        >
          <Image
            src="/visuals/aeria-film-depth.webp"
            alt=""
            fill
            sizes="100vw"
            quality={90}
          />
          <div className="film-rays" />
        </motion.div>
        <div className="film-vignette" />
        <LightField active={playing} />
        <div className="film-grain" aria-hidden="true" />
        <motion.div
          className="film-intro"
          style={reduced ? undefined : { opacity: titleOpacity, y: titleY }}
        >
          <p className="film-kicker">A NEW DIMENSION OF PAYMENTS</p>
          <h1 aria-label="Aeria">AERIA</h1>
          <p className="film-signature">Fly with Aeria.</p>
        </motion.div>
        <motion.div
          className="film-wings"
          style={
            reduced
              ? undefined
              : { y: wingY, scale: wingScale, opacity: wingOpacity }
          }
          aria-hidden="true"
        >
          <div className="wing-half wing-left" />
          <div className="wing-half wing-right" />
        </motion.div>
        <WingDissolve progress={progress} active={playing} />
        <div className="film-cloud-drift" aria-hidden="true" />
        <div className="film-feathers" aria-hidden="true">
          {Array.from({ length: 7 }, (_, i) => (
            <Feather key={i} className={`feather-${i}`} />
          ))}
        </div>
        <motion.div
          className="film-deep-copy"
          style={
            reduced ? undefined : { opacity: deepTextOpacity, y: deepTextY }
          }
        >
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
        </motion.div>
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
    </section>
  );
}
