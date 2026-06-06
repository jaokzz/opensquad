---
execution: inline
agent: apostas-esportivas/agents/adriana-azevedo
inputFile: squads/apostas-esportivas/output/dados-brutos.md
outputFile: squads/apostas-esportivas/output/analise.md
---

# Step 03: Análise Pré-Jogo

## Context Loading

Carregar antes de executar:
- `squads/apostas-esportivas/output/dados-brutos.md` — dossiê completo do Rafael com dados, odds e contexto
- `squads/apostas-esportivas/pipeline/data/domain-framework.md` — framework de value betting e cálculo de EV
- `squads/apostas-esportivas/pipeline/data/quality-criteria.md` — critérios de qualidade da análise

## Instructions

### Process
1. Ler dados-brutos.md inteiramente antes de qualquer cálculo.
2. Calcular probabilidade implícita para cada mercado (já deve vir do dossiê, mas validar).
3. Estimar probabilidade real para cada mercado com base em xG, H2H, forma e contexto motivacional — documentar os fatores usados em cada estimativa.
4. Calcular EV = (prob_real × (odd−1)) − (prob_perda × 1) para cada mercado.
5. Classificar: STRONG VALUE (EV > 0.10), VALUE (0.01-0.10), SEM VALUE (≤ 0), DESFAVORÁVEL (< −0.05).
6. Verificar correlações entre mercados recomendados.
7. Entregar tabela de mercados com EVs, classificação e recomendações para o Valter.

## Output Format

```
ANÁLISE PRÉ-JOGO: {Time A} vs. {Time B}
{Competição} | {Data}

PROBABILIDADES REAIS ESTIMADAS:
  Vitória {Time A}: {x}% ({justificativa — 1-2 fatores principais})
  Empate: {x}% ({justificativa})
  Vitória {Time B}: {x}% ({justificativa})

TABELA DE MERCADOS:
  Mercado             Odd(Casa) P.Implícita P.Real   EV        Status
  {Time A} ML         {odd}     {x.x}%      {x}%     {+/-x.xx} {status}
  Empate              {odd}     {x.x}%      {x}%     {+/-x.xx} {status}
  {Time B} ML         {odd}     {x.x}%      {x}%     {+/-x.xx} {status}
  Over 2.5 gols       {odd}     {x.x}%      {x}%     {+/-x.xx} {status}
  BTTS Sim            {odd}     {x.x}%      {x}%     {+/-x.xx} {status}

RACIOCÍNIO DOS MERCADOS COM VALUE:
  {Mercado}: {explicação de 2-3 linhas com os fatores que sustentam a estimativa}

CORRELAÇÕES IDENTIFICADAS:
  {Mercado A} + {Mercado B}: {correlacionados/independentes} — {justificativa}

RECOMENDAÇÕES PARA O VALTER:
  1. {Mercado} ({status}) — {Casa} {odd}
  2. {Mercado} ({status}) — {Casa} {odd}
  [Mercados sem value listados como DESCARTADOS]

NOTA DE CONFIANÇA: {Alta/Média/Baixa} — {justificativa, ex: amostra pequena}
```

## Output Example

```
ANÁLISE PRÉ-JOGO: Brasil vs. Argentina
Copa do Mundo 2026 | Semifinal | 09/07/2026

PROBABILIDADES REAIS ESTIMADAS:
  Vitória Brasil:    40% (xG médio 1.96, vantagem de casa das Américas, Vinicius em dúvida)
  Empate:            22% (H2H: 2 empates nos últimos 5 mata-matos em cenário neutro)
  Vitória Argentina: 38% (melhor xGA do torneio 0.82, Di María ausente mas elenco profundo)

TABELA DE MERCADOS:
  Mercado             Odd(Betano) P.Implícita P.Real   EV        Status
  Argentina ML        2.85        35.1%       38%      +0.083    ✅ VALUE
  Over 2.5 gols       2.15        46.5%       52%      +0.118    ✅ STRONG VALUE
  BTTS Sim            1.78        56.2%       56%      -0.003    ❌ SEM VALUE
  Brasil ML           2.45        40.8%       40%      -0.008    ❌ SEM VALUE
  Empate              3.25        30.8%       22%      -0.286    ❌ DESFAVORÁVEL

RACIOCÍNIO — Over 2.5 (STRONG VALUE):
  Média xG dos dois times: Brasil 1.96 + Argentina 2.16 = xG combinado médio de 4.12/jogo.
  Mesmo sendo defensivo, Argentina tem xGA 0.82 — mas Brasil cria 1.96 xG/jogo em média.
  H2H: 3 dos 5 últimos mata-matos terminaram com 3+ gols.
  Contexto: Ambos precisam atacar para avançar — postura ofensiva esperada.

CORRELAÇÕES IDENTIFICADAS:
  Over 2.5 + Argentina ML: parcialmente correlacionados — Argentina vencendo por 2+ resolve ambos.
  Declarar ao Valter para decisão sobre combinação.

RECOMENDAÇÕES PARA O VALTER:
  1. Over 2.5 gols (STRONG VALUE) — Betano 2.15
  2. Argentina ML (VALUE) — Betano 2.85
  DESCARTADOS: BTTS Sim, Brasil ML, Empate

NOTA DE CONFIANÇA: Média — Copa do Mundo tem amostra de apenas 4-5 jogos por time.
```

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Qualquer mercado recomendado com EV ≤ 0
2. Probabilidade real estimada sem justificativa de fatores

## Quality Criteria

- [ ] EV calculado para mínimo 4 mercados por confronto
- [ ] Probabilidade real com mínimo 2 fatores declarados por estimativa
- [ ] Correlações entre mercados recomendados verificadas
- [ ] Nota de confiança com justificativa incluída
- [ ] Nenhum mercado com EV negativo na lista de recomendações
