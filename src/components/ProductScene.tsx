"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useMotionSettings } from "@/lib/motion";
import WalletPhone, { type DiscoveryPhase } from "./WalletPhone";
import { MERCHANT_DEMO, type MerchantPhase } from "./merchant-screen";

const MerchantHardware = dynamic(() => import("./MerchantHardware"), { ssr: false });

const COPY: Record<MerchantPhase, { title: string; description: string }> = {
  ready: { title: "A little closer.", description: "The phone approaches the Aeria Terminal to discover the merchant." },
  tapping: { title: "A connection begins.", description: "The terminal shares the merchant and payment details with the phone." },
  review: { title: "Every detail, before you pay.", description: `${MERCHANT_DEMO.name} · ${MERCHANT_DEMO.currency} ${MERCHANT_DEMO.amount}. The merchant, total and funding account appear for review.` },
  authorizing: { title: "Your approval comes first.", description: "The animation illustrates a separate Face ID authorization step." },
  processing: { title: "A moment to connect.", description: "After authorization, both devices receive the payment status." },
  complete: { title: "Paid. And on with your day.", description: "Confirmation appears on the phone and the terminal acknowledges the payment." },
};

export default function ProductScene({ merchant = false }: { merchant?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const awake = useInView(ref, { once: true, amount: 0.35 });
  const sceneVisible = useInView(ref, { amount: 0.35 });
  const { ready, reduced, paused, visible: pageVisible } = useMotionSettings();
  const [discovery, setDiscovery] = useState<DiscoveryPhase>("idle");
  const [phase, setPhase] = useState<MerchantPhase>("ready");
  const discoveryPhase = ready && reduced ? "connected" : discovery;
  const merchantPhase = ready && reduced ? "complete" : phase;
  const playing = ready && !reduced && !paused && pageVisible && sceneVisible;
  const merchantPlaying = playing;
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      element.style.setProperty("--scene-scale", String(entry.contentRect.width / 500));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!merchant || !merchantPlaying) return;
    const next: Partial<Record<MerchantPhase, [MerchantPhase, number]>> = {
      ready: ["tapping", 900], tapping: ["review", 1650], review: ["authorizing", 2600],
      authorizing: ["processing", 1500], processing: ["complete", 1500],
    };
    const transition = next[phase];
    if (!transition) return;
    const timer = window.setTimeout(() => setPhase(transition[0]), transition[1]);
    return () => window.clearTimeout(timer);
  }, [phase, merchant, merchantPlaying]);
  useEffect(() => {
    if (merchant || !playing || discovery === "connected") return;
    if (discovery === "idle") {
      setDiscovery("searching");
      return;
    }
    const delay = discovery === "searching" ? 1800 : 1400;
    const timer = window.setTimeout(() => {
      setDiscovery(discovery === "searching" ? "found" : "connected");
    }, delay);
    return () => window.clearTimeout(timer);
  }, [merchant, playing, discovery]);
  const scene = (
    <>
      <div
        ref={ref}
        className={`product-scene ${merchant ? "product-scene-merchant" : `product-scene-people people-discovery-${discoveryPhase}`} ${awake ? "scene-awake" : ""}`}
        role="img"
        aria-label={merchant ? `Aeria merchant payment concept. ${COPY[merchantPhase].title} ${COPY[merchantPhase].description}` : "Autoplay concept: two phones discover nearby Aeria IDs and show Mina and You as connected identities"}
        data-payment-phase={merchant ? merchantPhase : undefined}
        data-discovery-phase={!merchant ? discoveryPhase : undefined}
        data-discovery-active={!merchant ? playing : undefined}
      >
        {merchant ? (
          <Image
            className="merchant-hardware-poster"
            src={`/visuals/aeria-merchant-${merchantPhase === "tapping" ? "ready" : merchantPhase === "authorizing" || merchantPhase === "processing" ? "review" : merchantPhase}-minimal${merchantPhase === "complete" ? "-clean" : ""}.webp`}
            alt="" width={1000} height={1200}
            sizes="(max-width: 767px) 90vw, 460px"
          />
        ) : null}
        {!merchant ? <noscript><style>{`
          .product-scene-people.people-discovery-idle .wallet-nearby-person { opacity: 1; translate: 0 0; }
          .product-scene-people.people-discovery-idle .wallet-discovery-search { opacity: 0; }
          .product-scene-people.people-discovery-idle .wallet-device { translate: 0 0; }
        `}</style></noscript> : null}
        <div className="product-scene-stage" aria-hidden="true">
          <div className="native-atmosphere" />
          {merchant ? (awake ? <MerchantHardware phase={merchantPhase} playing={merchantPlaying} /> : null) : (
            <>
              <div className="native-discovery-rings"><i /><i /><i /></div>
              <WalletPhone recipient="Mina" className="people-handset-one" discoveryPhase={discoveryPhase} />
              <WalletPhone recipient="You" className="people-handset-two" discoveryPhase={discoveryPhase} />
            </>
          )}
          {!merchant ? <div className="native-scene-ground" /> : null}
        </div>
      </div>
      {merchant ? (
        <div className="merchant-experience">
          <ol className="merchant-experience-steps" aria-label="Payment sequence">
            {[{label:"Tap", phases:["ready", "tapping"]}, {label:"Review", phases:["review"]}, {label:"Confirm", phases:["authorizing", "processing"]}, {label:"Paid", phases:["complete"]}].map((step, index) => (
              <li key={step.label} aria-current={step.phases.includes(merchantPhase) ? "step" : undefined}>
                <span>0{index + 1}</span>{step.label}
              </li>
            ))}
          </ol>
          <div className="merchant-experience-message">
            <h3>{COPY[merchantPhase].title}</h3>
            <p>{COPY[merchantPhase].description}</p>
          </div>
          <p className="merchant-experience-disclaimer">Automatic product concept · No real payment or biometric check</p>
          <noscript><p>The concept shows nearby discovery, payment review, a separate authorization step and confirmation.</p></noscript>
        </div>
      ) : null}
    </>
  );
  return merchant ? <div className="merchant-product-experience">{scene}</div> : scene;
}
