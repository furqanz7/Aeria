"use client";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useMotionSettings } from "@/lib/motion";

const settled = { opacity: 1, y: 0, filter: "blur(0px)" };
const entrance = { opacity: 0, y: 36, filter: "blur(5px)" };

export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const entered = useInView(ref, { once: true, amount: "some" });
  const revealed = useRef(false);
  const prepared = useRef(false);
  const controls = useAnimationControls();
  const { ready, reduced, paused, visible } = useMotionSettings();
  useLayoutEffect(() => {
    if (!ready) return;
    if (reduced || paused || !visible) {
      controls.stop();
      controls.set(settled);
      prepared.current = false;
      if (entered) revealed.current = true;
      return;
    }
    if (revealed.current) return;
    if (!entered) {
      const bounds = ref.current?.getBoundingClientRect();
      // Content already on screen (including restored/deep-linked pages)
      // stays settled. Only prepare an entrance while it is offscreen.
      if (!prepared.current && bounds && bounds.top < window.innerHeight && bounds.bottom > 0) {
        revealed.current = true;
        controls.set(settled);
      } else if (!prepared.current) {
        controls.set(entrance);
        prepared.current = true;
      }
      return;
    }
    revealed.current = true;
    if (!prepared.current) {
      controls.set(settled);
      return;
    }
    void controls.start({ ...settled,
      transition: { duration: 1.15, ease: [.22, 1, .36, 1] } });
  }, [ready, reduced, paused, visible, entered, controls]);
  return <motion.div ref={ref} className={`reveal ${className}`} initial={false} animate={controls}>{children}</motion.div>;
}
