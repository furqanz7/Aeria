"use client";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { NAV_LINKS, TESTFLIGHT_URL } from "@/lib/site";
import { Arrow } from "./Icons";
import OriginalLogo from "./OriginalLogo";
import AeriaWordmark from "./AeriaWordmark";
export default function Nav() {
  const [phase, setPhase] = useState<"closed" | "entering" | "open" | "closing">("closed");
  const present = phase !== "closed";
  const expanded = phase === "entering" || phase === "open";
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const pendingHref = useRef<string | null>(null);
  const restoreFocus = useRef(false);
  const closeMenu = useCallback((href?: string) => {
    pendingHref.current = href ?? null;
    restoreFocus.current = !href;
    toggle.current?.focus({ preventScroll: true });
    setPhase("closing");
  }, []);
  function navigate(e: MouseEvent<HTMLAnchorElement>, href: string) {
    if (!present || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    closeMenu(href);
  }
  useLayoutEffect(() => {
    if (!present) {
      const href = pendingHref.current;
      pendingHref.current = null;
      if (href) {
        if (window.location.hash === href) document.querySelector(href)?.scrollIntoView();
        else window.location.hash = href;
      } else if (restoreFocus.current) {
        toggle.current?.focus({ preventScroll: true });
      }
      restoreFocus.current = false;
      return;
    }
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const element = header.current;
    // Keep the open menu aligned with the frozen page without a fixed layer
    // whose colour Safari can retain after the menu has closed.
    element?.style.setProperty("--menu-scroll-y", `${window.scrollY}px`);
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    const first = nav.current?.querySelector<HTMLAnchorElement>("a");
    first?.focus({ preventScroll: true });
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
      }
      if (e.key === "Tab") {
        const items = [
          toggle.current,
          ...Array.from(
            nav.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const firstItem = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstItem) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          firstItem.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    const mq = window.matchMedia("(min-width: 860px)");
    const onResize = () => {
      if (mq.matches) setPhase("closed");
    };
    mq.addEventListener("change", onResize);
    return () => {
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
      element?.style.removeProperty("--menu-scroll-y");
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [present, closeMenu]);
  useLayoutEffect(() => {
    if (phase !== "entering") return;
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setPhase("open"));
    });
    return () => cancelAnimationFrame(frame);
  }, [phase]);
  useEffect(() => {
    if (phase !== "closing") return;
    // Also finish when reduced motion or an interrupted transition emits no event.
    const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 360;
    const timer = window.setTimeout(() => setPhase("closed"), delay);
    return () => window.clearTimeout(timer);
  }, [phase]);
  return (
    <header
      ref={header}
      className={`site-header${present ? " menu-present" : ""}${phase === "open" ? " menu-open" : ""}`}
      data-menu-phase={phase}
    >
      {present && (
        <div
          className="menu-glass"
          aria-hidden="true"
          onTransitionEnd={(e) => {
            if (e.propertyName === "opacity" && phase === "closing") setPhase("closed");
          }}
        />
      )}
      <div className="nav-shell">
        <a
          className="brand"
          href="#hero"
          aria-label="Aeria home"
          onClick={(e) => navigate(e, "#hero")}
        >
          <OriginalLogo className="wordmark-logo" size={35} />
          <AeriaWordmark />
        </a>
        <nav className="desktop-nav" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a href={l.href} key={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          className="nav-beta"
          href={TESTFLIGHT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-hidden={present || undefined}
          tabIndex={present ? -1 : undefined}
        >
          Get the beta <Arrow diagonal />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <button
          className={`menu-toggle ${expanded ? "is-open" : ""}`}
          ref={toggle}
          aria-label={present ? "Close menu" : "Open menu"}
          aria-expanded={expanded}
          aria-controls="mobile-navigation"
          onClick={() => {
            if (phase === "closed") setPhase("entering");
            else if (phase === "closing") {
              pendingHref.current = null;
              setPhase("open");
            } else closeMenu();
          }}
        >
          <span />
          <span />
        </button>
      </div>
      {present && (
        <>
          <button
            className="menu-backdrop"
            aria-label="Dismiss navigation"
            tabIndex={-1}
            onClick={() => {
              closeMenu();
            }}
          />
          <nav
            ref={nav}
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile"
            inert={phase === "closing"}
          >
            <div className="mobile-nav-links">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={(e) => navigate(e, l.href)}>
                  {l.label}
                </a>
              ))}
              <a href="#privacy" onClick={(e) => navigate(e, "#privacy")}>
                Trust & security
              </a>
            </div>
            <div className="mobile-nav-footer">
              <a
                className="mobile-nav-beta"
                href={TESTFLIGHT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the beta
                <Arrow diagonal />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p>Fly with Aeria.</p>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
