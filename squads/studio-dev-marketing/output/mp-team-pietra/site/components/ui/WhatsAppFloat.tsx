"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WA_GERAL } from "@/lib/links";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [ping, setPing] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 2500);
    const t2 = setTimeout(() => setPing(false), 8000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3"
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="rounded-2xl px-4 py-3 whitespace-nowrap shadow-2xl"
                style={{
                  background: "#0D0D1A",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <p className="text-[13px] font-bold text-white">
                  Falar com a Pietra
                </p>
                <p className="text-[11px]" style={{ color: "#7A7A8C" }}>
                  Resposta rápida
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={WA_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: "#25D366",
              boxShadow: "0 8px 32px rgba(37,211,102,0.3)",
            }}
          >
            {ping && (
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            )}
            <MessageCircle size={24} color="white" strokeWidth={2} />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
