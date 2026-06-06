---
task: "Monitorar Variações de Odds"
order: 2
input: |
  - research_focus: Jogo(s) alvo com mercados específicos a monitorar
output: |
  - movimento_odds: Registro de variações de odds com análise de sharp money e CLV
---

# Monitorar Variações de Odds

Monitora o movimento de odds nos mercados-alvo entre a abertura de linha e o fechamento (início do jogo), identificando sharp money, valor de entrada e CLV estimado. Complementa o dossiê de dados com inteligência de mercado.

## Process

1. **Identificar mercados a monitorar** — a partir do research-focus, listar os mercados com maior relevância analítica.
2. **Capturar odds atuais** — Superbet e Betano para cada mercado. Timestamp obrigatório.
3. **Buscar odds de abertura** — quando disponível via histórico de odds (OddsPortal ou similar). Se indisponível, declarar explicitamente.
4. **Calcular movimento de linha** — diferença entre odds de abertura e atuais. Movimento para baixo = sharp money no lado; para cima = público apostando no lado oposto.
5. **Identificar padrões relevantes** — odd caiu significativamente (>15%) sem notícia pública = possível informação privilegiada de mercado.
6. **Comparar odds entre casas** — identificar qual casa oferece melhor linha por mercado.
7. **Registrar melhor linha disponível** — combinação Superbet/Betano por mercado.

## Output Format

```
MONITORAMENTO DE ODDS: {Time A} vs. {Time B}
Capturado em: {HH:MM DD/MM}

COMPARATIVO POR MERCADO:
  Mercado          Abertura  Superbet  Betano    Movimento    Interpretação
  {Time A} ML      {odd}     {odd}     {odd}     {+/-x%}      {sharp/público/neutro}
  Empate           {odd}     {odd}     {odd}     {+/-x%}      ...
  {Time B} ML      {odd}     {odd}     {odd}     {+/-x%}      ...
  Over 2.5         {odd}     {odd}     {odd}     {+/-x%}      ...
  BTTS Sim         {odd}     {odd}     {odd}     {+/-x%}      ...

MELHOR LINHA POR MERCADO:
  {Mercado}: {odd} na {Casa}

ALERTAS DE MOVIMENTO:
  ⚠️ {Mercado}: odds caíram {x%} sem notícia pública — possível informação de mercado
```

## Output Example

```
MONITORAMENTO DE ODDS: Espanha vs. Portugal
Capturado em: 17h45 10/07/2026

COMPARATIVO POR MERCADO:
  Mercado           Abertura  Superbet  Betano    Movimento  Interpretação
  Espanha ML        2.20      2.10      2.08      -5.5%      Sharp money em Espanha
  Empate            3.40      3.50      3.55      +4.4%      Público apostando no empate
  Portugal ML       3.80      3.60      3.65      -5.3%      Algum movement em Portugal
  Over 2.5          2.05      1.95      1.98      -5.1%      Sharp money em Over
  BTTS Sim          1.82      1.85      1.88      +2.2%      Sem movimento significativo

MELHOR LINHA POR MERCADO:
  Espanha ML: 2.10 na Superbet
  Portugal ML: 3.65 na Betano
  Over 2.5: 1.98 na Betano
  BTTS Sim: 1.88 na Betano

ALERTAS DE MOVIMENTO:
  ⚠️ Espanha ML: queda de 5.5% desde abertura — sharp money consistente em Espanha
     Confirma edge identificado pela análise (prob. real vs. implícita favorável)
  ⚠️ Over 2.5: queda de 5.1% — mercado precificando mais gols que na abertura
     CLV estimado se entrar agora @ 1.98 vs. abertura 2.05: positivo (+3.4%)
```

## Quality Criteria

- [ ] Odds de abertura buscadas ou ausência declarada explicitamente
- [ ] Comparativo Superbet vs. Betano para todos os mercados relevantes
- [ ] Timestamp de captura em todas as odds
- [ ] Movimento de linha calculado com interpretação (sharp/público/neutro)
- [ ] Melhor linha por mercado identificada com casa recomendada

## Veto Conditions

Rejeitar e refazer se QUALQUER condição for verdadeira:
1. Odds capturadas sem timestamp — dado inválido para análise de movimento
2. Odds de apenas uma casa reportadas — comparativo é requisito mínimo
