---
execution: inline
agent: studio-dev-marketing/agents/caio-critico
inputFile: squads/studio-dev-marketing/output/reel-script.md
outputFile: squads/studio-dev-marketing/output/review.md
on_reject: 4
---

# Step 07: Revisão Estratégica

## Context Loading

Load these files before executing:
- `squads/studio-dev-marketing/output/reel-script.md` — roteiro completo com legenda
- `squads/studio-dev-marketing/output/cover.html` — cover visual (se disponível)
- `pipeline/data/quality-criteria.md` — critérios de aprovação com scores mínimos
- `pipeline/data/anti-patterns.md` — erros documentados a verificar ativamente
- `pipeline/data/output-examples.md` — referência do que é output de qualidade

## Instructions

### Process
1. Ler o reel-script.md completo (roteiro + legenda) uma vez sem notar — absorver o fluxo
2. Carregar quality-criteria.md antes de iniciar o scoring
3. Avaliar cada critério de 1-10 com justificativa mínima de uma frase: Hook (impacto 0-2s), Estrutura/Cortes, CTA, Legenda fold, Tom de Voz, Design Cover (se disponível)
4. Verificar hard rejection triggers: qualquer critério < 4/10 → REJEITAR automaticamente
5. Calcular média: ≥ 7/10 sem nenhum < 4 → APROVAR; ≥ 7 com algum entre 4-6 → APROVAR COM RESSALVAS; < 7 ou algum < 4 → REJEITAR
6. Para cada critério < 7/10: escrever Required change: com trecho citado + correção específica
7. Em todo REJEITAR: incluir Path to Approval numerado

## Output Format

```
==============================
 REVISÃO — VEREDICTO: {APROVAR/REJEITAR/APROVAR COM RESSALVAS}
==============================
Conteúdo: {tema}
Revisão: {N} de 3

| Critério         | Score  | Resumo                     |
|------------------|--------|----------------------------|
| Hook (0-2s)      | X/10   | {justificativa}            |
| Estrutura/Cortes | X/10   | {justificativa}            |
| CTA              | X/10   | {justificativa}            |
| Legenda (fold)   | X/10   | {justificativa}            |
| Tom de Voz       | X/10   | {justificativa}            |
| Design Cover     | X/10   | {justificativa ou N/A}     |
MÉDIA: X.X/10

Strength: {o que está genuinamente bom}
Required change: {problema citado + correção}
Suggestion (non-blocking): {melhoria opcional}

PATH TO APPROVAL: {somente em REJEITAR}
1. {mudança obrigatória}

VEREDICTO: {APROVAR/REJEITAR/APROVAR COM RESSALVAS} — {uma frase de conclusão}
```

## Output Example

Veja pipeline/data/output-examples.md para exemplo completo de revisão.

## Veto Conditions

Rejeitar e refazer se:
1. Algum critério pontuado sem justificativa
2. Veredicto APROVAR com algum critério abaixo de 4/10

## Quality Criteria

- [ ] Todos os critérios pontuados com justificativa
- [ ] Pelo menos 1 Strength: identificada
- [ ] Required change: para critério < 7/10
- [ ] Veredicto em MAIÚSCULAS sem ambiguidade
- [ ] Revisão N de 3 declarada
- [ ] Path to Approval em todo REJEITAR
