---
execution: inline
agent: web-design-studio/agents/rafael-render
inputFile: squads/web-design-studio/output/build-notes.md
outputFile: squads/web-design-studio/output/animation-notes.md
---

# Step 10: Implementação de Animação

## Context Loading

Load these files before executing:
- `squads/web-design-studio/output/mockup-handoff.md` — spec de animação (seção Animation Spec)
- `squads/web-design-studio/output/build-notes.md` — componentes já implementados na Fase 6
- `pipeline/data/animation-playbook.md` — catálogo de padrões (OBRIGATÓRIO)

## Instructions

### Process
1. Ler a spec de animação item por item, identificando o padrão do `animation-playbook.md` correspondente
2. Escolher a ferramenta pelo padrão (GSAP ScrollTrigger para scroll-storytelling, Framer Motion para estado de UI, Three.js/R3F só se houver 3D real) — nunca misturar GSAP e Framer Motion no mesmo componente
3. Isolar toda animação contínua/interativa em Client Component próprio, memoizado
4. Implementar com os valores exatos da spec (duration, easing, delay), incluindo cleanup de efeitos
5. Aplicar `prefers-reduced-motion` em toda animação não-essencial
6. Medir no DevTools Performance e documentar o resultado (fps real) em `output/animation-notes.md`

## Output Format

```markdown
# Animation Notes — {Cliente}

## Animações implementadas
- {elemento}: {ferramenta usada} — {fps medido}

## Performance
Lighthouse mobile: {score} | LCP: {valor} | CLS: {valor}
```

## Output Example

```markdown
# Animation Notes — Clínica Bem Viver

## Animações implementadas
- Wordmark de fundo "BEM VIVER": GSAP (fromTo opacity+scale) — 60fps
- H1 split por linha: GSAP SplitText + stagger 60ms — 60fps
- Foto hero (clip-path reveal): GSAP fromTo — 60fps
- CTA magnetic hover: Framer Motion useMotionValue/useTransform (isolado em Client Component próprio) — 60fps

## Performance
Lighthouse mobile: 91 | LCP: 1.9s | CLS: 0.02

## Observações
prefers-reduced-motion implementado — todas as animações de entrada caem para opacity-only quando ativo.
```

## Veto Conditions

Rejeitar e redo if ANY are true:
1. Alguma animação usar `width`, `height`, `top` ou `left` em vez de `transform`/`clip-path`/`opacity`
2. GSAP e Framer Motion aparecerem no mesmo componente

## Quality Criteria

- [ ] Cada animação implementada com os valores exatos da spec
- [ ] `prefers-reduced-motion` implementado
- [ ] 60fps confirmado no DevTools Performance
- [ ] Cleanup de efeitos presente em toda animação com GSAP
