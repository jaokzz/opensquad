---
task: "Auditoria de SEO"
order: 1
input: |
  - target_url: URL do site a auditar
  - business_type: tipo de negócio (academia, clínica, salão, etc.)
  - city: cidade/região do negócio (ex: Iporã do Oeste)
  - gmb_url: link do Perfil da Empresa no Google, se já existir (opcional)
output: |
  - seo_report: relatório priorizado com achados técnicos, locais e de conteúdo
---

# Auditoria de SEO

Audita SEO técnico, local e on-page de um site de cliente. Entrega relatório priorizado por impacto em visibilidade local, com correção específica para cada achado — apontando para o André quando for implementação técnica.

## Process

1. **Checar Perfil da Empresa no Google**: existe? está reivindicado/verificado? categoria correta? NAP (Nome, Endereço, Telefone) preenchido e correto? fotos e horário atualizados? Se não existir, isso é a prioridade absoluta do relatório.
2. **Checar consistência de NAP**: comparar nome, endereço e telefone entre site, Perfil da Empresa, Instagram e WhatsApp Business. Qualquer divergência (mesmo abreviação de rua) é achado.
3. **Auditar on-page**: title tag (< 60 caracteres, palavra-chave primária nos primeiros 40), meta description (150-160 caracteres), H1 único por página, hierarquia de headings, alt text em imagens.
4. **Auditar técnico**: `curl -I {url}` para verificar headers básicos; checar `sitemap.xml` e `robots.txt` acessíveis; verificar `metadataBase` e Open Graph tags no código (se acesso disponível); verificar presença de dado estruturado `LocalBusiness` em JSON-LD.
5. **Cruzar com performance**: puxar Core Web Vitals (LCP, CLS) — se site já foi auditado pelo André, reaproveitar dados; senão, sinalizar necessidade de auditoria de performance antes de considerar SEO técnico completo.
6. **Montar relatório priorizado**: ordenar achados por impacto em visibilidade local — Perfil da Empresa e NAP sempre no topo.

## Output Format

```
# Auditoria de SEO — {cliente}
Data: {YYYY-MM-DD}
URL: {url}
Cidade/região: {cidade}

## 🎯 PRIORIDADE ABSOLUTA (Top 3)
1. {achado com maior impacto em visibilidade local}
2. {segundo}
3. {terceiro}

## SEO Local
✅/❌ Perfil da Empresa no Google reivindicado e verificado
✅/❌ Categoria correta no Perfil da Empresa
✅/❌ NAP consistente entre site, Instagram, WhatsApp e Perfil da Empresa
✅/❌ Fotos e horário de funcionamento atualizados

## SEO On-Page
✅/❌ Title tag < 60 caracteres com palavra-chave primária
✅/❌ Meta description 150-160 caracteres
✅/❌ H1 único e correto por página
✅/❌ Alt text descritivo em imagens principais

## SEO Técnico
✅/❌ sitemap.xml acessível
✅/❌ robots.txt acessível
✅/❌ metadataBase e Open Graph configurados
✅/❌ Dado estruturado LocalBusiness (JSON-LD) presente
✅/❌ Core Web Vitals dentro do padrão (LCP ≤ 2.5s, CLS ≤ 0.1)

## Achados Detalhados

### [ALTO/MÉDIO/BAIXO] {Nome do Achado}
- **Categoria**: Local / On-Page / Técnico
- **Descrição**: {o que foi encontrado}
- **Impacto**: {efeito real na visibilidade — em linguagem de negócio, não jargão}
- **Correção**: {passo específico — ou aponta para André se for implementação técnica}

[repetir para cada achado]

## Conclusão
Nível de prontidão de SEO: {Crítico / Em desenvolvimento / Bom / Ótimo}
Próximo passo: {ação de maior impacto}
```

## Output Example

> Site: site institucional de clínica de estética em Iporã do Oeste

