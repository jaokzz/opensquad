"use client";

import dynamic from "next/dynamic";

const BurgerDisassembly = dynamic(() => import("./BurgerDisassembly"), {
  ssr: false,
  loading: () => (
    <div
      className="flex items-center justify-center"
      style={{ height: "160vh", background: "radial-gradient(ellipse 90% 60% at 50% 50%, #1A0F05 0%, #0F0B07 100%)" }}
    />
  ),
});

export default function BurgerDisassemblyClient() {
  return <BurgerDisassembly />;
}
