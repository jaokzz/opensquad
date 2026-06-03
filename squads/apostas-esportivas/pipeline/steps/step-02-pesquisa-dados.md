---
execution: subagent
agent: apostas-esportivas/agents/rafael-rodrigues
inputFile: squads/apostas-esportivas/output/research-focus.md
outputFile: squads/apostas-esportivas/output/dados-brutos.md
model_tier: powerful
---

# Step 02: Pesquisa de Dados

## Context Loading

Carregar antes de executar:
- `squads/apostas-esportivas/output/research-focus.md` — jogo/competição alvo e recorte temporal definidos pelo usuário
- `squads/apostas-esportivas/pipeline/data/domain-framework.md` — framework de 6 pilares e metodologia de coleta
- `squads/apostas-esportivas/pipeline/data/quality-criteria.md` — critérios de qualidade do dossiê

## Instructions

### Process
1. Ler research-focus.md completo para identificar jogo(s) alvo e recorte temporal.
2. Executar task `coletar-dados-pre-jogo.md` — forma recente, H2H, xG/xGA, lesões, contexto motivacional.
3. Executar task `monitorar-odds.md` — capturar odds em Superbet e Betano, calcular probabilidade implícita e identificar movimento de linha.
4. Consolidar dados em dossiê único estruturado em blocos nomeados.
5. Verificar qualidade: timestamps presentes, fontes citadas, mínimo 5 partidas por equipe, odds de ambas as casas.

## Output Format

```
DOSSIÊ PRÉ-JOGO: {Time A} vs. {Time B}
Competição: {nome} | {fase} | Data: {DD/MM/YYYY} | Local: {neutro/cidade}

FORMA RECENTE — {Time A} (últimas 5):
  vs. {Adversário}  {W/D/L}  {Placar}  (xG {x.x} vs {x.x})  [{Casa/Fora/Neutro}]
  ...
  Média xG: {x.x} | Média xGA: {x.x} | Fonte: {FBref/SofaScore}, cap. {HH:MM}

FORMA RECENTE — {Time B} (últimas 5):
  [mesmo formato]

H2H (últimas 5):
  {Ano}: {Time A} {placar} {Time B} ({Competição}, {Local})
  ...

LESÕES/SUSPENSÕES — cap. {HH:MM}:
  {Time A}: {jogador} ({status confirmado/provável/nenhuma confirmada})
  {Time B}: ...

ODDS — capturadas em {HH:MM DD/MM}:
  Superbet: {Time A} {odd} | Empate {odd} | {Time B} {odd}
  Betano:   {Time A} {odd} | Empate {odd} | {Time B} {odd}
  Over 2.5: Superbet {odd} | Betano {odd}
  BTTS Sim: Superbet {odd} | Betano {odd}

PROBABILIDADES IMPLÍCITAS:
  {Time A} ML (Betano): {x.x}%
  ...

MOVIMENTO DE LINHA:
  {Mercado}: abertura {odd} → atual {odd} ({±x%}) | {sharp/público/neutro}

CONTEXTO MOTIVACIONAL:
  {Time A}: {descrição}
  {Time B}: {descrição}
```

## Output Example

```
DOSSIÊ PRÉ-JOGO: Brasil vs. Argentina
Competição: Copa do Mundo 2026 | Semifinal | Data: 09/07/2026 | Local: MetLife Stadium (neutro)

FORMA RECENTE — BRASIL (últimas 5):
  vs. Marrocos    W 2-0  (xG 2.1 vs 0.6)  [Grupo — neutro]
  vs. Equador     W 3-1  (xG 2.8 vs 1.1)  [Grupo — neutro]
  vs. Coreia      W 1-0  (xG 1.4 vs 0.7)  [Grupo — neutro]
  vs. Alemanha    W 2-1  (xG 1.9 vs 1.3)  [Oitavas — neutro]
  vs. Espanha     D 1-1  (xG 1.6 vs 1.8)  [Quartas — neutro]
  Média xG: 1.96 | Média xGA: 1.10 | Fonte: FBref, cap. 14h00

FORMA RECENTE — ARGENTINA (últimas 5):
  vs. Arábia Saudita  W 3-0  (xG 3.1 vs 0.4)
  vs. Polônia         W 2-0  (xG 2.4 vs 0.5)
  vs. México          W 1-0  (xG 1.2 vs 0.9)
  vs. Austrália       W 2-1  (xG 1.8 vs 1.1)
  vs. França          W 1-0  (xG 1.3 vs 1.2)
  Média xG: 2.16 | Média xGA: 0.82 | Fonte: FBref

H2H (últimas 5):
  2022: Argentina 3-3 (5-4 pên.) Brasil — Copa Final (neutro)
  2021: Argentina 1-0 Brasil — Copa América Final (neutro)
  2019: Brasil 2-0 Argentina — Copa América Semi (neutro)
  2021: 0-0 — Eliminatórias
  2019: 1-1 — Amistoso

LESÕES/SUSPENSÕES — cap. 15h30:
  Brasil: Vinicius Jr. (dúvida — treinou separado 48h antes)
  Argentina: Di María (ausente — lesão muscular confirmada)

ODDS — capturadas em 16h00 09/07:
  Superbet: Brasil 2.40 | Empate 3.30 | Argentina 2.90
  Betano:   Brasil 2.45 | Empate 3.25 | Argentina 2.85
  Over 2.5: Superbet 2.10 | Betano 2.15
  BTTS Sim: Superbet 1.75 | Betano 1.78

PROBABILIDADES IMPLÍCITAS:
  Brasil ML (Betano 2.45): 40.8%
  Empate (Betano 3.25): 30.8%
  Argentina ML (Betano 2.85): 35.1%
  Over 2.5 (Betano 2.15): 46.5%

MOVIMENTO DE LINHA:
  Argentina ML: abertura 3.10 → atual 2.85 (-8.1%) | sharp money em Argentina
  Over 2.5: abertura 2.25 → atual 2.15 (-4.4%) | leve movimento para Over

CONTEXTO MOTIVACIONAL:
  Brasil: Primeira semifinal de Copa desde 2002 — pressão histórica máxima
  Argentina: Bicampeã atual, Messi em possível última Copa — motivação histórica extrema
```

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Odds sem timestamp de captura em qualquer mercado
2. Menos de 3 partidas de forma recente por equipe

## Quality Criteria

- [ ] Mínimo 5 partidas de forma recente por equipe com xG e xGA
- [ ] H2H com mínimo 5 confrontos e contexto
- [ ] Odds de Superbet E Betano com timestamp
- [ ] Probabilidade implícita calculada para todos os mercados
- [ ] Lesões e suspensões verificadas com status claro
