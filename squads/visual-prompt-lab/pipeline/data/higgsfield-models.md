# Catálogo de Modelos Higgsfield — Imagem

## Modelos de Imagem

| Modelo | ID | Melhor para | Velocidade | Custo |
|--------|-----|------------|-----------|-------|
| FLUX Schnell | `flux_schnell` | Testes rápidos, protótipos, validação de conceito | ⚡ Muito rápido | 💚 Baixo |
| FLUX Dev | `flux_dev` | Produção padrão, landing pages, cards de serviço | 🏃 Rápido | 💛 Médio |
| FLUX Pro | `flux_pro` | Hero images, material premium, high-end | 🚶 Moderado | 🔴 Alto |
| Stable Diffusion XL | `sdxl` | Estilos artísticos, controle criativo avançado | 🏃 Rápido | 💛 Médio |

## Regras de Uso

- **Conceito em aprovação** → FLUX Schnell
- **Produção padrão** → FLUX Dev
- **Hero image ou material de alta visibilidade** → FLUX Pro (apenas com prompt aprovado)
- **Estilo específico ou controle artístico** → SDXL

## Aspect Ratios para Web

| Ratio | Uso no site |
|-------|------------|
| 16:9 | Hero section, banner, thumbnail, OG image |
| 1:1 | Card quadrado, grid, perfil, favicon large |
| 4:3 | Card de serviço, blog post, galeria |
| 3:4 | Mobile-first, stories, vertical card |
| 21:9 | Hero ultra-wide, faixa decorativa, cinema |
| 9:16 | Reels, TikTok, stories verticais |

## Parâmetros Recomendados por Uso

### Hero Image (acima do dobra)
- Modelo: FLUX Pro
- Aspect ratio: 16:9 ou 21:9
- Qualidade: máxima
- Foco: composição que suporte texto sobreposto (evitar focal point no centro se houver headline)

### Card de Serviço
- Modelo: FLUX Dev
- Aspect ratio: 4:3 ou 1:1
- Qualidade: alta
- Foco: sujeito centralizado, fundo limpo ou desfocado

### Background de Seção
- Modelo: FLUX Dev
- Aspect ratio: 16:9 ou 21:9
- Qualidade: média-alta (vai ser coberto parcialmente por conteúdo)
- Foco: textura, ambiente, padrão — sem focal point humano forte

### Foto de Produto
- Modelo: FLUX Pro ou SDXL
- Aspect ratio: 1:1 ou 4:3
- Qualidade: máxima
- Foco: produto centralizado, fundo neutro ou contextual
