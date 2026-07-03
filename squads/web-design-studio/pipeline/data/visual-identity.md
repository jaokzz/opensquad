# Visual Identity — DNA de Design do Web Design Studio

Este documento é a lei visual do squad. Toda decisão de design de todo projeto passa por aqui antes de qualquer HTML, CSS ou componente ser escrito. Ele existe porque "site bonito" não é critério — critério é sistema de design documentado, tokens exatos e princípios que resistem à tentação da estética genérica de IA.

## Origem: as 5 referências de padrão do João Vitor

Estas são as referências que definem o **piso mínimo de qualidade** aceito neste squad (Apple AirPods Max, Dolenga Wear, Gazu, Urban Fit, Nevermind). Nenhum site do squad deve destoar do nível de acabamento visual que elas representam, mesmo quando o cliente final é um negócio local pequeno.

**Nunca copiar layout literalmente** — o objetivo é extrair os *princípios estruturais*, não replicar seções. Cada cliente recebe uma identidade 100% original (regra global do squad, ver `_memory/memories.md`).

### Padrões extraídos (o que as 5 referências têm em comum)

1. **Tipografia como estrutura, não decoração.** Todas usam um display sans/grotesk bold e oversized (`Air Pods Max`, `GAZU`, `DOLENGA WEAR`, `STYLE VIBE REFLECT`) como elemento arquitetural — às vezes literalmente como textura de fundo sangrando para fora do viewport atrás de uma foto de produto (Apple, Gazu). O texto não ilustra o layout: o texto É o layout.
2. **Paleta restrita + no máximo 1 acento.** Nenhuma das 5 usa mais de 3 cores no total: uma base neutra (branco, off-white, preto, cinza-claro), uma cor de texto de alto contraste, e no máximo 1 acento saturado (âmbar/tan na Urban Fit, vermelho sutil na Nevermind). Nunca gradiente roxo/azul genérico de IA.
3. **Fotografia full-bleed como peso visual dominante.** Texto e foto interagem — texto atrás da foto, foto sangrando até a borda, foto e texto dividindo a tela 50/50 (split-hero). A foto nunca é um "elemento decorativo pequeno no canto"; ela carrega a mesma hierarquia que o headline.
4. **Grid editorial assimétrico, nunca centralizado.** Hero dividido (texto de um lado, imagem do outro), blocos alternando esquerda/direita a cada seção, wordmark gigante fora de eixo. Hero centralizado com H1 + subtítulo + botão é o antipadrão mais comum de IA — nenhuma das 5 referências faz isso.
5. **Botões e badges em pílula (`rounded-full`).** CTA principal, badges de categoria, tags de produto ("NEW", "SALE", "LIMITED EDITION") — todos em formato de pílula com padding generoso, nunca `rounded-md` genérico.
6. **Faixa de confiança / feature strip.** Uma tira horizontal fina com 3-4 ícones + texto curto (entrega, trocas, qualidade, pagamento seguro) logo abaixo do hero. Minimalista, sem cards pesados — só ícone + 2 linhas de texto.
7. **Ritmo por blocos de cor alternados.** Seções alternam fundo claro/escuro ou claro/cru para criar cadência de scroll sem depender de bordas ou sombras.
8. **Grid de produto/conteúdo com aspect ratio consistente.** Cards minimalistas — só imagem, nome, preço. Estado de hover revela ação (wishlist, quick view) em vez de mostrar tudo estaticamente.

## Sistema de Design Padrão (ponto de partida — sempre adaptado por cliente)

Estes são os **valores de partida**, não valores fixos. Vitória Visual define a paleta e tipografia final de cada cliente a partir do DNA do negócio — mas a estrutura de tokens abaixo é obrigatória em todo projeto.

