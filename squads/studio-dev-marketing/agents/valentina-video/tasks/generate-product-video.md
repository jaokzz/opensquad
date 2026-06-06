# Task: Generate Product Video (E-commerce / Local Business)

## Objetivo
Gerar vídeo de produto usando imagem de referência para site de cliente local (hambúrgueria, clínica, academia, salão, hotel, etc.).

## Input Esperado
- Foto do produto ou ambiente do negócio (imagem de referência)
- Nome e tipo do negócio
- Efeito desejado: explosão de ingredientes / montagem / produto girando / ambiente do local

## Exemplos de Casos

### Hambúrgueria — Scroll Scrubbing
- Frame 0: hambúrguer montado, câmera estática, fundo branco
- Frame final: todas as camadas separadas e flutuando, espaçadas verticalmente
- Modelo: Seedance 2.0 (com foto do hambúrguer como referência)
- Aspect: 16:9, 6s, sem áudio

### Clínica de Estética — Hero Background
- Ambiente clean e sofisticado, luz natural suave, movimento de câmera lento para a direita
- Fade in elegante, sem texto, sem pessoas
- Modelo: Cinema Studio, 5s, loop perfeito
- Aspect: 16:9, 1080p

### Academia — Animação de Entrada
- Frame 0: equipamento de musculação em repouso
- Frame final: equipamento em movimento de uso, câmera estática
- Modelo: Kling 3.0 para movimento de qualidade
- 6s, 16:9

## Processo
1. Receber imagem de referência do produto/local
2. Identificar efeito desejado
3. Escrever prompt preciso com frame 0 e frame final
4. Usar Seedance 2.0 para produtos com referência de imagem
5. Gerar e avaliar — focar no uso como asset web, não como conteúdo social
6. Entregar com snippet de integração

## Output
- Vídeo em `output/video-produto-{cliente}-{data}.mp4`
- Snippet de integração
- Recomendação de como André deve usar no site do cliente
