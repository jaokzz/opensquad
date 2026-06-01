---
execution: inline
agent: studio-dev-marketing/agents/gabriela-gancho
format: instagram-reels
inputFile: squads/studio-dev-marketing/output/angles.md
outputFile: squads/studio-dev-marketing/output/reel-script.md
---

# Step 04: Roteiro e Legenda

## Context Loading

Load these files before executing:
- `squads/studio-dev-marketing/output/angles.md` — ângulos gerados e ângulo selecionado
- `pipeline/data/tone-of-voice.md` — 6 tons disponíveis para seleção
- `pipeline/data/output-examples.md` — exemplos completos de roteiros bem executados
- `pipeline/data/anti-patterns.md` — erros a evitar em copy para Instagram
- `_opensquad/_memory/company.md` — perfil, posicionamento e público-alvo

## Instructions

### Process
1. Identificar o ângulo selecionado e o hook aprovado do angles.md
2. Ler tone-of-voice.md, recomendar o tom mais adequado ao ângulo selecionado, aguardar confirmação do usuário
3. Selecionar framework de copywriting: PAS (dor), BAB (transformação), AIDA (novidade)
4. Escrever HOOK (0-2s) usando exatamente o hook aprovado. Especificar [Visual] e [Audio].
5. Escrever SETUP (2-5s), DELIVERY (5-25s) com cortes a cada 3-5s e text overlays, e CTA (últimos 3-5s)
6. Verificar loop design — o final deve conectar ao início
7. Escrever a legenda com hook nos primeiros 125 chars, corpo e CTA consistente com o roteiro
8. Selecionar 5-15 hashtags e incluir #jaokdev

## Output Format

```
=== REEL SCRIPT ===
Framework: {PAS/BAB/AIDA}
Tom: {Tom N — nome}
Duração estimada: {X}s

HOOK (0-2s):
[Visual]: {o que aparece na tela}
[Audio]: {fala ou som}
[Text Overlay]: {texto na tela, máx 10 palavras}

SETUP (2-5s):
[Visual]: {cena ou transição}
[Script]: {1-2 frases}

DELIVERY (5-{X}s):
[Visual]: {breakdown de cortes}
[Script]: {script completo}
[Text Overlays]: {pontos-chave na tela}

CTA (últimos 3-5s):
[Visual]: {frame final}
[Script]: {CTA falado}
[Text Overlay]: {CTA na tela}

Loop design: {como final conecta ao início}

=== CAPTION ===
{Hook — máx 125 chars}

{Corpo — parágrafos de máx 2 linhas}

{CTA final}

=== HASHTAGS ===
#{tag1} ... #{tagN}
[5-15 hashtags incluindo #jaokdev]

=== FOLD CHECK ===
Primeiros 125 chars: "{cópia exata}"
Funciona solo? {Sim — justificativa}
```

## Output Example

> Ângulo selecionado: Contrário — "Para de pagar salário pra atendente de WhatsApp"
> Tom confirmado: Provocativo (Tom 5)

```
=== REEL SCRIPT ===
Framework: PAS
Tom: Tom 5 — Provocativo
Duração estimada: 22s

HOOK (0-2s):
[Visual]: Texto grande fundo escuro: "PARA DE PAGAR SALÁRIO PRA ISSO"
[Audio]: Beat de impacto + silêncio dramático
[Text Overlay]: PARA DE PAGAR SALÁRIO PRA ISSO

SETUP (2-5s):
[Visual]: Celular com notificações de WhatsApp chegando
[Script]: "Você tem atendente respondendo WhatsApp manualmente."

DELIVERY (5-20s):
[Visual]: Split-screen — atendente vs bot respondendo
[Script]:
"Enquanto isso, tem negócio local
com bot respondendo em 3 segundos,
qualificando o lead, agendando a visita —
sem ninguém acordado.
Custo: zero. Funciona 24h."
[Text Overlays]: "3 segundos" / "24h / 7 dias" / "custo: zero"

CTA (20-22s):
[Visual]: @jaokdev + seta
[Script]: "Manda BOT no direct que te explico."
[Text Overlay]: MANDA "BOT" NO DIRECT

Loop design: Corte final retorna à primeira notificação de WhatsApp do hook.

=== CAPTION ===
Para de pagar salário pra atendente de WhatsApp. Tem jeito melhor 👇

Enquanto você paga R$1.500/mês,
tem negócio com bot respondendo em 3 segundos.
Sem salário. Sem férias. Atendendo às 2h da manhã.

Manda "BOT" no direct — te explico como montar.

=== HASHTAGS ===
#automacaowhatsapp #whatsappbusiness #chatbotwhatsapp #negociolocal #empreendedorismo #jaokdev #automatizacao #pequenaempresa #whatsappmkt

=== FOLD CHECK ===
Primeiros 125 chars: "Para de pagar salário pra atendente de WhatsApp. Tem jeito melhor 👇"
Funciona solo? Sim — cria curiosidade e promete revelação.
```

## Veto Conditions

Rejeitar e refazer se:
1. Duração estimada acima de 35s
2. CTA genérico sem ação específica
3. Legenda sem Fold Check realizado

## Quality Criteria

- [ ] Tom selecionado de tone-of-voice.md e confirmado pelo usuário antes de escrever
- [ ] Hook do roteiro é o hook aprovado do ângulo (não reescrito sem autorização)
- [ ] Duração entre 15-30s
- [ ] Corte visual especificado a cada 3-5s
- [ ] Loop design descrito
- [ ] Legenda: hook completo nos primeiros 125 chars
- [ ] #jaokdev incluída
