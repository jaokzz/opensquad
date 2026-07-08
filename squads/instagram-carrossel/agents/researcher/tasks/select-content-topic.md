---
task: "Select Content Topic"
order: 1
input:
  - content_pillars: pipeline/data/content-pillars.md (lista de pilares de conteúdo pra rotacionar)
  - memories: _memory/memories.md (seção "Executions Log" — temas/pilares recentes)
  - company_context: _opensquad/_memory/company.md (projetos entregues, posicionamento)
output:
  - research_focus: output/research-focus.md (tema, pilar e período — mesmo formato que o Step 01 já produzia)
---

# Select Content Topic

Decide QUE TEMA/PILAR o carrossel vai abordar, quando o usuário não fornecer um tema específico no Step 01 (respondeu "você decide", ou é uma execução em autopilot). Esta task só roda nesse caso — se o usuário já deu um tema explícito, pular direto para `find-and-rank-news`.

## Process

1. **Ler `pipeline/data/content-pillars.md`.** Essa é a lista de pilares de conteúdo do negócio (comportamento do consumidor local, automação de WhatsApp, comparativo com/sem presença digital, crenças que travam o pequeno negócio, passo a passo prático, bastidores/cases reais).

2. **Ler `_memory/memories.md` (seção "Executions Log").** Ver quais pilares/temas/ângulos foram usados nos últimos posts, pra não repetir o mesmo pilar em execuções consecutivas.

3. **Verificar `_opensquad/_memory/company.md` (tabela "Projetos Entregues").** Se houver um projeto novo ou concluído recentemente que ainda não virou carrossel, **priorizar o pilar 6 (bastidores/cases reais)** — prova social com resultado concreto tem prioridade sobre pilar genérico, seguindo a regra já existente em `content-pillars.md`.

4. **Escolher o próximo pilar da rotação** que não apareceu nos últimos 5 posts (ver regra em `content-pillars.md` — "Regras de rotação"). Se todos já apareceram recentemente, escolher o que tem mais tempo desde o último uso.

5. **Traduzir o pilar escolhido num tema de pesquisa concreto.** Um pilar (ex: "Crenças comuns que travam o pequeno negócio") não é uma pesquisa — decidir a crença/ângulo específico dentro dele (ex: "site é coisa de empresa grande").

6. **Decidir o período de pesquisa.** Se o pilar depende de notícia/dado recente, usar "últimos 7 dias" como padrão. Se for pilar evergreen (tutorial, crença comum, comparativo), não é necessário filtro de data — registrar "sem filtro de data (conteúdo evergreen)".

7. **Salvar em `output/research-focus.md`**, no mesmo formato que o Step 01 usa quando o tema vem do usuário — só que com um campo adicional `decided_by` e `pillar`.

## Output Format

```markdown
# Research Focus

**Topic:** [tema de pesquisa concreto e específico]
**Time Range:** [período, ou "sem filtro de data (conteúdo evergreen)"]
**Date:** YYYY-MM-DD
**Pillar:** [nome do pilar escolhido, de content-pillars.md]
**Decided by:** Ângela Ângulo (usuário não especificou tema)
```

## Quality Criteria

- [ ] O pilar escolhido não repete o pilar dos últimos 5 posts registrados em `_memory/memories.md`
- [ ] Se há projeto novo/concluído em `company.md` sem carrossel ainda, o pilar 6 (cases reais) foi priorizado
- [ ] O tema é específico o suficiente para pesquisar (não é o nome genérico do pilar em si)
- [ ] Período de pesquisa definido corretamente (data específica ou "evergreen")

## Veto Conditions

Rejeitar e refazer se:
1. Repetiu o mesmo pilar do post imediatamente anterior sem justificativa
2. Ignorou um projeto novo/concluído disponível em `company.md` que ainda não virou carrossel
3. O tema ficou vago demais pra gerar uma busca real (ex: apenas "automação" sem ângulo)
