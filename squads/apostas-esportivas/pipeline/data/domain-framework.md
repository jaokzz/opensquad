# Domain Framework — Apostas Esportivas

## Domínio

Análise profissional de apostas esportivas com foco em value betting, composição de múltiplas
e monitoramento ao vivo. Contexto principal: Copa do Mundo 2026, com cobertura estendida a
qualquer competição disponível na Superbet e Betano.

---

## Estrutura de Agentes e Responsabilidades

### Pipeline de Execução

```
[Checkpoint: Foco]
       ↓
[Rafael Rodrigues] — Pesquisa e coleta de dados brutos
       ↓
[Adriana Azevedo] — Análise pré-jogo com cálculo de EV
       ↓
[Valter Vieira] — Seleção de legs e composição de múltipla
       ↓
[Checkpoint: Aprovação da múltipla]
       ↓
[Marcos Monteiro] — Monitoramento ao vivo dos jogos
       ↓
[Camila Campos] — Revisão crítica e validação final
       ↓
[Checkpoint: Aprovação final]
```

---

## Modelo de Dados do Pipeline

### research-focus.md (gerado no checkpoint 1)
```
confronto: "Time A x Time B"
competição: "Copa do Mundo 2026"
fase: "Fase de Grupos | Oitavas | Quartas | ..."
data_jogo: "DD/MM/AAAA"
horario: "HH:MM"
casas: ["Superbet", "Betano"]
mercados_prioritários: ["1X2", "BTTS", "Over/Under 2.5", "AH"]
```

### dados-brutos.md (Rafael Rodrigues)
Dossiê estruturado com:
- Forma recente (5+ jogos, separado por casa/fora)
- Dados avançados: xG e xGA médios de 2 fontes
- H2H: últimos 5-10 confrontos
- Lesões e suspensões com classificação de impacto (ALTO/MÉDIO/BAIXO)
- Odds de Superbet e Betano com timestamp

### analise.md (Adriana Azevedo)
Documento analítico com:
- Probabilidades reais calculadas para os 3 desfechos
- EV calculado para mínimo 6 mercados
- Mercados recomendados para múltipla
- Variáveis de risco identificadas

### multipla.md (Valter Vieira)
Ficha técnica da múltipla com:
- Legs selecionadas (3-5) com EV individual
- Odd combinada (alvo: 14x-20x)
- Stake: R$150
- Retorno potencial
- Probabilidade de acerto
- EV total da múltipla
- Legs descartadas com motivo

### monitoramento.md (Marcos Monteiro)
Updates em tempo real com:
- Status de cada leg (aguardando / em andamento / ganha / perdida)
- Dados ao vivo: placar, xG, posse, escanteios, cartões
- Alertas AMARELO/VERMELHO com probabilidade revisada
- Oportunidades ao vivo com EV calculado

### relatorio-final.md (Camila Campos)
Relatório de revisão crítica com:
- Checklist de validação
- EVs recalculados independentemente
- Verificação de vieses cognitivos
- Veredicto: APROVADO / APROVADO COM RESSALVAS / REJEITADO
- Relatório formatado para o usuário

---

## Regras de Composição de Múltiplas

### Alvo de Odd
- Mínimo: 14x
- Máximo: 20x
- Desvios documentados com justificativa obrigatória

### Legs
- Número: 3 a 5
- EV mínimo por leg: +0.05 (legs com EV < +0.05 apenas se fundamentação sólida)
- Zero legs com EV negativo sem justificativa

### Correlação
- Legs correlacionadas positivamente: PROIBIDAS na mesma múltipla
- Legs correlacionadas negativamente (ex: Under 1.5 + BTTS Não): redundantes, evitar

### Cálculo Obrigatório
```
Odd combinada = Odd₁ × Odd₂ × ... × OddN
Prob. acerto = Prob₁ × Prob₂ × ... × ProbN
Retorno bruto = Odd combinada × R$150
Retorno líquido = Retorno bruto − R$150
EV total = (Prob. acerto × Retorno líquido) − R$150
```

---

## Critérios de Decisão para Cash-Out

| Situação                                          | Ação Recomendada        |
|---------------------------------------------------|-------------------------|
| Prob. revisada da leg < 25% com 30+ min restantes | Alerta VERMELHO, avaliar cash-out |
| Múltipla com 3/4 legs ganhas, última incerta      | Cash-out parcial opcional |
| Cartão vermelho para time cuja leg depende de vitória | Alerta VERMELHO imediato |
| Gol que inverte resultado de leg ativa             | Recalcular prob. revisada |

---

## Hierarquia de Fontes de Dados

| Prioridade | Fonte         | Dados Principais                         |
|------------|---------------|------------------------------------------|
| 1          | FBref         | xG, xGA, pressão, progressive passes    |
| 1          | Understat     | xPoints, xG alternativo para validação  |
| 2          | SofaScore     | Forma recente, ao vivo, H2H             |
| 2          | WhoScored     | Escalações, lesões, ratings             |
| 3          | Transfermarkt | Lesões históricas, elenco               |
| 3          | FootyStats    | BTTS histórico, over/under por partida  |

---

## Casas de Apostas Operacionais

### Superbet
- Mercados fortes: pré-jogo em futebol internacional, handicap asiático
- Uso preferencial para: legs com odd acima de 3.00

### Betano
- Mercados fortes: over/under, BTTS, gols de jogador específico
- Uso preferencial para: legs de probabilidade alta (odd 1.40-2.50)

### Regra de Múltipla Mista
Se a melhor odd de diferentes legs está em casas diferentes, registrar a casa de cada leg
na ficha técnica. A múltipla pode ser dividida entre as casas se necessário.
