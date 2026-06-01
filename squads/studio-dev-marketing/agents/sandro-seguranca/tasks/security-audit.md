---
task: "Auditoria de Segurança"
order: 1
input: |
  - target_url: URL do site ou automação a auditar
  - access_level: public (apenas URL) ou admin (credenciais fornecidas)
  - tech_stack: Stack tecnológica se conhecida
output: |
  - security_report: Relatório priorizado com vulnerabilidades, scores e correções
---

# Auditoria de Segurança

Audita o site ou automação contra OWASP Top 10 e checklist de 2026. Entrega relatório priorizado com severidade, impacto e correção específica para cada vulnerabilidade encontrada.

## Process

1. **Verificar HTTPS e headers**: `curl -I {url}` — verificar HTTPS forçado, Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. Anotar ausências.
2. **Checar dependências**: `npm audit` ou `composer audit` se acesso ao código disponível. Listar CVEs críticos e altos.
3. **Testar inputs**: Enviar `<script>alert(1)</script>` e `' OR '1'='1` em todos os formulários visíveis. Documentar comportamento.
4. **Verificar autenticação**: Se há painel admin, testar com senhas comuns. Verificar presença de MFA. Verificar exposição de rotas autenticadas sem login.
5. **Inspecionar código cliente**: DevTools → Sources — procurar API keys, tokens, URLs internas expostas em JS frontend.
6. **Montar relatório priorizado**: Ordenar por CVSS Score. Incluir "Top 3 Prioridade Absoluta" no início.

## Output Format

```
# Relatório de Segurança — {site/automação}
Data: {YYYY-MM-DD}
Escopo: {o que foi auditado}
Nível de acesso: {public/admin}

## ⚡ PRIORIDADE ABSOLUTA (Top 3)
1. {vulnerabilidade mais crítica com correção em 1 linha}
2. {segunda mais crítica}
3. {terceira mais crítica}

## Vulnerabilidades Encontradas

### [CRÍTICO/ALTO/MÉDIO/BAIXO] {Nome da Vulnerabilidade}
- **CVSS Score:** {X.X}
- **OWASP Categoria:** {A01-A10}
- **Descrição:** {o que foi encontrado e onde}
- **Impacto:** {o que um atacante pode fazer com isso}
- **Correção:** {instrução específica de como corrigir}

[repetir para cada vulnerabilidade]

## Checklist Geral
✅/❌ HTTPS forçado (redirect HTTP→HTTPS)
✅/❌ Content-Security-Policy header
✅/❌ X-Frame-Options header
✅/❌ Dependências sem CVE crítico/alto
✅/❌ Formulários sem XSS reflectida
✅/❌ Admin com MFA ou senha forte

## Conclusão
Nível de risco geral: {Crítico / Alto / Médio / Baixo}
Próximo passo: {ação mais urgente}
```

## Output Example

> Site: landing page WordPress de barbearia

```
# Relatório de Segurança — Barbearia Landing Page
Data: 2026-05-28
Escopo: Frontend público + formulário de contato
Nível de acesso: public

## ⚡ PRIORIDADE ABSOLUTA (Top 3)
1. HTTPS não forçado — adicionar redirect 301 em .htaccess imediatamente
2. WordPress desatualizado (6.4.1) — atualizar para 6.7.x (CVE-2024-6386 corrigido)
3. Formulário de contato sem sanitização — instalar plugin WP Forms com CSRF token

## Vulnerabilidades Encontradas

### [ALTO] HTTPS Não Forçado
- **CVSS Score:** 7.4
- **OWASP Categoria:** A02 - Cryptographic Failures
- **Descrição:** http://sitedobarber.com.br carrega sem redirect para HTTPS. Dados do formulário trafegam em plaintext.
- **Impacto:** Atacante em mesma rede pode interceptar dados do formulário (nome, telefone, email).
- **Correção:** Adicionar ao .htaccess:
  ```
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  ```

### [ALTO] WordPress Desatualizado
- **CVSS Score:** 7.2
- **OWASP Categoria:** A06 - Vulnerable and Outdated Components
- **Descrição:** Versão 6.4.1 instalada. CVE-2024-6386 (RCE via template engine) afeta versões < 6.6.
- **Impacto:** Execução remota de código por atacante não autenticado.
- **Correção:** Atualizar WordPress para ≥ 6.7.x via Dashboard → Atualizações.

## Checklist Geral
❌ HTTPS forçado (redirect HTTP→HTTPS)
❌ Content-Security-Policy header
✅ X-Frame-Options: SAMEORIGIN (presente)
❌ Dependências sem CVE crítico/alto (WordPress 6.4.1 vulnerável)
❌ Formulários sem XSS reflectiva (não testado — acesso limitado)
❌ Admin com MFA (WordPress admin sem 2FA configurado)

## Conclusão
Nível de risco geral: Alto
Próximo passo: Forçar HTTPS e atualizar WordPress hoje — ambos são correções de 5 minutos.
```

## Quality Criteria

- [ ] "Prioridade Absoluta (Top 3)" presente no início
- [ ] Cada vulnerabilidade tem CVSS Score e categoria OWASP
- [ ] Correção específica (não "melhorar a segurança") para cada item
- [ ] Checklist geral preenchida com ✅/❌
- [ ] Nível de risco geral declarado

## Veto Conditions

Rejeitar e refazer se:
1. Vulnerabilidade listada sem correção específica
2. Nenhuma das 6 verificações do checklist geral preenchida