```
# Auditoria de SEO — Clínica Bem Estar
Data: 2026-07-03
URL: https://clinicabemestar.com.br
Cidade/região: Iporã do Oeste, SC

## 🎯 PRIORIDADE ABSOLUTA (Top 3)
1. Perfil da Empresa no Google não reivindicado — clínica invisível no mapa e nas buscas "clínica de estética perto de mim"
2. Telefone divergente entre site (49) e Instagram (bio antiga) — inconsistência de NAP confunde busca local
3. Meta description ausente — Google gera resumo genérico no resultado de busca, reduzindo cliques

## SEO Local
❌ Perfil da Empresa no Google reivindicado e verificado
❌ Categoria correta no Perfil da Empresa (perfil nem existe)
❌ NAP consistente entre site, Instagram, WhatsApp e Perfil da Empresa
❌ Fotos e horário de funcionamento atualizados

## SEO On-Page
✅ Title tag < 60 caracteres com palavra-chave primária ("Clínica Bem Estar — Estética em Iporã do Oeste")
❌ Meta description 150-160 caracteres (ausente)
✅ H1 único e correto por página
❌ Alt text descritivo em imagens principais (imagens sem alt text)

## SEO Técnico
✅ sitemap.xml acessível
✅ robots.txt acessível
✅ metadataBase e Open Graph configurados
❌ Dado estruturado LocalBusiness (JSON-LD) presente
✅ Core Web Vitals dentro do padrão (LCP 1.8s, CLS 0.03 — auditado pelo André)

## Achados Detalhados

### [ALTO] Perfil da Empresa no Google Ausente
- **Categoria**: Local
- **Descrição**: Busca por "clínica de estética Iporã do Oeste" não retorna a clínica no pacote de mapas.
- **Impacto**: A maioria das buscas locais no celular mostra o mapa antes dos resultados orgânicos — a clínica perde a fonte de tráfego local mais barata e de maior intenção de compra.
- **Correção**: Criar e verificar o Perfil da Empresa no Google Business Profile, categoria "Clínica de estética", com endereço, telefone e horário idênticos ao site.

### [ALTO] NAP Inconsistente
- **Categoria**: Local
- **Descrição**: Telefone no rodapé do site é (49) 99999-0000; bio do Instagram ainda mostra número antigo (49) 98888-1111.
- **Impacto**: Inconsistência de NAP reduz a confiança do algoritmo de busca local na legitimidade do negócio.
- **Correção**: Atualizar telefone no Instagram para o mesmo número do site imediatamente.

### [MÉDIO] Meta Description Ausente
- **Categoria**: On-Page
- **Descrição**: Nenhuma tag `<meta name="description">` encontrada na homepage.
- **Impacto**: Google gera um resumo automático do conteúdo da página, quase sempre menos atrativo que um texto pensado para conversão — reduz taxa de clique no resultado de busca.
- **Correção**: Adicionar meta description de 150-160 caracteres com a palavra-chave primária. Encaminhar para André implementar via `metadata` do Next.js.

## Conclusão
Nível de prontidão de SEO: Em desenvolvimento
Próximo passo: Reivindicar o Perfil da Empresa no Google hoje — é gratuito e tem o maior impacto imediato em visibilidade local.
```

## Quality Criteria

- [ ] "Prioridade Absoluta (Top 3)" presente no início, com Perfil da Empresa/NAP priorizados sobre detalhes técnicos secundários
- [ ] Checklists de SEO Local, On-Page e Técnico preenchidas com ✅/❌
- [ ] Cada achado detalhado tem categoria, impacto em linguagem de negócio e correção específica
- [ ] Achados técnicos que exigem código apontam explicitamente para o André
- [ ] Nível de prontidão de SEO declarado na conclusão

## Veto Conditions

Rejeitar e refazer se:
1. Achado listado sem correção específica
2. Perfil da Empresa no Google não verificado como parte da auditoria
3. Relatório não prioriza SEO local sobre detalhes técnicos secundários
