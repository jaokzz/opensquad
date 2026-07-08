---
step: "09"
name: "Seleção de Identidade Visual"
type: checkpoint
depends_on: step-08
---

# 🛑 Checkpoint: Seleção de Identidade Visual

## Para o Pipeline Runner

Ler `output/visual-identities.yaml` e verificar o campo `mode`. O formato de apresentação muda conforme o modo.

## Formato de Apresentação — `mode: extracted` (identidade real de cliente)

```
🎨 Davi Design identificou uma identidade visual real pra este conteúdo — extraída de [origem, ex: pessoal/jaokdev-portfolio/app/globals.css].

🎨 Fundo: [bg_color] | Acento: [accent_color] | Display: [display_font] | Corpo: [body_font]
👁️ Visual: [preview_description]

---
Confirma o uso dessa identidade real, ou quer ajustar algo?
1. ✅ Confirmar
2. 🔄 Pedir ajuste específico (ex: trocar a cor de acento)
```

## Formato de Apresentação — `mode: own-brand` (sistema fixo @jaokdev)

```
🎨 Este carrossel é de marca própria — usando o sistema fixo de pessoal/carrosseis/DESIGN-SYSTEM.md.

🎨 Fundo: [bg_color] | Acento: [accent_color] | Display: [display_font] | Corpo: [body_font]

---
Confirma o uso do sistema padrão, ou quer ajustar algo pra este carrossel específico?
1. ✅ Confirmar
2. 🔄 Pedir ajuste específico (ex: trocar a cor de acento pra esta série)
```

## Formato de Apresentação — `mode: invented` (3 propostas)

```
🎨 Davi Design propôs 3 identidades visuais para o carrossel (não há marca/projeto real associado a este conteúdo).

---
1️⃣ [Nome da identidade 1] — [mood]
🎨 Fundo: [bg_color] | Acento: [accent_color] | Display: [display_font] | Corpo: [body_font]
👁️ Visual: [preview_description — descreve como vai parecer]

---
2️⃣ [Nome da identidade 2] — [mood]
...

---
3️⃣ [Nome da identidade 3] — [mood]
...

---
Qual identidade visual prefere para este carrossel? (responda com o número)
Ou: descreva o que mudaria em alguma das opções
```

## Ação do Pipeline Runner após Seleção

1. Registrar a identidade selecionada (ou confirmada, no modo extracted) e qualquer ajuste
2. Salvar em `output/selected-visual.yaml`:

```yaml
mode: "extracted"  # ou "own-brand" ou "invented"
visual_id: 1
name: "Nome da identidade"
mood: "mood da identidade"
bg_color: "#000000"
accent_color: "#FF4757"
display_font: "Anton"
body_font: "Inter"
preview_description: "descrição do visual"
user_adjustments: "[ajustes solicitados, ou vazio]"
selected_at: "YYYY-MM-DD HH:MM"
```

3. Avançar para Step 10 (Davi Design — Criação dos Slides)

## Opções Especiais

- **"outra"** → No modo invented, solicitar ao Davi Design que proponha 3 novas identidades. Voltar ao Step 08. Nos modos extracted e own-brand, não faz sentido pedir "outra" identidade — só ajuste específico.
- **"[número/confirmar] + ajuste"** → Registrar o ajuste em `user_adjustments` antes de avançar
