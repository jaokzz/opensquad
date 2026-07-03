---
task: "Construir Sistema de Design"
order: 2
input: |
  - dna_visual: DNA visual aprovado (3 palavras + referências + direção de paleta/tipografia)
output: |
  - design_system: Tokens completos de cor, tipografia, espaçamento, raio e sombra prontos para handoff
---

# Construir Sistema de Design

Trava todos os tokens visuais antes de qualquer wireframe ser desenhado. Sem isso, cada seção do site nasce inconsistente e o Rafael Render precisa adivinhar valores no meio da implementação.

## Process

1. **Converter a direção de paleta do DNA em tokens semânticos**: background, surface, text-primary, text-secondary, accent (único), border — nunca cor solta sem nome.
2. **Verificar contraste WCAG AA (4.5:1)** entre text-primary e background antes de fechar a paleta.
3. **Definir a escala tipográfica completa**: família + peso + tamanho + line-height para H1, H2, H3, body, caption, label — baseado na direção tipográfica do DNA.
4. **Definir espaçamento em escala de 4px** (4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192) e os níveis de raio (pílula para botões/badges, squircle para cards).
5. **Definir 3 níveis de sombra**, sempre tingidos na cor do fundo, nunca cinza genérico.
6. **Documentar tudo em CSS custom properties** prontas para o Rafael copiar direto no projeto.

## Output Format

```markdown
# Design System — {Cliente}

## Paleta
--bg: {hex}
--surface: {hex}
--text-primary: {hex} (contraste {X}:1 sobre --bg)
--text-secondary: {hex}
--accent: {hex}
--border: {hex}

## Tipografia
--font-display: {família}
--font-body: {família}
H1: {tamanho}/{line-height} {peso}
H2: {tamanho}/{line-height} {peso}
Body: {tamanho}/{line-height} {peso}
Caption: {tamanho}/{line-height} {peso}

## Espaçamento
{escala completa}

## Raio
Botões/badges: {valor}
Cards: {valor}

## Sombra
Subtle: {valor}
Medium: {valor}
Strong: {valor}
```

## Output Example

> A partir do DNA "Urbano · Encorpado · Noturno" (Armazém Bar e Burguer)

```markdown
# Design System — Armazém Bar e Burguer

## Paleta
--bg: #0D0B09
--surface: #17140F
--text-primary: #F0EAE0 (contraste 14.2:1 sobre --bg)
--text-secondary: #F0EAE099
--accent: #E8890C
--border: #F0EAE014

## Tipografia
--font-display: Cabinet Grotesk
--font-body: General Sans
H1: clamp(2.5rem, 7vw, 6.5rem)/0.95 800
H2: clamp(2rem, 4vw, 3.5rem)/1.05 700
Body: 1.0625rem/1.6 400
Caption: 0.75rem/1.4 600 uppercase tracking-[0.2em]

## Espaçamento
4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192 — seções em py-24 (mobile: py-16)

## Raio
Botões/badges: rounded-full
Cards: rounded-[2rem]

## Sombra
Subtle: 0 8px 24px -8px rgba(232,137,12,0.08)
Medium: 0 16px 40px -12px rgba(0,0,0,0.4)
Strong: 0 24px 64px -16px rgba(0,0,0,0.6)
```

## Quality Criteria

- [ ] Todos os tokens de cor nomeados semanticamente, nenhuma cor solta
- [ ] Contraste WCAG AA (4.5:1) verificado e documentado para text-primary sobre bg
- [ ] Escala tipográfica completa para H1-H3/body/caption com tamanho e line-height
- [ ] Espaçamento na escala de 4px, sem valores fora da escala
- [ ] Sombras tingidas na cor do fundo/acento, nunca cinza puro genérico

## Veto Conditions

Rejeitar e refazer se:
1. Houver mais de 1 cor de acento saturada na paleta
2. O contraste texto/fundo não atingir 4.5:1 e isso não for corrigido antes do handoff
