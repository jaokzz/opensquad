---
execution: inline
agent: apostas-esportivas/agents/valter-vieira
inputFile: squads/apostas-esportivas/output/analise.md
outputFile: squads/apostas-esportivas/output/multipla.md
---

# Step 04: Seleção de Legs e Composição da Múltipla

## Context Loading

Carregar antes de executar:
- `squads/apostas-esportivas/output/analise.md` — mercados com value e EVs calculados pela Adriana
- `squads/apostas-esportivas/pipeline/data/domain-framework.md` — regras de composição de múltiplas e gestão de banca

## Instructions

### Process
1. Ler analise.md — identificar todos os mercados classificados como VALUE ou STRONG VALUE.
2. Verificar independência entre os mercados disponíveis — descartar pares correlacionados ou justificar aceitabilidade com critério quantitativo.
3. Calcular odd combinada dos mercados disponíveis.
4. Se odd < 14x: buscar 1-2 legs adicionais via web em outros jogos do dia com EV positivo.
5. Se odd > 20x: remover o leg de menor EV individual até entrar na faixa 14-20x.
6. Montar tabela final com leg, odd, EV, confiança, casa recomendada e risco ao vivo.
7. Calcular retorno potencial (odd × R$150) e probabilidade estimada de acerto.

## Output Format

```
MÚLTIPLA DO DIA — {DD/MM/YYYY}

LEGS SELECIONADOS:
  #  Evento                 Mercado       Odd   EV      Conf.  Casa
  1  {Time A vs Time B}     {mercado}     {odd} {+EV}   {X/10} {Superbet/Betano}
  2  ...

VERIFICAÇÃO DE INDEPENDÊNCIA:
  Legs {N}+{M}: {independentes ✅ / correlacionados — {justificativa}}
  ...

ODD COMBINADA: {cálculo} = {odd}x {✅ dentro de 14-20x / ⚠️ ajuste necessário}
[Se ajuste: descrever o ajuste realizado]

STAKE: R$150
RETORNO POTENCIAL: R${valor}
PROBABILIDADE ESTIMADA DE ACERTO: {x.x}%
EV DA MÚLTIPLA: +R${valor}

RISCOS AO VIVO (para Marcos monitorar):
  - Leg {N}: {evento que aciona ALERTA AMARELO}
  - Leg {N}: {evento que aciona ALERTA VERMELHO}
```

## Output Example

```
MÚLTIPLA DO DIA — 09/07/2026

LEGS SELECIONADOS:
  #  Evento                          Mercado            Odd   EV      Conf.  Casa
  1  Brasil vs. Argentina            Over 2.5 gols      2.15  +0.118  7/10   Betano
  2  Espanha vs. Portugal            Espanha -0.5       2.35  +0.053  7/10   Superbet
  3  Marrocos vs. EUA                Under 2.5 gols     1.88  +0.061  8/10   Superbet
  4  Japão vs. Austrália             Japão ML           2.10  +0.061  7/10   Superbet

VERIFICAÇÃO DE INDEPENDÊNCIA:
  Legs 1+2: jogos diferentes, mercados distintos ✅
  Legs 1+3: Over e Under em jogos distintos — independentes ✅
  Legs 2+4: mercados distintos em jogos distintos ✅
  Legs 1+2: análise sinalizou correlação parcial — Over 2.5 Brasil/Arg não afeta Espanha -0.5 ✅

ODD COMBINADA: 2.15 × 2.35 × 1.88 × 2.10 = 19.97x ✅ dentro de 14-20x

STAKE: R$150
RETORNO POTENCIAL: R$2.995,50
PROBABILIDADE ESTIMADA DE ACERTO: 7.2%
EV DA MÚLTIPLA: +R$65,69

RISCOS AO VIVO (para Marcos monitorar):
  - Leg 1: Cartão vermelho para qualquer time nos primeiros 30min → AMARELO
  - Leg 1: Jogo sem gols após 70min com xG combinado < 1.5 → VERMELHO
  - Leg 2: Espanha atrás no placar após 60min → VERMELHO
  - Leg 3: Gol em qualquer tempo até o intervalo → AMARELO; 2+ gols → VERMELHO
  - Leg 4: Austrália marcando ou Japão reduzido a 10 → VERMELHO
```

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Odd combinada final fora da faixa 14-20x sem justificativa de ajuste
2. Qualquer leg com EV ≤ 0 incluído na múltipla

## Quality Criteria

- [ ] Odd combinada entre 14x e 20x
- [ ] Máximo 5 legs
- [ ] EV positivo individual em cada leg
- [ ] Independência entre legs verificada e declarada
- [ ] Retorno potencial em reais calculado
- [ ] Riscos ao vivo listados por leg
