# Quality Criteria — Rubrica do Web Design Studio

Critérios usados por Clara Crítica na Fase 8 e por todos os agentes como referência de "pronto". Cada critério é binário ou mensurável — nunca subjetivo.

## Bloco 1 — DNA Visual e Sistema de Design

- [ ] DNA Visual definido em 3 palavras-chave + mínimo 3 referências reais (URLs), antes de qualquer tela
- [ ] Paleta com no máximo 1 acento saturado, contraste texto/fundo ≥ 4.5:1 (WCAG AA) verificado
- [ ] Nenhuma fonte banida (Inter, Roboto, Arial, Helvetica, Open Sans) em headline ou corpo
- [ ] Tokens completos documentados: cor, tipografia, espaçamento (escala 4px), raio, sombra
- [ ] Paleta e tipografia coerentes com o DNA do negócio do cliente, não genéricas

## Bloco 2 — Layout e Estrutura

- [ ] Hero não-centralizado (split-screen, assimétrico ou left/right-aligned) — hero centralizado é reprovação automática
- [ ] Nenhuma seção de "3 cards iguais lado a lado" como feature section
- [ ] Grid usa CSS Grid para estruturas reais, nunca `flexbox` com math de porcentagem (`calc(33%-1rem)`)
- [ ] Seções com espaçamento vertical generoso (mínimo `py-16` mobile, `py-24` a `py-40` desktop)
- [ ] Layout assimétrico colapsa corretamente para coluna única abaixo de 768px, sem scroll horizontal indesejado
- [ ] `min-h-[100dvh]` usado em vez de `h-screen` em qualquer seção full-height

## Bloco 3 — Animação

- [ ] Toda animação especificada segue um padrão do `animation-playbook.md` (elemento, trigger, propriedade, duration, easing, delay)
- [ ] Animações usam exclusivamente `transform` e `opacity` — zero animação de propriedades que causam reflow
- [ ] Nenhuma easing `linear` ou `ease-in-out` padrão em transições de destaque — cubic-bezier customizado ou spring physics
- [ ] `prefers-reduced-motion` implementado e testado
- [ ] Animações contínuas/infinitas isoladas em componente próprio, sem re-render do restante da árvore
- [ ] 60fps confirmado no DevTools Performance (não apenas "parece fluido")

## Bloco 4 — Performance

- [ ] Lighthouse Mobile Performance Score ≥ 85
- [ ] LCP (Largest Contentful Paint) ≤ 2.5s em simulação 4G
- [ ] CLS (Cumulative Layout Shift) ≤ 0.1
- [ ] Imagens abaixo da dobra com `loading="lazy"`, formato webp/avif
- [ ] `backdrop-blur` aplicado somente a elementos fixed/sticky

## Bloco 5 — Responsividade e Acessibilidade

- [ ] Testado em 375px (mobile), 768px (tablet) e 1440px (desktop) no mínimo
- [ ] Todos os estados interativos desenhados e implementados: hover, active, focus, disabled, loading, error, empty
- [ ] Navegação por teclado funcional (foco visível, ordem lógica de tab)
- [ ] Nenhum texto abaixo de 14px em corpo de conteúdo real

## Bloco 6 — Anti-Genérico de IA

- [ ] Nenhum item da checklist de `anti-patterns.md` presente
- [ ] Copy sem clichês de IA ("eleve", "impulsione", "transforme sua presença digital")
- [ ] Nenhum dado fake óbvio (nomes tipo "John Doe", números redondos tipo "99.99%")
- [ ] Ícones consistentes (lucide-react, mesmo stroke-width em todo o site), zero emoji em UI

## Veredito Final (Clara Crítica)

- **APROVAR:** todos os blocos ≥ 8/10, nenhum critério bloqueante (Bloco 3 e 6) reprovado
- **APROVAR COM RESSALVAS:** média ≥ 7/10, ressalvas documentadas como não-bloqueantes
- **REJEITAR:** qualquer critério bloqueante falho, ou média < 7/10 — sempre acompanhado de Path to Approval numerado
