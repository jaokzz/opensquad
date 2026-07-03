---
task: "Mockup High-Fidelity + Spec de Animação"
order: 4
input: |
  - wireframes: Wireframe low-fi aprovado
  - design_system: Sistema de design aprovado
  - animation_playbook: pipeline/data/animation-playbook.md
output: |
  - mockup_handoff: Descrição completa de cada tela em alta-fidelidade (desktop + mobile), com tokens aplicados
  - animation_spec: Especificação de cada animação (elemento, trigger, propriedade, duration, easing, delay)
---

# Mockup High-Fidelity + Spec de Animação

Entrega o design completo pronto para implementação — nenhuma decisão de cor, tipografia, estado ou movimento fica em aberto para o Rafael Render adivinhar.

## Process

1. **Aplicar os tokens do design-system.md a cada seção do wireframe aprovado**, em desktop (1440px) e mobile (390px).
2. **Desenhar todos os estados interativos** de cada componente clicável: hover, active, focus, disabled, loading, error, empty.
3. **Para cada elemento que se move, escolher um padrão do `animation-playbook.md`** — nunca inventar animação fora do catálogo sem justificativa.
4. **Especificar a animação com valores exatos**: elemento, trigger, propriedade (de/para), duration em ms, easing em cubic-bezier ou spring, delay.
5. **Montar o handoff final**: tokens CSS prontos para copiar + descrição de cada seção + spec de animação lado a lado.
6. **Apresentar no checkpoint** antes de liberar para o Rafael Render.

## Output Format

```markdown
# Mockup Handoff — {Cliente}

## {Nome da Seção}
Desktop: {descrição da composição em 1440px}
Mobile: {descrição da composição em 390px, incluindo como a assimetria colapsa}
Estados: {hover/active/focus/disabled onde aplicável}

# Animation Spec — {Cliente}

[{Elemento}]: {trigger} → {propriedade}: {valor A} → {valor B}
Duration: {X}ms | Easing: {cubic-bezier ou spring} | Delay: {X}ms
```

## Output Example

> Clínica Bem Viver — Hero

```markdown
# Mockup Handoff — Clínica Bem Viver

## Hero
Desktop: split 55/45. Esquerda: eyebrow "Avaliação gratuita" em pílula, H1 "Sua pele, sua confiança" em PP Editorial New 72px, parágrafo de apoio, CTA "Agendar avaliação" em pílula terracota com ícone seta nested. Direita: foto full-bleed de pele/rosto com fade suave para --bg na borda inferior.
Mobile: empilha verticalmente — texto primeiro, foto abaixo em largura total, CTA full-width.
Estados: CTA hover → ícone interno translateX(4px); active → scale(0.98).

# Animation Spec — Clínica Bem Viver

[Wordmark de fundo "BEM VIVER"]: on-load → opacity: 0 → 0.06, scale: 1.05 → 1
Duration: 1200ms | Easing: cubic-bezier(0.16, 1, 0.3, 1) | Delay: 0ms

[H1 "Sua pele, sua confiança"]: scroll-enter, split por linha → opacity: 0 → 1, y: 24px → 0, blur: 6px → 0
Duration: 800ms | Easing: cubic-bezier(0.16, 1, 0.3, 1) | Delay: stagger 60ms entre linhas

[Foto hero]: on-load → clip-path: inset(0 0 100% 0) → inset(0 0 0% 0)
Duration: 1000ms | Easing: cubic-bezier(0.32, 0.72, 0, 1) | Delay: 200ms

[CTA "Agendar avaliação"]: hover → ícone interno translateX(4px); :active → scale(0.98)
Duration: 200ms | Easing: spring(stiffness:150, damping:15)
```

## Quality Criteria

- [ ] Todas as seções descritas em desktop (1440px) e mobile (390px)
- [ ] Todos os componentes interativos com estados hover/active/focus/disabled definidos
- [ ] Toda animação referencia um padrão do `animation-playbook.md`
- [ ] Cada animação especificada com elemento, trigger, propriedade, duration, easing e delay exatos
- [ ] Tokens CSS do design-system.md aplicados consistentemente, sem valor solto novo

## Veto Conditions

Rejeitar e refazer se:
1. Qualquer animação especificada sem duration e easing exatos ("transição suave" não é aceito)
2. A versão mobile não estiver descrita — apenas desktop nunca é suficiente
