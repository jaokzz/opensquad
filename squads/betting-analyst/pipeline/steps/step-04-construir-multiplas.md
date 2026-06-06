# Step 04 — Construção das Múltiplas

**Agente:** Marco Múltiplas
**Objetivo:** Construir os bilhetes ótimos a partir das seleções aprovadas

## Instruções

Marco recebe a lista de seleções FORTE e MODERADA aprovadas por Rafael e executa:

### 1. Calcular EV individual confirmado
Para cada seleção, recalcular EV com os dados finais:
```
EV = (Prob_Rafael × Odd_Betano) - 1
```
Descartar seleções com EV ≤ 0.

### 2. Verificar correlações
- Dois jogos do mesmo time? → Sinalizar para Rafael decidir
- Jogos da mesma liga na mesma rodada? → Aceitável mas limitar a 2 por liga
- Jogos simultâneos? → OK, sem influência mútua

### 3. Gerar combinações
Testar todas as combinações possíveis de 2, 3, 4 e 5 seleções.
Para cada combinação calcular:
- Odd total (multiplicação das odds)
- Probabilidade combinada (multiplicação das probabilidades)
- EV da múltipla

### 4. Selecionar a múltipla principal
Critérios em ordem de prioridade:
1. EV > 0
2. Odd total entre 2.50 e 8.00
3. Maior EV absoluto
4. Preferencialmente 3-4 seleções

### 5. Selecionar a múltipla conservadora
- 2-3 seleções com maior probabilidade individual
- Odd total entre 2.00 e 4.00
- Serve como "plano B" mais seguro

### 6. Calcular stake
Se bankroll foi informado:
```
Kelly_fraction = EV / (Odd - 1)
Stake = Kelly_fraction × 0.20 × Bankroll
Máximo: min(Stake_kelly, 0.05 × Bankroll)
```
Se bankroll não informado: sugerir "1-3 unidades" genericamente.

## Output do Step

Bilhetes completos em formato ficha (conforme template marco-multiplas.agent.md).
Entregue ao Rafael para revisão final.
