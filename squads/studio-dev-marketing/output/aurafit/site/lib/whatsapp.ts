const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5549999999999";

const MASCULINE_PRODUCTS = ["Linha Masculina AuraFit", "Linha Masculina"];

export function getProductWhatsAppLink(productName: string): string {
  const emoji = MASCULINE_PRODUCTS.includes(productName) ? "💪" : "🏋️‍♀️";
  const message = `Olá! Vi o site da Aura Fit e tenho interesse em: *${productName}*. Podem me ajudar? ${emoji}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppLink(): string {
  const message = `Olá! Vim pelo site da Aura Fit e gostaria de conhecer os produtos! 😊`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
