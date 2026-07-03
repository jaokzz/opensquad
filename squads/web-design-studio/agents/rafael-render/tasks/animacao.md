---
task: "Implementar Animação"
order: 2
input: |
  - animation_spec: Especificação de cada animação (elemento, trigger, propriedade, duration, easing, delay)
  - codigo_estrutura: Componentes estáticos já implementados na fase de Build
  - animation_playbook: pipeline/data/animation-playbook.md
output: |
  - codigo_animado: Componentes com animação implementada exatamente conforme a spec, otimizados para 60fps
---

# Implementar Animação

Implementa exatamente a `animation-spec.md` da Vitória Visual, escolhendo a ferramenta certa por padrão do `animation-playbook.md` — nunca simplifica nem inventa valores diferentes da spec.

## Process

1. **Ler a spec animação por animação** e identificar o padrão do `animation-playbook.md` correspondente a cada uma (scroll reveal, stagger, magnetic button, pin+scrub, etc.).
2. **Escolher a ferramenta pelo padrão, não por preferência**: scroll-storytelling/pin → GSAP ScrollTrigger; estado de UI React → Framer Motion; nunca os dois no mesmo componente.
3. **Isolar toda animação contínua/interativa em Client Component próprio** (`'use client'`), memoizado, sem vazar re-render para o layout pai.
4. **Implementar com os valores exatos da spec**: duration, easing (cubic-bezier ou spring), delay — nunca aproximar ("parece que 500ms está bom").
5. **Aplicar `prefers-reduced-motion`** em toda animação não-essencial.
6. **Medir no DevTools Performance**: confirmar 60fps real antes de considerar a implementação concluída, não só avaliação visual.

## Output Format

```tsx
// {Componente}Animado.tsx
"use client";
// implementação GSAP ou Framer Motion conforme o padrão do animation-playbook.md
```

## Output Example

> Spec: `[Foto hero]: on-load → clip-path: inset(0 0 100% 0) → inset(0 0 0% 0). Duration: 1000ms | Easing: cubic-bezier(0.32, 0.72, 0, 1) | Delay: 200ms` + `[H1]: scroll-enter split por linha, stagger 60ms`

```tsx
// HeroReveal.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroReveal({ children }: { children: React.ReactNode }) {
  const photoRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        photoRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          ease: "cubic-bezier(0.32, 0.72, 0, 1)",
          delay: 0.2,
        }
      );

      const lines = linesRef.current?.querySelectorAll("[data-line]");
      if (lines) {
        gsap.fromTo(
          lines,
          { opacity: 0, y: 24, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)",
            stagger: 0.06,
          }
        );
      }
    });

    return () => ctx.revert(); // cleanup obrigatório
  }, []);

  return (
    <>
      <div ref={linesRef}>{children}</div>
      <div ref={photoRef} className="absolute inset-0" />
    </>
  );
}
```

## Quality Criteria

- [ ] Cada animação implementada com os valores exatos da spec (duration, easing, delay)
- [ ] Ferramenta escolhida conforme o padrão do `animation-playbook.md`, nunca por preferência pessoal
- [ ] Nenhuma mistura de GSAP e Framer Motion no mesmo componente
- [ ] `prefers-reduced-motion` implementado
- [ ] 60fps confirmado no DevTools Performance
- [ ] Cleanup de efeitos (`gsap.context().revert()` ou equivalente) presente em todo componente com animação

## Veto Conditions

Rejeitar e refazer se:
1. Alguma animação usar `width`, `height`, `top` ou `left` em vez de `transform`/`clip-path`/`opacity`
2. Faltar cleanup de `useEffect` em animação com GSAP, causando vazamento de listener entre navegações
