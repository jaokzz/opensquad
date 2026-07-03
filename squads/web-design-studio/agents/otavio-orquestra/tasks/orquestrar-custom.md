---
task: "Orquestrar Fluxo Customizado"
order: 2
input: |
  - solicitacao: Pedido fora do fluxo padrão (ajuste pontual, auditoria isolada, nova seção em site existente)
output: |
  - plano_customizado: Sequência mínima de agentes necessária para o pedido específico
---

# Orquestrar Fluxo Customizado

Atende pedidos que não precisam do pipeline completo — um ajuste pontual, uma auditoria isolada de um site já existente, ou uma nova seção em um site que já tem sistema de design definido. Aplica o princípio YAGNI: ativar só os agentes estritamente necessários para o pedido.

## Process

1. **Identificar se existe sistema de design prévio**: se o cliente já tem `design-system.md` em `output/{cliente}/`, reaproveitar em vez de pedir para a Vitória refazer DNA do zero.
2. **Mapear o menor caminho possível**: um ajuste de copy não precisa de Rafael Render; uma auditoria de performance não precisa da Vitória Visual.
3. **Confirmar o escopo reduzido com o João Vitor antes de executar**: "vou pedir para a Clara auditar só a seção X, sem mexer no resto — confere?"
4. **Executar e reportar de forma direta**, sem o overhead de checkpoints do fluxo completo quando o risco de retrabalho é baixo.

## Output Format

```markdown
# Fluxo Customizado — {descrição do pedido}

**Escopo:** {o que será feito e o que NÃO será tocado}
**Agente(s) envolvido(s):** {lista mínima}
**Justificativa da redução de escopo:** {por que o pipeline completo não é necessário aqui}
```

## Output Example

> Pedido: "Preciso só que revise a performance do site do Armazém, não quero mexer no design"

```markdown
# Fluxo Customizado — Auditoria de performance, Armazém Bar e Burguer

**Escopo:** rodar Lighthouse e revisão técnica de performance/animação no site já publicado. Nenhuma mudança de DNA visual, sistema de design ou copy.
**Agente(s) envolvido(s):** Clara Crítica (auditoria isolada, usando apenas os Blocos 3 e 4 do quality-criteria.md — Animação e Performance)
**Justificativa da redução de escopo:** o pedido é puramente técnico, não há mudança de design nem de conteúdo — ativar Vitória Visual ou Rafael Render aqui seria trabalho desnecessário.
```

## Quality Criteria

- [ ] Escopo reduzido confirmado com o João Vitor antes de ativar qualquer agente
- [ ] Nenhum agente ativado além do estritamente necessário para o pedido
- [ ] Sistema de design existente reaproveitado quando disponível, nunca recriado do zero sem necessidade

## Veto Conditions

Rejeitar e refazer se:
1. O fluxo customizado ignorar um sistema de design já existente e pedir para a Vitória recriar do zero sem motivo
2. Rafael Render for ativado para um pedido puramente de auditoria ou copy, sem necessidade real de código novo
