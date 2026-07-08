# Squad Memories — instagram-carrossel
**Squad:** Fábrica de Carrosséis
**Created:** 2026-03-03
**Adapted:** 2026-07-01 — promovido de `temp/squads/` (exemplo do upstream, marca "Sem Codar", pauta TSE/IA) para `squads/` como squad ativo do Joao Vitor. Nicho, tom, exemplos e critério de brand voice reescritos para sites + automação de WhatsApp para pequenos negócios locais (ver `_opensquad/_memory/company.md`). Execução anterior (parada no step 5/9) foi descartada; pipeline resetado para step 0/idle.
**Atualizado 2026-07-07** — produção visual (Davi Design: `image-designer.custom.md` + tasks `propose-visual-identities`/`create-slides`/`render-export` + pipeline steps 08-10) reescrita do zero. O squad nunca tinha rodado de ponta a ponta (log de execuções abaixo estava vazio); os dois carrosséis reais já feitos (`pessoal/carrosseis/2026-07-01-carrossel-sites/` e `2026-07-06-carrossel-site/`) foram produzidos totalmente fora do squad, com uma técnica bem mais forte do que a documentada até então. Mudanças principais:
- **Extrair identidade real antes de inventar.** Quando o conteúdo é sobre um projeto/marca real (site entregue, portfólio), puxar paleta/fonte/handle de arquivos reais (`globals.css`, `site.ts` etc.) em vez de sempre propor 3 paletas inventadas.
- **Capa híbrida com foto real.** Slide 1 combina imagem gerada no Higgsfield (`mcp__claude_ai_Higgsfield__generate_image`) como full-bleed background + overlay em gradiente + texto, em vez de só HTML/CSS com cor sólida.
- **Rendering trocado.** Chrome headless direto via `file://` (comando documentado em `render-export.md`) no lugar da skill `image-creator` (Playwright + http.server) — mais simples e já validado.
- **Fonte display corrigida.** Fonte condensada real (Anton) para títulos, nunca fonte variável (Archivo quebra a condensação no render headless).
- **Aspect ratio corrigido.** 1080×1350px (4:5) fixo — 1080×1440 (3:4) não é suportado pela API do Instagram; removida a ambiguidade que existia em `research-brief.md`/`validate-publish.md`.
- **`base.css` compartilhado** entre slides em vez de CSS repetido em cada arquivo HTML.
Ver [[project_carrossel_template_brandsdecoded]] (memória de usuário com o processo passo a passo original) e [[feedback_web_design_squad_orchestration]] (contexto da limpeza de squads em 2026-07-07).

**Atualizado 2026-07-07 (mesmo dia):** papel da Ângela Ângulo (researcher) expandido — agora decide o tema/pilar do carrossel quando o usuário não fornece um (`tasks/select-content-topic.md`, ordem 1, antes de `find-and-rank-news`), em vez de essa lógica ficar só embutida em `autopilot-mode.md` sem dono. Ver Step 08 pipeline (3 modos de identidade: extracted/own-brand/invented) e `researcher.custom.md`.

**Design system de marca própria @jaokdev criado no mesmo dia:** `pessoal/carrosseis/DESIGN-SYSTEM.md`, extraído via Apify de 26 slides reais do perfil @brandsdecoded__ (Barlow Condensed, laranja-avermelhado, preto/creme alternado, componentes de card de prova social e CTA com palavra-chave).

## Executions Log

