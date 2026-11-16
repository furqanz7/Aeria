"use client";

import { useSyncExternalStore } from "react";

type MotionSettings = {
  ready: boolean;
  reduced: boolean;
  paused: boolean;
  visible: boolean;
};

// The initial browser render deliberately matches the server snapshot.
const serverSettings: MotionSettings = { ready: false, reduced: false, paused: false, visible: true };
let settings = serverSettings;
const listeners = new Set<() => void>();
let stopListening: (() => void) | undefined;

function update(patch: Partial<MotionSettings>) {
  const next = { ...settings, ...patch };
  if (next.ready === settings.ready && next.reduced === settings.reduced &&
      next.paused === settings.paused && next.visible === settings.visible) return;
  settings = next;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!stopListening) {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => update({ reduced: preference.matches });
    const syncVisibility = () => update({ visible: !document.hidden });
    preference.addEventListener("change", syncPreference);
    document.addEventListener("visibilitychange", syncVisibility);
    stopListening = () => {
      preference.removeEventListener("change", syncPreference);
      document.removeEventListener("visibilitychange", syncVisibility);
    };
    update({ ready: true, reduced: preference.matches, visible: !document.hidden });
  }
  return () => {
    listeners.delete(listener);
    if (!listeners.size) {
      stopListening?.();
      stopListening = undefined;
    }
  };
}

const getSnapshot = () => settings;
const getServerSnapshot = () => serverSettings;

export function useMotionSettings() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useMotionPlayback(inView = true) {
  const { ready, reduced, paused, visible } = useMotionSettings();
  return ready && !reduced && !paused && visible && inView;
}

export function setMotionPaused(paused: boolean) {
  update({ paused });
}
