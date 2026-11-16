"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/** Independent photographic layers give the atmosphere depth as the page moves. */
export default function SkyAtmosphere({
  closing = false,
}: {
  closing?: boolean;
}) {
  const scene = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const awake = useInView(scene, { margin: "150px" });
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start start", "end start"],
  });
  const skyY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const cloudY = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const butterflyY = useTransform(scrollYProgress, [0, 1], [0, -175]);

  return (
    <div
      ref={scene}
      className={`sky-atmosphere ${closing ? "sky-atmosphere-closing" : ""} ${awake ? "is-awake" : ""}`}
      aria-hidden="true"
    >
      <motion.div
        className="sky-backdrop"
        style={reduced ? undefined : { y: skyY }}
      >
        <Image
          src="/visuals/aeria-cinematic-sky.webp"
          alt=""
          fill
          priority={!closing}
          sizes="100vw"
          quality={90}
        />
      </motion.div>
      <div className="sky-light" />
      <motion.div
        className="sky-clouds"
        style={reduced ? undefined : { y: cloudY }}
      >
        <div className="cloud-drift cloud-drift-back">
          <Image
            src="/visuals/aeria-cloud-veil.webp"
            alt=""
            fill
            priority={!closing}
            sizes="100vw"
          />
        </div>
        <div className="cloud-drift cloud-drift-front">
          <Image
            src="/visuals/aeria-cloud-veil.webp"
            alt=""
            fill
            priority={!closing}
            sizes="100vw"
          />
        </div>
      </motion.div>
      <motion.div
        className="sky-butterfly-position"
        style={reduced ? undefined : { y: butterflyY }}
      >
        <div className="butterfly-flight">
          <Image
            src="/visuals/aeria-cobalt-butterfly.webp"
            alt=""
            fill
            sizes="(max-width: 600px) 120px, 180px"
            className="living-butterfly"
          />
        </div>
      </motion.div>
      <div className="sky-bottom-fade" />
    </div>
  );
}
