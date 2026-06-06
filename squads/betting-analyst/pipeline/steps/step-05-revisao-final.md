# Step 05 — Revisão Final e Entrega

**Agente:** Rafael Radar
**Objetivo:** Revisar bilhetes de Marco, adicionar contexto final, entregar para João Vitor
**Checkpoint:** SIM — apresentação final antes de apostar

## Instruções

Rafael revisa o output de Marco e prepara a entrega final:

### 1. Validação dos bilhetes
- Verificar se todas as seleções ainda fazem sentido (alguma notícia de última hora?)
- Confirmar que as odds usadas estão atualizadas
- Validar cálculo de EV e stake

### 2. Adicionar avaliação crítica própria
Rafael não apenas repassa — avalia:
- "Esta múltipla tem X como ponto fraco — o risco principal é Y"
- "A seleção mais arriscada é Z porque [razão]"
- "Se quiser reduzir risco, remova [seleção] da principal e use o bilhete conservador"

### 3. Estrutura da entrega final

```markdown
# ⚽ Análise de Apostas — {Data}
**Preparado por:** Rafael Radar + Diana Dados + Marco Múltiplas
**Gerado em:** {timestamp}

---

## 📋 Resumo do Dia
{2-3 linhas sobre o contexto dos jogos analisados}

---

## 🔍 Análise por Jogo

### Jogo 1: [Time A] vs [Time B] — [Liga] — [Horário]
**Contexto:** [...]
**Fatores-chave:**
- ✅ [Fator positivo para a seleção]
- ✅ [Fator positivo]
- ⚠️ [Fator de risco]
**Recomendação:** [Mercado] — Odd [X.XX]
**Probabilidade estimada:** X% | Odd implica: Y%
**Value:** +Z ✅

[Repetir para cada jogo incluído]

---

## 🎯 Bilhete Principal

| # | Jogo | Mercado | Odd |
|---|------|---------|-----|
| 1 | ... | ... | ... |
...

**Odd Total:** X.XX
**Probabilidade Combinada:** X%
**EV:** +X.XX ✅
**Stake Sugerida:** R$ XX (X% do bankroll)
**Retorno Potencial:** R$ XX

**⚠️ Ponto de atenção:** [O que pode dar errado]

---

## 🛡️ Bilhete Conservador

[Mesma estrutura]

---

## ❌ Descartados e Por Quê

| Jogo | Motivo |
|------|--------|
| ... | Sem value nas odds |
| ... | Dados insuficientes |

---

## 💰 Gestão de Banca
- Bankroll desta sessão: R$ XX
- Stake Principal: R$ XX (X%)
- Stake Conservador: R$ XX (X%)
- Total em risco: R$ XX (X% do bankroll)
- **Regra:** Nunca aposte mais do que está confortável em perder.

---
*Análise gerada com dados de {fontes}. Apostas envolvem risco. Jogue com responsabilidade.*
```

### 4. Salvar output
Salvar em `output/{YYYY-MM-DD}-analise.md`

### 5. Atualizar memória
Registrar em `_memory/memories.md`:
- Data da análise
- Jogos analisados
- Bilhetes construídos
- Resultado (se João Vitor retornar para informar)

## Checkpoint

Rafael apresenta tudo ao João Vitor.
João Vitor decide: apostar como está, ajustar, ou não apostar.
Rafael não decide por João Vitor — apenas apresenta os dados e a recomendação.
