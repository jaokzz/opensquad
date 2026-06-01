---
task: "Revisar Conteúdo"
order: 1
input: |
  - reel_script: Roteiro completo com legenda (de reel-script.md)
  - cover: HTML/PNG do cover (de cover.html, quando disponível)
  - quality_criteria: Critérios de aprovação (de quality-criteria.md)
output: |
  - review_report: Veredicto, scores, feedback específico e path to approval
---

# Revisar Conteúdo

Avalia o roteiro, a legenda e o cover do Reel contra os quality-criteria.md do squad. Emite veredicto APROVAR/REJEITAR com scores, feedback específico e correções obrigatórias.

## Process

1. **Primeira leitura completa**: Ler o reel-script.md inteiro (roteiro + legenda) sem fazer notas. Absorver o fluxo completo antes de qualquer julgamento.
2. **Carregar quality-criteria.md**: Ter os critérios de aprovação presentes antes de iniciar o scoring.
3. **Scoring por critério**: Avaliar cada critério de 1-10 com justificativa de pelo menos uma frase. Critérios: Hook (impacto nos 0-2s), Estrutura do Roteiro (fluxo e cortes), CTA (especificidade e urgência), Legenda (fold, corpo, hashtags), Tom de Voz (alinhamento com posicionamento), Design Cover (quando disponível).
4. **Verificar hard rejection triggers**: Qualquer critério < 4/10 → REJEITAR automaticamente, independente da média geral.
5. **Calcular média geral**: Se ≥ 7/10 e nenhum < 4/10 → APROVAR. Se ≥ 7/10 mas algum entre 4-6 → APROVAR COM RESSALVAS. Se < 7/10 ou algum < 4 → REJEITAR.
6. **Escrever feedback**: Pelo menos 1 Strength:, Required change: para cada rejeição/ressalva, Suggestion (non-blocking): para melhorias opcionais.
7. **Path to Approval em todo REJEITAR**: Lista numerada de mudanças obrigatórias para aprovação na próxima revisão.

## Output Format

```
==============================
 REVISÃO — VEREDICTO: {APROVAR/REJEITAR/APROVAR COM RESSALVAS}
==============================

Conteúdo: {tema do Reel}
Revisão: {N} de 3
Data: {YYYY-MM-DD}

------------------------------
 SCORING
------------------------------
| Critério         | Score  | Resumo                          |
|------------------|--------|---------------------------------|
| Hook (0-2s)      | X/10   | {justificativa}                 |
| Estrutura/Cortes | X/10   | {justificativa}                 |
| CTA              | X/10   | {justificativa}                 |
| Legenda (fold)   | X/10   | {justificativa}                 |
| Tom de Voz       | X/10   | {justificativa}                 |
| Design Cover     | X/10   | {justificativa ou N/A}          |
------------------------------
 MÉDIA: X.X/10
------------------------------

FEEDBACK DETALHADO:

Strength: {o que está genuinamente bom}

Required change: {problema + trecho citado + correção específica}

Suggestion (non-blocking): {melhoria opcional}

PATH TO APPROVAL: {somente em REJEITAR}
1. {mudança obrigatória específica}
2. {mudança obrigatória específica}

VEREDICTO: {APROVAR/REJEITAR/APROVAR COM RESSALVAS}
```

## Output Example

> Roteiro: Automação WhatsApp, Tom Provocativo

```
==============================
 REVISÃO — VEREDICTO: APROVAR COM RESSALVAS
==============================

Conteúdo: Automação de WhatsApp para pequenos negócios
Revisão: 1 de 3
Data: 2026-05-28

------------------------------
 SCORING
------------------------------
| Critério         | Score  | Resumo                                                    |
|------------------|--------|-----------------------------------------------------------|
| Hook (0-2s)      | 9/10   | "Para de pagar salário" cria dissonância imediata — para o scroll |
| Estrutura/Cortes | 7/10   | Cortes bem especificados, mas delivery pode perder ritmo na linha 4 |
| CTA              | 8/10   | "Manda BOT no direct" é específico e tem palavra-chave rastreável |
| Legenda (fold)   | 6/10   | Fold funciona, mas corpo está longo — parágrafos de 3 linhas |
| Tom de Voz       | 8/10   | Tom provocativo consistente do hook ao CTA               |
| Design Cover     | N/A    | Cover não disponível nesta revisão                        |
------------------------------
 MÉDIA: 7.6/10
------------------------------

FEEDBACK DETALHADO:

Strength: O hook "Para de pagar salário pra atendente de WhatsApp" é o melhor elemento do roteiro — usa loss aversion de forma concreta sem soar agressivo. Gera cognitively dissonance imediata.

Required change: Legenda, parágrafo 2 — "Enquanto você paga R$1.500/mês pra alguém responder mensagem, tem negócio do mesmo tamanho com bot fazendo isso em 3 segundos." Está com 3 linhas no mobile (acima do máximo de 2). Quebrar em dois parágrafos: "Enquanto você paga R$1.500/mês pra atendente de WhatsApp," [nova linha] "tem negócio vizinho com bot respondendo em 3 segundos."

Suggestion (non-blocking): Considerar adicionar "Funciona pra qualquer negócio local" no delivery para ampliar identificação — o exemplo está focado em negócio genérico mas o público-alvo é bem específico.

VEREDICTO: APROVAR COM RESSALVAS — corrigir parágrafo 2 da legenda antes de publicar.
```

## Quality Criteria

- [ ] Todos os 5 critérios (ou 6 com cover) pontuados com justificativa
- [ ] Pelo menos 1 Strength: identificada
- [ ] Required change: para cada critério < 7/10
- [ ] Veredicto em MAIÚSCULAS, sem ambiguidade
- [ ] Revisão N de 3 declarada
- [ ] Path to Approval presente em todo REJEITAR

## Veto Conditions

Rejeitar e refazer se:
1. Algum critério pontuado sem justificativa (número isolado)
2. Veredicto APROVAR quando algum critério está abaixo de 4/10
