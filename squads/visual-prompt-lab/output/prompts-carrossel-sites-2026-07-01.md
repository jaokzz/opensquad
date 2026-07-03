# Prompts — Carrossel "Seu negócio está invisível pro cliente?"

**Projeto:** Instagram profissional — João Vitor Tuni Kist (sites + automação WhatsApp)
**Data:** 2026-07-01
**Formato:** Carrossel, 5 slides, 4:5 (1080x1350)
**Tema:** importância de ter site profissional vs. concorrência

---

## Slide 1 — Capa (hook)

### Variação A — Split-screen invisível vs. encontrado
```
Split-screen diptych composition, left half: small local shop storefront at dusk, closed metal shutter, dim single overhead bulb, empty sidewalk, muted desaturated blue-grey tones, melancholic mood; right half: close-up of a smartphone screen glowing warmly, held in a person's hand, displaying a modern professional business website homepage with clean layout, bright golden light, vibrant warm tones; sharp vertical dividing line down center, high contrast between the two halves, cinematic photography, shot on Sony A7R IV, ultra-detailed, 8K resolution, professional color grading
```

### Variação B — Dissolução: loja se transformando em sinal digital
```
Small local shop storefront dissolving into particles of light on the left side, transitioning into a glowing smartphone screen displaying a sleek modern website on the right side, dark background, dramatic rim lighting, warm amber to cool blue gradient, motion blur on the dissolving particles, cinematic conceptual photography, ultra-detailed, 8K resolution, shot on Sony A7R IV, professional color grading
```

**Negativo:** ugly, blurry, low quality, watermark, text, logo, signature, extra limbs, deformed hands, deformed fingers, cropped, out of frame, cartoon, anime, illustration, painting, 3d render, jpeg artifacts, noise, oversaturated, symmetrical mirrored halves, blended colors across divide

**Modelo:** FLUX Pro (equivalente real: `marketing_studio_image` @ 2k) — capa decide o scroll-stop, vale o crédito premium.
**Aspect Ratio:** 4:5 — máxima área visual pro contraste do split funcionar no feed.

---

## Slide 2 — O problema

### Variação A — Cliente pesquisando, só concorrente aparece
```
Close-up over-the-shoulder shot of a woman in her 30s holding a smartphone searching on Google, screen showing a blurred search results page with local business listings, soft natural window light, warm cafe environment blurred in background, shallow depth of field, subtle frustrated expression, photorealistic, editorial photography, shot on Canon R5, ultra-detailed, professional color grading
```

### Variação B — Dono do negócio preocupado
```
Medium shot of a small business owner, man in his 40s, apron on, standing behind an empty counter looking at his phone with a concerned expression, natural window light from the side, warm neutral tones, blurred shop interior background, shallow depth of field, photorealistic, lifestyle photography, shot on Sony A7R IV, ultra-detailed
```

**Negativo:** lista padrão + readable fake text, garbled UI text

**Modelo:** FLUX Dev (equivalente real: `marketing_studio_image` @ 2k)
**Aspect Ratio:** 4:5

---

## Slide 3 — O dado/impacto

### Variação A — Celular com resultado em destaque
```
Extreme close-up of a smartphone screen glowing in a dark ambient setting, displaying a blurred search results interface with one organic result highlighted by a soft golden glow and subtle bokeh light particles around it, shallow depth of field, dramatic contrast, cinematic tech photography, ultra-detailed, 8K resolution, shot on Sony A7R IV, professional color grading
```

### Variação B — Laptop em mesa, luz de destaque vinda de cima
```
Overhead shot of a laptop screen glowing on a wooden desk in a dim room, blurred search results interface visible with one result subtly highlighted by a warm light beam from above, soft shadows, moody atmospheric lighting, shallow depth of field, cinematic product photography, ultra-detailed, shot on Phase One, professional color grading
```

**Negativo:** lista padrão + readable real text, legible UI copy

**Modelo:** FLUX Dev (equivalente real: `marketing_studio_image` @ 2k)
**Aspect Ratio:** 4:5

---

## Slide 4 — A solução

### Variação A — Laptop com mockup de site, mesa clean
```
Modern laptop on a minimalist white desk displaying a sleek professional business website homepage with clean grid layout, soft natural window light from the side, small potted plant and coffee cup as props, neutral warm tones, shallow depth of field, product photography, commercial quality, ultra sharp focus on screen, 8K resolution, shot on Sony A7R IV
```

### Variação B — Mãos digitando, ângulo mais próximo
```
Close-up angled shot of a laptop screen showing a modern minimalist website homepage, hands typing on keyboard slightly blurred in foreground, soft studio softbox lighting, clean white and wood-tone workspace, shallow depth of field, editorial product photography, ultra-detailed, professional color grading
```

**Negativo:** lista padrão

**Modelo:** FLUX Dev (equivalente real: `marketing_studio_image` @ 2k)
**Aspect Ratio:** 4:5

---

## Slide 5 — CTA

### Variação A — Mão com celular, WhatsApp
```
Close-up of a hand holding a smartphone displaying a blurred WhatsApp chat interface glow, warm golden hour natural light, blurred cozy home or office background, soft bokeh, inviting warm tones, photorealistic, lifestyle photography, shallow depth of field, shot on Canon R5, ultra-detailed, professional color grading
```

### Variação B — Você (profissional) sorrindo com celular
```
Medium shot of a smiling professional man in his 30s, business casual attire, holding a smartphone with a softly glowing chat interface, sitting at a clean modern desk, natural window light, warm inviting tones, shallow depth of field, lifestyle photography, ultra-detailed, shot on Sony A7R IV, professional color grading
```

**Negativo:** lista padrão + readable real chat text

**Modelo:** FLUX Dev (equivalente real: `marketing_studio_image` @ 2k)
**Aspect Ratio:** 4:5

---

## Execução (Hugo Higgsfield)

- Modelo real usado: `marketing_studio_image`, resolução 2k (ideal pro Instagram — 1080x1350 é o alvo final, 2k já cobre com folga sem gastar crédito de 4k à toa)
- Aspect ratio: 4:5 em todos os slides
- Rodada inicial: Variação A de cada slide (5 imagens, 10 créditos)
- Variação B fica em reserva — só gera se algum slide da rodada A não ficar bom
