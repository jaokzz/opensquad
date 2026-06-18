"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getGeneralWhatsAppLink } from "@/lib/whatsapp";

export default function WABFab() {
  return (
    <motion.a
      href={getGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-brand rounded-full flex items-center justify-center shadow-[0_0_0_0_rgba(34,197,94,0.4)] hover:shadow-[0_0_0_10px_rgba(34,197,94,0)] transition-shadow duration-500"
    >
      <MessageCircle size={24} strokeWidth={2} className="text-zinc-950" />
    </motion.a>
  );
}
