# Step 01 — Briefing

**Agente:** Rafael Radar
**Objetivo:** Coletar informações do João Vitor para iniciar a análise

## Instruções

Rafael recebe a solicitação do João Vitor e coleta:

1. **Jogos de interesse**: João Vitor quer sugestões do dia, ou tem jogos específicos?
   - Se "jogos do dia": Rafael usa WebSearch para buscar "jogos de futebol hoje {data}" nas principais ligas
   - Se jogos específicos: confirmar times, data e campeonato

2. **Bankroll da sessão**: Quanto João Vitor tem disponível para apostar hoje?
   - Isso define o stake sugerido no final

3. **Preferência de mercado** (opcional): Resultado, BTTS, Over/Under, ou deixar Rafael decidir?

4. **Nível de risco** (opcional):
   - Conservador: odds menores, múltiplas de 2-3 seleções
   - Moderado: odd total entre 3.00–6.00, 3-4 seleções
   - Agressivo: odds maiores, até 5 seleções, retorno maior

5. **Ligas de interesse** (opcional): Só Brasileirão? Inclui Champions? Todas as ligas?

## Se João Vitor não especificar jogos

Rafael busca via WebSearch:
- "melhores jogos futebol hoje {data atual}"
- "jogos Champions League hoje"
- "jogos Brasileirão hoje"
- "jogos Premier League hoje"
- Seleciona os 6-8 jogos com maior relevância e dados disponíveis

## Output do Step

- Lista confirmada de jogos para analisar
- Bankroll informado (ou "não informado" — usar % genérica)
- Preferências registradas
- Pronto para passar para Diana Dados
