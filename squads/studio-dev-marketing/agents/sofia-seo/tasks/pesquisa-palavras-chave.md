---
task: "Pesquisa de Palavras-Chave Local"
order: 2
input: |
  - business_type: tipo de negócio (academia, clínica, salão, restaurante, etc.)
  - city: cidade/região do negócio (ex: Iporã do Oeste)
  - services: lista de serviços/produtos principais oferecidos
  - competitors: concorrentes locais conhecidos (opcional)
output: |
  - keyword_brief: lista de palavras-chave priorizadas com intenção de busca e formato de conteúdo recomendado
---

# Pesquisa de Palavras-Chave Local

Levanta palavras-chave de cauda longa e intenção comercial/local para um negócio, classifica a intenção de busca de cada uma e recomenda o formato de conteúdo. Serve de insumo para Lucas Leads (ângulo estratégico) e Gabriela Gancho (roteiro/legenda) e para André Animação (páginas de serviço do site).

## Process

1. **Mapear variações locais**: para cada serviço principal, gerar variações com "+ cidade" ("fisioterapia em Iporã do Oeste"), "perto de mim" e comparativas ("melhor academia em Iporã do Oeste").
2. **Priorizar cauda longa sobre volume nacional**: descartar termos genéricos de alta concorrência nacional ("academia", "clínica de estética") em favor de termos específicos com intenção clara, mesmo com menor volume de busca.
3. **Classificar intenção de cada termo**: informacional (quer aprender), navegacional (procura a marca/local específico), comercial (comparando opções) ou transacional (pronto para agendar/comprar).
4. **Recomendar formato por intenção**: informacional → post de blog/FAQ; comercial → página de serviço com prova social; transacional → CTA direto (WhatsApp/formulário de agendamento).
5. **Checar concorrência local**: se houver concorrentes conhecidos, verificar rapidamente se eles já ocupam essas buscas (presença de site, Perfil da Empresa) para calibrar prioridade.
6. **Entregar briefing priorizado**: ordenar por combinação de intenção comercial/transacional + baixa concorrência local primeiro.

## Output Format

```
# Palavras-Chave — {cliente}
Data: {YYYY-MM-DD}
Cidade/região: {cidade}

## Palavras-Chave Priorizadas

| # | Palavra-chave | Intenção | Formato recomendado | Prioridade |
|---|---------------|----------|---------------------|-----------|
| 1 | {termo} | {informacional/comercial/transacional} | {blog/página de serviço/CTA direto} | 🔴/🟡/🟢 |

## Recomendações por Destino

**Para Lucas Leads (ângulos de conteúdo)**: {termos informacionais/comerciais que viram post/reel}

**Para Gabriela Gancho (hooks e legendas)**: {termos com maior potencial de gancho — dores/perguntas frequentes}

**Para André Animação (páginas de serviço)**: {termos transacionais que merecem página própria no site}

## Observação de Concorrência
{o que os concorrentes locais já ocupam, se houver dados}
```

## Output Example

> Negócio: fisioterapia esportiva em Iporã do Oeste

```
# Palavras-Chave — IFISIO Fisioterapia
Data: 2026-07-03
Cidade/região: Iporã do Oeste, SC

## Palavras-Chave Priorizadas

| # | Palavra-chave | Intenção | Formato recomendado | Prioridade |
|---|---------------|----------|---------------------|-----------|
| 1 | fisioterapia esportiva Iporã do Oeste | Transacional | Página de serviço + CTA WhatsApp | 🔴 |
| 2 | fisioterapeuta perto de mim Iporã do Oeste | Transacional | Página de serviço + Perfil da Empresa | 🔴 |
| 3 | melhor fisioterapeuta Iporã do Oeste | Comercial | Página de serviço com depoimentos | 🟡 |
| 4 | quanto tempo dura recuperação de lesão no joelho | Informacional | Post de blog/FAQ | 🟡 |
| 5 | diferença entre fisioterapia esportiva e convencional | Informacional | Post de blog/Reel educativo | 🟢 |

## Recomendações por Destino

**Para Lucas Leads (ângulos de conteúdo)**: termos #4 e #5 viram série de Reels educativos — dúvidas reais de quem está pesquisando antes de agendar.

**Para Gabriela Gancho (hooks e legendas)**: "quanto tempo dura recuperação de lesão no joelho" é gancho forte de dor real — abrir Reel com essa pergunta direto.

**Para André Animação (páginas de serviço)**: criar página dedicada "/fisioterapia-esportiva-ipora-do-oeste" com CTA de WhatsApp acima da dobra — termos #1 e #2 têm intenção transacional clara.

## Observação de Concorrência
Nenhum concorrente direto em Iporã do Oeste tem site ou Perfil da Empresa otimizado para esses termos — janela aberta para ocupar as buscas locais antes da concorrência.
```

## Quality Criteria

- [ ] Cada palavra-chave classificada com intenção de busca (informacional/navegacional/comercial/transacional)
- [ ] Termos priorizam cauda longa e variação local sobre termo genérico nacional
- [ ] Cada palavra-chave tem formato de conteúdo recomendado
- [ ] Briefing separado por destino (Lucas, Gabriela, André)
- [ ] Prioridade atribuída considerando intenção comercial/transacional + baixa concorrência local

## Veto Conditions

Rejeitar e refazer se:
1. Palavra-chave listada sem intenção de busca classificada
2. Lista dominada por termos genéricos de alta concorrência nacional sem variação local
3. Nenhuma recomendação de destino (Lucas/Gabriela/André) incluída
