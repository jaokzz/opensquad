---
execution: inline
agent: apostas-esportivas/agents/marcos-monteiro
inputFile: squads/apostas-esportivas/output/multipla.md
outputFile: squads/apostas-esportivas/output/monitoramento.md
---

# Step 06: Monitoramento ao Vivo

## Context Loading

Carregar antes de executar:
- `squads/apostas-esportivas/output/multipla.md` — legs ativos, odds de entrada e riscos sinalizados pelo Valter
- `squads/apostas-esportivas/pipeline/data/domain-framework.md` — indicadores ao vivo e gatilhos de cash-out

## Instructions

### Process
1. Ler multipla.md para identificar todos os legs ativos, jogos, mercados, odds de entrada e riscos sinalizados.
2. Para cada jogo com leg ativo: buscar placar, minuto, xG ao vivo, escanteios, cartões e substituições no SofaScore.
3. Capturar odds ao vivo em Betano ou Superbet para os mercados dos legs ativos.
4. Classificar cada leg: EM CURSO / GANHO / PERDIDO / ALERTA AMARELO / ALERTA VERMELHO.
5. Emitir boletim timestampado com status por leg e recomendação (manter / monitorar / cash-out).
6. Repetir a cada 15 minutos ou sempre que evento crítico ocorrer.

## Output Format

```
BOLETIM DE MONITORAMENTO — {DD/MM/YYYY} | {HH:MM} (BRT)

LEG {N}: {Mercado} — {Time A} vs. {Time B}
  Status: {EM CURSO / GANHO ✅ / PERDIDO ❌ / ALERTA AMARELO ⚡ / ALERTA VERMELHO 🔴}
  Placar: {x-x} | Min: {xx'}
  xG ao vivo: {Time A} {x.x} / {Time B} {x.x}
  Evento relevante: {gol, cartão, substituição ou "nenhum"}
  Odds ao vivo: {odd} ({variação vs. entrada: +/-x%})
  Avaliação: {1-2 linhas explicando o status}

[repetir para cada leg]

MÚLTIPLA: {N}/{total} legs favoráveis
RECOMENDAÇÃO: {Manter posição / Monitorar Leg N com atenção / CASH-OUT PARCIAL de R$X}
```

## Output Example

```
BOLETIM DE MONITORAMENTO — 09/07/2026 | 21h47 (BRT)

LEG 1: Over 2.5 gols — Brasil vs. Argentina
  Status: EM CURSO | Placar: 1-1 | Min: 67'
  xG ao vivo: Brasil 1.4 / Argentina 1.2 (total 2.6 — acima do threshold)
  Evento: Vinicius 23' (Brasil), Messi 51' (Argentina)
  Odds Over 2.5 ao vivo: 1.35 (entrada 2.15 — leg praticamente garantido ✅)
  Avaliação: 1 gol adicional praticamente certo pelo xG combinado. Favorável.

LEG 2: Espanha -0.5 — Espanha vs. Portugal
  Status: ALERTA VERMELHO 🔴 | Placar: 1-1 | Min: 78'
  xG ao vivo: Espanha 0.9 / Portugal 1.4
  Evento: EXPULSÃO Rodri (Espanha) aos 71'
  Odds Espanha -0.5 ao vivo: 4.10 (entrada 2.35 — triplicou contra)
  Avaliação: Espanha a 10, Portugal dominando. Leg em risco crítico.

LEG 3: Under 2.5 — Marrocos vs. EUA
  Status: GANHO ✅ | Placar: 0-0 | Min: 90'+2'
  Jogo encerrado. Leg garantido.

LEG 4: Japão ML — Japão vs. Austrália
  Status: EM CURSO | Placar: 1-0 | Min: 72'
  xG: Japão 1.2 / Austrália 0.7
  Odds Japão ML ao vivo: 1.45 (entrada 2.10 — favorável ✅)
  Avaliação: Japão dominando. Leg encaminhado.

MÚLTIPLA: 2/4 garantidos, 1 em risco (Leg 2), 1 favorável (Leg 4)
RECOMENDAÇÃO: CASH-OUT PARCIAL disponível em Betano: ~R$420
  Com Leg 3 garantido e Leg 2 em VERMELHO, cash-out parcial garante retorno positivo
  mesmo se Leg 2 perder. Leg 4 ainda favorável — cash-out parcial é prudente.
```

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Boletim sem timestamp de emissão
2. Status de qualquer leg omitido ou ambíguo

## Quality Criteria

- [ ] Status de cada leg declarado explicitamente
- [ ] Odds ao vivo com variação vs. entrada para legs em alerta
- [ ] xG ao vivo reportado para jogos em curso
- [ ] Recomendação de cash-out com valor em reais quando aplicável
- [ ] Timestamp de emissão presente
