---
task: "Criar Wireframe Low-Fi"
order: 3
input: |
  - design_system: Sistema de design aprovado
  - content_brief: Briefing com as seções/funcionalidades necessárias
output: |
  - wireframes: Estrutura em escala de cinza de todas as seções do site, com hierarquia e proporção definidas
---

# Criar Wireframe Low-Fi

Valida a estrutura e a hierarquia do site antes de investir em alta-fidelidade. Sem cor, sem foto — só blocos e proporções. Aprovar aqui evita retrabalho caro na fase de mockup.

## Process

1. **Listar todas as seções necessárias** a partir do briefing: hero, prova social, produto/serviço, feature strip, CTA, footer, e quaisquer seções específicas do negócio.
2. **Definir a ordem das seções** pensando na jornada do visitante — o que precisa ser visto primeiro para gerar a ação desejada (agendar, comprar, contatar).
3. **Esboçar cada seção como blocos em escala de cinza**, definindo proporção (largura relativa de texto vs imagem) e alinhamento (nunca centralizado por padrão — decidir se é split-screen, left-aligned ou right-aligned).
4. **Marcar pontos de assimetria**: onde o wordmark oversized aparece, onde a foto sangra até a borda, onde o grid quebra o padrão simétrico.
5. **Apresentar no checkpoint** antes de avançar para o mockup em alta-fidelidade.

## Output Format

```markdown
# Wireframe — {Cliente}

## Seções (em ordem)
1. {Nome da seção} — {proporção/alinhamento} — {conteúdo principal}
2. {Nome da seção} — {proporção/alinhamento} — {conteúdo principal}
...

## Notas de Assimetria
- {Seção}: {onde quebra o padrão simétrico e por quê}
```

## Output Example

> Clínica Bem Viver — site institucional com foco em agendamento

```markdown
# Wireframe — Clínica Bem Viver

## Seções (em ordem)
1. Hero — split-screen 55/45, texto à esquerda + foto full-bleed à direita — headline + CTA "Agendar avaliação"
2. Faixa de confiança — 4 itens horizontais, ícone + 2 linhas — "atendimento humanizado / equipamento de ponta / avaliação gratuita / equipe especializada"
3. Tratamentos — zig-zag alternando imagem/texto a cada tratamento, nunca grid de cards iguais
4. Prova social — depoimentos em carrossel horizontal com foto real
5. Sobre a clínica — foto do ambiente full-bleed com wordmark "BEM VIVER" sangrando atrás em opacidade baixa
6. CTA final — bloco de fundo escuro contrastante com botão em pílula
7. Footer — contato, endereço, redes sociais, horário

## Notas de Assimetria
- Hero: texto ocupa 55% à esquerda, foto sangra até a borda direita sem margem — nunca centralizado
- Sobre a clínica: wordmark oversized "BEM VIVER" atrás da foto, técnica extraída do DNA (padrão Apple/Gazu)
- Tratamentos: cada item alterna esquerda/direita para quebrar a monotonia de grid simétrico
```

## Quality Criteria

- [ ] Todas as seções do briefing representadas na ordem certa para a jornada do visitante
- [ ] Nenhuma seção com hero centralizado por padrão
- [ ] Proporção e alinhamento definidos para cada seção (não deixado para decidir no mockup)
- [ ] Pelo menos 1 ponto de assimetria estrutural documentado (wordmark, sangria de foto, zig-zag)

## Veto Conditions

Rejeitar e refazer se:
1. Qualquer seção usar grid de "3 cards iguais lado a lado" como estrutura padrão
2. O wireframe pular direto para decisões de cor/fonte antes da estrutura estar validada