```
Paleta (semântica, nunca hardcoded):
  --bg              cor de fundo base (nunca #000000 puro — usar off-black/zinc-950)
  --surface         fundo de blocos alternados
  --text-primary    contraste ≥ 4.5:1 sobre --bg
  --text-secondary  contraste ≥ 3:1 sobre --bg
  --accent          ÚNICO acento saturado do projeto — proibido usar 2+
  --border          hairline, nunca cinza genérico puro

Tipografia:
  --font-display    display bold para headlines oversized (nunca Inter/Roboto/Arial)
  --font-body       sans neutra para corpo (pode ser a mesma família do display, peso diferente)
  H1 (display):     clamp(2.5rem, 6vw, 6rem) | tracking-tighter | leading-none
  H2:               clamp(2rem, 4vw, 3.5rem)
  Body:             1rem–1.125rem | leading-relaxed | max-w-[65ch]
  Eyebrow/label:    0.75rem | uppercase | tracking-[0.2em]

Espaçamento (escala 4px, seções respiram):
  4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192
  Seções: py-24 a py-40 no desktop — nunca menos que py-16 no mobile

Raio:
  Botões/badges: rounded-full
  Cards/containers: rounded-[1.5rem] a rounded-[2.5rem] (squircle, nunca rounded-md)

Sombra:
  3 níveis: subtle (diffusion shadow tingida na cor do fundo), medium, strong
  Nunca box-shadow genérico cinza com blur padrão
```

## Princípios de Adaptação por Vertical

O DNA acima nasceu de e-commerce/moda premium, mas os **princípios** valem para qualquer vertical que o squad atender (clínica de estética, restaurante, prestador de serviço local):

- **Clínica/serviço:** tipografia oversized vira o nome do tratamento/especialidade como elemento gráfico; feature strip vira "atendimento humanizado / equipamento de ponta / avaliação gratuita"; foto full-bleed é o ambiente/equipe, não produto.
- **Restaurante/bar:** wordmark gigante do nome da marca atrás de foto do prato; paleta com 1 acento vindo da identidade do cardápio; grid de produto vira grid de pratos/menu.
- **Nunca** forçar um layout de e-commerce (grid de produtos, "adicionar ao carrinho") em um negócio que não vende produto físico. Adaptar a ESTRUTURA (tipografia, contraste, ritmo, grid assimétrico), não a FUNCIONALIDADE.

## Fontes e Ícones Aprovados

- **Display aprovadas:** Geist, Cabinet Grotesk, Clash Display, Satoshi, General Sans, PP Editorial New (serif editorial, uso pontual em vertical luxo/lifestyle)
- **Body aprovadas:** Geist, Satoshi, Plus Jakarta Sans, General Sans
- **BANIDAS sem exceção:** Inter, Roboto, Arial, Helvetica, Open Sans — sinal mais óbvio de site genérico de IA
- **Ícones:** lucide-react (padrão do squad, ver regra global), stroke-width consistente (1.5 ou 2, nunca misturar)
- **BANIDO:** emojis em qualquer lugar do produto final — nunca em UI, copy ou fallback de imagem

## Anti-Estética Genérica de IA (checklist rápido de reprovação)

Se qualquer item abaixo aparecer, o design é reprovado antes mesmo de chegar à Clara Crítica:

- [ ] Hero centralizado (H1 + subtítulo + botão, tudo no meio da tela)
- [ ] Gradiente roxo/azul ("AI purple") como fundo ou glow
- [ ] 3 cards iguais lado a lado como "feature section" (banido — usar zig-zag 2 colunas ou grid assimétrico)
- [ ] Sombra genérica `shadow-md` cinza sem tingimento
- [ ] Fonte Inter/Roboto/Arial em qualquer headline
- [ ] `h-screen` em vez de `min-h-[100dvh]` no hero (quebra em iOS Safari)
- [ ] Nomes/dados fake óbvios ("John Doe", "99.99%", "Empresa XYZ")
- [ ] Ícones grossos genéricos tipo Material Icons default
- [ ] Cursor customizado (mata acessibilidade e performance)
- [ ] Copy clichê de IA: "eleve", "impulsione", "transforme sua presença digital", "solução completa e inovadora"
