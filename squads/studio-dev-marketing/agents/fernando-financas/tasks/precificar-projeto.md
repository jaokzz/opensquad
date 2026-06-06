---
task: "Precificar Projeto"
order: 1
input: |
  - escopo: Descrição do que está incluído no projeto (site, automação, páginas, funcionalidades)
  - prazo: Tempo estimado de entrega
  - cliente: Perfil do cliente (segmento, porte, localização)
  - valor_hora: Valor/hora desejado pelo Joao Vitor (se não informado, usar R$80/h como referência)
output: |
  - precificacao: 3 cenários de preço com justificativa, estrutura de pagamento e oportunidades de upsell
---

# Precificar Projeto

Transforma o escopo de um projeto em uma estratégia de precificação com 3 cenários, estrutura de pagamento e margem protegida.

## Process

1. **Levantar escopo completo**: Se o escopo não foi detalhado, perguntar antes de qualquer número — páginas, funcionalidades, integrações, prazo, suporte pós-entrega incluído ou não.
2. **Calcular custo real de entrega**:
   - Estimar horas de trabalho (desenvolvimento + reuniões + ajustes)
   - Multiplicar pelo valor/hora desejado
   - Somar custos de ferramentas/hospedagem se aplicável
   - Adicionar margem de risco de 20% (imprevistos, revisões extras)
3. **Pesquisar ancoragem de mercado**: Considerar o mercado do oeste de SC — empresário local tem teto de capacidade diferente de capitais. Calibrar os 3 cenários dentro dessa realidade.
4. **Montar 3 cenários**:
   - **Conservador**: mínimo aceitável — cobre custos + margem mínima de 40%
   - **Recomendado**: ponto ideal de valor percebido vs. capacidade do mercado local
   - **Premium**: com ancoragem — para cliente que valoriza exclusividade ou prazo reduzido
5. **Sugerir estrutura de pagamento** para cada cenário: à vista com condição, parcelado, entrada + saldo na entrega.
6. **Identificar upsell**: O que pode ser adicionado ao projeto atual para aumentar o ticket? (manutenção mensal, integração adicional, SEO, automação de follow-up, etc.)

## Output Format

```
# Precificação: {nome do projeto/produto}

## Custo Real de Entrega
- Horas estimadas: {X}h
- Valor/hora: R${Y}
- Subtotal de trabalho: R${X×Y}
- Ferramentas/custos externos: R${Z}
- Margem de risco (20%): R${valor}
- **Custo total de entrega: R${total}**

---

## Cenário 1 — Conservador (Mínimo Aceitável)
**Preço:** R${valor}
**Por que esse piso:** {justificativa de margem — abaixo disso não compensa}
**Pagamento sugerido:** {estrutura}
**Quando usar:** {contexto — cliente com orçamento limitado, projeto estratégico para portfólio, etc.}

## Cenário 2 — Recomendado
**Preço:** R${valor}
**Por que esse preço:** {justificativa de valor percebido + mercado local}
**Pagamento sugerido:** {estrutura}
**Quando usar:** {contexto padrão — cliente típico do mercado local}

## Cenário 3 — Premium
**Preço:** R${valor}
**Por que esse preço:** {justificativa — prazo reduzido, exclusividade, cliente com maior capacidade}
**Pagamento sugerido:** {estrutura}
**Quando usar:** {contexto — cliente com urgência, empresa maior, referência de mercado}

---

## Oportunidades de Upsell
1. {serviço adicional} — R${valor}/mês ou R${valor} avulso
2. {serviço adicional} — R${valor}
3. {serviço adicional} — R${valor}

## Alerta de Margem
> Não fechar abaixo de R${mínimo_absoluto}. Abaixo disso, o projeto gera prejuízo ou cobre apenas o custo de entrega sem remuneração real.
```

## Output Example

> Escopo: Site institucional para clínica médica — 5 páginas, formulário de agendamento, integração com WhatsApp, 10 dias de prazo, sem manutenção incluída.

```
# Precificação: Site Institucional — Clínica Médica

## Custo Real de Entrega
- Horas estimadas: 18h (desenvolvimento) + 3h (reuniões/ajustes) = 21h
- Valor/hora: R$80
- Subtotal de trabalho: R$1.680
- Ferramentas/custos externos: R$0 (cliente hospeda por conta própria)
- Margem de risco (20%): R$336
- **Custo total de entrega: R$2.016**

---

## Cenário 1 — Conservador (Mínimo Aceitável)
**Preço:** R$2.400
**Por que esse piso:** Cobre o custo de entrega com margem de 19%. Abaixo disso, o projeto não remunera adequadamente o tempo.
**Pagamento sugerido:** 50% na assinatura do contrato + 50% na entrega (R$1.200 + R$1.200)
**Quando usar:** Cliente com orçamento apertado mas estratégico para portfólio ou indicação futura.

## Cenário 2 — Recomendado
**Preço:** R$3.200
**Por que esse preço:** Representa 37% de margem líquida. Compatível com a capacidade de pagamento de clínicas e consultórios em Iporã do Oeste e região. Valor que transmite profissionalismo sem assustar.
**Pagamento sugerido:** 40% na assinatura (R$1.280) + 60% na entrega (R$1.920) — ou 4x de R$800 sem juros no cartão.
**Quando usar:** Cenário padrão para clientes do setor de saúde na região oeste de SC.

## Cenário 3 — Premium
**Preço:** R$4.800
**Por que esse preço:** Prazo reduzido para 7 dias + suporte por 30 dias incluído + otimização de velocidade. Ancoragem para fazer o Cenário 2 parecer acessível se o cliente pesquisar.
**Pagamento sugerido:** 50% na assinatura (R$2.400) + 50% na entrega (R$2.400).
**Quando usar:** Cliente com urgência (abertura iminente, campanha rodando), clínica maior ou com faturamento mais expressivo.

---

## Oportunidades de Upsell
1. Manutenção mensal (atualizações, backup, suporte) — R$150/mês
2. SEO local (otimização para "fisioterapeuta Iporã do Oeste") — R$800 avulso ou R$200/mês
3. Automação de WhatsApp para agendamento — R$1.200 a R$2.000 dependendo da complexidade

## Alerta de Margem
> Não fechar abaixo de R$2.400. Abaixo disso, o projeto cobre apenas o custo de entrega sem remuneração real pelo risco e pelo conhecimento aplicado.
```

## Quality Criteria

- [ ] Custo real de entrega calculado (horas × valor/hora + margem de risco)
- [ ] 3 cenários com justificativa distinta para cada um
- [ ] Mínimo aceitável definido e explicitado como alerta
- [ ] Estrutura de pagamento sugerida em cada cenário
- [ ] Pelo menos 2 oportunidades de upsell identificadas
- [ ] Preços calibrados para o mercado do oeste de SC (não para capitais)

## Veto Conditions

Rejeitar e refazer se:
1. Algum cenário estiver abaixo do custo real de entrega
2. Os 3 cenários não tiverem justificativas distintas (não podem ser variações arbitrárias do mesmo preço)
3. Nenhuma estrutura de pagamento for sugerida
