"use client";
import { useEffect } from "react";
import { useMotionSettings } from "@/lib/motion";

/** One set of playback gates for CSS, canvas, and component motion. */
export default function MotionDirector() {
  const motion = useMotionSettings();
  useEffect(() => {
    const chapters = document.querySelectorAll<HTMLElement>(".section, .final-cta");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) (entry.target as HTMLElement).dataset.motionActive = String(entry.isIntersecting);
    }, { rootMargin: "100px" });
    chapters.forEach((chapter) => observer.observe(chapter));
    return () => {
      observer.disconnect();
      chapters.forEach((chapter) => delete chapter.dataset.motionActive);
    };
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.motionReady = String(motion.ready);
    root.dataset.motionPaused = String(motion.paused);
    root.dataset.reducedMotion = String(motion.reduced);
    root.dataset.pageHidden = String(!motion.visible);
  }, [motion]);
  useEffect(() => () => {
    const root = document.documentElement;
    delete root.dataset.motionReady;
    delete root.dataset.motionPaused;
    delete root.dataset.reducedMotion;
    delete root.dataset.pageHidden;
  }, []);
  return null;
}
