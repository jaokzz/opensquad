---
task: "Coletar Dados Pré-Jogo"
order: 1
input: |
  - research_focus: Jogo ou competição alvo, data e qualquer instrução específica do usuário
output: |
  - dados_brutos: Dossiê completo com forma recente, H2H, xG/xGA, lesões, odds e contexto motivacional
---

# Coletar Dados Pré-Jogo

Coleta o dossiê completo de dados estatísticos e de mercado para o confronto ou competição especificado no research-focus. Entrega tudo que a Adriana precisa para calcular probabilidades e EV sem precisar buscar dados adicionais.

## Process

1. **Ler research-focus.md** — identificar jogo(s) alvo, data e instruções específicas do usuário.
2. **Buscar forma recente** — últimas 5 partidas de cada equipe no SofaScore ou FBref. Separar casa/fora. Capturar: resultado, placar, xG, xGA.
3. **Buscar H2H** — últimos 5 confrontos diretos entre as equipes. Incluir competição, local, placar e xG quando disponível.
4. **Verificar lesões e suspensões** — SofaScore "lineups" ou WhoScored para status atualizado. Checar se escalação está confirmada ou é "provável".
5. **Capturar odds** — Superbet e Betano para os mercados principais: resultado (1X2), Over/Under 2.5, BTTS, handicap. Registrar timestamp da captura.
6. **Calcular probabilidade implícita** — para cada odd capturada: 1/odd × 100.
7. **Montar dossiê estruturado** — em formato de blocos nomeados prontos para leitura da Adriana.

## Output Format

```
DOSSIÊ PRÉ-JOGO: {Time A} vs. {Time B}
Competição: | Data: | Local:

FORMA RECENTE — {Time A} (últimas 5):
  vs. {Adversário}  {W/D/L}  {Placar}  (xG {x.x} vs {x.x})  [{Casa/Fora}]
  ...
  Média xG: {x.x} | Média xGA: {x.x}

FORMA RECENTE — {Time B} (últimas 5):
  [mesmo formato]

H2H (últimas 5):
  {Data}: {Time A} {Placar} {Time B} ({Competição}, {Local})
  ...

LESÕES/SUSPENSÕES:
  {Time A}: {jogador} ({status})
  {Time B}: {jogador} ({status}) | Nenhuma confirmada

ODDS — capturadas em {HH:MM DD/MM}:
  Superbet: {Time A} {odd} | Empate {odd} | {Time B} {odd}
  Betano:   {Time A} {odd} | Empate {odd} | {Time B} {odd}
  Over 2.5: Superbet {odd} | Betano {odd}
  BTTS Sim: Superbet {odd} | Betano {odd}

PROBABILIDADES IMPLÍCITAS:
  {Time A} ML (Betano): {x.x}%
  Empate (Betano): {x.x}%
  {Time B} ML (Betano): {x.x}%
  Over 2.5 (Betano): {x.x}%

CONTEXTO MOTIVACIONAL:
  {Time A}: {situação na tabela, pressão, histórico mata-mata}
  {Time B}: {situação na tabela, pressão, histórico mata-mata}
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
  Média xG: 1.96 | Média xGA: 1.10 | Fonte: FBref, capturado 09/07 14h00

FORMA RECENTE — ARGENTINA (últimas 5):
  vs. Arábia Saudita  W 3-0  (xG 3.1 vs 0.4)  [Grupo]
  vs. Polônia         W 2-0  (xG 2.4 vs 0.5)  [Grupo]
  vs. México          W 1-0  (xG 1.2 vs 0.9)  [Grupo]
  vs. Austrália       W 2-1  (xG 1.8 vs 1.1)  [Oitavas]
  vs. França          W 1-0  (xG 1.3 vs 1.2)  [Quartas]
  Média xG: 2.16 | Média xGA: 0.82 | Fonte: FBref

H2H (últimas 5 — contexto mata-matos/neutro):
  2022: Argentina 3-3 (5-4 pên.) Brasil — Copa do Mundo Final (neutro)
  2021: Argentina 1-0 Brasil — Copa América Final (neutro)
  2019: Brasil 2-0 Argentina — Copa América Semifinal (neutro)
  2021: Empate 0-0 — Eliminatórias (neutro)
  2019: Empate 1-1 — Amistoso (neutro)

LESÕES/SUSPENSÕES:
  Brasil: Vinicius Jr. (dúvida, treinou separado 48h antes — não confirmado)
  Argentina: Di María (ausente — lesão muscular confirmada pelo clube)
  Fonte: SofaScore lineups, capturado 09/07 15h30

ODDS — capturadas em 16h00 09/07/2026:
  Superbet: Brasil 2.40 | Empate 3.30 | Argentina 2.90
  Betano:   Brasil 2.45 | Empate 3.25 | Argentina 2.85
  Over 2.5: Superbet 2.10 | Betano 2.15
  BTTS Sim: Superbet 1.75 | Betano 1.78

PROBABILIDADES IMPLÍCITAS:
  Brasil ML (Betano 2.45): 40.8%
  Empate (Betano 3.25): 30.8%
  Argentina ML (Betano 2.85): 35.1%
  Over 2.5 (Betano 2.15): 46.5%
  BTTS Sim (Betano 1.78): 56.2%

CONTEXTO MOTIVACIONAL:
  Brasil: Primeira semifinal desde 2002 — pressão histórica máxima em casa das Américas
  Argentina: Bicampeã atual, Messi possivelmente na última Copa — motivação histórica extrema
  Impacto esperado: Ambos pressionados a atacar — favorece mercados de gols
```

## Quality Criteria

- [ ] Forma recente com mínimo 5 partidas por equipe com xG e xGA
- [ ] H2H com mínimo 5 confrontos e contexto de competição/local
- [ ] Lesões e suspensões com status claro (confirmado / provável / nenhuma confirmada)
- [ ] Odds de Superbet E Betano capturadas com timestamp
- [ ] Probabilidade implícita calculada para todos os mercados reportados
- [ ] Fontes citadas para cada bloco de dados

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Odds capturadas sem timestamp (impossível saber se estão desatualizadas)
2. Menos de 3 partidas de forma recente por equipe (amostra insuficiente para análise)
