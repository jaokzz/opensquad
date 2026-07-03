---
task: "Definir DNA Visual"
order: 1
input: |
  - content_brief: Briefing do cliente (negócio, público, objetivo, referências, assets existentes)
  - visual_identity: pipeline/data/visual-identity.md (DNA consolidado do squad)
output: |
  - dna_visual: 3 palavras-chave + 3-5 referências reais + direção de paleta + direção tipográfica
---

# Definir DNA Visual

Primeira decisão de todo projeto: a direção visual em 3 palavras e referências reais, antes de qualquer paleta ou fonte ser escolhida. Sem isso aprovado, nenhuma fase seguinte começa.

## Process

1. **Ler o briefing e extrair a emoção-alvo**: que sensação o visitante deve ter ao entrar no site (confiança, urgência, sofisticação, energia)?
2. **Cruzar com o DNA consolidado em `visual-identity.md`**: tipografia como estrutura, paleta restrita + 1 acento, fotografia dominante, grid assimétrico — adaptado à vertical do cliente.
3. **Selecionar 3-5 referências reais**: sempre URLs de sites existentes, nunca "algo tipo Pinterest". Explicar exatamente o que está sendo referenciado de cada uma (ritmo, contraste, peso tipográfico — não "o estilo geral").
4. **Checar exclusividade contra `_memory/memories.md`**: a direção proposta não pode repetir paleta+tipografia+estrutura de um cliente anterior do squad.
5. **Escrever o Design DNA Card** com as 3 palavras, referências, direção de paleta e direção tipográfica.
6. **Apresentar ao checkpoint** — nunca avançar para Sistema de Design sem aprovação explícita.

## Output Format

```markdown
# DNA Visual — {Cliente}

## 3 Palavras
{palavra 1} · {palavra 2} · {palavra 3}

## Referências
1. {URL} — {o que exatamente está sendo referenciado}
2. {URL} — {o que exatamente está sendo referenciado}
3. {URL} — {o que exatamente está sendo referenciado}

## Direção de Paleta
Base: {cor} | Texto: {cor} | Acento único: {cor}
Nunca: {o que evitar explicitamente para esse cliente}

## Direção Tipográfica
Display: {fonte} para {uso}
Corpo: {fonte} para {uso}

## Emoção-alvo
{1-2 frases descrevendo o que o visitante deve sentir}
```

## Output Example

> Briefing: Armazém Bar e Burguer, bar/hamburgueria em Iporã do Oeste, público jovem-adulto local, quer transmitir energia noturna sem parecer genérico de "delivery app"

```markdown
# DNA Visual — Armazém Bar e Burguer

## 3 Palavras
Urbano · Encorpado · Noturno

## Referências
1. nevermind streetwear (referência interna do squad) — faixa de anúncio no topo (ticker) e tipografia display oversized em fundo escuro
2. gazu.com (referência interna do squad) — wordmark gigante sangrando atrás de foto full-bleed
3. partake.com — paleta âmbar quente sobre fundo escuro para comunicar "bar noturno" sem parecer neon genérico

## Direção de Paleta
Base: quase-preto texturizado (#0D0B09) | Texto: creme (#F0EAE0) | Acento único: âmbar (#E8890C)
Nunca: neon saturado genérico de "delivery app", vermelho/amarelo clichê de fast-food

## Direção Tipográfica
Display: Cabinet Grotesk bold, oversized, para o nome "ARMAZÉM" como elemento gráfico de fundo
Corpo: General Sans para cardápio e informações práticas

## Emoção-alvo
O visitante deve sentir que está entrando em um point urbano com identidade própria — não em mais um delivery genérico. A energia é de bar de bairro que virou point, não de fast-food corporativo.
```

## Quality Criteria

- [ ] 3 palavras-chave específicas do negócio, nunca genéricas ("moderno", "bonito")
- [ ] Mínimo 3 referências reais com URL e explicação do que exatamente foi extraído
- [ ] Paleta com no máximo 1 acento saturado definida
- [ ] Verificação de exclusividade contra `_memory/memories.md` documentada
- [ ] Emoção-alvo descrita em termos concretos, não abstratos

## Veto Conditions

Rejeitar e refazer se:
1. As referências forem descrições vagas sem URL real
2. A paleta ou estrutura proposta repetir literalmente um cliente já atendido pelo squad