- **2026-07-08** — Carrossel "O cliente pré-decidido" (pilar 1: comportamento do consumidor local; anterior era pilar 2, rotação ok). Executado manualmente por mim (Claude Code) seguindo o processo do squad. Usuário pediu curadoria prévia: 3 pautas pesquisadas via Firecrawl com fontes scrapeadas e verificadas (Nosso Meio 07/07, UAI 29/06, Agência Sebrae 10/06), apresentadas com viral_potential_score; usuário escolheu "consumidor pré-decidido". Dados âncora: Bain 58% / Adyen 52%, Gen Z 68%, Millennials 62%, 60-78 anos +135%. Capa Higgsfield (soul_2, dono de negócio olhando celular ao anoitecer, 3:4 com crop pra 4:5 via object-fit). Mockup de chat de IA no slide 2 (tema é sobre IA, regra do mockup respeitada). CTA palavra-chave "IA" no formato card do design system. Output: `pessoal/carrosseis/2026-07-08-carrossel-ia-compras/` (7 slides 1080×1350 + legenda + pauta-2026-07-08.md com as 2 pautas reservas). Após revisão, usuário definiu **regra de alternância de acento**: posts alternam roxo (#a855f7) e laranja (#e8481c) — 06/07 foi roxo, 07/07 laranja, este ficou roxo. Acento trocado em todos os slides e capa regenerada com neon roxo (a 1ª versão roxa veio com placa de caracteres chineses; regenerada pedindo "no signs, no lettering"). Regra documentada em `pessoal/carrosseis/DESIGN-SYSTEM.md`. Status: aguardando revisão final/publicação do usuário.

- **2026-07-07** — Carrossel "Atendimento no WhatsApp" (pilar 2: automação de atendimento, mito de "perder o toque pessoal"). Executado manualmente por mim (Claude Code) seguindo o processo documentado do squad, não pela pipeline formal do opensquad. Pilar escolhido: nenhum post anterior no log (log estava vazio), evitado o pilar 4 (usado no carrossel de 2026-07-06, fora do squad). Dado âncora: "73% dos clientes compram de quem responde primeiro no WhatsApp" (Meta Business Messaging Report, 2024) — já era exemplo aprovado em `copywriter.custom.md`, reaproveitado como dado real com fonte. Output: `pessoal/carrosseis/2026-07-07-carrossel-whatsapp/`. Status: aprovado visualmente, aguardando revisão/publicação do usuário.

## Key Learnings

- **Primeiro render de slides de conteúdo tende a ficar top-heavy.** Quando o miolo do slide é curto (check-list, 2 parágrafos), o conteúdo termina em ~60-70% da altura e sobra um vazio grande antes do footer. Corrigir aumentando margens superiores (label 96-170px conforme a densidade) e escalando display/corpo, não adicionando texto. Confirmado no carrossel de 2026-07-08: 5 dos 7 slides precisaram de rebalanceamento vertical após o primeiro render.
- **Chrome headless precisa de `--user-data-dir` dedicado.** Rodar `chrome.exe --headless=new --screenshot=...` falha com "Access is denied" ao escrever o PNG quando já existe uma instância normal do Chrome aberta usando o profile padrão. Fix: sempre passar `--user-data-dir="<pasta temporária dedicada>"` pra evitar conflito de lock de profile. Documentar isso em `render-export.md` se acontecer de novo.
- **Reaproveitar dado real já aprovado evita o risco de citar estatística não verificável.** Em vez de buscar uma stat nova via web_search (que exigiria verificação de fonte), usei o exemplo de tom já aprovado em `copywriter.custom.md` (73%, Meta Business Messaging Report 2024) como âncora do hook — mais seguro que inventar ou citar algo sem conferir.
- **Mockup de UI (chat do WhatsApp) só faz sentido porque o tema era sobre automação/processo digital** — confirma a regra do usuário de 2026-07-07: mockup de produto só quando o tema pedir.
- **Evitar case study de cliente específico quando o status comercial do negócio não está 100% confirmado/fechado.** Cogitei usar Academia da Adri ou Armazém como prova social real, mas o status de fechamento de ambos tinha ambiguidade nos registros (prospecção ainda em negociação/avaliação). Optei por um pilar evergreen sem citar cliente nenhum, pra não expor uma relação comercial ainda não confirmada. Se for reusar um cliente real como prova social no futuro, confirmar com o usuário que o negócio está de fato fechado/aprovado antes de publicar.

---

## Performance Notes

*(Track which angles, hooks, and visual styles generated the most engagement — nenhum post ainda publicado/medido)*

---

## Recurring Issues

*(Nenhum problema recorrente registrado ainda — ver "Chrome headless precisa de --user-data-dir" em Key Learnings caso volte a acontecer)*
