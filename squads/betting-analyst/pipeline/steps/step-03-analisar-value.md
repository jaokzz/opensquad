# Step 03 — Análise de Value

**Agente:** Rafael Radar
**Objetivo:** Analisar cada jogo, calcular probabilidades e identificar seleções com value real
**Checkpoint:** SIM — apresentar análise antes de construir múltiplas

## Instruções

Rafael recebe todos os relatórios de Diana e analisa cada jogo:

### Para cada jogo:

**1. Leitura dos dados**
- Processar forma recente, H2H, stats da temporada, desfalques
- Identificar fatores contextuais (importância da partida, fadiga, etc.)

**2. Estimativa de probabilidade por mercado**

Para cada mercado relevante do jogo, Rafael estima:
```
P(Time A vence) = ?%
P(Empate) = ?%
P(Time B vence) = ?%
P(Ambas marcam) = ?%
P(Over 2.5) = ?%
P(Under 2.5) = ?%
```

**Método de estimativa:**
- Base: forma recente (peso 35%) + H2H (peso 20%) + stats da temporada (peso 30%) + contexto (peso 15%)
- Ajuste por desfalques: -5 a -15% dependendo do impacto do jogador
- Ajuste por mando de campo: +5 a +8% para o mandante em média

**3. Comparar com odd implícita da Betano**
```
Odd Betano encontrada → Probabilidade Implícita = 1/Odd
Comparar: Estimativa Rafael vs Prob Implícita
SE Estimativa Rafael > Prob Implícita: VALUE POSITIVO ✅
SE Estimativa Rafael < Prob Implícita: SEM VALUE ❌
```

**4. Classificar cada seleção:**
- FORTE: EV > +0.10
- MODERADA: EV entre +0.01 e +0.10
- FRACA: EV entre -0.05 e 0.00 (descartada)
- EVITAR: EV < -0.05 ou dados insuficientes

**5. Descartar jogos com dados insuficientes**
Se Diana sinalizou dados insuficientes para um jogo, Rafael descarta e explica.

### Apresentação para João Vitor (Checkpoint)

Rafael apresenta:
```
## Análise — [Data]

### ✅ Seleções com Value

**Jogo 1: Time A vs Time B**
- Contexto: [resumo rápido]
- Dados-chave: [2-3 fatores decisivos]
- Recomendação: Time A vence (1)
- Probabilidade estimada: 68%
- Odd Betano: 1.85 (implica 54%)
- EV: +0.26 ✅ FORTE

[...]

### ❌ Jogos Descartados
- Jogo X: odds sem value / dados insuficientes / alto risco
```

Rafael aguarda confirmação implícita (sem objeção = avançar) ou ajuste do João Vitor.
