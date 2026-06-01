---
task: "Escrever Legenda"
order: 2
input: |
  - reel_script: Roteiro completo do Reel
  - tone_of_voice: Tom aplicado no roteiro
output: |
  - caption: Legenda completa com hook no fold, corpo, CTA e hashtags
---

# Escrever Legenda

Escreve a legenda do Reel com hook nos primeiros 125 caracteres (antes do fold), corpo que expande o valor, CTA específico e hashtags estratégicas (5-15).

## Process

1. **Extrair o gancho central do roteiro**: O hook da legenda deve ser consistente com o driver emocional do roteiro — não precisa ser idêntico mas deve ressoar com o mesmo ângulo.
2. **Escrever os primeiros 125 caracteres (fold)**: Este trecho aparece antes do "...mais". Deve funcionar como CTA de curiosidade sozinho — o leitor que não clicar "mais" ainda deve entender o valor.
3. **Escrever o corpo**: 2-4 parágrafos curtos (máximo 2 linhas cada), expandindo o argumento do roteiro. Terminar com setup para o CTA.
4. **Escrever o CTA final**: Consistente com o CTA do roteiro. Mesmo comando, mesma palavra-chave se houver.
5. **Selecionar 5-15 hashtags**: Mix de hashtags de nicho (#automacaowhatsapp), localização (#chapecosites se relevante), volume médio (#desenvolvimentoweb), e marca (#jaokdev). Nunca spam de 30 hashtags genéricas.
6. **Contar caracteres do fold**: Verificar que os primeiros 125 chars funcionam como hook independente.

## Output Format

```
=== CAPTION ===
{Hook — máx 125 chars, funciona sozinho}

{Corpo — parágrafos curtos, 2 linhas máx cada}

{CTA final}

=== HASHTAGS ===
#{tag1} #{tag2} ... #{tagN}
[5-15 hashtags]

=== FOLD CHECK ===
Primeiros 125 chars: "{cópia exata dos primeiros 125 chars}"
Funciona como hook independente? {Sim/Não — justificativa}
```

## Output Example

> Roteiro: Contrário — automação WhatsApp, Tom Provocativo

```
=== CAPTION ===
Para de pagar salário pra atendente de WhatsApp. Tem jeito melhor 👇

Enquanto você paga R$1.500/mês pra alguém responder mensagem,
tem negócio do mesmo tamanho com bot fazendo isso em 3 segundos.

Sem salário. Sem férias. Sem mau humor.
Atendendo lead às 2h da manhã enquanto você dorme.

Manda "BOT" no direct que te explico como montar pra você.

=== HASHTAGS ===
#automacaowhatsapp #whatsappbusiness #chatbotwhatsapp #negociolocal #empreendedorismo #tecnologiaparanegocio #jaokdev #automatizacao #pequenaempresa #whatsappmkt

=== FOLD CHECK ===
Primeiros 125 chars: "Para de pagar salário pra atendente de WhatsApp. Tem jeito melhor 👇"
Funciona como hook independente? Sim — cria curiosidade e promete revelação sem entregar ainda.
```

## Quality Criteria

- [ ] Primeiros 125 chars funcionam como hook independente
- [ ] Parágrafos do corpo: máximo 2 linhas cada
- [ ] CTA da legenda consistente com CTA do roteiro
- [ ] 5-15 hashtags (não 30 genéricas)
- [ ] #jaokdev incluída em todas as legendas (marca)
- [ ] Fold check realizado e documentado

## Veto Conditions

Rejeitar e refazer se:
1. Primeiros 125 caracteres não funcionam como hook — são introdução ou contexto sem tensão
2. Mais de 20 hashtags (sinaliza spam ao algoritmo)
