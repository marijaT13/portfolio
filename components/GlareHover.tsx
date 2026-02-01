import React, { useEffect, useRef } from "react";

interface GlareOverlayProps {
 children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
}

export default function GlareOverlay({
    children,
  glareColor = '#ffffff',
  glareOpacity = 0.15,
  glareAngle = -45,
  glareSize = 180,
  transitionDuration = 700,
  playOnce = false,
  className = '',
}: GlareOverlayProps) {
const overlayRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  if (!playOnce) return;

  const el = overlayRef.current;
  if (!el) return;

  // start from offscreen
  el.style.backgroundPosition = '-100% -100%, 0 0';

  // trigger animation next frame
  requestAnimationFrame(() => {
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = '100% 100%, 0 0';
  });
}, [playOnce, transitionDuration]);


  useEffect(() => {
    const overlay = overlayRef.current;
    const parent = overlay?.parentElement;
    if (!overlay || !parent) return;

    const hex = glareColor.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;

    overlay.style.background = `linear-gradient(${glareAngle}deg,
      transparent 60%,
      ${rgba} 70%,
      transparent 100%)`;
    overlay.style.backgroundSize = `${glareSize}% ${glareSize}%`;
    overlay.style.backgroundRepeat = "no-repeat";
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

    const onLeave = () => {
      reset(); // 🔥 instant kill — no ghost animation
    };

    parent.addEventListener("mouseenter", onEnter);
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      parent.removeEventListener("mouseenter", onEnter);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        borderRadius: "inherit",
        overflow: "hidden",
      }}
    />
  );
}
