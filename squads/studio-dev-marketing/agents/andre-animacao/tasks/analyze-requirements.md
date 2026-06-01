---
task: "Analisar Requisitos do Site"
order: 1
input: |
  - user_brief: Descrição do site, objetivo, público e prazo
  - budget_context: Contexto de orçamento se mencionado
output: |
  - requirements_doc: Análise de requisitos com stack recomendada e justificativa
---

# Analisar Requisitos do Site

Analisa o briefing do site para identificar objetivos reais, recomendar a stack ideal para animações e estabelecer escopo técnico antes de qualquer linha de código.

## Process

1. **Extrair objetivo de negócio**: O que o site precisa fazer em termos de negócio? Vender, capturar lead, portfólio, institucional, e-commerce? O objetivo define tudo.
2. **Identificar necessidade de animação**: Qual nível de animação é necessário? Micro-interações (hover, scroll reveal) → Motion suficiente. Scroll storytelling → GSAP. 3D/WebGL → Three.js.
3. **Avaliar prazo e complexidade**: Site em 7 dias não é o mesmo que site em 30 dias. Prazo curto → stack mais simples com impacto visual máximo.
4. **Recomendar stack com justificativa**: Apresentar a stack ideal e explicar por que para ESTE projeto específico, não para sites em geral.
5. **Listar o que está fora do escopo**: O que não será feito (evita scope creep e expectativas erradas).

## Output Format

```
# Análise de Requisitos — {nome do projeto/cliente}

## Objetivo de Negócio
{o que o site precisa entregar em termos de resultado}

## Stack Recomendada
- Framework: {Next.js / Vite+React / HTML puro}
- Animação: {Motion / GSAP / Three.js / Anime.js}
- Styling: {Tailwind / CSS Modules / Styled Components}
- Justificativa: {por que essa stack para esse projeto específico}

## Escopo
✅ Incluso: {lista do que será entregue}
❌ Fora do escopo: {lista do que não está incluso}

## Estimativa
- Prazo: {N dias}
- Complexidade: {Simples / Média / Alta}
- Principais riscos: {o que pode atrasar}
```

## Output Example

> Briefing: "Quero um site para minha barbearia com animações legais, precisa ter formulário de agendamento, em 7 dias"

```
# Análise de Requisitos — Barbearia (Landing Page)

## Objetivo de Negócio
Capturar agendamentos online e comunicar profissionalismo para clientes da cidade.
KPI principal: número de agendamentos via formulário/WhatsApp.

## Stack Recomendada
- Framework: Next.js (App Router)
- Animação: Motion (ex-Framer Motion) — micro-interações e scroll reveal
- Styling: Tailwind CSS
- Justificativa: Prazo de 7 dias favorece Next.js por velocidade de desenvolvimento.
  Motion cobre 100% das necessidades de animação deste projeto sem overhead de GSAP.
  Three.js seria overkill — não há 3D no escopo.

## Escopo
✅ Landing page responsiva (mobile-first)
✅ Seções: Hero, Serviços, Galeria, Sobre, Agendamento
✅ Animações scroll-reveal nos serviços e galeria
✅ Formulário de agendamento com integração WhatsApp
✅ Core Web Vitals ≥ 85 mobile

❌ Fora do escopo: sistema de agendamento com calendário (complexidade alta)
❌ Fora do escopo: CMS para o cliente editar conteúdo
❌ Fora do escopo: integração com sistema de pagamento

## Estimativa
- Prazo: 7 dias
- Complexidade: Média
- Principais riscos: Galeria de fotos — cliente precisa fornecer imagens em até D+2
```

## Quality Criteria

- [ ] Stack recomendada com justificativa específica para o projeto (não genérica)
- [ ] Objetivo de negócio identificado (não apenas "site bonito")
- [ ] Escopo incluído E fora do escopo listados
- [ ] Estimativa de prazo realista

## Veto Conditions

Rejeitar e refazer se:
1. Stack recomendada sem justificativa para o projeto específico
2. Objetivo de negócio ausente ou vago ("ter um site profissional")
