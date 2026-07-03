---
execution: inline
agent: web-design-studio/agents/clara-critica
inputFile: squads/web-design-studio/output/animation-notes.md
outputFile: squads/web-design-studio/output/review.md
on_reject: 9
---

# Step 11: Crítica Awwwards-Level

## Context Loading

Load these files before executing:
- Site rodando localmente (servidor dev ativo) — o código real das Fases 6 e 7
- `pipeline/data/quality-criteria.md` — rubrica de avaliação (OBRIGATÓRIO)
- `pipeline/data/anti-patterns.md` — checklist de antipadrões (OBRIGATÓRIO)

## Instructions

### Process
1. Abrir o site rodando e navegar em mobile (375px), tablet (768px) e desktop (1440px)
2. Rodar Lighthouse e registrar os números reais de Performance, LCP e CLS
3. Pontuar cada bloco do `quality-criteria.md` (DNA/Sistema, Layout, Animação, Performance, Responsividade/Acessibilidade, Anti-Genérico) com justificativa de uma frase
4. Checar item a item contra `anti-patterns.md` nos blocos críticos (Animação e Anti-Genérico)
5. Escrever o review com Strengths, Required changes, Suggestions e veredito final em `output/review.md`

## Output Format

```markdown
# Revisão — {Cliente} (Revisão {N} de 3)

## Strengths
- {força específica}

## Scores
- {Bloco}: {X}/10 — {justificativa}

## Required change
{lista numerada}

## Path to Approval
{lista numerada, se REJEITAR}

## Veredito
{APROVAR | APROVAR COM RESSALVAS | REJEITAR}
```

## Output Example

```markdown
# Revisão — Clínica Bem Viver (Revisão 1 de 3)

## Strengths
- A paleta terracota + off-white está coerente do hero ao footer, sem desvio
- O split-hero com foto e texto assimétricos evita completamente o padrão centralizado genérico

## Scores
- DNA e Sistema de Design: 9/10 — tokens documentados e aplicados consistentemente
- Layout: 6/10 — a seção "Nossos Tratamentos" usa 3 cards idênticos, exatamente o anti-padrão banido
- Animação: 8/10 — specs seguidas, mas hover do CTA usa transition: all em vez de transform isolado
- Performance: 9/10 — Lighthouse mobile 91, LCP 1.9s

## Required change
1. Substituir a grade de "3 cards iguais" por layout zig-zag de 2 colunas
2. Trocar transition: all por transition: transform 200ms cubic-bezier(...) no CTA

## Path to Approval
1. Refazer seção "Nossos Tratamentos" com layout zig-zag
2. Corrigir transition do CTA hero
3. Reenviar para nova revisão

## Veredito
REJEITAR
```

## Veto Conditions

Rejeitar e redo if ANY are true:
1. O veredito for dado sem números reais de Lighthouse
2. O site não tiver sido testado rodando (apenas descrito/lido)

## Quality Criteria

- [ ] Todos os 6 blocos do quality-criteria.md pontuados com justificativa
- [ ] Pelo menos uma Strength identificada mesmo em REJEITAR
- [ ] Path to Approval numerado presente em todo REJEITAR
- [ ] Número da revisão declarado (Revisão N de 3)
