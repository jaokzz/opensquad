# Research Brief — Squad Apostas Esportivas

## Objetivo do Squad

Analisar confrontos esportivos com foco em Copa do Mundo 2026 e competições disponíveis nas casas
Superbet e Betano. Identificar apostas com valor positivo (EV+) e compor múltiplas com odd-alvo
entre 14x e 20x, stake fixo de R$150 por entrada.

---

## Frameworks de Análise Pré-Jogo

A análise pré-jogo profissional parte de um princípio central: identificar a diferença entre a
probabilidade real de um evento e a probabilidade implícita embutida nas odds pela casa de apostas.
O trabalho do analista é encontrar e explorar essas lacunas.

### Seis Pilares Obrigatórios

1. **Forma recente** — mínimo de 5 a 10 partidas para identificar tendências direcionais como
   "equipe em melhora" ou "equipe em queda"

2. **Histórico de confrontos diretos (H2H)** — últimas 5 a 10 partidas entre as equipes, com
   atenção especial a padrões de placar, gols e comportamento em contextos similares

3. **Notícias de equipe** — lesões, suspensões e escalações confirmadas, especialmente informações
   divulgadas próximas ao apito inicial ("late team news"), que criam janelas de valor

4. **Contexto de tabela e motivação** — equipes em rebaixamento, título ou rivalidade regional
   apresentam padrões comportamentais distintos

5. **Dados de casa e fora separados** — desempenho em casa e fora podem ser radicalmente diferentes;
   combinar distorce a análise

6. **Camada avançada de dados**: xG, xGA, intensidade de pressão, bolas paradas, tendências de
   árbitro e métricas de posse direcional

---

## Value Betting: Metodologia e Cálculo

Value bet é qualquer aposta onde a probabilidade real de um evento supera a probabilidade implícita
na odd oferecida.

### Fórmulas Centrais

```
Probabilidade Implícita (%) = 1 / Odd decimal × 100
Valor Esperado (EV) = (Probabilidade real × (Odd − 1)) − (Probabilidade de perda × 1)
```

Um EV positivo indica que a aposta tem valor matemático. O Critério de Kelly refinado permite
dimensionar o stake proporcional ao edge identificado:

```
F = (bp − q) / b  onde b = odd−1, p = probabilidade real, q = 1−p
```

### Closing Line Value (CLV)

Indicador de qualidade usado por profissionais: se a odd obtida é consistentemente superior à odd
de fechamento, o apostador demonstra edge real sobre o mercado.

### Erros Comuns

- Confundir odd alta com value — odd de 10.00 não tem valor se a probabilidade real for 5%
- Avaliar resultados por amostra única — value betting é estratégia de longo prazo
- Ignorar a margem embutida ao comparar odds entre casas

---

## Gestão de Banca para Múltiplas com Odd-Alvo 14-20x

Múltiplas amplificam risco e retorno multiplicativamente. Uma múltipla de 4 legs a odds médias
de 2.00 entrega ~16x, alinhada ao alvo. Porém, a probabilidade de acerto cumulativo cai
exponencialmente: 4 legs a 50% cada = 6.25% de chance de acerto total.

### Regras Operacionais

- Limitar entre 3 e 5 legs por múltipla para equilibrar retorno e probabilidade
- Cada leg deve ter value identificado individualmente
- Nunca incluir legs correlacionadas positivamente
- Stop loss diário: suspender ao atingir −3 entradas no dia
- Registro histórico de ROI por tipo de mercado e competição para auditoria mensal

---

## Monitoramento ao Vivo: Indicadores

Principais indicadores durante um jogo:
- Posse de bola por período (mudanças bruscas indicam ajustes táticos)
- Chutes a gol e finalizações (xG acumulado ao vivo)
- Escanteios como proxy de pressão ofensiva
- Cartões e expulsões que alteram equilíbrio
- Substituições — especialmente entrada de peças ofensivas em times que precisam de gol

### Situações que Geram Value ao Vivo

- Time favorito sofre gol inesperado nos primeiros minutos — odds sobem além do justificado
- Empate sem gols após 30+ minutos com ambos criando chances — Over 1.5 tem valor crescente
- Expulsão do time que está vencendo — odds do adversário corrigem para cima rapidamente

---

## Copa do Mundo 2026: Favoritos e Mercados

Ranking de probabilidades de título (modelo Opta, junho/2026):

| Seleção    | Probabilidade | Odds Superbet | Perfil                                      |
|------------|---------------|---------------|---------------------------------------------|
| Espanha    | 15.58%        | ~5.50         | Domínio de posse, campeã Eurocopa 2024      |
| França     | 12.70%        | ~6.00         | Elenco mais profundo com Mbappé e Dembélé   |
| Inglaterra | 11.18%        | ~7.50         | 8V-0D nas eliminatórias sob Tuchel          |
| Argentina  | 10.43%        | ~9.50         | Campeã defensora, Messi em última Copa      |
| Brasil     | 6.78%         | ~9.00         | Ancelotti, Vini Jr. e Raphinha              |

Dark horses com valor potencial: Alemanha, Marrocos, Portugal, Colômbia.

---

## Fontes de Dados: Hierarquia

| Fonte         | Uso Principal                                      |
|---------------|----------------------------------------------------|
| FBref         | xG, xGA, progressive passes, pressão defensiva    |
| SofaScore     | Cobertura ao vivo, heatmaps, ratings por partida  |
| WhoScored     | Ratings por posição, análise tática, escalações   |
| Transfermarkt | Valor de mercado, lesões históricas               |
| Understat     | xPoints para comparação desempenho vs. esperado   |
| FootyStats    | Dados de over/under, BTTS, escanteios por partida |

**Critério de qualidade:** cross-referenciar xG em ao menos duas fontes antes de incluir na análise.
Divergências acima de 0.3 xG entre plataformas devem ser investigadas.

---

## Terminologia Profissional

- **xG** — expected goals (gols esperados)
- **xGA** — expected goals against (gols esperados contra)
- **BTTS** — both teams to score (ambas as equipes marcam)
- **CLV** — closing line value
- **EV** — expected value (valor esperado)
- **H2H** — head-to-head (confronto direto)
- **DNB** — draw no bet (empate sem aposta)
- **AH** — asian handicap
- **ROI** — return on investment
- **Over/Under** — mercado de gols totais na partida
- **HT/FT** — intervalo/resultado final
