---
task: "Orquestrar Pipeline Padrão"
order: 1
input: |
  - solicitacao: Pedido do João Vitor descrevendo o projeto (site novo, cliente, objetivo)
  - memories: Conteúdo de _memory/memories.md para checar exclusividade de cliente
output: |
  - plano_execucao: Sequência de fases e agentes a ativar, com checkpoints marcados
  - orchestration_log: Registro de cada delegação feita durante a execução
---

# Orquestrar Pipeline Padrão

Conduz um projeto de site do zero até a aprovação final, seguindo as 9 fases do `pipeline/pipeline.yaml` sem pular etapas nem forçar paralelismo onde há dependência real.

## Process

1. **Ler o pedido e classificar o escopo**: site novo completo, redesign de site existente, ou apenas uma seção nova. Definir quais fases do `domain-framework.md` se aplicam.
2. **Checar exclusividade de cliente**: ler `_memory/memories.md` e confirmar que a direção que está prestes a ser aprovada (paleta, tipografia, estrutura de seção) não repete um cliente anterior.
3. **Apresentar o plano em até 5 linhas**: objetivo, fases envolvidas, agentes, checkpoints — antes de ativar qualquer agente.
4. **Delegar fase a fase**: ativar Vitória Visual para DNA/Sistema/Wireframe/Mockup, aguardar checkpoint de aprovação em cada ponto crítico, depois ativar Rafael Render para Build/Animação, depois Clara Crítica para revisão.
5. **Tratar rejeição da Clara Crítica**: primeira e segunda rejeição no mesmo ponto retornam automaticamente à fase indicada em `on_reject`; a partir da terceira, escalar para o João Vitor com os dois lados do impasse.
6. **Consolidar e documentar**: ao final, apresentar o resultado com avaliação própria e registrar o run em `_memory/runs.md`.

## Output Format

```markdown
# Plano de Execução — {cliente/projeto}

**Objetivo:** {resumo em 1 frase}
**Fases:** {lista das fases do domain-framework.md que se aplicam}
**Agentes:** {lista dos agentes que serão ativados, em ordem}
**Checkpoints:** {pontos onde o João Vitor precisa aprovar}

## Log de Execução
- [{timestamp}] Delegando para {Agente} — {fase}
- [{timestamp}] Checkpoint: {descrição} — aguardando aprovação
- [{timestamp}] Retornando de {Agente} — {resultado resumido}
```

## Output Example

> Pedido: "Quero o site novo da Clínica Bem Viver, cliente nova, do zero"

```markdown
# Plano de Execução — Clínica Bem Viver

**Objetivo:** site institucional completo para clínica de estética facial, foco em agendamento de avaliação
**Fases:** Briefing → DNA Visual → Sistema de Design → Wireframe → Mockup+Animação → Build → Animação → Crítica → Aprovação Final
**Agentes:** Vitória Visual (fases 2-5) → Rafael Render (fases 6-7) → Clara Crítica (fase 8)
**Checkpoints:** aprovar DNA (fase 3), aprovar wireframe (fase 6), aprovar mockup+animação (fase 8), aprovação final (fase 12)

## Log de Execução
- [10:02] Verificado _memory/memories.md — nenhum cliente anterior usa paleta terracota+serif editorial, DNA liberado
- [10:03] Delegando para Vitória Visual — Fase 2 (DNA Visual)
- [10:41] Checkpoint: DNA Visual apresentado — aguardando aprovação do João Vitor
- [10:45] Aprovado. Delegando para Vitória Visual — Fase 3-4 (Sistema de Design + Wireframe)
```

## Quality Criteria

- [ ] Plano apresentado antes de qualquer ativação de agente
- [ ] Exclusividade de cliente verificada antes do checkpoint de DNA visual
- [ ] Nenhuma fase pulada sem justificativa explícita (ex: projeto pequeno colapsando fases 3+4)
- [ ] Log de execução completo registrado ao final

## Veto Conditions

Rejeitar e refazer se:
1. Rafael Render for ativado sem o checkpoint de mockup+animação ter sido aprovado
2. A verificação de exclusividade de cliente não constar no log antes da aprovação do DNA
