---
task: "Propose Visual Identities"
order: 1
input:
  - carousel_draft: output/carousel-draft.md (copy final dos slides — tom e conteúdo)
  - company_context: _opensquad/_memory/company.md
  - anti_patterns: pipeline/data/anti-patterns.md
output:
  - visual_identity: Identidade extraída (output/visual-identities.yaml com 1 item) ou 3 propostas inventadas, dependendo do caso
---

# Propose Visual Identities

Antes de criar qualquer HTML ou imagem, decide qual dos 3 caminhos de identidade visual se aplica a este conteúdo, e produz o resultado correspondente para o usuário confirmar/escolher.

## Process

### 1. Decidir: qual das 3 fontes de identidade se aplica a este conteúdo?

Ler `output/carousel-draft.md` e `_opensquad/_memory/company.md`.

- **Este carrossel é sobre um projeto/cliente/pessoa com identidade visual real já existente** (site em `clientes/`, um projeto específico) → **Caminho A (Extração de cliente)**.
- **Este carrossel é da marca própria do João (@jaokdev)** — sobre o próprio serviço, autoridade, bastidores, sem cliente específico associado → **Caminho B (Sistema fixo @jaokdev)**.
- **Nem um nem outro** (conteúdo evergreen/educacional puro, sem marca alguma associável) → **Caminho C (Invenção)**.

Nunca inventar uma paleta quando existe uma real disponível para extrair, e nunca inventar quando o conteúdo é da marca própria do João — isso é o erro mais comum a evitar.

---

### Caminho A — Extração de cliente (preferencial sempre que houver fonte real de cliente)

1. **Localizar a fonte real.** Grep no projeto relevante por tokens de cor, tipografia e handle: `globals.css`, `tailwind.config.*`, `site.ts`/`site.config.*`, `DESIGN.md`, ou o `.custom.md`/README do projeto. Não adivinhar — usar os valores hex/nome de fonte exatamente como aparecem no código.

2. **Documentar a identidade extraída** com os mesmos campos do formato de output (abaixo), preenchidos com os valores reais encontrados, não inventados. `preview_description` explica de onde veio cada valor (ex: "paleta e handle extraídos de pessoal/jaokdev-portfolio/app/globals.css e lib/site.ts").

3. **Salvar como proposta única** em `output/visual-identities.yaml` (`identities` com 1 item, `recommended_identity: 1`, `recommendation_reason: "Identidade real do projeto — não há motivo para inventar outra"`).

4. Seguir para o checkpoint (Step 09) normalmente — o usuário ainda confirma ou pede ajuste, só que a partir de uma base real em vez de 3 alternativas inventadas.

---

### Caminho B — Sistema fixo @jaokdev (conteúdo de marca própria, sem cliente)

1. **Ler `pessoal/carrosseis/DESIGN-SYSTEM.md` por completo.** Esse arquivo é a identidade canônica pra qualquer carrossel do João sobre o próprio serviço — não é um ponto de partida pra variar, é o padrão fixo (Barlow Condensed, laranja-avermelhado, preto/creme alternado, componentes reutilizáveis como card de prova social e card de CTA).

2. **Documentar como identidade única** (mesmo formato de output do Caminho A), com `preview_description` citando `pessoal/carrosseis/DESIGN-SYSTEM.md` como origem.

3. **Salvar como proposta única** em `output/visual-identities.yaml` (`identities` com 1 item, `mode: "own-brand"`, `recommended_identity: 1`, `recommendation_reason: "Sistema fixo da marca própria @jaokdev"`).

4. Seguir para o checkpoint (Step 09) normalmente — apresentação de confirmação única, igual ao Caminho A.

---

### Caminho C — Invenção (só quando não há fonte real nem é conteúdo de marca própria)

1. **Ler o carousel-draft.md.** Identificar o tom emocional do conteúdo: é urgente? reflexivo? provocador? educacional? O design deve amplificar essa emoção, não contradizê-la.

