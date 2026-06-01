# Anti-Patterns — Studio Dev Marketing

## Reels e Copywriting

### Nunca Fazer
1. **Começar com "Olá pessoal" ou apresentação**: Os primeiros 2 segundos são o hook. Qualquer coisa que não seja o gancho imediato causa abandono imediato.
2. **Hook genérico sem especificidade**: "Dicas para crescer no Instagram" vs "Por que 90% dos sites afastam clientes antes de ler uma linha". Especificidade gera parada de scroll.
3. **Texto sem quebra de linha no script**: Blocos longos no roteiro dificultam a leitura do criador e resultam em ritmo morto no vídeo.
4. **CTA vago no final**: "Curte e segue" não converte. "Comenta SITE abaixo que eu te mando o checklist de graça" converte.
5. **Copiar formato de TikTok com watermark**: Algoritmo do Instagram penaliza ativamente conteúdo reciclado com marca d'água.
6. **Conteúdo sem foco em nicho**: Posts genéricos para "todo mundo" alcançam ninguém. Joao Tuni fala para empresários que querem site + automação.
7. **Escrever o corpo antes de confirmar o hook**: O usuário deve escolher entre 3 opções de hook antes de qualquer desenvolvimento.

### Sempre Fazer
1. **Hook nos primeiros 2 segundos**: Text overlay ou fala que cria curiosidade ou promete valor imediato.
2. **Completar o loop**: Encerrar o Reel de forma que conecte visualmente de volta ao início para incentivar replay.
3. **CTA específico**: Uma pergunta, um comando direto, um recurso para comentar. Nunca dois CTAs no mesmo post.
4. **Legendas queimadas**: 85% dos usuários do Instagram assistem sem som. Subtítulos são obrigatórios.

---

## Design Visual

### Nunca Fazer
1. **Inter, Roboto, Arial como fonte principal**: Sinalizam output genérico. Usar DM Serif Display, Plus Jakarta Sans ou Outfit.
2. **Gradiente roxo/azul genérico**: O "aesthetic de IA" está saturado. Paleta do squad: off-white, âmbar, near-black.
3. **Texto menor que 26px em Reel (1080×1920)**: Ilegível no feed mobile. Mínimo absoluto 26px para qualquer texto legível.
4. **Slide counter (1/7, 2/7)**: Instagram já exibe navegação nativa. Duplicar polui o design.
5. **Mais de 5 cores no sistema de design**: Cria ruído visual. Paleta do squad tem 4 cores principais.
6. **Posicionamento absolute para layout principal**: Flexbox e Grid são mais confiáveis no Playwright.

### Sempre Fazer
1. **Definir sistema de design antes de criar slides individuais**: Cores, fontes, espaçamento documentados antes do HTML.
2. **Verificar primeiro slide antes de batch render**: Bugs de tipografia e cor na slide 1 propagam para todas.
3. **HTML autocontido**: Sem CSS externo, sem JS, sem imagens por URL. Apenas Google Fonts via @import.

---

## Desenvolvimento Web

### Nunca Fazer
1. **Recomendar WordPress para site com animações complexas**: Performance incompatível com animações GSAP/Three.js profissionais.
2. **Usar CSS transitions padrão (ease, linear)**: Animações premium usam cubic-bezier customizado para física de mola.
3. **Animar propriedades que causam reflow**: Animar width/height/margin dispara reflow. Usar transform e opacity apenas.
4. **Ignorar Core Web Vitals**: LCP > 2.5s e CLS > 0.1 impactam SEO e taxa de rejeição diretamente.

### Sempre Fazer
1. **GPU-accelerated animations**: `will-change: transform` e `transform: translateZ(0)` para animações críticas.
2. **Testar em mobile first**: 70%+ dos visitantes de pequenos negócios acessam pelo celular.
3. **Medir antes de otimizar**: Lighthouse, WebPageTest e DevTools Performance antes de qualquer refatoração de performance.

---

## Segurança

### Nunca Fazer
1. **Aprovar site sem HTTPS forçado**: HTTP em 2026 é bloqueado por browsers modernos e penalizado pelo Google.
2. **Armazenar senhas em plaintext ou MD5**: Usar bcrypt, argon2 ou similar com salt.
3. **Confiar em input do usuário sem sanitização**: Todo input externo é suspeito. Validar no servidor, não só no cliente.
4. **Deixar dependências desatualizadas**: 60%+ dos ataques exploram vulnerabilidades conhecidas em versões antigas.
