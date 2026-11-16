"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useMotionSettings } from "@/lib/motion";

const settled = { opacity: 1, y: 0, filter: "blur(0px)" };

export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const entered = useInView(ref, { once: true, amount: .16 });
  const revealed = useRef(false);
  const controls = useAnimationControls();
  const { ready, reduced, paused, visible } = useMotionSettings();
  useEffect(() => {
    if (!ready) return;
    if (reduced || paused || !visible) {
      controls.stop();
      controls.set(settled);
      if (entered) revealed.current = true;
      return;
    }
    if (!entered || revealed.current) return;
    revealed.current = true;
    void controls.start({ opacity: [.2, 1], y: [36, 0], filter: ["blur(5px)", "blur(0px)"],
      transition: { duration: 1.15, ease: [.22, 1, .36, 1] } });
  }, [ready, reduced, paused, visible, entered, controls]);
  return <motion.div ref={ref} className={`reveal ${className}`} initial={false} animate={controls}>{children}</motion.div>;
}
