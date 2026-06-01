---
execution: inline
agent: studio-dev-marketing/agents/daniela-design
inputFile: squads/studio-dev-marketing/output/reel-script.md
outputFile: squads/studio-dev-marketing/output/cover.html
---

# Step 05: Design do Cover

## Context Loading

Load these files before executing:
- `squads/studio-dev-marketing/output/reel-script.md` — roteiro com tema, hook e tom
- `pipeline/data/visual-identity.md` — sistema de design aprovado (OBRIGATÓRIO)
- `pipeline/data/template-reference.html` — template HTML de referência aprovado
- `_opensquad/_memory/company.md` — handle, nome e posicionamento

## Instructions

### Process
1. Extrair do reel-script.md: hook principal (para o headline), tema (para a tag), e CTA (para o bloco inferior)
2. Documentar sistema de design no topo do HTML como comentário (cores, fontes, viewport)
3. Escrever HTML completo e autocontido: Google Fonts @import, inline CSS, body 1080×1920
4. Aplicar: DM Serif Display itálico para o headline, Plus Jakarta Sans para corpo
5. Aplicar double-bezel em todos os cards e bloco de CTA escuro com botão circular âmbar
6. Verificar: hero ≥ 56px, body ≥ 32px, caption ≥ 20px, contraste 4.5:1
7. Salvar em output/cover.html e apresentar para aprovação

## Output Format

```html
<!-- DESIGN SYSTEM
  Viewport: 1080×1920 | Background: #F2F0EC | Text: #0C0A07 | Accent: #E8A020
  Headline: DM Serif Display italic | Body: Plus Jakarta Sans
  Hero: 88-94px | Body: 34px | Caption: 26px
-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
    *{margin:0;padding:0;box-sizing:border-box;}
    body{width:1080px;height:1920px;overflow:hidden;background:#F2F0EC;...}
  </style>
</head>
<body>
  <!-- Header: avatar @jaokdev + tag do tema -->
  <!-- Headline: hook em DM Serif Display italic -->
  <!-- Rule: dot + gradient line -->
  <!-- Cards: double-bezel com pontos do roteiro -->
  <!-- CTA block: dark + botão circular âmbar -->
  <!-- Footer: handle + ARRASTE → -->
</body>
</html>
```

## Output Example

> Tema: "Sites que trabalham por você" / Tom: Parceiro de Crescimento

