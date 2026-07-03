---
execution: inline
agent: web-design-studio/agents/vitoria-visual
inputFile: squads/web-design-studio/output/wireframes.md
outputFile: squads/web-design-studio/output/mockup-handoff.md
---

# Step 07: Mockup + Spec de Animação

## Context Loading

Load these files before executing:
- `squads/web-design-studio/output/wireframes.md` — wireframe aprovado
- `squads/web-design-studio/output/design-system.md` — tokens de design
- `pipeline/data/animation-playbook.md` — catálogo de padrões de animação (OBRIGATÓRIO)

## Instructions

### Process
1. Aplicar os tokens do design-system.md a cada seção do wireframe, em desktop (1440px) e mobile (390px)
2. Desenhar todos os estados interativos (hover, active, focus, disabled, loading, error, empty)
3. Para cada elemento animado, escolher um padrão do `animation-playbook.md` — nunca inventar fora do catálogo
4. Especificar cada animação com valores exatos: elemento, trigger, propriedade, duration (ms), easing, delay
5. Salvar o handoff completo em `output/mockup-handoff.md` (incluindo a seção de animation spec)

## Output Format

```markdown
# Mockup Handoff — {Cliente}

## {Seção}
Desktop: {descrição} | Mobile: {descrição} | Estados: {hover/active/etc}

# Animation Spec — {Cliente}

[{Elemento}]: {trigger} → {propriedade}: {A} → {B}
Duration: {X}ms | Easing: {valor} | Delay: {X}ms
```

## Output Example

```markdown
# Mockup Handoff — Clínica Bem Viver

## Hero
Desktop: split 55/45, H1 em PP Editorial New 72px à esquerda, foto full-bleed à direita com fade na borda inferior
Mobile: empilha verticalmente, texto primeiro, foto abaixo, CTA full-width
Estados: CTA hover → ícone translateX(4px); active → scale(0.98)

# Animation Spec — Clínica Bem Viver

[Wordmark de fundo "BEM VIVER"]: on-load → opacity: 0 → 0.06, scale: 1.05 → 1
Duration: 1200ms | Easing: cubic-bezier(0.16, 1, 0.3, 1) | Delay: 0ms

[H1]: scroll-enter, split por linha → opacity: 0 → 1, y: 24px → 0, blur: 6px → 0
Duration: 800ms | Easing: cubic-bezier(0.16, 1, 0.3, 1) | Delay: stagger 60ms

[Foto hero]: on-load → clip-path: inset(0 0 100% 0) → inset(0 0 0% 0)
Duration: 1000ms | Easing: cubic-bezier(0.32, 0.72, 0, 1) | Delay: 200ms
```

## Veto Conditions

Rejeitar e redo if ANY are true:
1. Qualquer animação especificada sem duration e easing exatos
2. A versão mobile não estiver descrita para alguma seção

## Quality Criteria

- [ ] Todas as seções descritas em desktop e mobile
- [ ] Todos os estados interativos definidos
- [ ] Toda animação referencia um padrão do animation-playbook.md
- [ ] Tokens do design-system.md aplicados consistentemente
