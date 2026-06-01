---
task: "Escrever Roteiro de Reel"
order: 1
input: |
  - selected_angle: Ângulo escolhido com hook (de angles.md)
  - tone_of_voice: Tom selecionado pelo usuário ou recomendado (de tone-of-voice.md)
  - company_context: Perfil, público e posicionamento (de company.md)
output: |
  - reel_script: Roteiro completo com hook/setup/delivery/CTA + indicações de visual e audio
---

# Escrever Roteiro de Reel

Transforma o ângulo selecionado em roteiro de Reel pronto para gravar, com marcações de visual e audio para cada seção. Duração alvo: 15-30 segundos.

## Process

1. **Ler ângulo selecionado e hook confirmado**: O hook do ângulo é o ponto de partida. Não reescrever o hook sem autorização.
2. **Selecionar tom e framework**: Ler `pipeline/data/tone-of-voice.md`, recomendar o tom mais alinhado ao ângulo, aguardar confirmação do usuário antes de escrever. Selecionar framework de copywriting: PAS para dor, BAB para transformação, AIDA para novidade.
3. **Escrever HOOK (0-2s)**: Exatamente o hook aprovado. Especificar visual (o que aparece na tela) e audio (fala ou som).
4. **Escrever SETUP (2-5s)**: 1-2 frases de contexto que explicam por que o hook importa. Especificar visual e script.
5. **Escrever DELIVERY (5-25s)**: Corpo do Reel com cortes a cada 3-5s especificados. Text overlays para pontos-chave. Terminando com a promessa entregue.
6. **Escrever CTA (últimos 3-5s)**: Um único CTA específico. Decidir: comentário com palavra-chave, salvar, seguir, DM, ou link na bio.
7. **Verificar loop design**: O final deve conectar visualmente ou narrativamente ao início para incentivar replay.

## Output Format

```
=== REEL SCRIPT ===
Framework: {PAS/BAB/AIDA}
Tom: {Tom 1-6 selecionado}
Duração estimada: {X}s

HOOK (0-2s):
[Visual]: {o que aparece na tela}
[Audio]: {fala ou som}
[Text Overlay]: {texto na tela, máx 10 palavras}

SETUP (2-5s):
[Visual]: {cena}
[Script]: {1-2 frases}

DELIVERY (5-{X}s):
[Visual]: {descrição de cada corte}
[Script]: {script completo}
[Text Overlays]: {pontos-chave na tela}

CTA (últimos 3-5s):
[Visual]: {frame final}
[Script]: {CTA falado}
[Text Overlay]: {CTA na tela}

Loop design: {como o final conecta ao início}
```

## Output Example

> Ângulo selecionado: Contrário — "Para de contratar atendente. Seu WhatsApp pode fazer isso melhor."
> Tom: Provocativo

```
=== REEL SCRIPT ===
Framework: PAS
Tom: Provocativo (Tom 5)
Duração estimada: 22s

HOOK (0-2s):
[Visual]: Texto grande na tela sobre fundo escuro
[Audio]: Silêncio + beat de impacto
[Text Overlay]: PARA DE PAGAR SALÁRIO PRA ISSO

SETUP (2-5s):
[Visual]: Notificações de WhatsApp aparecendo
[Script]: "Você tem atendente respondendo WhatsApp manualmente."

DELIVERY (5-20s):
[Visual]: Split-screen — atendente humano vs bot respondendo
[Script]:
"Enquanto isso, tem negócio local
com bot respondendo em 3 segundos,
qualificando o lead,
e já marcando a visita —
sem ninguém acordado.

Custo: zero por mês.
Funciona 24 horas.
Nunca fica de mau humor."

[Text Overlays]:
- "3 segundos"
- "qualifica automaticamente"
- "24h / 7 dias"

CTA (20-22s):
[Visual]: @jaokdev + seta para bio
[Script]: "Manda 'BOT' no direct que te explico como montar."
[Text Overlay]: MANDA "BOT" NO DIRECT

Loop design: Corte final para a primeira notificação de WhatsApp do hook — replay visual natural.
```

## Quality Criteria

- [ ] Hook dos 0-2s é o hook confirmado do ângulo (não reescrito)
- [ ] Duração total estimada entre 15-30s
- [ ] Corte visual especificado a cada 3-5s no delivery
- [ ] Text overlays para pelo menos 3 pontos-chave
- [ ] CTA único e específico (verbo + complemento)
- [ ] Loop design descrito explicitamente
- [ ] Tom aplicado consistentemente do hook ao CTA
- [ ] Framework de copywriting declarado

## Veto Conditions

Rejeitar e refazer se:
1. Roteiro estimado acima de 35s (muito longo para completion rate alto)
2. CTA genérico como "curte e segue" sem ação específica
