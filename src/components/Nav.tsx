"use client";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, TESTFLIGHT_URL } from "@/lib/site";
import { Arrow } from "./Icons";
import OriginalLogo from "./OriginalLogo";
import AeriaWordmark from "./AeriaWordmark";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    const first = nav.current?.querySelector<HTMLAnchorElement>("a");
    first?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
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
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onResize);
    return () => {
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header className={`site-header${open ? " menu-open" : ""}`}>
      <div className="nav-shell">
        <a
          className="brand"
          href="#hero"
          aria-label="Aeria home"
          onClick={() => setOpen(false)}
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
        >
          Get the beta <Arrow diagonal />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          ref={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      {open && (
        <>
          <button
            className="menu-backdrop"
            aria-label="Dismiss navigation"
            tabIndex={-1}
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
          />
          <nav
            ref={nav}
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((l, i) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                <small>0{i + 1}</small>
                {l.label}
                <Arrow />
              </a>
            ))}
            <a href="#privacy" onClick={() => setOpen(false)}>
              <small>05</small>Trust & security
              <Arrow />
            </a>
            <p>A new dimension of payments.</p>
          </nav>
        </>
      )}
    </header>
  );
}
