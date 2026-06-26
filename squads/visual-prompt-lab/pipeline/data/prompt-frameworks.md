# Frameworks de Prompt — Engenharia de Prompts de Imagem

## Estrutura Padrão (SEMPRE em inglês)

```
[SUJEITO PRINCIPAL + atributos] + [AÇÃO/POSE/ESTADO] + [COMPOSIÇÃO/ENQUADRAMENTO] + [ILUMINAÇÃO] + [PALETA/TONS] + [FUNDO/AMBIENTE] + [ESTILO/REFERÊNCIA] + [QUALIDADE TÉCNICA]
```

## Negativos Padrão

```
ugly, blurry, low quality, watermark, text, logo, signature, extra limbs, deformed hands, deformed fingers, missing fingers, extra fingers, cropped, out of frame, cartoon, anime, illustration, painting, drawing, render, 3d, jpeg artifacts, noise, grainy, oversaturated, overexposed
```

## Sufixos de Qualidade por Categoria

### Fotorrealista Premium
```
photorealistic, ultra-detailed, 8K resolution, professional photography, shot on Sony A7R IV, RAW format, professional color grading, sharp focus
```

### Editorial / Revista
```
editorial photography, magazine quality, professional color grading, clean composition, published in Vogue
```

### Produto / E-commerce
```
product photography, studio lighting, sharp focus throughout, commercial quality, white seamless background, perfect product detail
```

### Lifestyle / Marca
```
lifestyle photography, natural lighting, candid authentic moment, warm tones, shot on film, golden hour
```

### Arquitetura / Interior
```
architectural photography, wide angle lens, symmetrical composition, HDR, professional lighting, interior design magazine
```

### Food / Gastronômico
```
food photography, macro lens, shallow depth of field, dramatic side lighting, steam, glistening surface, professional food stylist
```

## Templates de Prompt por Caso de Uso

### Hero Image com Pessoa (Clínica/Serviço)
```
[descrição da pessoa — não "mulher jovem" mas "woman in her 30s, natural makeup, soft expression, relaxed shoulders], [pose/estado], close-up portrait, [iluminação lateral específica], [paleta de tons], [fundo desfocado com cor], photorealistic, editorial photography, professional color grading, shot on Canon R5
```

### Produto em Contexto
```
[produto específico], [contexto/ambiente onde seria usado], [props de apoio — não genéricos], close-up, [iluminação específica], [paleta], shallow depth of field, product photography, commercial quality, ultra sharp focus on product, 8K
```

### Background Abstrato / Textura
```
[textura ou material específico — "weathered concrete", "silk fabric in motion", "water surface ripple"], [estado/movimento], macro photography, [iluminação que ressalta textura], [paleta de tons], no focal point, seamless pattern, abstract, professional photography
```

### Ambiente / Interior
```
[ambiente específico com adjetivos — não "sala moderna" mas "minimalist waiting room with warm oak panels"], [hora do dia e qualidade de luz], [elementos de composição — plantas, objetos específicos], wide angle, architectural photography, [iluminação natural/artificial], [paleta quente/fria], shot on Phase One, ultra detailed
```

### Gastronomia
```
[prato específico com todos os elementos — "wagyu burger with melted cheddar, caramelized onions, brioche bun"], [estado — "just assembled", "steam rising", "cheese dripping"], extreme close-up, [iluminação lateral dramática], [fundo e superfície — "dark slate surface", "rustic wood board"], food photography, macro lens, f/2.8, professional food stylist, restaurant quality
```

## Modificadores de Enquadramento

| Enquadramento | Quando usar |
|---------------|------------|
| Extreme close-up / Macro | Textura, produto, detalhe de comida |
| Close-up | Rosto, expressão, produto de beleza |
| Medium shot | Pessoa + contexto, serviço em ação |
| Full body | Moda, arquitetura humana |
| Wide shot | Ambiente, arquitetura, paisagem |
| Bird's eye / Overhead | Gastronomia, mesa posta, produto em contexto |
| Low angle | Produto imponente, arquitetura dramática |
| Dutch angle | Criativo, editorial, dinâmico |

## Modificadores de Iluminação

| Iluminação | Efeito | Melhor para |
|------------|--------|------------|
| Natural window light | Suave, íntimo, orgânico | Lifestyle, beleza, clínica |
| Golden hour | Quente, emotivo, premium | Exterior, lifestyle, gastronomia |
| Rembrandt | Drama, profundidade, caráter | Gastronomia, editorial, consultoria |
| Studio softbox frontal | Clean, profissional, sem sombra | Produto, e-commerce |
| Backlit / Rim light | Silhueta, contorno, drama | Moda, lifestyle premium |
| Neon / LED | Tecnológico, urbano, night | Tech, startup, entretenimento |
| Overcast / diffused | Flat, editorial, clean | Arquitetura, produto técnico |
