---
step: "10"
name: "Criação dos Slides"
type: agent
agent: image-designer
tasks:
  - create-slides
  - render-export
depends_on: step-09
---

# Step 10: Davi Design — Criação dos Slides HTML e Renderização

## Para o Pipeline Runner

Executar as duas tasks do Davi Design em sequência:

1. **create-slides**: Cria `output/slides/base.css` compartilhado + arquivos HTML individuais para cada slide, usando a identidade visual selecionada em `output/selected-visual.yaml`. Se o slide 1 usar foto de capa, gera a imagem via Higgsfield antes de montar o HTML. Sempre verificar o slide 1 renderizado antes do batch completo.
2. **render-export**: Renderiza todos os slides como PNG chamando o Chrome headless diretamente via `file://` (sem servidor HTTP), verifica cada imagem individualmente e gera o manifest em `output/slides/rendered/manifest.json`

## Inputs para este Step

- `output/carousel-draft.md` → copy final de cada slide
- `output/selected-visual.yaml` → identidade visual selecionada (paleta, fontes, mood)
- `pipeline/data/anti-patterns.md` → erros de design a evitar

## Expected Outputs

- `output/slides/base.css` → sistema de design CSS compartilhado
- `output/slides/assets/capa.png` → imagem de capa gerada via Higgsfield (se aplicável)
- `output/slides/slide-01.html` até `output/slides/slide-0N.html` → arquivos HTML de cada slide
- `output/slides/rendered/slide-01.png` até `output/slides/rendered/slide-0N.png` → imagens finais
- `output/slides/rendered/manifest.json` → manifesto com status de cada imagem

## Execution Mode

- **Modo:** Inline
- **Ferramentas permitidas:** `mcp__claude_ai_Higgsfield__generate_image` (capa), Bash (Chrome headless via `file://` para renderizar), image-fetcher (se necessário)

## Quality Gate

Antes de avançar para o Step 11, verificar:
- [ ] base.css existe e reflete a identidade visual selecionada
- [ ] Todos os arquivos slide-0N.html existem (contagem deve bater com o carousel-draft.md)
- [ ] Se houver foto de capa, ela foi gerada, lida e conferida antes de montar o HTML
- [ ] manifest.json existe e ready_to_publish é true
- [ ] Todos os slides no manifest têm status "OK", cada um verificado individualmente (não só o slide 1)

Se manifest.json tiver ready_to_publish: false ou qualquer status diferente de "OK", o Davi Design deve corrigir os problemas antes de avançar.

## Nota sobre Identidade Visual

O Davi Design deve implementar **exatamente** a identidade selecionada em selected-visual.yaml. Se o usuário tiver especificado ajustes em `user_adjustments`, aplicar esses ajustes na implementação.

## Nota sobre Aspect Ratio

O squad usa 1080×1350px (4:5) — a proporção máxima suportada pelo feed do Instagram. Não há necessidade de fallback ou reexportação.
