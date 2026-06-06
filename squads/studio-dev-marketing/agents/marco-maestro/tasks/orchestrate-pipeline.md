# Task: Orchestrate Pipeline

## Objetivo
Coordenar a execução completa do pipeline principal de produção de Reel, delegando para cada agente com contexto completo.

## Fluxo

1. **Receber briefing** de João Vitor (tema, objetivo, contexto)
2. **Apresentar plano**: agentes, sequência, checkpoints estimados
3. **Delegar para Lucas Leads**: passar briefing completo → receber 5 ângulos
4. **Checkpoint 1**: apresentar ângulos para João Vitor aprovar
5. **Delegar para Gabriela Gancho + Daniela Design** (paralelo): passar ângulo aprovado + tom
6. **Delegar para Caio Crítico**: passar roteiro + cover para revisão
7. **Checkpoint 2**: apresentar resultado final para aprovação de publicação
8. **Documentar em runs.md**: tema, agentes, resultado, observações

## Output
- Log de orquestração em `output/orchestration-log-{date}.md`
- Todos os outputs intermediários nos arquivos padrão de cada agente
