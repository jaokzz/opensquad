---
execution: inline
agent: web-design-studio/agents/vitoria-visual
inputFile: squads/web-design-studio/output/design-system.md
outputFile: squads/web-design-studio/output/wireframes.md
---

# Step 05: Wireframe

## Context Loading

Load these files before executing:
- `squads/web-design-studio/output/design-system.md` — tokens aprovados
- `squads/web-design-studio/output/content-brief.md` — seções/funcionalidades necessárias do briefing

## Instructions

### Process
1. Listar todas as seções necessárias a partir do briefing (hero, prova social, produto/serviço, feature strip, CTA, footer)
2. Definir a ordem das seções pensando na jornada do visitante até a ação desejada
3. Esboçar cada seção em blocos de escala de cinza, com proporção e alinhamento definidos (nunca centralizado por padrão)
4. Marcar pontos de assimetria estrutural (wordmark oversized, sangria de foto, zig-zag)
5. Salvar em `output/wireframes.md`

## Output Format

```markdown
# Wireframe — {Cliente}

## Seções (em ordem)
1. {Nome} — {proporção/alinhamento} — {conteúdo principal}

## Notas de Assimetria
- {seção}: {descrição}
```

## Output Example

```markdown
# Wireframe — Clínica Bem Viver

## Seções (em ordem)
1. Hero — split-screen 55/45, texto à esquerda + foto full-bleed à direita — headline + CTA "Agendar avaliação"
2. Faixa de confiança — 4 itens horizontais, ícone + 2 linhas
3. Tratamentos — zig-zag alternando imagem/texto a cada tratamento, nunca grid de cards iguais
4. Prova social — depoimentos em carrossel horizontal com foto real
5. Sobre a clínica — foto full-bleed com wordmark "BEM VIVER" sangrando atrás em opacidade baixa
6. CTA final — bloco de fundo escuro contrastante
7. Footer — contato, endereço, redes sociais, horário

## Notas de Assimetria
- Hero: texto 55% à esquerda, foto sangra até a borda direita, nunca centralizado
- Sobre a clínica: wordmark oversized atrás da foto (padrão Apple/Gazu)
- Tratamentos: cada item alterna esquerda/direita
```

## Veto Conditions

Rejeitar e redo if ANY are true:
1. Alguma seção usar grid de "3 cards iguais lado a lado" como estrutura padrão
2. Decisões de cor/fonte aparecerem antes da estrutura estar validada

## Quality Criteria

- [ ] Todas as seções do briefing representadas na ordem certa
- [ ] Nenhum hero centralizado por padrão
- [ ] Pelo menos 1 ponto de assimetria estrutural documentado
