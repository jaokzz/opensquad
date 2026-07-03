---
execution: inline
agent: web-design-studio/agents/vitoria-visual
inputFile: squads/web-design-studio/output/dna-visual.md
outputFile: squads/web-design-studio/output/design-system.md
---

# Step 04: Sistema de Design

## Context Loading

Load these files before executing:
- `squads/web-design-studio/output/dna-visual.md` — DNA visual aprovado no checkpoint anterior
- `pipeline/data/visual-identity.md` — estrutura de tokens padrão do squad

## Instructions

### Process
1. Converter a direção de paleta do DNA em tokens semânticos (bg, surface, text-primary, text-secondary, accent, border)
2. Verificar contraste WCAG AA (4.5:1) entre text-primary e bg antes de fechar a paleta
3. Definir a escala tipográfica completa (H1-H3, body, caption) com tamanho, peso e line-height
4. Definir espaçamento em escala de 4px e níveis de raio (pílula para botões, squircle para cards)
5. Definir 3 níveis de sombra tingidos na cor do fundo/acento
6. Salvar tudo como CSS custom properties em `output/design-system.md`

## Output Format

```markdown
# Design System — {Cliente}

## Paleta
--bg: {hex} | --surface: {hex} | --text-primary: {hex} (contraste {X}:1) | --accent: {hex}

## Tipografia
--font-display: {família} | --font-body: {família}
H1: {tamanho}/{line-height} {peso}

## Espaçamento
{escala}

## Raio / Sombra
{valores}
```

## Output Example

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
Body: 1.0625rem/1.6 400

## Espaçamento
4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192 — seções em py-24 (mobile: py-16)

## Raio / Sombra
Botões/badges: rounded-full | Cards: rounded-[2rem]
Subtle: 0 8px 24px -8px rgba(232,137,12,0.08)
```

## Veto Conditions

Rejeitar e redo if ANY are true:
1. Existir mais de 1 cor de acento saturada na paleta
2. O contraste texto/fundo não atingir 4.5:1

## Quality Criteria

- [ ] Todos os tokens nomeados semanticamente
- [ ] Contraste WCAG AA documentado
- [ ] Escala tipográfica completa (H1-H3, body, caption)
- [ ] Espaçamento na escala de 4px sem valores soltos
