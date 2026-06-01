# Domain Framework — Studio Dev Marketing

## Framework de Produção de Reels (Pipeline Principal)

### Fase 1: Briefing
- Definir tema/assunto do Reel
- Identificar objetivo: awareness, autoridade, conversão, engajamento
- Confirmar público-alvo do post (empresário local, empreendedor digital, etc.)

### Fase 2: Geração de Ângulos (Lucas Leads)
- Gerar 5 ângulos emocionalmente distintos para o mesmo tema
- Cada ângulo usa um driver psicológico diferente: medo, oportunidade, educação, contrário, inspiração
- Apresentar com exemplo de hook para cada ângulo
- Aguardar seleção do usuário

### Fase 3: Roteiro e Legenda (Gabriela Gancho)
- Selecionar tom de voz adequado ao ângulo
- Escrever hook (0-2s) que pare o scroll
- Escrever script completo (15-30s ideal) com cortes a cada 3-5s
- Redigir legenda com hook nos primeiros 125 caracteres + CTA específico
- Sugerir áudio/trilha

### Fase 4: Design do Cover (Daniela Design)
- Criar capa visual usando visual-identity.md como sistema de design
- Formato: 1080×1920 (Reel cover)
- HTML autocontido com DM Serif Display + Plus Jakarta Sans
- Verificar legibilidade e contraste antes de entregar

### Fase 5: Revisão (Caio Crítico)
- Avaliar roteiro: hook, estrutura, CTA, completeness
- Avaliar legenda: fold, persuasão, hashtags
- Avaliar cover: identidade, legibilidade, impacto
- Emitir APROVAR/REJEITAR com score por critério

### Fase 6: Publicação
- Usar instagram-publisher skill para publicar Reel
- Confirmar publicação e registrar no runs.md

---

## Framework de Desenvolvimento Web (André Animação — On Demand)

### Stack por Caso de Uso
- **React/Next.js + Motion**: interfaces dinâmicas, apps, landing pages modernas
- **GSAP + ScrollTrigger**: scroll-based storytelling, animações de timeline precisas
- **Three.js + React Three Fiber**: sites 3D, experiências imersivas, portfólios visuais
- **HTML/CSS + Anime.js**: sites leves sem framework, performance máxima

### Processo de Desenvolvimento
1. Entender objetivo do site (vender, capturar lead, portfólio, institucional)
2. Definir stack ideal baseado em complexidade e prazo
3. Planejar arquitetura de componentes e fluxo de animação
4. Implementar com performance como prioridade (Core Web Vitals)
5. Entregar com lighthouse > 90 e animações a 60fps

---

## Framework de Auditoria de Segurança (Sandro Segurança — On Demand)

### OWASP Top 10 Checklist
1. Broken Access Control
2. Cryptographic Failures (SSL, dados em trânsito)
3. Injection (SQL, XSS, command)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Authentication Failures (senhas fracas, sem MFA)
8. Integrity Failures (supply chain)
9. Logging & Monitoring Failures
10. Server-Side Request Forgery

### Priorização
- **Crítico**: execução remota de código, bypass de autenticação, SQL injection
- **Alto**: XSS, CSRF, dados sensíveis expostos
- **Médio**: falta de MFA, HTTPS não forçado, headers de segurança ausentes
- **Baixo**: informações de versão expostas, logs insuficientes
