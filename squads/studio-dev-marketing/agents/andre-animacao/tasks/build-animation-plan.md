---
task: "Planejar Animações"
order: 2
input: |
  - requirements_doc: Análise de requisitos com stack aprovada
  - design_reference: Referências visuais se fornecidas
output: |
  - animation_plan: Especificação técnica de todas as animações do projeto
---

# Planejar Animações

Especifica todas as animações do projeto com timing, easing e implementação técnica antes de escrever código. Evita retrabalho e garante coerência visual.

## Process

1. **Categorizar animações por tipo**: Entrance (elementos entrando na tela), Scroll-based (triggeradas pelo scroll), Interactive (hover, click, focus), Ambient (loop contínuo, background).
2. **Definir sistema de timing**: Velocidades base — fast: 200ms, normal: 400ms, slow: 600ms. Todas as animações do projeto usam múltiplos dessas velocidades para coerência.
3. **Definir easings por intenção**: Entrada de elementos → `cubic-bezier(0.32, 0.72, 0, 1)` (spring-like). Saída → `cubic-bezier(0.4, 0, 1, 1)`. Hover → `cubic-bezier(0.25, 0.1, 0.25, 1)`.
4. **Especificar cada animação**: Nome, tipo, trigger, propriedades animadas, duração, easing, código de exemplo.
5. **Verificar performance**: Todas as animações usam apenas `transform` e `opacity`. Flaggar qualquer exceção para discussão.

## Output Format

```
# Plano de Animações — {projeto}

## Sistema de Timing
- Fast: 200ms
- Normal: 400ms
- Slow: 600ms

## Easings
- Entrada: cubic-bezier(0.32, 0.72, 0, 1)
- Saída: cubic-bezier(0.4, 0, 1, 1)
- Hover: cubic-bezier(0.25, 0.1, 0.25, 1)

## Animações

### {Nome da Animação}
- Tipo: {Entrance / Scroll / Interactive / Ambient}
- Trigger: {scroll / hover / mount / click}
- Propriedades: {transform: translateY / opacity / scale}
- Duração: {Xms}
- Easing: {nome ou cubic-bezier}
- Código:
  ```
  {snippet de implementação}
  ```
```

## Output Example

> Projeto: Landing page barbearia com Motion (Next.js)

```
# Plano de Animações — Barbearia Landing Page

## Sistema de Timing
- Fast: 200ms | Normal: 400ms | Slow: 600ms | Stagger: 80ms por item

## Easings
- Entrada spring: cubic-bezier(0.32, 0.72, 0, 1)
- Hover: cubic-bezier(0.25, 0.1, 0.25, 1)

## Animações

### Hero Text Entrance
- Tipo: Entrance
- Trigger: mount (imediato ao carregar)
- Propriedades: transform: translateY(-20px→0), opacity: 0→1
- Duração: 600ms, stagger 80ms entre linhas
- Easing: cubic-bezier(0.32, 0.72, 0, 1)
- Código:
  ```tsx
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
  >
  ```

### Service Cards Scroll Reveal
- Tipo: Scroll-based
- Trigger: whileInView (50% visível)
- Propriedades: opacity: 0→1, translateY: 32px→0
- Duração: 500ms, stagger 100ms entre cards
- Easing: cubic-bezier(0.32, 0.72, 0, 1)
- Código:
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
  ```

### CTA Button Hover
- Tipo: Interactive
- Trigger: hover
- Propriedades: scale: 1→1.03, brightness: 1→1.05
- Duração: 200ms
- Easing: cubic-bezier(0.25, 0.1, 0.25, 1)
- Código:
  ```tsx
  <motion.button
    whileHover={{ scale: 1.03, filter: 'brightness(1.05)' }}
    transition={{ duration: 0.2 }}
  >
  ```
```

## Quality Criteria

- [ ] Sistema de timing definido com velocidades base
- [ ] Easings customizados (não linear/ease-in-out genérico)
- [ ] Apenas transform e opacity animados (sem width/height/margin)
- [ ] Código de exemplo para cada animação
- [ ] `viewport={{ once: true }}` em todas as scroll animations (evita re-trigger)

## Veto Conditions

Rejeitar e refazer se:
1. Alguma animação usa propriedades que causam reflow (width, height, top, left, margin, padding)
2. Easing genérico (linear, ease, ease-in-out) sem justificativa para exceção
