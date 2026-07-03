# Animation Playbook — Catálogo de Animações do Squad

Catálogo de referência para Vitória Visual (especificar) e Rafael Render (implementar). Toda animação do squad vem de um padrão listado aqui — "algo suave" não é uma especificação válida.

## Regra de Ouro (inegociável)

Animar **apenas** `transform` e `opacity`. Qualquer animação de `width`, `height`, `top`, `left`, `margin` dispara reflow e derruba o frame rate no mobile. Para efeitos que "pareceriam" precisar de layout, usar `transform: scale()`/`clip-path` como substituto.

## Qual ferramenta usar

| Cenário | Ferramenta | Por quê |
|---|---|---|
| Scroll-storytelling, pin de seção, timeline com múltiplos elementos sincronizados | GSAP + ScrollTrigger | Controle frame-a-frame do scroll, suporte a pin/scrub nativo |
| Estado de UI React (hover, tap, entrada/saída de componente, layout shift) | Framer Motion (Motion) | Integração declarativa com o ciclo de vida do React |
| Objeto 3D, configurador de produto, partículas, hero com profundidade real | Three.js via React Three Fiber (R3F) | WebGL declarativo em React |
| Text splitting, scramble text, morph de SVG | Anime.js v4 ou GSAP SplitText | Ferramentas dedicadas a manipulação de texto/SVG |

**Nunca misturar GSAP e Framer Motion no mesmo componente** — cada um gerencia seu próprio ciclo de render; misturar causa conflito de estado e jank.

## Catálogo de Padrões

### 1. Scroll Reveal (entrada de elemento)
```
Trigger: elemento entra no viewport (IntersectionObserver / ScrollTrigger start: "top 85%")
De: opacity 0, y: 32px, blur(6px)
Para: opacity 1, y: 0, blur(0)
Duration: 700-900ms | Easing: cubic-bezier(0.16, 1, 0.3, 1)
```
Uso: headline de seção, bloco de texto, card individual entrando na tela.

### 2. Staggered Reveal (lista/grid)
```
Parent dispara stagger de 80-120ms entre filhos
Cada filho segue o padrão de Scroll Reveal acima
GSAP: gsap.from(".item", { opacity: 0, y: 24, stagger: 0.1 })
Framer: variants com staggerChildren: 0.1 no container
```
Uso: grid de produtos/serviços, lista de features, cards em sequência.
**Crítico:** parent (variants) e filhos devem estar na mesma árvore de Client Component — se os dados vêm de fetch assíncrono, passar como props para um wrapper centralizado.

### 3. Magnetic Button
```
Trigger: mousemove sobre a área do botão
Propriedade: translate seguindo o cursor, amplitude reduzida (ex: cursor move 20px, botão move 6px)
Implementação: Framer Motion useMotionValue + useTransform (NUNCA useState — recalcula em cada frame e derruba performance mobile)
Retorno ao centro: spring { stiffness: 150, damping: 15 }
```
Uso: CTA principal do hero, botão de "ver mais" com peso visual alto.

### 4. Hover Estado com Física (tactile feedback)
```
:active → scale(0.98) ou translateY(1px), simulando pressão física
Ícone interno (seta/chevron) → translate diagonal + scale(1.05) no hover do grupo pai
Duration: 200ms | Easing: spring stiffness:100 damping:20
```
Uso: todos os botões e cards clicáveis — nenhum estado de hover é "apenas mudar cor".

### 5. Pin + Scrub (scroll-storytelling)
```
GSAP ScrollTrigger: pin: true, scrub: 1
Seção fica fixa na tela enquanto o conteúdo interno anima proporcionalmente ao progresso do scroll
Uso típico: hero de produto que gira/expande conforme o usuário rola, texto que se revela por trechos
```
Uso: seções hero de produto (padrão AirPods Max), storytelling de marca.

### 6. Horizontal Scroll Hijack
```
GSAP: scroll vertical do usuário é traduzido em translateX de uma trilha horizontal
xPercent: -100 * (número de painéis - 1), scrub: true, pin: true
Mobile override: desabilitar acima de breakpoint md, colapsar para scroll horizontal nativo com snap
```
Uso: galeria de projetos/produtos, cases de sucesso.

### 7. Parallax Sutil
```
Camadas com velocidades de scroll diferentes (background 0.5x, foreground 1x)
GSAP: gsap.to(".layer-bg", { yPercent: -20, scrollTrigger: { scrub: true } })
Amplitude máxima: 15-20% do elemento — parallax exagerado quebra legibilidade
```
Uso: hero com foto full-bleed + wordmark sobreposto (padrão Apple/Gazu).

### 8. Text Reveal / Split Text
```
Split por linha ou palavra, cada unidade anima com Scroll Reveal + stagger 40-60ms
Ferramenta: GSAP SplitText ou Anime.js splitText
Uso: headline oversized que "monta" conforme aparece na tela
```

### 9. Marquee / Kinetic Band
```
Loop infinito translateX(0% → -100%), duration 15-30s linear, sem pausa
Duplicar o conteúdo 2x no DOM para loop sem costura visível
Pausar em hover (opcional, conforme contexto)
```
Uso: faixa de anúncio/ticker (padrão Nevermind), lista de clientes/parceiros.

### 10. Nav Morph (hamburger/menu)
```
Ícone: 2-3 linhas → rotacionam para formar X (rotate 45/-45 com position absoluta)
Menu: overlay fullscreen com backdrop-blur, entrada com staggered reveal dos links (delay 60-80ms entre cada)
Duration do morph: 400ms | Easing: cubic-bezier(0.32, 0.72, 0, 1)
```

## Performance — Checklist Obrigatório

- [ ] Toda animação usa exclusivamente `transform` e `opacity`
- [ ] `will-change: transform` aplicado apenas em elementos ativamente animando (removido depois)
- [ ] Animações contínuas/infinitas isoladas em Client Component próprio, memoizado, sem re-render do pai
- [ ] `prefers-reduced-motion` respeitado — animações desabilitadas ou reduzidas quando o usuário sinaliza
- [ ] Nenhum `window.addEventListener('scroll')` manual — usar ScrollTrigger ou IntersectionObserver/whileInView
- [ ] Blur/backdrop-blur aplicado só em elementos fixed/sticky, nunca em containers com scroll
- [ ] Lighthouse Performance ≥ 85 mobile mesmo com todas as animações ativas
- [ ] 60fps verificado no DevTools Performance, não só "parece suave visualmente"
