# Exemplos de Output — Visual Prompt Lab

## Exemplo: Clínica Estética — Hero Image

### Input
Cliente: clínica estética em cidade pequena, público feminino 25-45 anos, foco em procedimentos faciais não-invasivos, site Next.js com fundo off-white e accent verde-sálvia.

### Output da Iara

**Direção escolhida: "Luminosidade Pós-Procedimento"**
- Mood: sereno e premium
- Paleta: off-white cremoso · verde-sálvia · dourado suave
- Descrição: mulher de ~35 anos, pele radiante sem maquiagem, expressão relaxada com olhos semi-fechados, luz natural lateral suave iluminando bochechas e testa, fundo desfocado em verde-sálvia. Sensação de spa de luxo acessível.
- Por que funciona: comunica resultado (não procedimento), inspira confiança sem esterilidade clínica, paleta conversa com o site.

### Output da Priya

**Prompt (inglês):**
```
Portrait of a woman in her mid-30s, glowing skin, no visible makeup, relaxed expression with slightly closed eyes, soft peaceful smile, soft natural window light from the left side illuminating cheeks and forehead, close-up portrait from shoulders up, soft sage green blurred background, cream and sage color palette, golden hour warmth in highlights, editorial beauty photography, shot on Sony A7R IV, shallow depth of field, f/1.8
```

**Negativo:**
```
ugly, blurry, watermark, text, logo, extra limbs, deformed hands, cartoon, anime, illustration, plastic skin, overly edited, filter, oversaturated, heavy makeup, medical equipment, white coat, stethoscope
```

**Modelo:** FLUX Pro — hero image premium com alta visibilidade
**Aspect ratio:** 16:9

### Output da Vera

**APROVADO ✅ — Score 9/10**

Dimensões:
- ✅ Relevância: comunica resultado de procedimento sem mostrar o procedimento
- ✅ Composição: rosto centralizado com espaço superior para headline
- ✅ Qualidade técnica: sem artefatos, mãos não visíveis, pele natural
- ✅ Alinhamento criativo: mood sereno e paleta verde-sálvia corretos
- ✅ Viabilidade web: espaço para texto no terço superior da imagem

**Instrução de uso:**
- Arquivo: `hero-tratamento-facial-luz-natural.jpg`
- Seção: hero section, acima do dobra
- CSS: `object-fit: cover; object-position: center 20%;`
- Overlay: sim — gradiente sutil da esquerda para facilitar leitura de headline

---

## Exemplo: Hamburgueria — Card de Produto

### Input
Cliente: hamburgueria artesanal, identidade visual escura e industrial, site com fundo preto e accent vermelho, card 4:3 para seção de cardápio.

### Prompt Aprovado

```
Artisan smash burger, double wagyu beef patties with melted american cheese dripping down sides, caramelized onions, pickles, brioche bun lightly toasted, extreme close-up overhead angle, dramatic Rembrandt side lighting from the right creating depth and shadow, wisps of steam rising, glistening meat surface, dark slate stone surface, moody dark background, food photography, macro lens 100mm, f/2.8, professional food stylist, restaurant quality
```

**Negativo:**
```
blurry, watermark, text, cartoon, illustration, white background, flat lighting, plastic food, unappetizing, pale colors, extra hands
```

**Modelo:** FLUX Pro
**Aspect ratio:** 4:3
