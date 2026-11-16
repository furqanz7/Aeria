"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Arrow, Symbol } from "./Icons";
import { useMotionPlayback } from "@/lib/motion";

const views = [
  { title: "Find a familiar name", description: "An illustrative Aeria search screen finds Mina through contacts or an Aeria ID." },
  { title: "A place on your Home Screen", description: "An illustrative Home Screen widget offers an entry point to Aeria." },
  { title: "Start from where you are", description: "An illustrative system-search screen shows an Aeria contact result and a supported app shortcut." },
];

export default function NativeExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { amount: .35 });
  const [view, setView] = useState(0);
  const playing = useMotionPlayback(visible);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      element.style.setProperty("--native-entry-scale", String(entry.contentRect.width / 500));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setView((current) => (current + 1) % views.length), 5000);
    return () => window.clearTimeout(timer);
  }, [playing, view]);

  return (
    <div ref={ref} className="native-entry-scene" data-view={view} data-active={playing} role="img"
      aria-label={`Planned native-experience concept. ${views[view].description} Availability varies by platform and release.`}>
      <div className="native-entry-stage" aria-hidden="true">
        <div className="native-entry-atmosphere" />
        <div className="native-entry-device">
          <div className="native-entry-screen">
            <div className="native-entry-screen-wash" />
            <div className="native-entry-status"><span>9:41</span><i /><b><i /><i /><i /></b></div>

            <div className="native-entry-pane native-entry-search" data-visible={view === 0}>
              <div className="native-entry-brand">Aeria<span>YOUR EVERYDAY CONNECTION</span></div>
              <h3>Find someone.</h3>
              <p>A familiar name is enough.</p>
              <div className="native-entry-search-field"><Symbol name="search" /><span>Mina</span><i className="native-entry-cursor" /></div>
              <span className="native-entry-overline">FROM YOUR CONTACTS</span>
              <div className="native-entry-contact"><Symbol name="contact" /><div><strong>Mina</strong><small>mina@aeria</small></div><Arrow /></div>
              <p className="native-entry-help">A name. A contact. An Aeria ID.<br />A familiar place to start.</p>
              <div className="native-entry-app-footer">ONE IDENTITY. EVERYWHERE.</div>
            </div>

            <div className="native-entry-pane native-entry-home" data-visible={view === 1}>
              <div className="native-entry-wallpaper" />
              <span className="native-entry-home-label">YOUR HOME SCREEN</span>
              <strong className="native-entry-clock">9:41</strong>
              <div className="native-entry-widget">
                <div className="native-entry-widget-brand">Aeria</div>
                <span>YOUR AERIA ID</span><strong>you@aeria</strong>
                <div className="native-entry-widget-action"><Symbol name="search" /><span>Find someone</span><Arrow /></div>
              </div>
              <div className="native-entry-home-search"><Symbol name="search" />Search</div>
            </div>

            <div className="native-entry-pane native-entry-system" data-visible={view === 2}>
              <div className="native-entry-wallpaper" />
              <span className="native-entry-system-label">SYSTEM SEARCH</span>
              <h3>A little less<br />looking around.</h3>
              <div className="native-entry-search-field"><Symbol name="search" /><span>Mina</span></div>
              <span className="native-entry-overline">IN AERIA</span>
              <div className="native-entry-system-result"><Symbol name="contact" /><div><strong>Mina</strong><small>mina@aeria</small></div><Arrow /></div>
              <div className="native-entry-system-shortcut"><Symbol name="layers" /><span>Open Aeria</span><Arrow /></div>
              <p className="native-entry-help">Spotlight and supported shortcuts.<br />Planned native entry points.</p>
            </div>
            <i className="native-entry-home-indicator" />
          </div>
        </div>
        <div className="native-entry-sequence"><div>{views.map((item, index) => <i key={item.title} data-current={index === view} />)}</div><span>0{view + 1} / {views[view].title}</span></div>
      </div>
      <noscript><p className="native-entry-no-script">Planned native conveniences include Aeria ID and contact search, Home Screen widgets, Spotlight and supported system shortcuts. Availability varies by platform and release.</p></noscript>
    </div>
  );
}