```html
<!-- DESIGN SYSTEM
  Viewport: 1080×1920 (Instagram Reel)
  Background: #F2F0EC | Text: #0C0A07 | Accent: #E8A020 | Dark: #0C0A07
  Headline: DM Serif Display italic 94px | Body: Plus Jakarta Sans
-->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
*{margin:0;padding:0;box-sizing:border-box;}
body{width:1080px;height:1920px;overflow:hidden;background:#F2F0EC;font-family:'Plus Jakarta Sans',sans-serif;color:#0C0A07;position:relative;}
.tint{position:absolute;top:0;left:0;right:0;height:600px;background:radial-gradient(ellipse 900px 500px at 50% 0%,#E8C54712,transparent);pointer-events:none;}
.wrap{position:relative;z-index:2;height:100%;display:flex;flex-direction:column;padding:80px 68px;}
.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:80px;}
.profile{display:flex;align-items:center;gap:18px;}
.avatar{width:64px;height:64px;border-radius:50%;background:#0C0A07;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#F2F0EC;flex-shrink:0;}
.handle{font-size:27px;font-weight:500;color:#0C0A0755;}
.tag{font-size:22px;font-weight:700;color:#B8860B;border:1.5px solid #E8C54745;border-radius:100px;padding:9px 22px;letter-spacing:.08em;text-transform:uppercase;}
.pre-hook{font-size:26px;font-weight:600;color:#E8A020;letter-spacing:.12em;text-transform:uppercase;margin-bottom:20px;}
.hook{font-family:'DM Serif Display',serif;font-size:94px;font-weight:400;line-height:.96;letter-spacing:-.01em;color:#0C0A07;margin-bottom:52px;}
.hook em{font-style:italic;color:#B8860B;}
.rule{display:flex;align-items:center;gap:20px;margin-bottom:52px;}
.rule-line{flex:1;height:1px;background:linear-gradient(90deg,#0C0A0720,transparent);}
.rule-dot{width:6px;height:6px;border-radius:50%;background:#E8A020;flex-shrink:0;}
.cards{display:flex;flex-direction:column;gap:16px;flex:1;}
.card-shell{background:#0C0A0706;border:1px solid #0C0A0710;border-radius:24px;padding:4px;}
.card-core{background:#fff;border-radius:20px;padding:36px 44px;display:flex;align-items:center;gap:36px;box-shadow:0 2px 20px #0C0A0706,inset 0 1px 0 #ffffffcc;}
.card-num{font-family:'DM Serif Display',serif;font-size:80px;font-weight:400;font-style:italic;color:#E8A020;line-height:1;min-width:200px;}
.card-body{display:flex;flex-direction:column;gap:8px;}
.card-title{font-size:34px;font-weight:700;color:#0C0A07;line-height:1.2;}
.card-sub{font-size:26px;font-weight:400;color:#0C0A0755;line-height:1.45;}
.cta-block{margin-top:32px;background:#0C0A07;border-radius:24px;padding:44px 48px;display:flex;align-items:center;justify-content:space-between;gap:24px;}
.cta-text{font-family:'DM Serif Display',serif;font-size:46px;font-weight:400;font-style:italic;color:#F2F0EC;line-height:1.25;}
.cta-btn{width:88px;height:88px;border-radius:50%;background:#E8A020;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.footer{display:flex;align-items:center;justify-content:space-between;padding-top:36px;border-top:1px solid #0C0A0712;margin-top:32px;}
.footer-handle{font-size:25px;font-weight:500;color:#0C0A0740;}
.footer-slide{font-size:24px;font-weight:600;color:#E8A02070;letter-spacing:.08em;text-transform:uppercase;}
</style>
</head>
<body>
<div class="tint"></div>
<div class="wrap">
  <div class="header">
    <div class="profile">
      <div class="avatar">JT</div>
      <span class="handle">@jaokdev</span>
    </div>
    <span class="tag">Resultado Real</span>
  </div>
  <div class="pre-hook">O que muda quando</div>
  <div class="hook">o site<br><em>trabalha</em><br>por você</div>
  <div class="rule"><div class="rule-dot"></div><div class="rule-line"></div></div>
  <div class="cards">
    <div class="card-shell"><div class="card-core">
      <span class="card-num">3×</span>
      <div class="card-body"><span class="card-title">mais tempo no site</span><span class="card-sub">Animação e fluidez prendem o visitante</span></div>
    </div></div>
    <div class="card-shell"><div class="card-core">
      <span class="card-num">+180%</span>
      <div class="card-body"><span class="card-title">contatos no WhatsApp</span><span class="card-sub">CTA estratégico + automação 24/7</span></div>
    </div></div>
    <div class="card-shell"><div class="card-core">
      <span class="card-num">7d</span>
      <div class="card-body"><span class="card-title">do zero ao ar</span><span class="card-sub">Do briefing ao site funcionando</span></div>
    </div></div>
  </div>
  <div class="cta-block">
    <span class="cta-text">Quer esse<br>resultado?</span>
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

## Veto Conditions

Rejeitar e refazer se:
1. Fonte Inter, Roboto ou Arial como fonte principal
2. Algum texto legível abaixo de 20px

## Quality Criteria

- [ ] Sistema de design documentado no topo como comentário
- [ ] Viewport body: 1080px × 1920px
- [ ] DM Serif Display italic no headline, Plus Jakarta Sans no corpo
- [ ] Double-bezel em todos os cards
- [ ] Hero ≥ 56px, body ≥ 32px, caption ≥ 20px
- [ ] HTML autocontido (sem JS, sem CSS externo)
