---
task: "Criar Cover do Reel"
order: 1
input: |
  - reel_script: Roteiro com tema, tom e hook do Reel
  - visual_identity: Sistema de design aprovado (de visual-identity.md)
  - template_reference: Template HTML de referência (de template-reference.html)
output: |
  - cover_html: HTML autocontido do cover em 1080×1920
  - cover_png: Screenshot renderizado via Playwright (quando disponível)
---

# Criar Cover do Reel

Cria o cover visual do Reel em formato 1080×1920 (Instagram Story/Reel), seguindo o sistema de design aprovado. Entrega HTML autocontido pronto para renderização via Playwright.

## Process

1. **Ler visual-identity.md**: Absorver paleta (#F2F0EC, #0C0A07, #E8A020), tipografia (DM Serif Display + Plus Jakarta Sans), espaçamento (80px vertical, 68px horizontal), e regras de double-bezel.
2. **Extrair elementos do roteiro**: Identificar o hook principal (frase de impacto para o hero), tema (para a tag), e CTA (para o bloco inferior).
3. **Documentar sistema de design no topo do HTML**: Seção de comentário com cores, fontes e viewport antes de qualquer CSS.
4. **Escrever HTML autocontido**: Google Fonts @import, inline CSS, body 1080×1920, sem dependências externas. DM Serif Display italic para o headline, Plus Jakarta Sans para corpo e labels.
5. **Aplicar double-bezel em todos os cards**: Outer shell com `background:#0C0A0706; border:1px solid #0C0A0710; border-radius:24px; padding:4px` + inner core `background:#fff; border-radius:20px; box-shadow:0 2px 20px #0C0A0706`.
6. **Verificar contraste e tamanhos**: Hero ≥ 56px, body ≥ 32px, caption ≥ 20px, contraste WCAG AA 4.5:1 para todo texto.

## Output Format

```html
<!-- DESIGN SYSTEM
  Viewport: 1080×1920 (Instagram Reel)
  Background: #F2F0EC
  Text: #0C0A07
  Accent: #E8A020
  Font headline: DM Serif Display (italic)
  Font body: Plus Jakarta Sans
  Padding: 80px vertical, 68px horizontal
-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; height: 1920px; overflow: hidden; ... }
  </style>
</head>
<body>
  <!-- Header: avatar + handle + tag -->
  <!-- Hook: headline em DM Serif Display italic -->
  <!-- Cards: double-bezel com conteúdo do roteiro -->
  <!-- CTA block: fundo escuro + botão circular âmbar -->
  <!-- Footer: handle + ARRASTE → -->
</body>
</html>
```

## Output Example

> Roteiro: "Para de pagar salário pra atendente de WhatsApp"
> Tom: Provocativo

```html
<!-- DESIGN SYSTEM
  Viewport: 1080×1920 (Instagram Reel)
  Background: #F2F0EC | Text: #0C0A07 | Accent: #E8A020
  Headline: DM Serif Display italic | Body: Plus Jakarta Sans
-->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
body{width:1080px;height:1920px;overflow:hidden;background:#F2F0EC;font-family:'Plus Jakarta Sans',sans-serif;color:#0C0A07;position:relative;}
.wrap{height:100%;display:flex;flex-direction:column;padding:80px 68px;}
.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:80px;}
.profile{display:flex;align-items:center;gap:18px;}
.avatar{width:64px;height:64px;border-radius:50%;background:#0C0A07;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#F2F0EC;}
.handle{font-size:27px;font-weight:500;color:#0C0A0755;}
.tag{font-size:22px;font-weight:700;color:#B8860B;border:1.5px solid #E8C54745;border-radius:100px;padding:9px 22px;letter-spacing:.08em;text-transform:uppercase;}
.hook{font-family:'DM Serif Display',serif;font-size:88px;font-weight:400;line-height:.96;letter-spacing:-.01em;color:#0C0A07;margin-bottom:52px;}
.hook em{font-style:italic;color:#B8860B;}
.rule{display:flex;align-items:center;gap:20px;margin-bottom:52px;}
.rule-line{flex:1;height:1px;background:linear-gradient(90deg,#0C0A0720,transparent);}
.rule-dot{width:6px;height:6px;border-radius:50%;background:#E8A020;flex-shrink:0;}
.cards{display:flex;flex-direction:column;gap:16px;flex:1;}
.card-shell{background:#0C0A0706;border:1px solid #0C0A0710;border-radius:24px;padding:4px;}
.card-core{background:#fff;border-radius:20px;padding:36px 44px;display:flex;align-items:center;gap:36px;box-shadow:0 2px 20px #0C0A0706,inset 0 1px 0 #ffffffcc;}
.card-icon{font-size:48px;min-width:64px;text-align:center;}
.card-body{display:flex;flex-direction:column;gap:6px;}
.card-title{font-size:34px;font-weight:700;color:#0C0A07;}
.card-sub{font-size:26px;font-weight:400;color:#0C0A0755;}
.cta-block{background:#0C0A07;border-radius:24px;padding:44px 48px;display:flex;align-items:center;justify-content:space-between;margin-top:32px;}
.cta-text{font-family:'DM Serif Display',serif;font-size:46px;font-style:italic;color:#F2F0EC;line-height:1.25;}
.cta-btn{width:88px;height:88px;border-radius:50%;background:#E8A020;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.footer{display:flex;justify-content:space-between;align-items:center;padding-top:36px;border-top:1px solid #0C0A0712;margin-top:32px;}
.footer-handle{font-size:25px;font-weight:500;color:#0C0A0740;}
.footer-slide{font-size:24px;font-weight:600;color:#E8A02070;letter-spacing:.08em;text-transform:uppercase;}
</style>
</head>
<body>
<div class="wrap">
  <div class="header">
    <div class="profile">
      <div class="avatar">JT</div>
      <span class="handle">@jaokdev</span>
    </div>
    <span class="tag">Automação</span>
  </div>
  <div class="hook">
    Seu WhatsApp pode<br>
    <em>trabalhar</em><br>
    por você
  </div>
  <div class="rule"><div class="rule-dot"></div><div class="rule-line"></div></div>
  <div class="cards">
    <div class="card-shell"><div class="card-core">
      <span class="card-icon">⚡</span>
      <div class="card-body"><span class="card-title">Responde em 3 segundos</span><span class="card-sub">Sem você estar online</span></div>
    </div></div>
    <div class="card-shell"><div class="card-core">
      <span class="card-icon">🎯</span>
      <div class="card-body"><span class="card-title">Qualifica o lead</span><span class="card-sub">Pergunta, filtra, agenda</span></div>
    </div></div>
    <div class="card-shell"><div class="card-core">
      <span class="card-icon">🌙</span>
      <div class="card-body"><span class="card-title">Funciona 24h</span><span class="card-sub">Faturando enquanto você dorme</span></div>
    </div></div>
  </div>
  <div class="cta-block">
    <span class="cta-text">Quer<br>montar um?</span>
    <div class="cta-btn"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#0C0A07" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></div>
  </div>
  <div class="footer">
    <span class="footer-handle">@jaokdev · Sites & Automação</span>
    <span class="footer-slide">ARRASTE →</span>
  </div>
</div>
</body>
</html>
```

## Quality Criteria

- [ ] Viewport: width 1080px height 1920px no body
- [ ] Fontes: DM Serif Display italic para headline, Plus Jakarta Sans para corpo
- [ ] Hero ≥ 56px, body ≥ 32px, caption ≥ 20px
- [ ] Double-bezel em todos os cards (outer shell + inner core)
- [ ] Acento âmbar (#E8A020) usado no CTA e no rule-dot
- [ ] HTML autocontido (sem JS, sem CSS externo)
- [ ] Sem Lorem ipsum, sem slide counter, sem Inter/Roboto
- [ ] Design system documentado no topo do arquivo

## Veto Conditions

Rejeitar e refazer se:
1. Algum texto legível abaixo de 20px (qualquer tamanho de plataforma)
2. Dependência externa além de Google Fonts @import (CDN, JS, imagens por URL)
