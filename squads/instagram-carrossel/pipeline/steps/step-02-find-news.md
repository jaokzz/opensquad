---
step: "02"
name: "Pesquisa de Notícias"
type: agent
agent: researcher
tasks:
  - select-content-topic  # condicional — só se output/research-focus.md ainda não existir/estiver vazio
  - find-and-rank-news
depends_on: step-01
---

# Step 02: Ângela Ângulo — Seleção de Tema + Busca e Ranqueamento

## Para o Pipeline Runner

1. **Verificar se `output/research-focus.md` já existe** (preenchido pelo usuário no Step 01). Se não existir, executar primeiro a task `select-content-topic` — a Ângela decide o tema/pilar e preenche o arquivo. Se já existir, pular direto pra próxima etapa.
2. Executar a task `find-and-rank-news`.

O Pesquisador deve fazer **pelo menos 3 buscas** com ângulos diferentes sobre o tema e retornar as 5-7 notícias mais relevantes e interessantes, ranqueadas por potencial de engajamento.

## Inputs para este Step

- `output/research-focus.md` → tema e período (definidos pelo usuário no Step 01, ou pela própria Ângela via `select-content-topic`)
- `pipeline/data/content-pillars.md` → pilares de conteúdo (só usado quando ela mesma decide o tema)
- `_memory/memories.md` → histórico de pilares/temas recentes (só usado quando ela mesma decide o tema)
- `_opensquad/_memory/company.md` → contexto da empresa (público-alvo, nicho, tom, projetos entregues)

## Expected Outputs

- `output/research-focus.md` → se a Ângela decidiu o tema (task condicional rodou), inclui os campos `Pillar` e `Decided by`
- `output/ranked-stories.yaml` → lista de 5-7 notícias ranqueadas com título, resumo, fonte, URL e score de potencial viral

## Execution Mode

- **Modo:** Subagente
- **Skills permitidas:** web_search, web_fetch

## Quality Gate

Antes de avançar para o Step 03, verificar:
- [ ] Se a Ângela decidiu o tema: o pilar escolhido não repete o post imediatamente anterior (checar `_memory/memories.md`)
- [ ] ranked-stories.yaml existe
- [ ] Contém entre 5 e 7 notícias
- [ ] Cada notícia tem: title, summary, source, url, date, viral_potential_score, why_interesting
- [ ] As notícias são do período solicitado (pelo usuário, ou definido pela Ângela)
- [ ] Notícias estão ordenadas por viral_potential_score (decrescente)

Se qualquer verificação falhar, solicitar que o Pesquisador refaça a busca (ou a seleção de tema).
