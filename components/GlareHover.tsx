'use client';

import React, { useEffect, useRef } from "react";

interface GlareOverlayProps {
  fullscreen?: boolean;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
}

export default function GlareOverlay({
  fullscreen = false,
  glareColor = "#ffffff",
  glareOpacity = 0.15,
  glareAngle = -45,
  glareSize = 180,
  transitionDuration = 700,
  playOnce = false,
}: GlareOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // 🔧 shared gradient setup (used by both modes)
  const setupGradient = (el: HTMLDivElement) => {
    const hex = glareColor.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;

    el.style.background = `linear-gradient(${glareAngle}deg,
      transparent 60%,
      ${rgba} 70%,
      transparent 100%)`;

    el.style.backgroundSize = `${glareSize}% ${glareSize}%`;
    el.style.backgroundRepeat = "no-repeat";
  };

  // ▶️ PLAY ONCE (page load / refresh)
  useEffect(() => {
    if (!playOnce) return;

    const el = overlayRef.current;
    if (!el) return;

    setupGradient(el);

    el.style.backgroundPosition = "-120% -120%";

    requestAnimationFrame(() => {
      el.style.transition = `${transitionDuration}ms ease`;
      el.style.backgroundPosition = "120% 120%";
    });
  }, [playOnce, transitionDuration]);

  // 🖱️ HOVER MODE (disabled when playOnce = true)
  useEffect(() => {
    if (playOnce) return;

    const overlay = overlayRef.current;
    const parent = overlay?.parentElement;
    if (!overlay || !parent) return;

    setupGradient(overlay);
    overlay.style.backgroundPosition = "-120% -120%";

    const reset = () => {
      overlay.style.transition = "none";
      overlay.style.backgroundPosition = "-120% -120%";
      overlay.getBoundingClientRect();
    };

    const onEnter = () => {
      reset();
      overlay.style.transition = `${transitionDuration}ms ease`;
      overlay.style.backgroundPosition = "120% 120%";
    };

    parent.addEventListener("mouseenter", onEnter);
    parent.addEventListener("mouseleave", reset);

    return () => {
      parent.removeEventListener("mouseenter", onEnter);
      parent.removeEventListener("mouseleave", reset);
    };
  }, [playOnce, transitionDuration]);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      style={{
        position: fullscreen ? "fixed" : "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: fullscreen ? 9999 : undefined,
      }}
    />
  );
}
