---
task: "Revisão Crítica da Aposta"
order: 1
input: |
  - analise: Relatório de análise pré-jogo com EVs calculados (analise.md)
  - multipla: Múltipla montada com legs, odds e justificativas (multipla.md)
  - monitoramento: Boletim de monitoramento ao vivo atualizado (monitoramento.md)
output: |
  - review_report: Veredicto com scores, feedback específico e path to approval
---

# Revisão Crítica da Aposta

Avalia a análise da Adriana, a múltipla do Valter e o monitoramento do Marcos contra os critérios de qualidade do squad. Emite veredicto APROVAR / REJEITAR / APROVAR COM RESSALVAS com scores, feedback específico e correções obrigatórias quando necessário.

## Process

1. **Leitura completa sem notas** — ler analise.md, multipla.md e monitoramento.md integralmente antes de qualquer julgamento.
2. **Carregar quality-criteria.md** — ter os critérios presentes antes do scoring.
3. **Scoring por critério** — avaliar cada um de 1-10 com justificativa mínima de uma frase.
4. **Verificar hard rejection triggers** — EV negativo em qualquer leg, correlação não declarada, odds sem timestamp → REJEITAR automaticamente.
5. **Calcular média** — ≥ 7/10 sem hard trigger → APROVAR; ≥ 7/10 com algum entre 4-6 → APROVAR COM RESSALVAS; < 7/10 ou hard trigger → REJEITAR.
6. **Escrever feedback** — mínimo 1 Strength, Required change para cada rejeição, Suggestion para melhorias opcionais.
7. **Path to Approval em todo REJEITAR** — lista numerada de mudanças obrigatórias.

## Output Format

```
==============================
 REVISÃO — VEREDICTO: {APROVAR/REJEITAR/APROVAR COM RESSALVAS}
==============================

Múltipla: {odd combinada}x | Stake: R$150 | Retorno potencial: R${valor}
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

FEEDBACK DETALHADO:

Strength: {o que está genuinamente bom — específico}

Required change: {problema + referência ao documento + correção específica}

Suggestion (non-blocking): {melhoria opcional}

PATH TO APPROVAL: {somente em REJEITAR}
1. {mudança obrigatória específica}
2. {mudança obrigatória específica}

VEREDICTO: {APROVAR/REJEITAR/APROVAR COM RESSALVAS}
```

## Output Example

```
==============================
 REVISÃO — VEREDICTO: APROVAR COM RESSALVAS
==============================

Múltipla: 16.49x | Stake: R$150 | Retorno potencial: R$2.473,50
Revisão: 1 de 3 | Data: 2026-07-10

------------------------------
 SCORING
------------------------------
| Critério              | Score | Resumo                                                   |
|-----------------------|-------|----------------------------------------------------------|
| EV dos Legs           | 8/10  | Todos os 4 legs com EV positivo calculado e declarado    |
| Composição Múltipla   | 7/10  | Odd 16.49x dentro da faixa; Legs 1+2 parcialmente corr. |
| Qualidade da Análise  | 8/10  | xG, H2H e contexto motivacional cobertos pela Adriana    |
| Dados e Fontes        | 9/10  | Todas as fontes citadas com timestamp — padrão exemplar  |
| Monitoramento         | 7/10  | Boletim completo mas cash-out recomendado sem valor exato|
| Gestão de Risco       | 6/10  | Correlação parcial Legs 1+2 declarada mas não resolvida  |
------------------------------
 MÉDIA: 7.5/10
------------------------------

Strength: O dossiê do Rafael é o ponto mais forte desta entrada — todas as odds com
timestamp, fontes citadas por bloco e probabilidade implícita calculada para cada
mercado. Padrão de rastreabilidade que deve ser mantido em todas as entradas.

Required change: multipla.md, Legs 1+2 — correlação parcial declarada mas aceita sem
justificativa quantitativa. "Correlação parcial aceitável" não é critério — especificar:
qual percentual dos cenários resolve ambos simultaneamente? Se > 60%, reconsiderar
combinação. Alterar ou justificar com número.

Suggestion (non-blocking): Monitoramento do Marcos para o Leg 4 (Alemanha -0.5) poderia
incluir xG de abertura de linha como baseline — facilitaria avaliação ao vivo se o placar
diverge do desempenho esperado.

VEREDICTO: APROVAR COM RESSALVAS — corrigir declaração de correlação Legs 1+2 antes de confirmar a entrada.
```

## Quality Criteria

- [ ] Todos os 6 critérios pontuados com justificativa mínima de uma frase
- [ ] Pelo menos 1 Strength identificada
- [ ] Required change para cada critério < 7/10
- [ ] Veredicto em MAIÚSCULAS sem ambiguidade
- [ ] Revisão N de 3 declarada
- [ ] Path to Approval presente em todo REJEITAR

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Algum critério pontuado sem justificativa (número isolado sem explicação)
2. Veredicto APROVAR quando qualquer leg tem EV negativo ou não calculado
