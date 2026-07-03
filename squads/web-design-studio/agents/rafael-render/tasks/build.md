---
task: "Build da Estrutura"
order: 1
input: |
  - design_system: Tokens de design aprovados
  - mockup_handoff: Descrição completa de cada seção em alta-fidelidade
output: |
  - codigo_estrutura: Componentes React/Next.js + Tailwind implementando fielmente o mockup, sem animação ainda
---

# Build da Estrutura

Implementa a estrutura estática do site — HTML/JSX + Tailwind fiel ao mockup e aos tokens do design system — antes de qualquer animação ser adicionada. Separar build de animação evita misturar bugs de layout com bugs de motion.

## Process

1. **Converter os tokens do design-system.md em CSS custom properties ou config do Tailwind** (`tailwind.config` ou `@theme` no Tailwind v4).
2. **Montar a estrutura de componentes por seção do mockup**: um componente por seção (Hero, FeatureStrip, Tratamentos, etc.), Server Component por padrão.
3. **Aplicar o layout exato do mockup**: split-screen com CSS Grid, nunca flexbox com math de porcentagem. `min-h-[100dvh]` em qualquer seção full-height.
4. **Implementar todos os estados estáticos** (hover via `:hover`/`group-hover` do Tailwind, focus visível, disabled) mesmo antes da camada de animação.
5. **Isolar qualquer ponto que vai receber interatividade** como Client Component (`'use client'`) já preparado para a Fase 7, mas sem lógica de animação ainda.
6. **Rodar `next dev` e verificar fidelidade visual** contra o mockup em 1440px e 390px antes de considerar a fase concluída.

## Output Format

```tsx
// {Componente}.tsx
export function {Componente}() {
  return (
    <section className="{classes Tailwind usando os tokens do design-system}">
      {/* estrutura fiel ao mockup-handoff.md */}
    </section>
  );
}
```

## Output Example

> Hero da Clínica Bem Viver — estrutura sem animação ainda

```tsx
// Hero.tsx
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] grid grid-cols-1 md:grid-cols-[55%_45%] bg-[var(--bg)]">
      <div className="flex flex-col justify-center gap-6 px-6 md:px-16 py-16 md:py-0">
        <span className="w-fit rounded-full border border-[var(--border)] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          Avaliação gratuita
        </span>
        <h1 className="font-display text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.95] text-[var(--text-primary)]">
          Sua pele, sua confiança
        </h1>
        <p className="max-w-[42ch] text-[var(--text-secondary)] leading-relaxed">
          Tratamentos faciais personalizados, em um espaço pensado para você se sentir cuidada do início ao fim.
        </p>
        <a
          href="#agendar"
          className="group w-fit flex items-center gap-3 rounded-full bg-[var(--accent)] pl-6 pr-2 py-2 text-white"
        >
          Agendar avaliação
          <span className="grid h-9 w-9 place-items-center rounded-full bg-black/10">
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </span>
        </a>
      </div>
      <div className="relative min-h-[50vh] md:min-h-full">
        {/* imagem full-bleed entra aqui, wordmark de fundo entra na Fase 7 com animação */}
      </div>
    </section>
  );
}
```

## Quality Criteria

- [ ] Estrutura fiel ao mockup em desktop (1440px) e mobile (390px)
- [ ] CSS Grid usado para split-screen e grids, nenhum flexbox com math de porcentagem
- [ ] `min-h-[100dvh]` em toda seção full-height, nunca `h-screen`
- [ ] Tokens do design-system.md aplicados via Tailwind/CSS custom properties, nenhum valor hardcoded solto
- [ ] Server Components por padrão; pontos de interatividade futura já isolados como Client Component

## Veto Conditions

Rejeitar e refazer se:
1. O layout usar `h-screen` em vez de `min-h-[100dvh]` em qualquer seção full-height
2. A estrutura divergir visivelmente do mockup aprovado sem justificativa técnica documentada
