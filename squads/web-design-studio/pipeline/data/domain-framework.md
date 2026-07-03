# Domain Framework — Metodologia de Criação de Sites Premium

Framework operacional completo do squad, do briefing ao site publicado. Cada fase tem input, output e critério de saída claro — nenhuma fase avança sem o output da anterior aprovado.

## Visão Geral das 7 Fases

```
1. Briefing            → content-brief.md
2. DNA Visual          → dna-visual.md           [checkpoint: aprovar]
3. Sistema de Design   → design-system.md
4. Wireframe           → wireframes.md           [checkpoint: aprovar]
5. Mockup + Animação   → mockup-handoff.md + animation-spec.md  [checkpoint: aprovar]
6. Build               → código (componentes React/Next.js)
7. Animação            → código (GSAP/Framer Motion/Three.js implementado)
   → Crítica           → review.md               [on_reject volta à fase 6]
   → Aprovação final   [checkpoint: aprovar antes de deploy]
```

## Fase 1 — Briefing

**Objetivo:** entender o negócio antes de desenhar qualquer coisa. Perguntas obrigatórias:
- O que o site precisa fazer (vender, agendar, informar, gerar contato)?
- Quem é o público (idade, classe, comportamento de compra/decisão)?
- Que emoção o visitante deve sentir ao entrar (confiança, urgência, desejo, calma)?
- Existe material do cliente (logo, fotos, paleta já usada, redes sociais)?
- Existe concorrência direta a evitar parecer igual?

Um brief vago ("quero algo moderno e bonito") é devolvido para especificação — nunca aceito como input de design.

## Fase 2 — DNA Visual

**Objetivo:** definir a direção visual em 3 palavras-chave + referências reais antes de qualquer paleta ou fonte.

Processo:
1. Cruzar o briefing com o DNA consolidado em `visual-identity.md` (tipografia como estrutura, paleta restrita + 1 acento, fotografia dominante, grid assimétrico)
2. Selecionar 3-5 referências reais (URLs de sites existentes, nunca "algo tipo Pinterest")
3. Definir o "Design DNA Card": 3 palavras + 3 referências + direção de paleta + direção tipográfica
4. Nunca copiar layout da referência — extrair o princípio (contraste, ritmo, peso tipográfico) e recriar para o negócio do cliente

**Critério de saída:** o cliente reconhece a emoção pretendida ao ver o DNA Card, mesmo sem ver uma tela ainda.

## Fase 3 — Sistema de Design

**Objetivo:** travar todos os tokens antes de desenhar uma tela. Sem isso, cada seção do site fica inconsistente.

Tokens obrigatórios: paleta semântica (bg, surface, text-primary, text-secondary, accent, border), tipografia (família + peso + tamanho + line-height para H1-H3/body/caption/label), espaçamento (escala 4px), raio de borda, 3 níveis de sombra. Ver estrutura completa em `visual-identity.md`.

## Fase 4 — Wireframe (Low-Fi)

**Objetivo:** validar estrutura e hierarquia sem cor nem foto — só caixas em escala de cinza. Aprovação rápida do fluxo antes de investir em alta-fidelidade evita retrabalho caro.

Cada seção do site vira um bloco: hero, prova social, produto/serviço, feature strip, CTA, footer. A ordem e a proporção de cada bloco é decidida aqui, não na Fase 5.

## Fase 5 — Mockup High-Fidelity + Spec de Animação

**Objetivo:** entregar o design completo (desktop + mobile) e a especificação exata de cada animação, de forma que o Rafael Render não precise adivinhar nada.

Formato de cada animação especificada:
```
[Elemento]: [Trigger] → [Propriedade]: de [valor A] para [valor B]
Duration: Xms | Easing: cubic-bezier(X,X,X,X) | Delay: Xms
```

Toda animação deve estar ancorada em um dos padrões do `animation-playbook.md` (scroll reveal, stagger, magnetic hover, parallax, scroll-scrubbed, etc) — nunca "algo de leve, tipo um fade".

## Fase 6 — Build

**Objetivo:** implementar a estrutura estática (HTML/JSX + Tailwind) fiel ao mockup e ao sistema de design, com componentização correta, antes de adicionar qualquer animação.

Stack padrão: Next.js (App Router) + TypeScript + Tailwind CSS + lucide-react. Server Components por padrão; Client Components isolados apenas onde há interatividade/animação (regra RSC).

## Fase 7 — Animação

**Objetivo:** implementar exatamente a spec da Fase 5, sem inventar nem simplificar. GSAP + ScrollTrigger para scroll-storytelling e timelines complexas; Framer Motion para estados de UI e microinterações; Three.js/R3F apenas quando o projeto pede 3D real. Nunca misturar GSAP e Framer Motion no mesmo componente.

## Fase 8 — Crítica

**Objetivo:** gate de qualidade Awwwards-level antes de qualquer aprovação final. Clara Crítica audita contra `quality-criteria.md` e `anti-patterns.md`, emite veredito com score por critério. REJEITAR volta à Fase 6 com lista de mudanças obrigatórias.

## Fase 9 — Aprovação Final

**Objetivo:** checkpoint humano antes do deploy. Nada vai ao ar sem essa aprovação explícita.

## Decisões de Arquitetura Recorrentes

- **Quando usar GSAP vs Framer Motion:** scroll-driven/timeline complexa/pin de seção → GSAP ScrollTrigger. Estado de UI (hover, tap, entrada de componente React) → Framer Motion. Nunca os dois no mesmo componente.
- **Quando usar Three.js/R3F:** apenas quando o produto pede profundidade real (configurador 3D, hero com objeto rotacionável, partículas). Não usar "porque fica bonito" — overhead de bundle e performance mobile é real.
- **Quando escalar para o João Vitor em vez de decidir sozinho:** quando o cliente pede algo que viola um anti-padrão do squad (ex: "quero fundo roxo com gradiente"), ou quando duas rejeições seguidas da Clara Crítica batem no mesmo ponto.
- **Quando pular fases:** projetos muito pequenos (uma landing page de 1 seção) podem colapsar Fases 3+4 em uma só sessão, mas nunca pulam DNA Visual nem Crítica.
