---
type: checkpoint
---

# Step 08: Aprovar Mockup + Animação

O mockup está renderizado como imagem real em `output/mockup-preview/{cliente}-desktop.png` e `output/mockup-preview/{cliente}-mobile.png` — **abra as duas imagens primeiro**, antes de ler qualquer texto. A aprovação se dá pela imagem, não pela descrição. `output/mockup-handoff.md` é só o detalhamento técnico (tokens, animation spec) que o Rafael usa depois — não é o que você está aprovando aqui.

Este é o último checkpoint antes do código começar a ser escrito. Depois de aprovado, o Rafael Render implementa exatamente o que está na imagem + na spec. Qualquer mudança depois desse ponto significa retrabalho de código, não só de design.

Revise olhando as imagens:
1. Isso está bonito? Se a resposta não for um "sim" imediato olhando pra imagem, não aprove — volte pro Step 07 pra ajustar o HTML e re-renderizar.
2. O mockup em desktop e mobile representa fielmente a marca do cliente?
3. Todos os estados interativos importantes foram desenhados (mesmo que estáticos na imagem)?
4. As animações especificadas na spec fazem sentido para o tom do negócio (uma clínica não precisa da mesma intensidade de movimento que uma marca de streetwear)?

Aprova como está, ou quer ajustar algo antes de liberar para desenvolvimento?
