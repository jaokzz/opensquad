# Auditoria de SEO — Armazém Bar e Burguer
Data: 2026-07-03
URL analisada (código-fonte): `clientes/sites-ipora/armazem-site/site` — deploy em `https://armazem-bar-burguer.vercel.app`
Cidade/região: Iporã do Oeste, SC

## 🎯 PRIORIDADE ABSOLUTA (Top 5)

1. **Site ainda está no subdomínio gratuito da Vercel** (`armazem-bar-burguer.vercel.app`) — sem domínio próprio, o negócio perde autoridade de domínio local, credibilidade em resultados de busca e passa um link feio quando compartilhado no WhatsApp/Instagram.
2. **Zero `<h1>` na página inteira** — nenhuma seção usa heading de nível 1 (o Hero mostra só a logo em imagem). Isso é a falha on-page mais grave: o Google não tem um sinal textual claro do assunto principal da página.
3. **Nenhum dado estruturado (JSON-LD)** — o código já tem tudo pronto para isso (endereço, geo, horário, cardápio com preços, nota 4,6 com 142 avaliações) e nada está marcado como `Restaurant`/`FoodEstablishment` para o Google entender e exibir rich snippets.
4. **Sem `sitemap.xml` e sem `robots.txt`** — nenhum dos dois existe no projeto (`app/sitemap.ts` e `app/robots.ts` ausentes).
5. **Possível inconsistência de nome entre marca e Perfil da Empresa no Google** — o link de avaliações no código aponta para "Armazém+Bar+e+**Burger**" (sem "u"), enquanto a marca em todo o site é "Armazém Bar e **Burguer**". Precisa confirmar o nome exato cadastrado no Perfil da Empresa.

## SEO Local

