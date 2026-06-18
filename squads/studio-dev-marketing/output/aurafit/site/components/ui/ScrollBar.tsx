"use client";
import { useEffect } from "react";

export default function ScrollBar() {
  useEffect(() => {
    const bar = document.getElementById("scroll-bar");
    if (!bar) return;
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      bar.style.width = `${Math.min(pct * 100, 100)}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div id="scroll-bar" />;
}
