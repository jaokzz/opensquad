---
task: "Create Slides HTML"
order: 2
input:
  - carousel_draft: output/carousel-draft.md (copy final de cada slide)
  - design_system: output/design-system.md (sistema de design definido)
  - selected_visual: output/selected-visual.yaml (identidade extraída ou inventada)
  - anti_patterns: pipeline/data/anti-patterns.md
output:
  - base_css: output/slides/base.css (sistema de design compartilhado)
  - cover_image: output/slides/assets/capa.png (imagem gerada via Higgsfield, se o slide 1 usar foto)
  - slide_html_files: Arquivos HTML individuais para cada slide em output/slides/
  - slide_preview: Preview do slide 1 verificado visualmente antes do batch
---

# Create Slides HTML

Cria os arquivos HTML de cada slide do carrossel, compartilhando um `base.css` único em vez de repetir o CSS em cada arquivo. O slide 1 (capa) normalmente combina uma foto real gerada via Higgsfield com overlay de texto; os demais slides são estrutura HTML/CSS pura.

**Se a identidade selecionada for a de marca própria (@jaokdev)**, ler `pessoal/carrosseis/DESIGN-SYSTEM.md` antes de montar os slides — ele documenta componentes reutilizáveis específicos (card de prova social, lista com seta, lista X/✓, card de CTA com palavra-chave) que não estão detalhados aqui.

## Process

### 1. Montar o `base.css` a partir da identidade selecionada

Ler `output/selected-visual.yaml`. Criar `output/slides/base.css` com:
- Tokens CSS da identidade (bg, accent, cores de texto secundárias)
- `@import` do Google Fonts para o `body_font` (ex: Inter, Poppins) — **nunca** para o `display_font`
- O `display_font` (ex: Anton) precisa ser uma fonte condensada real, servida via `@font-face` ou Google Fonts estático. **Nunca usar fonte variável com eixo `wdth`** (ex: Archivo) — o Chrome headless não aplica a condensação do eixo e o título sai largo demais.
- Estrutura compartilhada: header (categoria + handle do Instagram), label de seção em mono uppercase, título display grande, corpo, rodapé com barra de progresso "n/N"
- Container fixo 1080×1350px, `overflow: hidden`

### 2. Gerar a imagem de capa (se o slide 1 usar foto)

Se a identidade extraída/selecionada indicar uma cena fotográfica pro slide 1 (comum quando o carrossel representa um trabalho/oferta real):

1. Chamar `mcp__claude_ai_Higgsfield__generate_image` (model `nano_banana_pro` ou equivalente, aspect_ratio `4:5`, resolution `2k`) com uma cena que representa literalmente o trabalho/oferta — nunca um mascote ou imagem genérica de stock.
2. **Se o prompt pedir texto na imagem** (letreiro, lousa, placa), escrever a grafia exata em português com acentos explicitamente no prompt e repetir a instrução (ex: "note o acento agudo em X") — sem isso o modelo derrapa e escreve sem acento.
3. Baixar a imagem gerada para `output/slides/assets/capa.png` e **ler o arquivo antes de seguir** para confirmar que veio como esperado (cena certa, texto certo se houver).
4. Se o slide 1 não pedir foto (ex: identidade puramente tipográfica), pular esta etapa.

### 3. Criar slide 1 (capa/hook) como protótipo

Implementar o slide 1 primeiro, com máxima atenção:
- Se houver foto: `<img class="bg">` full-bleed (1080×1350, `object-fit: cover`) + camadas de overlay em gradiente (topo e/ou base) pra garantir contraste do texto — nunca texto direto sobre foto sem overlay
- O dado/gancho principal em `display_font`, tamanho hero (90px+), cor de acento
- Estrutura visual que comunica impacto imediato
- **VERIFICAR VISUALMENTE antes de prosseguir** (ver task render-export.md)

### 4. Criar slides 2 a N-1 (conteúdo)

Para cada slide de conteúdo:
- Importar `base.css`, sobrescrever só o miolo específico do slide no `<style>` inline
- Variar o layout (não o sistema de design) para manter ritmo visual
- Uma ideia por slide, corpo sempre ≥ 28px
- Ler o comprimento real do texto do slide e ajustar o tamanho do título/display individualmente — **não existe um tamanho único que funcione para todos os slides**

