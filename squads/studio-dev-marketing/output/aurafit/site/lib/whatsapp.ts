const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5549999999999";

const MASCULINE_PRODUCTS = ["Linha Masculina AuraFit", "Linha Masculina"];

export function getProductWhatsAppLink(productName: string): string {
  const emoji = MASCULINE_PRODUCTS.includes(productName) ? "💪" : "🏋️‍♀️";
  const message =
    `Olá, Aura Fit! ${emoji}\n\n` +
    `Vi o site de vocês e tenho interesse em:\n` +
    `👉 *${productName}*\n\n` +
    `Gostaria de saber:\n` +
    `• Disponibilidade\n` +
    `• Tamanhos disponíveis\n` +
    `• Valores\n\n` +
    `Podem me ajudar?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppLink(): string {
  const message =
    `Olá, Aura Fit! 😊\n\n` +
    `Vi o site de vocês e quero saber mais sobre os produtos.\n` +
    `Podem me ajudar com disponibilidade e valores?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
