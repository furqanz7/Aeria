"use client";

import { useEffect, useRef, type RefObject } from "react";
import type { MotionValue } from "framer-motion";

/** Samples the original wing artwork into light; scroll carries it into the next scene. */
export default function WingDissolve({
  progress,
  active,
  wings,
}: {
  progress: MotionValue<number>;
  active: boolean;
  wings: RefObject<HTMLDivElement | null>;
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const el = canvas.current;
    if (!el || !active) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;
    let width = 0,
      height = 0,
      wingWidth = 0,
      wingHeight = 0,
      wingTop = 0,
      frame = 0,
      loaded = false;
    let dots: {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
    }[] = [];
    const source = new window.Image();
    source.onload = () => {
      const sample = document.createElement("canvas");
      sample.width = 300;
      sample.height = 158;
      const sampleCtx = sample.getContext("2d", { willReadFrequently: true });
      if (!sampleCtx) return;
      sampleCtx.drawImage(source, 0, 0, 300, 158);
      const pixels = sampleCtx.getImageData(0, 0, 300, 158).data;
      const next: typeof dots = [];
      for (let y = 0; y < 158; y += 3)
        for (let x = 0; x < 300; x += 3) {
          const alpha = pixels[(y * 300 + x) * 4 + 3];
          if (alpha > 130) {
            const n = next.length;
            next.push({
              x: x / 300 - 0.5,
              y: y / 158,
              dx: Math.sin(n * 7.3) * 0.6,
              dy: -0.15 - ((n * 31.2) % 100) / 100,
              radius: 0.35 + (n % 4) * 0.2,
            });
          }
        }
      dots = next;
      loaded = true;
    };
    source.src = "/visuals/aeria-film-wings.webp";
    const resize = () => {
      width = el.clientWidth;
      height = el.clientHeight;
      // Read untransformed layout so dust follows the actual responsive artwork.
      const artwork = wings.current;
      wingWidth = artwork?.offsetWidth ?? 0;
      wingHeight = artwork?.offsetHeight ?? 0;
      wingTop = artwork?.offsetTop ?? 0;
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      el.width = width * dpr;
      el.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);
    if (wings.current) observer.observe(wings.current);
    resize();
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const p = progress.get();
      const dissolve = Math.max(0, Math.min(1, (p - 0.29) / 0.58));
      if (loaded && dissolve > 0 && dissolve < 1 && !document.hidden) {
        const scale = 1 - 0.32 * p;
        const top = wingTop -
          (p < 0.45 ? (p / 0.45) * 50 : 50 + ((p - 0.45) / 0.55) * 145);
        const travel = dissolve * dissolve;
        const alpha = Math.sin(dissolve * Math.PI) * 0.72;
        ctx.fillStyle = `rgba(231,222,183,${alpha})`;
        dots.forEach((dot, i) => {
          const x =
            width / 2 + dot.x * wingWidth * scale + dot.dx * width * travel;
          const y =
            top +
            (wingHeight * (1 - scale)) / 2 +
            dot.y * wingHeight * scale +
            dot.dy * height * travel;
          ctx.beginPath();
          ctx.arc(x, y, dot.radius * (1 + dissolve), 0, Math.PI * 2);
          ctx.fill();
          if (i % 17 === 0) {
            ctx.fillStyle = `rgba(229,238,231,${alpha * 0.25})`;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = `rgba(231,222,183,${alpha})`;
          }
        });
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      source.onload = null;
    };
  }, [active, progress, wings]);
  return <canvas ref={canvas} className="film-wing-dust" aria-hidden="true" />;
}
