---
execution: inline
agent: studio-dev-marketing/agents/lucas-leads
inputFile: squads/studio-dev-marketing/output/content-brief.md
outputFile: squads/studio-dev-marketing/output/angles.md
---

# Step 02: Gerar Ângulos Estratégicos

## Context Loading

Load these files before executing:
- `squads/studio-dev-marketing/output/content-brief.md` — briefing com tema e objetivo do Reel
- `_opensquad/_memory/company.md` — perfil do Joao Vitor, público-alvo e posicionamento
- `pipeline/data/tone-of-voice.md` — 6 tons disponíveis para referência de posicionamento
- `pipeline/data/output-examples.md` — exemplos de ângulos bem estruturados

## Instructions

### Process
1. Ler o briefing do content-brief.md e extrair: tema principal, objetivo (awareness/autoridade/conversão) e qualquer contexto específico fornecido
2. Considerar que Joao Vitor está na fase zero de seguidores — priorizar ângulos com alto completion rate e shareability sobre CTAs de conversão direta
3. Gerar exatamente 5 ângulos com drivers emocionais distintos: Medo/Perda, Oportunidade, Educativo/Curiosidade, Contrário/Provocativo, Inspiracional/Bastidores
4. Para cada ângulo: escrever o hook exato (≤2 frases, cabendo em 2 segundos) e uma justificativa de por que funciona para o público-alvo específico
5. Salvar em angles.md e apresentar ao usuário aguardando seleção

## Output Format

```
# Ângulos para: {tema do briefing}
Objetivo identificado: {awareness/autoridade/conversão}

## Ângulo 1 — Medo/Perda
**Hook:** "{frase exata}"
**Por que funciona:** {justificativa para empresário local}

## Ângulo 2 — Oportunidade
**Hook:** "{frase exata}"
**Por que funciona:** {justificativa}

## Ângulo 3 — Educativo/Curiosidade
**Hook:** "{frase exata}"
**Por que funciona:** {justificativa}

## Ângulo 4 — Contrário/Provocativo
**Hook:** "{frase exata}"
**Por que funciona:** {justificativa}

## Ângulo 5 — Inspiracional/Bastidores
**Hook:** "{frase exata}"
**Por que funciona:** {justificativa}

---
Qual ângulo seguimos? (1-5)
```

## Output Example

> Briefing: "Sites lentos afastam clientes"

```
# Ângulos para: Sites lentos afastam clientes
Objetivo identificado: awareness + autoridade

## Ângulo 1 — Medo/Perda
**Hook:** "Cada segundo que seu site demora pra carregar, você perde um cliente que não volta."
**Por que funciona:** Loss aversion concreta — o empresário já gastou em tráfego e não quer desperdiçar.

## Ângulo 2 — Oportunidade
**Hook:** "Seu concorrente tem site rápido. Ainda dá tempo de virar o jogo antes que ele domine a cidade."
**Por que funciona:** Cria urgência competitiva — empresário local pensa em concorrência direta.

## Ângulo 3 — Educativo/Curiosidade
**Hook:** "Por que seu site demora 5 segundos pra abrir — e como resolvo em 1 hora."
**Por que funciona:** Promessa técnica específica + timeframe concreto gera expectativa de valor.

## Ângulo 4 — Contrário/Provocativo
**Hook:** "Para de investir em tráfego pago. Seu site vai desperdiçar cada real que você gastar."
**Por que funciona:** Ataca crença comum (tráfego resolve tudo) e reposiciona o site como pré-requisito.

## Ângulo 5 — Inspiracional/Bastidores
**Hook:** "Otimizei um site de borracharia num domingo. Ele foi de 6s pra 1.2s. Vê o resultado."
**Por que funciona:** Humaniza e especifica — a borracharia ressoa com contexto real do Joao Vitor.

---
Qual ângulo seguimos? (1-5)
```

## Veto Conditions

Rejeitar e refazer se:
1. Dois ou mais ângulos usam o mesmo driver emocional
2. Algum hook tem mais de 2 frases ou não caberia em 2 segundos de fala

## Quality Criteria

- [ ] 5 ângulos com 5 drivers emocionais distintos
- [ ] Hook escrito em formato de fala ou text overlay para cada ângulo
- [ ] Justificativa alinhada ao público-alvo específico (empresário local / empreendedor)
- [ ] Objetivo do briefing identificado explicitamente