2. **Criar 3 identidades visuais distintas.** Cada uma deve ter uma personalidade visual clara e diferente das outras. Regras:
   - Bold e colorido é o DNA do squad — nunca paleta corporativa genérica (azul + branco + cinza)
   - Cada identidade tem exatamente 1 cor de acento (não 2+)
   - As 3 identidades devem ser visivelmente distintas (não variações da mesma paleta)

3. **Para cada identidade, definir:**
   - **Nome**: identifica a proposta (ex: "Neon Night", "Solar Bold", "Deep Focus")
   - **Mood**: 2-3 palavras descrevendo a sensação visual (ex: "urgente e vibrante", "intelectual e sombrio")
   - **bg_color**: cor de fundo principal (hex)
   - **accent_color**: única cor de destaque (hex)
   - **display_font**: fonte condensada real para títulos (ex: "Anton" — nunca fonte variável tipo Archivo)
   - **body_font**: fonte sans para corpo (ex: "Inter", "Poppins")
   - **preview_description**: como vai parecer na prática (2-3 linhas descritivas)

4. **Indicar a identidade recomendada** com justificativa baseada no tom do conteúdo.

5. **Salvar em `output/visual-identities.yaml`** com os 3 itens.

## Paletas de Referência (ponto de partida pro Caminho C, não limite)

- **Deep Navy + Coral**: bg #0A0E1A, accent #FF4757 — urgente, tech, moderno
- **Preto + Electric Blue**: bg #0D0D0D, accent #1E90FF — frio, analítico, autoridade
- **Deep Purple + Neon Green**: bg #1A0A2E, accent #00FF88 — criativo, inovador, futuro
- **Dark Forest + Amarelo Ouro**: bg #0A1A0A, accent #FFD700 — premium, confiante, estabelecido
- **Carvão + Laranja Vibrante**: bg #1A1A1A, accent #FF6B35 — energético, acionável, motivacional

## Output Format

```yaml
mode: "extracted"  # ou "own-brand" ou "invented"
content_tone: "Tom emocional identificado no conteúdo"

identities:
  - id: 1
    name: "Nome da identidade (ou nome do projeto/marca, se extraída)"
    mood: "Adjetivos que descrevem a sensação visual"
    bg_color: "#0A0E1A"
    accent_color: "#FF4757"
    secondary_text_color: "#AAAAAA"
    display_font: "Anton"
    body_font: "Inter"
    preview_description: |
      Se extraída: de onde veio cada valor.
      Se inventada: como o visual vai parecer na prática.

recommended_identity: 1
recommendation_reason: "Por que esta identidade amplifica melhor o tom do conteúdo, ou por que é a identidade real do projeto"
```

## Quality Criteria

- [ ] Se existe fonte real de identidade de cliente, ela foi extraída — não inventada
- [ ] Se é conteúdo de marca própria (@jaokdev), usou o sistema fixo de `pessoal/carrosseis/DESIGN-SYSTEM.md` — não inventou nem extraiu de outro lugar
- [ ] Se inventada (Caminho C), exatamente 3 identidades propostas, visivelmente distintas
- [ ] Nenhuma identidade usa paleta genérica corporate (azul claro + branco + cinza)
- [ ] Cada identidade tem exatamente 1 accent_color
- [ ] display_font é uma fonte condensada real, nunca uma fonte variável (Archivo etc.)
- [ ] preview_description é descritiva o suficiente para o usuário visualizar sem ver a imagem

## Veto Conditions

Rejeitar e refazer se:
1. Inventou uma paleta quando havia fonte real disponível para extrair (Caminho A) ou quando era conteúdo de marca própria (Caminho B)
2. Duas identidades inventadas são variações da mesma paleta (ex: dois tons de azul escuro)
3. Alguma identidade usa mais de 1 accent_color
4. preview_description é vaga ("visual bonito" não é aceitável)
