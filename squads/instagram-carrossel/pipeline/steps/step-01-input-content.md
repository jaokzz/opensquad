---
step: "01"
name: "Entrada de Conteúdo"
type: checkpoint
description: O usuário define o tema e o período de pesquisa que será transformado em carrossel.
---

# 🛑 Checkpoint: Entrada de Conteúdo

## Para o Pipeline Runner

Este é o checkpoint de entrada do pipeline. Solicitar ao usuário o tema e o período de pesquisa.

## Solicitação ao Usuário

🎯 Vamos criar um carrossel de Instagram.

Qual é o **tema** que você quer explorar hoje?
Pode ser um tema geral (ex: "IA para empreendedores"), uma área específica (ex: "no-code", "automações"), qualquer assunto relevante para sua audiência — **ou responda "você decide"/"escolhe aí" pra deixar a Ângela Ângulo escolher o tema/pilar de conteúdo por conta própria.**

Se você já tem um tema: qual é o **período de pesquisa**?
Exemplos: "últimas 24 horas", "última semana", "março de 2026".

## Ação do Pipeline Runner

1. Receber a resposta do usuário.
2. **Se o usuário deu um tema específico:** salvar em `output/research-focus.md` no formato abaixo e avançar para o Step 02, onde só a task `find-and-rank-news` roda.
3. **Se o usuário pediu pra Ângela decidir** (ou não respondeu com um tema claro): não preencher `research-focus.md` aqui — avançar para o Step 02 mesmo assim, onde a task `select-content-topic` roda primeiro e preenche o arquivo.

## Formato de Salvamento (quando o tema vem do usuário)

```markdown
# Research Focus

**Topic:** [tema fornecido pelo usuário]
**Time Range:** [período fornecido pelo usuário]
**Date:** YYYY-MM-DD
```
