# Step 02 — Coleta de Dados

**Agente:** Diana Dados
**Objetivo:** Buscar dados atualizados de cada jogo da lista

## Instruções

Diana recebe a lista de jogos do Rafael e para CADA jogo executa buscas via WebSearch:

### Sequência de buscas por jogo

**Busca 1 — Forma recente Time A:**
```
"{Time A} últimos jogos 2024 2025 resultados"
"{Time A} form recent results sofascore"
```

**Busca 2 — Forma recente Time B:**
```
"{Time B} últimos jogos 2024 2025 resultados"
"{Time B} form recent results sofascore"
```

**Busca 3 — H2H:**
```
"{Time A} vs {Time B} head to head histórico"
"{Time A} {Time B} confrontos diretos"
```

**Busca 4 — Desfalques e notícias:**
```
"{Time A} lesionados suspensos {data do jogo}"
"{Time B} desfalques escalação provável"
"{Time A} vs {Time B} pré-jogo notícias"
```

**Busca 5 — Estatísticas da temporada:**
```
"{Time A} estatísticas {temporada atual} gols tabela"
"{Liga} tabela classificação atual"
```

### Execução paralela

Diana pode buscar dados de múltiplos jogos em paralelo (diferentes buscas simultâneas). Priorizar jogos com menos dados disponíveis.

### Tratamento de dados insuficientes

Se uma liga ou time tiver dados escassos (ex: liga de segundo escalão pouco coberta):
- Sinalizar claramente para Rafael: "Dados insuficientes — jogo recomendado para exclusão"
- Não fabricar dados

## Output do Step

Um relatório por jogo em formato estruturado (conforme template em diana-dados.agent.md).
Todos entregues ao Rafael antes do Step 03.
