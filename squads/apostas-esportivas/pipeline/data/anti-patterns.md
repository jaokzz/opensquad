# Anti-Patterns — Squad Apostas Esportivas

## Análise

### Nunca Fazer
1. **Apostar em odd alta sem calcular EV**: Odd de 15.00 não tem valor se a probabilidade real for 3%. Toda recomendação exige cálculo explícito de EV.
2. **Usar apenas resultado (W/D/L) como métrica de forma**: Resultados mascaram qualidade de jogo. Um time pode perder 3 seguidas dominando estatisticamente — xG é mais confiável que placar.
3. **Combinar legs correlacionados positivamente**: Vitória do Brasil + Neymar como artilheiro não é múltipla de dois eventos independentes — infla a odd sem valor real adicional.
4. **Ignorar late team news**: Escalação confirmada 1h antes do jogo pode invalidar análise inteira. Sempre checar no SofaScore antes de confirmar entrada.
5. **Avaliar resultados por amostra única**: Uma múltipla perdida não invalida o método. Value betting é estratégia de longo prazo — mínimo 50 entradas para avaliar ROI.
6. **Apostar sem odds confirmadas nas casas**: Estimar odd "em torno de 1.80" sem verificar em Superbet/Betano invalida o cálculo de EV.

### Sempre Fazer
1. **Separar desempenho casa e fora**: Um time com 70% de aproveitamento geral pode ter apenas 40% fora de casa — combinar os dois distorce a análise.
2. **Registrar cada entrada com odd, stake e resultado**: Auditoria mensal de ROI por mercado e competição é o único validador real de edge.
3. **Aplicar stop loss diário**: Ao atingir −3 entradas no dia, suspender operações. Tilting é o maior destruidor de banca em apostas.
4. **Citar a fonte de cada dado**: "Forma recente segundo FBref" é diferente de "achei em algum lugar". Rastreabilidade é critério de qualidade.

## Composição de Múltiplas

### Nunca Fazer
1. **Mais de 5 legs por múltipla**: Cada leg adicional multiplica o risco de forma exponencial. Acima de 5 legs a probabilidade de acerto total cai abaixo de 3% mesmo com legs favoráveis.
2. **Incluir legs de baixa confiança para inflar a odd**: Se um leg não tem EV positivo individualmente, não deve estar na múltipla independente do quanto aumenta a odd total.
3. **Apostar múltiplas em jogos simultâneos sem monitoramento**: Jogos ao mesmo horário impossibilitam reação a eventos que afetam a múltipla.

### Sempre Fazer
1. **Verificar independência entre legs**: Dois jogos da mesma competição com times que se enfrentam têm resultado correlacionado — evitar.
2. **Manter odd individual de cada leg entre 1.40 e 3.50**: Odds abaixo de 1.40 têm margem muito baixa para justificar o risco em múltipla; acima de 3.50 a incerteza é alta demais.

## Monitoramento ao Vivo

### Nunca Fazer
1. **Recomendar cash-out por emoção**: "Estou nervoso com esse placar" não é gatilho de cash-out. Apenas critérios quantitativos justificam a decisão.
2. **Fazer apostas adicionais ao vivo sem análise**: Odds ao vivo mudam rapidamente e o mercado reage mais rápido que analistas casuais. Apostas impulsivas ao vivo têm EV negativo na média.

### Sempre Fazer
1. **Atualizar status de cada leg a cada 15 minutos**: Informação desatualizada leva a decisões erradas de cash-out.
2. **Registrar placar, minuto e odds no momento de cada alerta**: Auditoria de qualidade de monitoramento depende de histórico preciso.
