# Autopilot Mode — Execução Diária Sem Supervisão
**Squad:** instagram-carrossel
**Criado:** 2026-07-02

Este arquivo define como o pipeline deve rodar quando executado **sem um humano presente** (rotina agendada na nuvem, uma vez por dia). Quando um humano está ativamente conversando e fornece tema/aprovações, ignore este arquivo e siga os checkpoints normais do `pipeline.yaml`.

---

## Regra Absoluta (não-negociável)

**NUNCA execute o agente `publisher` (step-13) ou qualquer chamada à skill `instagram-publisher` em modo autopilot.** O pipeline autopilot termina no step-12 (Revisão de Qualidade). O post fica pronto e aguardando aprovação humana explícita — publicar sem essa aprovação quebra a regra do `publisher.custom.md` e arrisca a reputação de um perfil profissional real.

Se por algum motivo as credenciais do Instagram estiverem configuradas e disponíveis, isso **não muda essa regra**. Autopilot gera; humano publica.

---

## Como resolver cada checkpoint sem humano

### Step-01 — Tema do dia
Não preencher `output/research-focus.md` manualmente aqui. Simplesmente avançar para o Step-02 sem tema definido — a task `select-content-topic` da Ângela Ângulo (que agora roda automaticamente quando não há tema) já cobre toda a lógica de rotação de pilares, checagem de cases novos em `company.md` e escolha de período. Ver `agents/researcher/tasks/select-content-topic.md`.

### Step-03 — Seleção de notícia/dado
Escolher a história com maior `viral_potential_score` que:
- Tenha dado verificável com fonte (não escolher opinião pura)
- Não seja sobre o mesmo caso/dado usado no post imediatamente anterior

Se a Ângela não encontrar nenhuma notícia com score ≥ 6, é permitido usar um dado de mercado geral (Google/Meta/IBGE etc.) já presente em `pipeline/data/research-brief.md` ou `pipeline/data/anti-patterns.md`/`output-examples.md` como base, desde que a fonte seja real.

### Step-05 — Seleção de ângulo
Escolher o ângulo (de `pipeline/data/domain-framework.md`) que:
- Melhor combina com o tipo de conteúdo encontrado (ver "Angle Selection Criteria")
- É diferente do ângulo usado no post imediatamente anterior (nunca repetir ângulo em posts consecutivos — regra já existente no domain-framework)

### Step-07 — Aprovação do texto
Rodar a rubrica de `pipeline/data/quality-criteria.md` (C1-C6) internamente antes de prosseguir:
- Se média ponderada ≥ 7.0 e nenhum critério < 4.0 → aprovar e seguir para step-08
- Se reprovar → rodar `optimize-copy` uma vez e reavaliar
- Se reprovar de novo → **parar o pipeline aqui**, registrar o motivo em `_memory/memories.md` sob "Recurring Issues", e não gerar visual. Este dia fica sem post — melhor não publicar do que publicar abaixo do padrão.

### Step-09 — Identidade visual
Não regenerar a identidade visual a cada execução. Reutilizar o `base.css` já documentado em execuções anteriores (`output/runs/*/slides/base.css` mais recente), ajustando só a cor de acento se a rotação de série pedir. Se esta for a primeira execução (nenhum base.css anterior) e não houver identidade real para extrair, usar as recomendações de `pipeline/data/research-brief.md` (Domain 2).

### Step-11 — Aprovação das imagens
Mesma lógica do step-07: rodar critérios V1-V3 de `quality-criteria.md`. Aprovar se dentro da rubrica; senão corrigir uma vez; senão parar e registrar o problema, sem publicar.

### Step-12 — Revisão de qualidade (sempre obrigatório em autopilot, mesmo sendo `optional: true` no pipeline.yaml)
Rodar o reviewer normalmente. Se REJECT, não avançar para step-13 de forma alguma — parar e registrar feedback em `_memory/memories.md`.

### Step-13 — Publicação
**Nunca executar.** Ao invés disso:
1. Salvar todos os artefatos do dia em `output/runs/YYYY-MM-DD/` (copiar carousel-draft.md, slides/ incluindo base.css e assets/, slides/rendered/, review-final.md)
2. Adicionar uma linha em `_memory/memories.md` sob "Executions Log": data, pilar, ângulo, status (aprovado/rejeitado), caminho do output
3. Commitar e dar push desse output pro repositório (`git add`, `git commit -m "carrossel gerado automaticamente — YYYY-MM-DD — [tema]"`, `git push`)
4. Se a ferramenta de notificação estiver disponível, enviar uma notificação curta ao usuário dizendo que o carrossel do dia está pronto em `output/runs/YYYY-MM-DD/` aguardando aprovação para publicar
5. Encerrar a sessão. Não esperar por resposta — a aprovação acontece numa conversa separada, quando o usuário tiver tempo de revisar.

---

## O que fazer se algo bloquear (ex: rate limit de busca, dado insuficiente)

Registrar o bloqueio em `_memory/memories.md` sob "Recurring Issues" com data e descrição. Não inventar dado para preencher a lacuna. Um dia sem post é sempre melhor que um post com dado inventado ou hook fraco.
