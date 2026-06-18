export type MenuItem = {
  name: string;
  description?: string;
  price: number;
  tag?: "mais-pedido" | "destaque" | "novo";
};

export type MenuCategory = {
  id: string;
  label: string;
  emoji: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "entradas",
    label: "Entradas",
    emoji: "🧅",
    items: [
      { name: "Anel de Cebola", description: "12 anéis de cebola crocantes", price: 16 },
      { name: "Nuggets", description: "10 unidades com ketchup", price: 20 },
      { name: "Panceta", description: "Panceta grelhada", price: 24.90 },
      { name: "Almofadinha de Queijo", description: "8 unidades", price: 24 },
      { name: "Bolinho de Mandioca", description: "8 unidades recheados com carne curada, mostarda e mel", price: 30 },
    ],
  },
  {
    id: "burgers",
    label: "Hambúrgueres",
    emoji: "🍔",
    items: [
      { name: "Rio", description: "Pão australiano, queijo prato, tomate, alface, maionese da casa", price: 28 },
      { name: "Oslo", description: "Pão australiano, cheddar, cebola caramelizada, rúcula, molho tártaro", price: 30 },
      { name: "Berlin", description: "Pão australiano, queijo prato, calabresa, tomate, cebola roxa, pepino, alface, maionese da casa", price: 33 },
      { name: "Denver", description: "Pão brioche, cheddar, coleslaw, cebola roxa, rúcula, barbecue", price: 32 },
      { name: "Tókio", description: "Pão brioche, molho de gorgonzola, bacon em cubos, rúcula, maionese da casa", price: 36 },
      { name: "Moscou", description: "Pão brioche, queijo prato, cebola caramelizada, fatias de bacon, rúcula, ketchup de bacon, chimichurri", price: 36 },
      { name: "Arturo", description: "Pão australiano, molho barbecue bourbon, fatias de bacon, cebola roxa, cheddar, Doritos", price: 36 },
      { name: "Naioróbi", description: "Pão, requeijão, rúcula, bacon em cubo, cebola crispy, barbecue", price: 38 },
      { name: "Estocolmo", description: "Pão, provolone, bacon fatiado, anel de cebola, geleia de abacaxi com pimenta, molho de bourbon", price: 38 },
      { name: "Bogota", description: "Pão, provolone, costela desfiada, rúcula, barbecue", price: 40 },
      { name: "Professor", description: "Pão brioche, 180g de carne com bacon, batata frita, provolone, bacon, barbecue com sriracha, calabresa, alface, rúcula, pepino, ketchup de bacon, cebola roxa e cebola na chapa", price: 45, tag: "mais-pedido" },
      { name: "Burguer Kids", description: "Pão brioche, 150g, queijo prato, Ruffles", price: 25 },
    ],
  },
  {
    id: "pizzas",
    label: "Pizzas",
    emoji: "🍕",
    items: [
      { name: "Pizza Média", description: "8 fatias · até 2 sabores", price: 79 },
      { name: "Pizza Grande", description: "12 fatias · até 3 sabores", price: 89 },
      { name: "Pizza Gigante", description: "16 fatias · até 4 sabores", price: 99 },
      { name: "Pizza Treem", description: "40 fatias · até 4 sabores · ideal para grupos", price: 199.90, tag: "destaque" },
    ],
  },
  {
    id: "porcoes",
    label: "Porções",
    emoji: "🍟",
    items: [
      { name: "Filé Mignon Acebolado", description: "Queijo coalho, ovo de codorna, azeitona e pão", price: 100, tag: "destaque" },
      { name: "Fritas com Costela Desfiada", description: "135g de costela desfiada, 400g de batata e molho gorgonzola", price: 59 },
      { name: "Fritas com Costela e Requeijão", description: "400g de batata, 135g de costela desfiada mais requeijão", price: 50 },
      { name: "Batata Frita com Cheddar e Bacon", description: "", price: 45 },
      { name: "Batata Frita com Calabresa", description: "", price: 40 },
      { name: "Batata Frita", description: "", price: 32 },
      { name: "Frango à Passarinho", description: "", price: 45 },
      { name: "Combo Caipira", description: "200g de polenta, batata, 400g de frango com cebola, maionese e acompanhamentos", price: 70 },
      { name: "Polenta Especial", description: "Polenta frita, salame e queijo coalho", price: 38 },
      { name: "Polenta Frita", description: "", price: 22 },
      { name: "Anéis de Cebola (porção)", description: "", price: 38 },
    ],
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    emoji: "🍫",
    items: [
      { name: "Burguer Doce", description: "Pão brioche, morango, bis e creme de avelã", price: 24, tag: "novo" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    emoji: "🍺",
    items: [
      { name: "Caipirinha Limão", price: 20 },
      { name: "Caipirinha Maracujá", price: 23 },
      { name: "Caipirinha Morango", price: 25 },
      { name: "Caipirinha Kiwi", price: 23 },
      { name: "Caipirinha Vinho", price: 22 },
      { name: "Heineken / Corona", price: 12 },
      { name: "Budweiser / Eisenbahn", price: 10 },
      { name: "Baly Lata", price: 10 },
      { name: "Red Bull", price: 18 },
      { name: "Monster", price: 16 },
      { name: "Suco de Polpa", price: 12 },
      { name: "Refri 1,5L", price: 17 },
      { name: "Refri 350ml", price: 7 },
      { name: "Refri 220ml", price: 6 },
      { name: "Água", price: 4 },
    ],
  },
];

export const WHATSAPP_URL = "https://wa.me/554991815140";
export const CARDAPIO_URL  = "https://app.anota.ai/m/MVq8UyWqw";
export const INSTAGRAM_URL = "https://instagram.com/armazemburgers";
