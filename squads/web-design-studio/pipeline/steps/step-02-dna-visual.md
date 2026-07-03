---
execution: inline
agent: web-design-studio/agents/vitoria-visual
inputFile: squads/web-design-studio/output/content-brief.md
outputFile: squads/web-design-studio/output/dna-visual.md
---

# Step 02: DNA Visual

## Context Loading

Load these files before executing:
- `squads/web-design-studio/output/content-brief.md` — briefing do cliente (negócio, público, objetivo, referências, assets)
- `pipeline/data/visual-identity.md` — DNA consolidado do squad (OBRIGATÓRIO)
- `_memory/memories.md` — histórico de clientes anteriores, para checagem de exclusividade

## Instructions

### Process
1. Extrair do briefing a emoção-alvo do negócio e cruzar com os padrões do `visual-identity.md`
2. Selecionar 3-5 referências reais (URLs) e explicar exatamente o que está sendo extraído de cada uma
3. Verificar contra `_memory/memories.md` que a direção proposta não repete paleta/tipografia/estrutura de cliente anterior
4. Escrever o Design DNA Card: 3 palavras + referências + direção de paleta + direção tipográfica + emoção-alvo
5. Salvar em `output/dna-visual.md` e apresentar para o checkpoint seguinte

## Output Format

```markdown
# DNA Visual — {Cliente}

## 3 Palavras
{palavra} · {palavra} · {palavra}

## Referências
1. {URL} — {o que foi extraído}

## Direção de Paleta
Base: {cor} | Texto: {cor} | Acento único: {cor}

## Direção Tipográfica
Display: {fonte} | Corpo: {fonte}

## Emoção-alvo
{descrição}
```

## Output Example

```markdown
# DNA Visual — Armazém Bar e Burguer

## 3 Palavras
Urbano · Encorpado · Noturno

## Referências
1. Referência interna do squad (padrão Nevermind) — faixa de anúncio no topo e tipografia display oversized em fundo escuro
2. Referência interna do squad (padrão Gazu) — wordmark gigante sangrando atrás de foto full-bleed
3. partake.com — paleta âmbar quente sobre fundo escuro para comunicar "bar noturno" sem parecer neon genérico

## Direção de Paleta
Base: quase-preto texturizado (#0D0B09) | Texto: creme (#F0EAE0) | Acento único: âmbar (#E8890C)
Nunca: neon saturado genérico de "delivery app", vermelho/amarelo clichê de fast-food

## Direção Tipográfica
Display: Cabinet Grotesk bold, oversized, para o nome "ARMAZÉM" como elemento gráfico de fundo
Corpo: General Sans para cardápio e informações práticas

## Emoção-alvo
O visitante deve sentir que está entrando em um point urbano com identidade própria, não em mais um delivery genérico — energia de bar de bairro que virou point, sem parecer corporativo.
```

## Veto Conditions

Rejeitar e redo if ANY are true:
1. As referências citadas não têm URL real ou são descrições vagas ("algo tipo Pinterest")
2. A direção de paleta/tipografia repete literalmente um DNA já usado por outro cliente do squad

## Quality Criteria

- [ ] 3 palavras-chave específicas do negócio, não genéricas
- [ ] Mínimo 3 referências reais com explicação do que foi extraído de cada uma
- [ ] Paleta com no máximo 1 acento saturado
- [ ] Verificação de exclusividade documentada