| Item | Status | Observação |
|---|---|---|
| Perfil da Empresa no Google | 🟡 Provavelmente existe | O site referencia avaliações reais (4,6 · 142 avaliações, nomes reais de clientes) e um link direto de "Armazém Bar e Burger" no Google Maps — indício forte de que o perfil já existe e está ativo. Não foi possível confirmar reivindicação/categoria/fotos sem acesso direto ao painel. |
| Nome consistente (marca vs. Perfil) | ❌ A confirmar | "Burguer" (site) vs. "Burger" (URL do Maps) — checar o nome exato cadastrado. |
| NAP consistente (site) | ✅ | Endereço "Av. Gustavo Fetter, 433 · Centro · Iporã do Oeste/SC" e telefone "(49) 99181-5140" idênticos em `Info.tsx` e `Footer.tsx`. |
| NAP consistente com Instagram/WhatsApp | 🟡 Não verificável no código | Instagram `@armazemburgers` e WhatsApp `554991815140` estão no código — confirmar se batem com o que está publicado nos perfis reais. |
| Mapa embutido | ✅ | Iframe do Google Maps com endereço correto em `Info.tsx`. |
| Prova social local | ✅ | Avaliações reais exibidas na página (`Reviews.tsx`) — ótimo sinal de confiança, mas ainda não é dado estruturado (ver Prioridade #3). |

## SEO On-Page

| Item | Status | Observação |
|---|---|---|
| Title tag | ✅ | "Armazém Bar e Burguer — Iporã do Oeste" — 40 caracteres, palavra-chave de cidade incluída, dentro do limite de 60. |
| Meta description | 🟡 Curta | "Burger & Pizza artesanal de respeito. Terça a domingo a partir das 18h. Iporã do Oeste · SC." — ~95 caracteres, bem abaixo do ideal de 150-160. Espaço desperdiçado que poderia reforçar mais termos de busca ("hambúrguer artesanal", "reservas", etc). |
| H1 único por página | ❌ | Nenhum `<h1>` encontrado em nenhum componente. Hero usa apenas uma `<img>` com a logo. |
| Hierarquia de headings | 🟡 | H2 usado corretamente em Highlights, Menu, Reviews, Info — mas todos "soltos" sem um H1 pai. |
| Alt text de imagens | 🟡 Parcial | Logo tem alt descritivo ("Armazém Bar e Burguer"); fotos de hambúrguer no cardápio usam só o nome do prato (`alt="Professor"`, `alt="Bogota"`) sem contexto — perde oportunidade de reforçar "hambúrguer artesanal Iporã do Oeste". Imagem de fundo do Hero tem `alt=""` corretamente (decorativa). |
| Idioma declarado | ✅ | `<html lang="pt-BR">` correto. |
| Open Graph | 🟡 Parcial | `title`, `description`, `image`, `type`, `locale` configurados — falta `og:url` explícito e não há Twitter Card (`twitter:card` etc.), o que é secundário mas fácil de adicionar. |
| Canonical URL | ❌ | Não há `alternates.canonical` explícito no `metadata` do `layout.tsx`. |

## SEO Técnico

| Item | Status | Observação |
|---|---|---|
| `sitemap.xml` | ❌ Ausente | Não existe `app/sitemap.ts` nem `public/sitemap.xml`. |
| `robots.txt` | ❌ Ausente | Não existe `app/robots.ts` nem `public/robots.txt`. |
| `metadataBase` | ✅ configurado, ⚠️ aponta para domínio provisório | `NEXT_PUBLIC_SITE_URL=https://armazem-bar-burguer.vercel.app` no `.env.local` — funciona, mas está preso ao subdomínio da Vercel (ver Prioridade #1). |
| Dado estruturado (JSON-LD) | ❌ Ausente | Nenhuma marcação `schema.org` no projeto. |
| Renderização do conteúdo | 🟡 Funcional, mas frágil | `app/page.tsx` é 100% client component (`"use client"`), com o conteúdo controlado por `visibility: hidden` até o `Loader` disparar `onReveal()` (~2-3s de animação). O Next.js ainda faz SSR do HTML, e o Googlebot executa JS e espera a renderização — então o Google deve conseguir indexar normalmente. O risco real é com bots que **não** executam JavaScript (alguns crawlers de preview de link, ferramentas de SEO mais simples) — esses veem o conteúdo real atrasado ou ausente. |
| Otimização de imagens | ❌ | Nenhuma imagem usa o componente `next/image` — todas são `<img>` puro. Perde otimização automática de formato (AVIF/WebP responsivo), lazy loading nativo e prevenção de layout shift. Isso afeta Core Web Vitals, que é fator de ranqueamento. |
| Imagens sem `width`/`height` | 🟡 | Logo do Hero e do Navbar não têm `width`/`height` explícitos — risco de CLS (Cumulative Layout Shift) nessas áreas. |
| HTTPS | ✅ (assumido via Vercel) | Deploy na Vercel força HTTPS por padrão. |
| Estrutura de URL | ℹ️ Site de página única | Site é um one-pager com âncoras internas (`#cardapio`, `#info`, `#highlights`). Isso é uma escolha de arquitetura razoável para um restaurante pequeno — não é um erro — mas significa que o site só pode competir por 1-2 intenções de busca principais na home, sem páginas dedicadas indexáveis separadamente. |

## Achados Detalhados

### [CRÍTICO] Ausência de Domínio Próprio
- **Categoria**: Local / Técnico
- **Descrição**: O site está publicado em `armazem-bar-burguer.vercel.app`, um subdomínio genérico da plataforma de hospedagem.
- **Impacto**: Subdomínios `.vercel.app` carregam menos autoridade e confiança percebida (usuário e algoritmo) do que um domínio próprio com o nome da marca. Também gera um link menos profissional ao compartilhar no WhatsApp/Instagram, canais que são o principal meio de contato do negócio.
- **Correção**: Registrar um domínio `.com.br` com o nome da marca (ex: `armazembarburguer.com.br`), apontar para o deploy da Vercel, e atualizar `NEXT_PUBLIC_SITE_URL` para o novo domínio. Encaminhar para o André implementar.

### [ALTO] Nenhum H1 na Página
- **Categoria**: On-Page
- **Descrição**: Revisão de todos os componentes (`Hero`, `Highlights`, `Menu`, `Reviews`, `Info`, `Footer`) não encontrou nenhuma tag `<h1>`. A logo do Hero é apenas uma imagem, sem heading textual equivalente.
- **Impacto**: H1 é um dos sinais mais fortes de "sobre o que é esta página" para o Google. Sem ele, o algoritmo depende inteiramente do title tag e do texto corrido para entender o tema — um risco desnecessário.
- **Correção**: Adicionar um `<h1>` visualmente integrado ao Hero (pode ser estilizado como a logo, mas em texto real — ex: `<h1 className="sr-only">Armazém Bar e Burguer — Hambúrguer Artesanal e Pizza em Iporã do Oeste</h1>` se quiser manter a logo como elemento visual principal, ou substituir a logo por um H1 estilizado com a fonte Bebas Neue). Encaminhar para o André.

### [ALTO] Sem Dado Estruturado (Schema.org)
- **Categoria**: Técnico / Local
- **Descrição**: Nenhuma marcação JSON-LD no `layout.tsx` ou em qualquer componente, apesar de o código já conter todos os dados necessários: endereço, horário de funcionamento (`Info.tsx`), cardápio completo com preços (`Menu.tsx`) e nota agregada de avaliações (`Reviews.tsx`, 4,6 · 142 avaliações).
- **Impacto**: Sem `Restaurant`/`FoodEstablishment` + `AggregateRating` + `OpeningHoursSpecification`, o Google não pode exibir rich snippets (estrelas, horário "aberto agora", faixa de preço) diretamente no resultado de busca — um diferencial visual enorme contra concorrentes sem essa marcação.
- **Correção**: Adicionar um bloco `<script type="application/ld+json">` no `layout.tsx` com schema `Restaurant`, reaproveitando os dados já existentes em `HOURS` (`Info.tsx`) e `ALL_REVIEWS`/nota 4,6 (`Reviews.tsx`). Encaminhar para o André — é implementação pontual, baixo esforço, alto retorno.

### [ALTO] `sitemap.xml` e `robots.txt` Ausentes
- **Categoria**: Técnico
- **Descrição**: Nenhum dos dois arquivos existe no projeto Next.js (nem via `app/sitemap.ts`/`app/robots.ts`, nem como arquivo estático em `public/`).
- **Impacto**: Sem `robots.txt`, não há controle explícito de rastreamento (o Google assume tudo permitido por padrão, o que funciona aqui, mas não é best practice deixar implícito). Sem `sitemap.xml`, o Google não tem um mapa explícito das URLs do site para descoberta — mais relevante se o site crescer além de uma página.
- **Correção**: Criar `app/sitemap.ts` e `app/robots.ts` (padrão Next.js App Router, gera os arquivos automaticamente no build). Esforço mínimo. Encaminhar para o André.

### [MÉDIO] Meta Description Curta Demais
- **Categoria**: On-Page
- **Descrição**: A meta description atual tem ~95 caracteres, bem abaixo do intervalo ideal de 150-160.
- **Impacto**: Espaço de exibição no resultado de busca subutilizado — uma descrição mais completa aumenta a taxa de clique ao dar mais motivos concretos para o usuário escolher o Armazém.
- **Correção sugerida**: "Burger e pizza artesanal em Iporã do Oeste, SC. 13 hambúrgueres autorais, pizzas até 4 sabores, drinks e caipirinhas na hora. Terça a domingo, a partir das 18h. Nota 4,6 no Google." (≈180 caracteres — ajustar para 160).

### [MÉDIO] Imagens Sem `next/image`
- **Categoria**: Técnico
- **Descrição**: Todas as imagens do site usam `<img>` nativo em vez do componente `next/image` do Next.js.
- **Impacto**: Perde otimização automática de formato (AVIF/WebP conforme o navegador), redimensionamento responsivo automático e, em alguns casos, prevenção de layout shift — tudo isso afeta Core Web Vitals (LCP/CLS), que é fator de ranqueamento direto do Google.
- **Correção**: Migrar `<img>` para `next/image` nos componentes, começando pelas imagens acima da dobra (Hero, logo). Encaminhar para o André — cruzar com o checklist de performance dele.

### [BAIXO] Alt Text Genérico no Cardápio
- **Categoria**: On-Page
- **Descrição**: Fotos de hambúrguer usam `alt={item.name}` — ex: `alt="Professor"`, `alt="Bogota"` — apenas o nome do prato, sem contexto.
- **Impacto**: Perda pequena de oportunidade de reforçar palavras-chave relacionadas (ex: "hambúrguer artesanal") via alt text, e menos contexto para buscas de imagem do Google.
- **Correção**: Ajustar para algo como `alt="Hambúrguer artesanal Professor — Armazém Bar e Burguer"`.

### [BAIXO] Canonical URL Não Declarado
- **Categoria**: Técnico
- **Descrição**: `metadata` em `layout.tsx` não define `alternates.canonical`.
- **Impacto**: Baixo risco no estado atual (site de página única, sem parâmetros de URL duplicando conteúdo), mas é boa prática declarar explicitamente.
- **Correção**: Adicionar `alternates: { canonical: "/" }` ao objeto `metadata`.

## Recomendações por Destino

**Para o André Animação (implementação técnica)** — nesta ordem de prioridade:
1. Configurar domínio próprio e atualizar `NEXT_PUBLIC_SITE_URL`
2. Adicionar H1 real no Hero (mesmo que visualmente discreto)
3. Implementar JSON-LD `Restaurant` com dados já existentes no código (horário, cardápio, avaliações)
4. Criar `app/sitemap.ts` e `app/robots.ts`
5. Migrar imagens para `next/image`, com `width`/`height` explícitos na logo

**Para o Marco Maestro / João Vitor (ação fora do código)**:
- Confirmar/reivindicar o Perfil da Empresa no Google e checar se o nome está exatamente como "Armazém Bar e Burguer" (verificar divergência "Burger" vs. "Burguer" encontrada no link de avaliações)
- Conferir se NAP no Instagram (`@armazemburgers`) e WhatsApp bate exatamente com o site

## Conclusão

**Nível de prontidão de SEO: Em desenvolvimento**

O site tem boas fundações de SEO local implícitas — endereço e telefone consistentes, prova social real (avaliações verdadeiras), title tag bem otimizado com a cidade, mobile-first e HTTPS via Vercel. Mas para competir de verdade pelas buscas "hambúrguer Iporã do Oeste", "pizza Iporã do Oeste" e "onde comer perto de mim" na região, faltam os fundamentos técnicos que fazem o Google entender e destacar o site: H1, dado estruturado e domínio próprio são os três itens de maior impacto e menor esforço para implementar.

**Próximo passo de maior impacto**: registrar um domínio `.com.br` e implementar o schema `Restaurant` em JSON-LD — juntos, resolvem a Prioridade #1 e #3 e criam a base para o site aparecer com estrelas, horário e faixa de preço direto no resultado de busca do Google.

## Implementação (2026-07-03)

Itens corrigidos no código, sem nenhuma alteração visual (verificado via `pnpm build` com sucesso + inspeção do HTML estático gerado):

- ✅ **H1 real** adicionado no Hero (`sr-only` — invisível, só para buscadores/leitores de tela; a logo continua sendo o elemento visual)
- ✅ **JSON-LD `Restaurant`** adicionado em `layout.tsx` — endereço, geo, horário (`openingHoursSpecification`), nota agregada (4,6/142 avaliações), telefone, faixa de preço, cardápio
- ✅ **`app/sitemap.ts`** e **`app/robots.ts`** criados
- ✅ **Meta description** expandida (~95 → ~165 caracteres, mais palavras-chave locais)
- ✅ **Canonical URL** (`alternates.canonical`) e **Twitter Card** adicionados
- ✅ **Alt text** das fotos de hambúrguer no cardápio, de `alt={nome}` para descrição completa com contexto local
- ✅ **`width`/`height`** adicionados às logos (Hero, Navbar) e corrigidos no Footer (tinha proporção errada 220×62 vs. real 824×555 — causava reserva de espaço incorreta/CLS antes do carregamento da imagem, agora corrigido)

**Não implementado (fora do escopo de código ou risco visual):**
- ❌ **Domínio próprio** — exige registro/compra e configuração de DNS na Vercel, ação do João Vitor fora do código
- ❌ **Migração para `next/image`** — resolveria mais alguns pontos de performance, mas foi deixado de fora por risco de alterar o visual (sizing/aspect-ratio automático do componente pode diferir do `<img>` atual); pode ser feito depois se o João Vitor topar validar visualmente
- ⚠️ **Nome "Burger" vs. "Burguer"** no link de avaliações do Google — não foi alterado no código porque é o Place ID/URL real do Perfil da Empresa; precisa ser confirmado/corrigido diretamente no Google, não no site
