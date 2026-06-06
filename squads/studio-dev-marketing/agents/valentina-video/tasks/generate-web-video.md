# Task: Generate Web Video Asset

## Objetivo
Gerar um clipe de vídeo IA de 4-8 segundos para uso como asset em site desenvolvido pelo André Animação.

## Input Esperado
- Descrição do que o vídeo deve mostrar
- Uso pretendido: scroll scrubbing / hero background / animação de entrada / loop de produto
- Imagem de referência (opcional, mas melhora consistência)
- Aspect ratio: 16:9 (hero/desktop) / 9:16 (mobile) / 1:1 (produto)

## Processo

1. **Confirmar uso** — scroll scrubbing tem câmera estática; hero tem movimento suave; animação de entrada tem início e fim claros

2. **Selecionar modelo**
   - Conceito/protótipo → Veo 3.1 Lite (4s, 720p)
   - Produto com referência → Seedance 2.0
   - Hero cinematográfico → Cinema Studio ou Kling 3.0

3. **Escrever prompt** com:
   - Frame 0: estado inicial exato
   - Frame final: estado final exato
   - Estilo de câmera: estática / movimento lento / zoom out lento
   - Ambiente: fundo neutro / estúdio / ambiente real
   - Lighting: estúdio limpo / dramatic shadows / natural light

4. **Gerar via Higgsfield MCP** — `generate_audio: false`, resolução mínima 720p

5. **Avaliar resultado** — movimento estável? início e fim limpos para o uso pretendido?

6. **Entregar** com snippet de integração HTML/JS para André

## Output
- Arquivo de vídeo em `output/video-{descricao}-{data}.mp4`
- Snippet de integração para André
- Nota técnica: como o vídeo funciona e como usar
