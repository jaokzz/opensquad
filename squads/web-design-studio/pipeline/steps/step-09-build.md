---
execution: inline
agent: web-design-studio/agents/rafael-render
inputFile: squads/web-design-studio/output/mockup-handoff.md
outputFile: squads/web-design-studio/output/build-notes.md
---

# Step 09: Build da Estrutura

## Context Loading

Load these files before executing:
- `squads/web-design-studio/output/mockup-handoff.md` — mockup aprovado com descrição completa de cada seção
- `squads/web-design-studio/output/design-system.md` — tokens de design
- `pipeline/data/anti-patterns.md` — antipadrões técnicos a evitar (OBRIGATÓRIO)

## Instructions

### Process
1. Converter os tokens do design-system.md em config do Tailwind ou CSS custom properties
2. Montar um componente React/Next.js por seção do mockup, Server Component por padrão
3. Implementar o layout exato (CSS Grid para splits/grids, `min-h-[100dvh]` em full-height, nunca `h-screen`)
4. Implementar estados estáticos (hover/focus/disabled) via Tailwind, mesmo antes da camada de animação
5. Isolar pontos que vão receber animação como Client Component já preparado, sem lógica de motion ainda
6. Rodar `next dev`, verificar fidelidade em 1440px e 390px, documentar em `output/build-notes.md`

## Output Format

```markdown
# Build Notes — {Cliente}

## Componentes criados
- {Componente}.tsx — {seção correspondente do mockup}

## Decisões técnicas
- {decisão}: {justificativa}
```

## Output Example

```markdown
# Build Notes — Clínica Bem Viver

## Componentes criados
- Hero.tsx — split-screen 55/45 via CSS Grid, min-h-[100dvh]
- FeatureStrip.tsx — 4 itens com ícone lucide-react + texto, isolado como Server Component (sem interatividade)
- Tratamentos.tsx — zig-zag com CSS Grid alternando order-first/order-last por item
- HeroPhotoWrapper — extraído como Client Component isolado, pronto para receber a animação de clip-path na Fase 7

## Decisões técnicas
- Grid em vez de flexbox no zig-zag de Tratamentos: evita math de porcentagem e mantém alinhamento estável em qualquer viewport
- min-h-[100dvh] em vez de h-screen no Hero: previne salto de layout no Safari iOS quando a barra de endereço recolhe
```

## Veto Conditions

Rejeitar e redo if ANY are true:
1. Layout usar `h-screen` em vez de `min-h-[100dvh]` em seção full-height
2. Estrutura divergir do mockup aprovado sem justificativa técnica documentada

## Quality Criteria

- [ ] Fidelidade ao mockup em 1440px e 390px
- [ ] CSS Grid usado em splits/grids, sem math de porcentagem em flexbox
- [ ] Server Components por padrão, Client Component isolado só onde necessário
- [ ] Tokens do design-system.md aplicados sem valor hardcoded solto
