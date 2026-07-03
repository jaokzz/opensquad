# Output Examples — Referências Completas de Entrega

Exemplos completos e realistas do nível de detalhe esperado em cada fase. Usar como referência de profundidade, nunca copiar literalmente.

## Exemplo 1 — DNA Visual (Fase 2)

> Cliente fictício: "Clínica Bem Viver" — clínica de estética facial, público mulheres 30-55 anos, classe B/B+, quer transmitir sofisticação sem parecer "hospitalar" ou fria.

```markdown
# DNA Visual — Clínica Bem Viver

## 3 Palavras
Sofisticado · Acolhedor · Luminoso

## Referências
1. aesop.com — paleta terrosa, tipografia serif editorial, fotografia macro de produto com luz natural
2. therow.com — silêncio visual, espaçamento generoso, quase nenhuma cor além de neutros
3. glossier.com (seção "About") — split-hero com foto de pele real, tipografia leve, acento rosa-nude único

## Direção de Paleta
Base: off-white quente (#FAF6F1), texto: marrom-carvão (#2B231D), acento único: terracota suave (#C97D5D)
Nunca: branco puro clínico, azul "hospital", gradiente

## Direção Tipográfica
Display: PP Editorial New (serif editorial, transmite elegância sem ser fria) para headlines
Corpo: General Sans para textos e labels
Contraste: serif grande + sans pequena cria hierarquia sofisticada sem gritar

## Emoção-alvo
A visitante deve sentir que está entrando em um espaço calmo e cuidado, não em uma clínica genérica — "isso aqui é para mim, é premium, mas é humano".
```

## Exemplo 2 — Spec de Animação (Fase 5, trecho)

```markdown
# Animation Spec — Hero da Home

[Wordmark de fundo "BEM VIVER"]: on-load → opacity: 0 → 0.06, scale: 1.05 → 1
Duration: 1200ms | Easing: cubic-bezier(0.16, 1, 0.3, 1) | Delay: 0ms

[Headline "Sua pele, sua confiança"]: scroll-enter (split por linha) → opacity: 0 → 1, y: 24px → 0, blur: 6px → 0
Duration: 800ms | Easing: cubic-bezier(0.16, 1, 0.3, 1) | Delay: stagger 60ms entre linhas

[Foto hero]: on-load → clip-path: inset(0 0 100% 0) → inset(0 0 0% 0) (cortina revelando de baixo pra cima)
Duration: 1000ms | Easing: cubic-bezier(0.32, 0.72, 0, 1) | Delay: 200ms

[CTA "Agendar avaliação"]: hover → ícone interno translateX(4px), botão scale(0.98) no :active
Duration: 200ms | Easing: spring(stiffness:150, damping:15)

[Faixa de confiança abaixo do hero]: scroll-enter → stagger de 4 itens, cada um: opacity 0→1, y:16px→0
Duration: 500ms cada | Easing: cubic-bezier(0.16,1,0.3,1) | Delay: stagger 100ms
```

## Exemplo 3 — Revisão Crítica (Fase 8, trecho)

```markdown
# Revisão — Clínica Bem Viver (Revisão 1 de 3)

## Strengths
- A paleta terracota + off-white está coerente do hero ao footer, sem desvio (10/10 no critério de paleta)
- O split-hero com foto e texto assimétricos evita completamente o padrão centralizado genérico

## Scores
- DNA e Sistema de Design: 9/10 — tokens documentados e aplicados consistentemente
- Layout: 6/10 — a seção "Nossos Tratamentos" usa 3 cards idênticos lado a lado, exatamente o anti-padrão banido em anti-patterns.md item 3
- Animação: 8/10 — specs seguidas corretamente, mas o hover do CTA usa `transition: all` em vez de `transform` isolado
- Performance: 9/10 — Lighthouse mobile 91, LCP 1.9s

## Required change
1. Substituir a grade de "3 cards iguais" por um layout zig-zag de 2 colunas alternando imagem/texto tratamento por tratamento (anti-patterns.md #3)
2. Trocar `transition: all` por `transition: transform 200ms cubic-bezier(...)` no CTA (anti-patterns.md #14)

## Suggestion (non-blocking)
- Considerar adicionar textura de grão sutil (`opacity-[0.03]`) no fundo do hero para reforçar a sensação "editorial luxury" do DNA

## Path to Approval
1. Refazer seção "Nossos Tratamentos" com layout zig-zag
2. Corrigir transition do CTA hero
3. Reenviar para nova revisão

## Veredito
REJEITAR
```
