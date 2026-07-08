---
step: "08"
name: "Proposta Visual"
type: agent
agent: image-designer
tasks:
  - propose-visual-identities
depends_on: step-07
---

# Step 08: Davi Design — Proposta de Identidades Visuais

## Para o Pipeline Runner

Executar a task propose-visual-identities do Davi Design.

O Designer lê o copy final e decide entre 3 caminhos: (1) se existe uma **identidade visual real de cliente** para extrair, extrai e documenta essa identidade única; (2) se é conteúdo de **marca própria (@jaokdev)**, usa o sistema fixo de `pessoal/carrosseis/DESIGN-SYSTEM.md`; (3) só na ausência dos dois casos anteriores, propõe **3 identidades visuais inventadas e distintas**. Não cria nenhum HTML ou imagem neste step — apenas define e documenta a(s) proposta(s).

## Inputs para este Step

- `output/carousel-draft.md` → copy final dos slides (tom, conteúdo, momento emocional)
- `_opensquad/_memory/company.md` → contexto da empresa e projetos entregues (fonte de identidade real, quando aplicável)
- `pipeline/data/anti-patterns.md` → padrões visuais a evitar

## Expected Outputs

- `output/visual-identities.yaml` → identidade extraída de cliente (1 item, `mode: extracted`), sistema fixo @jaokdev (1 item, `mode: own-brand`), ou 3 propostas inventadas (`mode: invented`) com paleta, tipografia, mood e preview textual

## Execution Mode

- **Modo:** Inline
- **Skills permitidas:** Nenhuma (esta task não renderiza imagens; só grep/leitura de arquivos reais quando extraindo identidade)

## Quality Gate

Antes de avançar para o Step 09, verificar:
- [ ] Se existe identidade real de cliente associada ao conteúdo, ela foi extraída (não inventada) — checar se `mode: extracted` está correto
- [ ] Se é conteúdo de marca própria sem cliente, usou `mode: own-brand` com os valores de `pessoal/carrosseis/DESIGN-SYSTEM.md` — não inventou nem extraiu de outro lugar
- [ ] Se `mode: invented`, visual-identities.yaml tem exatamente 3 propostas visivelmente distintas entre si (não variações da mesma paleta)
- [ ] Cada proposta tem: name, mood, bg_color, accent_color, display_font, body_font, preview_description
- [ ] Nenhuma proposta usa paleta genérica corporate (azul claro + branco + cinza)
- [ ] display_font é uma fonte condensada real (nunca fonte variável tipo Archivo)

Se qualquer verificação falhar, solicitar que Davi Design refaça — inclusive se ele inventou uma paleta quando havia identidade real disponível para extrair.
