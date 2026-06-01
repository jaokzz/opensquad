---
task: "Gerar Ângulos Estratégicos"
order: 1
input: |
  - content_brief: Tema, objetivo e contexto do Reel (de content-brief.md)
  - company_context: Perfil da empresa, público-alvo e tom de voz (de company.md)
output: |
  - angles: 5 ângulos estratégicos com driver emocional, hook e justificativa
---

# Gerar Ângulos Estratégicos

Transforma o briefing em 5 perspectivas emocionalmente distintas para um Reel. Cada ângulo usa um driver psicológico diferente e inclui exemplo de hook pronto para gravar.

## Process

1. **Ler o briefing**: Absorver tema, objetivo (awareness/autoridade/conversão) e qualquer contexto específico do content-brief.md
2. **Diagnosticar o funil**: Joao Vitor tem zero seguidores agora → priorizar ângulos de awareness e completion rate alto sobre ângulos de conversão direta
3. **Selecionar 5 drivers emocionais distintos**: Usar exatamente um de cada — Medo/Perda, Oportunidade, Educativo/Curiosidade, Contrário/Provocativo, Inspiracional/Bastidores
4. **Escrever hook para cada ângulo**: O hook deve ter 1-2 frases máximo, cabendo nos primeiros 2 segundos falados ou em text overlay. Testar o "scroll-stop test" mentalmente antes de incluir.
5. **Justificar cada ângulo**: Uma frase explicando por que esse driver emocional funciona para o público (empresário local / empreendedor que quer profissionalismo)

## Output Format

```
# Ângulos para: {tema do briefing}

## Ângulo 1 — {Driver Emocional}
**Hook:** "{frase exata para 0-2s}"
**Por que funciona:** {uma frase de justificativa para o público-alvo}

## Ângulo 2 — {Driver Emocional}
**Hook:** "{frase exata para 0-2s}"
**Por que funciona:** {uma frase de justificativa}

[... repetir para todos os 5 ângulos]

---
Aguardando sua escolha: qual ângulo seguimos? (1-5)
```

## Output Example

> Briefing: "Por que automação de WhatsApp ajuda pequenos negócios"

```
# Ângulos para: Automação de WhatsApp para pequenos negócios

## Ângulo 1 — Medo/Perda
**Hook:** "Seu concorrente já automatizou o WhatsApp. Você ainda responde manualmente às 11h da noite?"
**Por que funciona:** Empresário local sente ansiedade competitiva — está atrás e precisa agir.

## Ângulo 2 — Oportunidade
**Hook:** "Tem negócio local faturando mais com bot de WhatsApp do que com vendedor presencial."
**Por que funciona:** Abre perspectiva de ganho antes que o mercado sature — urgência de aproveitar agora.

## Ângulo 3 — Educativo/Curiosidade
**Hook:** "Como funciona um bot de WhatsApp que atende, qualifica e agenda sozinho — em 28 segundos."
**Por que funciona:** Promessa de valor imediato e específico (28s) cria expectativa de completar o vídeo.

## Ângulo 4 — Contrário/Provocativo
**Hook:** "Para de contratar atendente. Seu WhatsApp pode fazer isso melhor e por R$0/mês."
**Por que funciona:** Desafia crença comum (contratar = crescer) com alternativa concreta e custo zero.

## Ângulo 5 — Inspiracional/Bastidores
**Hook:** "Construí esse bot numa noite depois do trabalho. Agora ele atende enquanto eu durmo."
**Por que funciona:** Humaniza e gera identificação — empreendedor solo que constrói no tempo livre.

---
Aguardando sua escolha: qual ângulo seguimos? (1-5)
```

## Quality Criteria

- [ ] 5 ângulos com 5 drivers emocionais distintos (nenhum repetido)
- [ ] Cada ângulo tem hook escrito em formato de fala ou text overlay (≤ 2 frases)
- [ ] Cada ângulo tem justificativa alinhada ao público específico
- [ ] Nenhum ângulo soa genérico (poderia ser de qualquer dev)
- [ ] Ângulos adequados para fase zero de seguidores (awareness-first)

## Veto Conditions

Rejeitar e refazer se:
1. Dois ou mais ângulos usam o mesmo driver emocional (ex: dois ângulos de medo)
2. Algum hook tem mais de 2 frases ou não caberia em 2 segundos de fala
