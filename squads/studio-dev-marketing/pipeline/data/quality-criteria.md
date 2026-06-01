# Quality Criteria — Studio Dev Marketing

## Reels — Critérios de Aprovação

### Roteiro
- [ ] Hook entregue nos primeiros 2 segundos sem apresentação
- [ ] Duração entre 15-30s para máximo completion rate
- [ ] Corte visual a cada 3-5 segundos especificado no script
- [ ] Loop design: final conecta de volta ao início
- [ ] CTA específico e acionável (não genérico)
- [ ] Tom de voz alinhado com o ângulo selecionado
- [ ] Nenhum clichê da lista proibida presente

### Legenda
- [ ] Hook nos primeiros 125 caracteres (antes do "...mais")
- [ ] CTA presente e específico
- [ ] 5-15 hashtags relevantes (não spam de 30)
- [ ] Emojis usados com moderação e propósito

### Cover/Design
- [ ] Hero/título ≥ 56px (Reel 1080×1920)
- [ ] Body text ≥ 32px
- [ ] Caption ≥ 20px
- [ ] Contraste WCAG AA (4.5:1) para todo texto
- [ ] Sistema de design da visual-identity.md seguido
- [ ] HTML autocontido sem dependências externas
- [ ] Sem slide counter

---

## Sites — Critérios de Aprovação (André Animação)

- [ ] Lighthouse Performance Score ≥ 85 (mobile)
- [ ] LCP ≤ 2.5s na conexão 4G simulada
- [ ] CLS ≤ 0.1
- [ ] Animações rodando a 60fps (sem jank)
- [ ] Propriedades animadas: apenas transform e opacity
- [ ] `will-change` aplicado onde necessário
- [ ] Mobile-first: responsivo em 375px, 768px, 1440px
- [ ] Fontes premium (não Inter/Roboto/Arial como primária)

---

## Segurança — Critérios de Aprovação (Sandro Segurança)

- [ ] HTTPS forçado com redirect HTTP→HTTPS
- [ ] Headers de segurança: CSP, X-Frame-Options, X-Content-Type-Options
- [ ] Nenhuma SQL injection detectada via input scanning
- [ ] Nenhuma XSS reflectida detectada
- [ ] Dependências npm/composer sem CVE crítico ou alto
- [ ] MFA disponível para áreas de admin
- [ ] Dados sensíveis não expostos em console/network
- [ ] Backup configurado e testado

---

## Revisão Geral — Escala de Scoring (Caio Crítico)

| Critério | Mínimo para APROVAR |
|---|---|
| Relevância ao brief | 7/10 |
| Tom e voz da marca | 7/10 |
| Qualidade do hook | 7/10 |
| Estrutura e fluxo | 6/10 |
| CTA efetividade | 6/10 |
| Design visual (se aplicável) | 7/10 |

**REPROVAR automaticamente se:** qualquer critério < 4/10 ou média geral < 7/10
