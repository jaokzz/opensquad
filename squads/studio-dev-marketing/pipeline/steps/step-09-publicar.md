---
execution: subagent
agent: instagram-publisher
inputFile: squads/studio-dev-marketing/output/reel-script.md
model_tier: fast
---

# Step 09: Publicar no Instagram

## Context Loading

Load these files before executing:
- `squads/studio-dev-marketing/output/reel-script.md` — roteiro com legenda e hashtags finais
- `squads/studio-dev-marketing/output/cover.html` — cover para renderizar e anexar (se disponível)
- `skills/instagram-publisher/SKILL.md` — instruções de publicação via API

## Instructions

### Process
1. Ler o reel-script.md e extrair: legenda final (seção === CAPTION ===) e hashtags (seção === HASHTAGS ===)
2. Combinar legenda + hashtags em formato pronto para publicação
3. Se cover.html disponível: renderizar via image-creator (Playwright) e salvar como cover.png
4. Publicar o Reel via instagram-publisher skill com legenda completa e cover como thumbnail
5. Confirmar publicação e registrar em `_memory/runs.md` com data, tema e link do post

## Output Format

```
=== PUBLICAÇÃO ===
Status: {Publicado / Erro}
Post URL: {link do post se publicado}
Publicado em: {YYYY-MM-DD HH:MM}
Legenda enviada: {primeiros 100 chars}...
Hashtags: {N hashtags}
Cover: {Sim / Não}

Registro adicionado a _memory/runs.md ✓
```

## Output Example

```
=== PUBLICAÇÃO ===
Status: Publicado
Post URL: https://www.instagram.com/p/ABC123/
Publicado em: 2026-05-28 19:30
Legenda enviada: "Para de pagar salário pra atendente de WhatsApp. Tem jeito melhor 👇..."
Hashtags: 9 hashtags
Cover: Sim

Registro adicionado a _memory/runs.md ✓
```

## Veto Conditions

Rejeitar e interromper se:
1. instagram-publisher skill não configurada (credenciais ausentes) — avisar usuário para configurar antes de tentar
2. Legenda acima de 2200 caracteres (limite do Instagram)

## Quality Criteria

- [ ] Legenda + hashtags concatenadas corretamente
- [ ] Cover renderizado como PNG antes do upload (se disponível)
- [ ] Confirmação de publicação registrada em runs.md
- [ ] URL do post retornada ao usuário
