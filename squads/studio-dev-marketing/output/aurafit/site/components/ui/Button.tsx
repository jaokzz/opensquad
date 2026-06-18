"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
  isMagnetic?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  isMagnetic = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMagnetic || !buttonRef.current || window.innerWidth < 1024) return;
    const el = buttonRef.current;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: "power2.out" });
    };

    const onMouseLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isMagnetic]);

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-300 rounded-full px-8 py-4 select-none outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background",
        {
          "bg-primary text-textPrimary hover:bg-primaryGlow hover:shadow-[0_0_40px_rgba(45,106,79,0.45)] focus:ring-primary":
            variant === "primary",
          "bg-transparent text-textPrimary border border-border hover:bg-surface hover:border-textPrimary/40 focus:ring-border":
            variant === "secondary",
          "bg-accent text-textPrimary hover:bg-primaryGlow hover:shadow-[0_0_40px_rgba(64,145,108,0.45)] focus:ring-accent":
            variant === "accent",
        },
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
