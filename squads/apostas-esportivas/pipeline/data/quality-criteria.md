# Quality Criteria — Squad Apostas Esportivas

## Critérios por Agente

---

### Rafael Rodrigues — Pesquisador de Dados

| # | Critério                                                                                    | Obrigatório |
|---|---------------------------------------------------------------------------------------------|-------------|
| 1 | Dados de forma recente cobrem mínimo de 5 partidas para cada equipe                        | Sim         |
| 2 | Separação obrigatória por mandante/visitante nos dados de forma recente                    | Sim         |
| 3 | xG e xGA validados em pelo menos duas fontes; divergências documentadas                    | Sim         |
| 4 | Odds capturadas de Superbet e Betano com timestamp                                          | Sim         |
| 5 | Pelo menos 8 mercados por confronto nas odds capturadas                                    | Sim         |
| 6 | Classificação de impacto de lesão (ALTO/MÉDIO/BAIXO) atribuída a 100% das ausências       | Sim         |
| 7 | H2H com mínimo de 5 confrontos diretos, cada um com data, competição e local              | Sim         |
| 8 | Dossiê entregue com zero afirmações de natureza analítica ou preditiva                    | Sim         |
| 9 | Cada dado com fonte identificada entre parênteses                                          | Sim         |

---

### Adriana Azevedo — Analista de Confrontos

| # | Critério                                                                                    | Obrigatório |
|---|---------------------------------------------------------------------------------------------|-------------|
| 1 | Probabilidades calculadas para os 3 desfechos principais com raciocínio documentado       | Sim         |
| 2 | EV calculado explicitamente (com fórmula visível) para pelo menos 6 mercados              | Sim         |
| 3 | Seção de variáveis de risco com pelo menos 2 fatores que podem invalidar premissas        | Sim         |
| 4 | Mercados recomendados para múltipla claramente identificados com EV e fundamentação       | Sim         |
| 5 | Análise narrativa conectando cada conclusão a um dado específico do dossiê               | Sim         |
| 6 | Zero afirmações sem suporte em dado do dossiê                                             | Sim         |
| 7 | Margem da casa documentada nas probabilidades implícitas                                   | Sim         |

---

### Valter Vieira — Compositor de Múltiplas

| # | Critério                                                                                    | Obrigatório |
|---|---------------------------------------------------------------------------------------------|-------------|
| 1 | Odd combinada final entre 14x e 20x (ou desvio documentado com justificativa explícita)   | Sim         |
| 2 | EV total da múltipla calculado e positivo                                                   | Sim         |
| 3 | Probabilidade de acerto calculada (produto das probabilidades reais de cada leg)           | Sim         |
| 4 | Retorno potencial calculado em R$ com stake de R$150                                       | Sim         |
| 5 | Zero legs com EV negativo incluídas sem justificativa documentada                          | Sim         |
| 6 | Zero pares de legs correlacionados positivamente na mesma múltipla                         | Sim         |
| 7 | Todas as legs descartadas listadas com motivo                                               | Sim         |
| 8 | Número de legs entre 3 e 5                                                                  | Sim         |

---

### Marcos Monteiro — Monitor ao Vivo

| # | Critério                                                                                    | Obrigatório |
|---|---------------------------------------------------------------------------------------------|-------------|
| 1 | Atualização de dados a cada 5 minutos durante jogo com leg ativa                          | Sim         |
| 2 | Probabilidade revisada calculada em toda situação de alerta                                | Sim         |
| 3 | xG acumulado usado como input principal da probabilidade revisada                          | Sim         |
| 4 | Classificação de alerta (AMARELO/VERMELHO) em 100% dos alertas emitidos                   | Sim         |
| 5 | Status final de cada leg registrado ao apitar final com resultado                          | Sim         |
| 6 | EV ao vivo calculado explicitamente em toda oportunidade detectada fora da múltipla       | Sim         |
| 7 | Timestamp em todos os updates                                                               | Sim         |

---

### Camila Campos — Revisora Crítica

| # | Critério                                                                                    | Obrigatório |
|---|---------------------------------------------------------------------------------------------|-------------|
| 1 | 100% dos EVs recalculados independentemente com divergências documentadas                  | Sim         |
| 2 | Checklist de vieses cognitivos verificado em cada revisão (mínimo 4 vieses testados)      | Sim         |
| 3 | Veredicto inequívoco: APROVADO, APROVADO COM RESSALVAS ou REJEITADO                       | Sim         |
| 4 | Em caso de rejeição: step específico de retorno e pontos de correção listados             | Sim         |
| 5 | Relatório final para o usuário presente e em linguagem não-técnica acessível              | Sim         |
| 6 | Ressalvas críticas comunicadas ao usuário de forma explícita e compreensível             | Sim         |

---

## Critérios de Qualidade do Pipeline

### Gate 1 — Dados Completos (após step 2)
- Dossiê entregue sem opiniões ou interpretações
- Todos os campos obrigatórios preenchidos
- Odds com timestamp de Superbet e Betano

### Gate 2 — Análise com EV (após step 3)
- EV calculado para mínimo 6 mercados
- Probabilidades dos 3 desfechos somam ~100% após desconto de margem
- Mercados recomendados claramente identificados

### Gate 3 — Múltipla Válida (após step 4)
- Odd total entre 14x e 20x (ou desvio justificado)
- EV total positivo
- Zero correlações problemáticas

### Gate 4 — Revisão Aprovada (após step 7)
- EVs recalculados independentemente confirmados
- Vieses verificados e documentados
- Veredicto emitido

---

## Métricas de Acompanhamento

Registrar em `_memory/runs.md` após cada execução:

| Métrica          | Rastreamento                            |
|------------------|-----------------------------------------|
| ROI por jogo     | (Retorno − Stake) / Stake × 100        |
| Taxa de acerto   | Múltiplas ganhas / Total de múltiplas  |
| EV médio por leg | Soma dos EVs / Número de legs           |
| Rejeições        | Número de vezes que Camila rejeitou    |
| CLV              | Odd entrada / Odd fechamento − 1       |
