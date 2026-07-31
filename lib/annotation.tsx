"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

interface AnnotationContextValue {
  enabled: boolean;
  toggle: () => void;
  available: boolean;
}

const AnnotationContext = createContext<AnnotationContextValue>({
  enabled: false,
  toggle: () => {},
  available: false,
});

const STORAGE_KEY = "cya-annotate";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return window.sessionStorage.getItem(STORAGE_KEY) === "1";
}

function getServerSnapshot() {
  return false;
}

function setStored(next: boolean) {
  window.sessionStorage.setItem(STORAGE_KEY, next ? "1" : "0");
  listeners.forEach((listener) => listener());
}

/**
 * Development-only content-governance annotation mode (build prompt, "Content governance").
 * Off by default; only renders its toggle outside production builds. Reads/writes
 * sessionStorage through useSyncExternalStore so the client value is applied after
 * hydration without a setState-in-effect render cascade.
 */
export function AnnotationProvider({ children }: { children: React.ReactNode }) {
  const available = process.env.NODE_ENV !== "production";
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    if (!available) return;
    setStored(!stored);
  };

  return (
    <AnnotationContext.Provider value={{ enabled: available && stored, toggle, available }}>
      {children}
    </AnnotationContext.Provider>
  );
}

export function useAnnotation() {
  return useContext(AnnotationContext);
}