### 5. Criar slide de reflexão com tratamento especial

Aplicar o tratamento visual definido no design system (fundo alternativo ou layout mais espaçado).

### 6. Criar slide CTA final

CTA com elemento visual de destaque e ação clara (save + engajamento), referenciando o conteúdo específico do carrossel.

### 7. Organizar arquivos

```
output/slides/base.css
output/slides/assets/capa.png        (se houver foto)
output/slides/slide-01.html
output/slides/slide-02.html
...
output/slides/slide-0N.html
```

### 8. Limpar assets não usados

Antes de considerar a task concluída, remover do `output/slides/assets/` qualquer versão descartada de imagem gerada (tentativas anteriores da capa, etc.).

## Estrutura de Referência do `base.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
/* display_font servido separadamente — ex: Anton via Google Fonts estático, não variável */

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  width: 1080px;
  height: 1350px;
  overflow: hidden;
  font-family: var(--body-font);
  background: var(--bg-primary);
  color: var(--text-white);
}

.slide { width: 1080px; height: 1350px; position: relative; overflow: hidden; }
.hdr { /* categoria + handle */ }
.label { font-family: 'JetBrains Mono', monospace; text-transform: uppercase; }
h1.disp { font-family: var(--display-font); }
.ftr { /* rodapé com barra de progresso n/N */ }
```

## Estrutura de Referência do Slide de Capa (com foto)

```html
<link rel="stylesheet" href="base.css">
<style>
  .bg { position: absolute; inset: 0; width: 1080px; height: 1350px; object-fit: cover; z-index: 0; }
  .ov-top { position: absolute; top: 0; left: 0; right: 0; height: 220px;
    background: linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0) 100%); z-index: 1; }
  .ov-bottom { position: absolute; left: 0; right: 0; bottom: 0; height: 760px;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.62) 34%, rgba(0,0,0,0.97) 62%); z-index: 1; }
  .inner { position: absolute; inset: 0; z-index: 2; display: flex; flex-direction: column; }
</style>
<body class="dark-t">
  <div class="slide">
    <img class="bg" src="assets/capa.png">
    <div class="ov-top"></div>
    <div class="ov-bottom"></div>
    <div class="inner"><!-- header, título, rodapé --></div>
  </div>
</body>
```

## Critical Rules for This Task

1. **NUNCA** usar JavaScript de qualquer tipo
2. **NUNCA** referenciar imagens externas além de Google Fonts e da própria capa gerada em `assets/`
3. **NUNCA** usar CSS frameworks externos (Bootstrap, Tailwind)
4. **NUNCA** usar fonte variável com eixo `wdth` para o display (Archivo etc.) — usar fonte condensada real (Anton ou equivalente)
5. **SEMPRE** usar o container de 1080×1350px fixo — nunca responsivo
6. **SEMPRE** garantir `overflow: hidden` para evitar elementos cortados
7. **SEMPRE** overlay de gradiente entre foto e texto — nunca texto direto sobre foto

## Quality Criteria

- [ ] `base.css` existe e é compartilhado por todos os slides (não repetido em cada arquivo)
- [ ] Slide 1 renderizado e verificado visualmente antes dos demais
- [ ] Se houver foto de capa, ela foi gerada via Higgsfield com prompt correto (acentos explícitos se houver texto na imagem) e lida antes de seguir
- [ ] Todos os slides usam os mesmos tokens de `base.css` (mesma paleta, mesmas fontes)
- [ ] Nenhum texto em nenhum slide ultrapassa os limites do container
- [ ] Tamanho de fonte do display ajustado individualmente por slide (não um valor único)
- [ ] Font body ≥ 28px em todos os slides
- [ ] Slide de reflexão tem tratamento visual diferenciado conforme design system
- [ ] Assets não usados removidos antes de finalizar

## Veto Conditions

Rejeitar e corrigir se:
1. JavaScript encontrado em qualquer arquivo HTML
2. Qualquer CDN externo além do Google Fonts
3. Fonte variável (Archivo etc.) usada para o display
4. Texto ultrapassando os limites do container (overflow visível)
5. Texto sobre foto sem overlay de gradiente
6. Contraste entre texto e fundo < 4.5:1 em qualquer slide
