# Anti-Patterns — Instagram Carousel Squad
**Squad:** instagram-carrossel
**Updated:** 2026-07-01 (adaptado do template original de 2026-03-03)

Este arquivo documenta os erros mais comuns na criação de carrosséis para o perfil profissional do Joao Vitor (sites e automação para pequenos negócios locais).
Cada agente deve consultar este arquivo antes de entregar seu output.

---

## NEVER DO — Copy Anti-Patterns

### 1. Começar o slide 1 com apresentação ou meta-comentário
❌ "Hoje vamos falar sobre automação..."
❌ "Conteúdo: Como ter um site pro seu negócio"
❌ "Joao Vitor apresenta: 5 dicas de WhatsApp"

**Por quê é prejudicial:** O leitor está em modo de scroll rápido. A primeira fração de segundo decide se ele para ou continua. Apresentações e anúncios de intenção não param scroll — dados e hooks concretos param.

✅ "73% dos clientes compram de quem responde primeiro no WhatsApp — não do mais barato. O seu negócio responde em quanto tempo?"

---

### 2. Afirmações factuais sem dado ou fonte
❌ "Ter um site tá mudando tudo pros pequenos negócios."
❌ "Todo mundo já tá automatizando o atendimento agora."
❌ "A maioria dos comércios locais já usa automação."

**Por quê é prejudicial:** Afirmações vagas não convencem ninguém. O dono de negócio já ouviu discurso de venda genérico antes — copy sem evidência é descartado como "papo de vendedor". Cada afirmação factual precisa de número específico ou fonte identificável.

✅ "76% dos consumidores pesquisam uma empresa online antes de decidir comprar, mesmo em negócios locais. (Google Consumer Insights, 2024)"

---

### 3. Copy vazia que fala muito e diz pouco
❌ "Ter presença digital está transformando a forma como os negócios locais se relacionam com seus clientes, criando novas oportunidades que precisamos entender para prosperar neste novo mercado."

**Por quê é prejudicial:** Esse tipo de copy pode ser escrita por qualquer prestador de serviço sobre qualquer tema — ela não diz nada específico. Cada frase deve carregar uma informação ou insight real. Se uma frase pode ser aplicada a qualquer contexto sem modificação, ela não pertence aqui.

✅ "Negócios locais com Google Meu Negócio completo recebem em média 70% mais cliques para 'como chegar'. (Google, 2024)"

---

### 4. Carrossel sem reflexão — só informação
❌ Slide 1 dado → Slide 2 dado → Slide 3 dado → CTA

**Por quê é prejudicial:** Dados sem impacto emocional são esquecidos em minutos. A memória é emocional — a reflexão que "toca na alma" é o que faz o leitor salvar, compartilhar e lembrar. Todo carrossel precisa de um momento de pausa reflexiva antes do CTA.

✅ Inclua sempre um slide de "O que isso significa pro seu negócio na prática" antes do CTA.

---

### 5. CTA genérico desconectado do conteúdo
❌ "Nos siga para mais conteúdo!"
❌ "Acesse o link na bio pra saber mais."
❌ "Salve este post." (sem contexto)

**Por quê é prejudicial:** CTAs genéricos revelam que o criador não pensou no próximo passo do leitor. Um bom CTA conecta o conteúdo do carrossel a uma ação específica e relevante para aquele leitor naquele momento.

✅ "Salva esse carrossel. Da próxima vez que você perder um cliente por demora na resposta, você vai saber exatamente o que fazer."

---

### 6. Mais de 3 linhas de texto visível por slide
❌ Parágrafos completos em slides de carrossel
❌ Mais de 4 pontos por slide
❌ Notas de rodapé e referências densas dentro do slide

**Por quê é prejudicial:** Carrosséis são consumidos em mobile, em movimento. Slides densos frustram o leitor e reduzem o tempo de swipe. Uma ideia por slide, expressa na menor quantidade de palavras possível.

✅ Máximo de 4-5 linhas visíveis. Uma ideia. Um impacto.

---

## NEVER DO — Design Anti-Patterns

### 7. Texto sem contraste suficiente sobre imagens ou fundos complexos
❌ Texto claro sobre foto sem overlay
❌ Texto de cor similar ao fundo
❌ Sombra de texto como única proteção de contraste

**Por quê é prejudicial:** A legibilidade em mobile com brilho variável exige contraste mínimo de 4.5:1 (WCAG AA). Texto ilegível = slide ignorado = carrossel abandonado antes do fim.

---

### 8. Sistema de design inconsistente entre slides
❌ Fonte diferente no slide 3
❌ Cor diferente no slide 5 sem justificativa narrativa
❌ Espaçamento diferente que parece erro não erro intencional

**Por quê é prejudicial:** Inconsistência visual cria a percepção de falta de profissionalismo. Cada slide deve ser imediatamente reconhecível como parte do mesmo carrossel.

---

### 9. Slide 1 sem elemento visual de ancoragem
❌ Apenas texto no slide 1 sem nenhum destaque visual
❌ Fonte muito pequena no slide 1 para dar mais texto
❌ Layout idêntico ao slide 2 — sem diferenciação do hook

**Por quê é prejudicial:** O slide 1 precisa ser visualmente diferente dos demais. Deve ter o maior destaque tipográfico (56px+ para o dado principal) e o máximo de impacto visual. É o único slide que compete contra todo o feed do Instagram.

---

### 10. Dependências externas no HTML além de Google Fonts
❌ Bootstrap, Tailwind, ou qualquer CDN de CSS
❌ Imagens externas sem caminho absoluto verificado
❌ JavaScript de qualquer tipo
❌ Fontes locais referenciadas por caminho relativo

**Por quê é prejudicial:** O rendering via Playwright não tem acesso a dependências externas não carregadas no momento da captura. Qualquer dependência não resolvida quebra o slide silenciosamente sem erro visível.

---

## ALWAYS DO

1. **Verifique o slide 1 como se você fosse um estranho no feed** — Você pararia de scrollar SEM saber quem é o Joao Vitor ou o que ele oferece? Se não, reescreva o hook.

2. **Inclua pelo menos um dado com fonte em cada carrossel** — Dados verificáveis são a diferença entre autoridade e opinião. Uma fonte real transforma o carrossel em referência.

3. **Renderize e verifique o slide 1 antes de renderizar todos os demais** — Um erro de espaçamento ou fonte no slide 1 se propaga por todo o carrossel se não for detectado cedo.

4. **Mantenha a legenda abaixo de 2.000 caracteres** — Mesmo o limite sendo 2.200, hashtags ocupam espaço e a legenda precisa respirar. Mire em 1.500-1.800 caracteres.

5. **Documente o sistema de design antes de criar o primeiro slide HTML** — Cores, fontes, espaçamento. Esse documento é o contrato visual entre todos os slides.

6. **Garanta que o penúltimo slide de conteúdo tenha uma reflexão** — Não apenas informação. Uma pergunta, uma afirmação que incomodar, ou uma perspectiva que o leitor não tinha antes.
