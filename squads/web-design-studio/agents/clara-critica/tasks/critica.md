---
task: "Revisão Awwwards-Level"
order: 1
input: |
  - site_rodando: Site com build+animação implementados, servidor dev ativo
  - quality_criteria: pipeline/data/quality-criteria.md
  - anti_patterns: pipeline/data/anti-patterns.md
output: |
  - review: Score por bloco, strengths, required changes, path to approval e veredito final
---

# Revisão Awwwards-Level

Gate de qualidade final antes de qualquer aprovação. Audita o site rodando de verdade contra `quality-criteria.md` e `anti-patterns.md`, nunca a partir apenas da descrição do que foi implementado.

## Process

1. **Abrir o site rodando** e navegar em mobile (375px), tablet (768px) e desktop (1440px).
2. **Rodar Lighthouse** e registrar os números reais de Performance, LCP e CLS — nunca estimar.
3. **Avaliar cada bloco do `quality-criteria.md`** (DNA/Sistema, Layout, Animação, Performance, Responsividade/Acessibilidade, Anti-Genérico), atribuindo score de 0-10 com justificativa de uma frase por bloco.
4. **Checar contra `anti-patterns.md` item a item** nos blocos críticos (Animação e Anti-Genérico) — qualquer item presente é reprovação automática desse bloco.
5. **Escrever o review completo**: pelo menos uma Strength, Required change para todo bloco reprovado, Suggestions não-bloqueantes separadas.
6. **Emitir o veredito** (APROVAR / APROVAR COM RESSALVAS / REJEITAR) como última linha, com Path to Approval numerado se REJEITAR.

## Output Format

```markdown
# Revisão — {Cliente} (Revisão {N} de 3)

## Strengths
- {força específica com referência ao critério}

## Scores
- DNA e Sistema de Design: {X}/10 — {justificativa}
- Layout: {X}/10 — {justificativa}
- Animação: {X}/10 — {justificativa}
- Performance: {X}/10 — {justificativa, incluindo números reais do Lighthouse}
- Responsividade/Acessibilidade: {X}/10 — {justificativa}
- Anti-Genérico: {X}/10 — {justificativa}

## Required change
{lista numerada, uma por critério reprovado}

## Suggestion (non-blocking)
{lista opcional}

## Path to Approval
{lista numerada, apenas se REJEITAR}

## Veredito
{APROVAR | APROVAR COM RESSALVAS | REJEITAR}
```

## Output Example

Ver exemplo completo em `pipeline/data/output-examples.md` (Exemplo 3 — Revisão Crítica, Clínica Bem Viver), reproduzido aqui como referência de profundidade:

```markdown
# Revisão — Clínica Bem Viver (Revisão 1 de 3)

## Strengths
- A paleta terracota + off-white está coerente do hero ao footer, sem desvio (10/10 no critério de paleta)
- O split-hero com foto e texto assimétricos evita completamente o padrão centralizado genérico

## Scores
- DNA e Sistema de Design: 9/10 — tokens documentados e aplicados consistentemente
- Layout: 6/10 — a seção "Nossos Tratamentos" usa 3 cards idênticos lado a lado, exatamente o anti-padrão banido
- Animação: 8/10 — specs seguidas corretamente, mas o hover do CTA usa `transition: all` em vez de `transform` isolado
- Performance: 9/10 — Lighthouse mobile 91, LCP 1.9s

## Required change
1. Substituir a grade de "3 cards iguais" por layout zig-zag de 2 colunas
2. Trocar `transition: all` por `transition: transform 200ms cubic-bezier(...)` no CTA

## Path to Approval
1. Refazer seção "Nossos Tratamentos" com layout zig-zag
2. Corrigir transition do CTA hero
3. Reenviar para nova revisão

## Veredito
REJEITAR
```

## Quality Criteria

- [ ] Site testado rodando em mobile, tablet e desktop, não apenas lido/descrito
- [ ] Lighthouse rodado com números reais reportados
- [ ] Todos os 6 blocos do quality-criteria.md pontuados com justificativa
- [ ] Pelo menos uma Strength identificada mesmo em REJEITAR
- [ ] Path to Approval numerado presente em todo REJEITAR

## Veto Conditions

Rejeitar e refazer o review (não o site) se:
1. O veredito for dado sem números reais de Lighthouse
2. Algum critério bloqueante (Bloco 3 ou Bloco 6) for ignorado na pontuação
