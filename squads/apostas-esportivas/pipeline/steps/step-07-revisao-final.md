---
execution: inline
agent: apostas-esportivas/agents/camila-campos
inputFile: squads/apostas-esportivas/output/monitoramento.md
outputFile: squads/apostas-esportivas/output/relatorio-final.md
on_reject: 3
---

# Step 07: Revisão Crítica Final

## Context Loading

Carregar antes de executar:
- `squads/apostas-esportivas/output/analise.md` — análise pré-jogo com EVs
- `squads/apostas-esportivas/output/multipla.md` — múltipla montada com legs e justificativas
- `squads/apostas-esportivas/output/monitoramento.md` — boletim ao vivo atualizado
- `squads/apostas-esportivas/pipeline/data/quality-criteria.md` — critérios de scoring

## Instructions

### Process
1. Ler os três documentos inteiramente antes de qualquer pontuação.
2. Executar task `review.md` — scoring por critério com justificativa, hard triggers, veredicto.
3. Se REJEITAR: incluir Path to Approval numerado e retornar ao Step 3 (on_reject: 3).
4. Se APROVAR ou APROVAR COM RESSALVAS: entregar relatório final consolidado.

## Output Format

```
==============================
 REVISÃO — VEREDICTO: {APROVAR/REJEITAR/APROVAR COM RESSALVAS}
==============================

Múltipla: {odd}x | Stake: R$150 | Retorno potencial: R${valor}
Revisão: {N} de 3 | Data: {YYYY-MM-DD}

------------------------------
 SCORING
------------------------------
| Critério              | Score | Resumo                              |
|-----------------------|-------|-------------------------------------|
| EV dos Legs           | X/10  | {justificativa}                     |
| Composição Múltipla   | X/10  | {justificativa}                     |
| Qualidade da Análise  | X/10  | {justificativa}                     |
| Dados e Fontes        | X/10  | {justificativa}                     |
| Monitoramento         | X/10  | {justificativa}                     |
| Gestão de Risco       | X/10  | {justificativa}                     |
------------------------------
 MÉDIA: X.X/10
------------------------------

Strength: {o que está genuinamente bom}
Required change: {problema + referência + correção}
Suggestion (non-blocking): {melhoria opcional}

PATH TO APPROVAL: {somente em REJEITAR}
1. {mudança obrigatória específica}

VEREDICTO: {APROVAR/REJEITAR/APROVAR COM RESSALVAS}
```

## Output Example

```
==============================
 REVISÃO — VEREDICTO: APROVAR
==============================

Múltipla: 19.97x | Stake: R$150 | Retorno potencial: R$2.995,50
Revisão: 1 de 3 | Data: 2026-07-09

------------------------------
 SCORING
------------------------------
| Critério              | Score | Resumo                                                   |
|-----------------------|-------|----------------------------------------------------------|
| EV dos Legs           | 9/10  | Todos os 4 legs com EV positivo calculado — Over 2.5 STRONG |
| Composição Múltipla   | 8/10  | Odd 19.97x no teto do range; independência verificada    |
| Qualidade da Análise  | 8/10  | xG, H2H e contexto motivacional cobertos pela Adriana    |
| Dados e Fontes        | 9/10  | Todas as fontes com timestamp — padrão exemplar          |
| Monitoramento         | 8/10  | Boletim completo, cash-out com valor calculado           |
| Gestão de Risco       | 7/10  | Stop loss declarado; correlação Leg1+2 bem justificada   |
------------------------------
 MÉDIA: 8.2/10
------------------------------

Strength: O dossiê do Rafael é referência de qualidade — odds com timestamp, fontes
citadas por bloco, probabilidade implícita calculada para cada mercado. A análise da
Adriana sustentou todas as recomendações com EV positivo e justificativas explícitas.

Suggestion (non-blocking): Em entradas futuras com correlação parcial entre legs,
documentar percentual de cenários onde ambos resolvem simultaneamente — tornaria a
justificativa de aceitabilidade mais defensável na auditoria mensal.

VEREDICTO: APROVAR
```

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Qualquer leg na múltipla com EV ≤ 0 identificado na revisão
2. Critério pontuado sem justificativa (número isolado)

## Quality Criteria

- [ ] Todos os 6 critérios pontuados com justificativa
- [ ] Veredicto claro em maiúsculas
- [ ] Path to Approval presente em todo REJEITAR
- [ ] Revisão N de 3 declarada
