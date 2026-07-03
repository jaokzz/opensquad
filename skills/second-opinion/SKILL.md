---
name: second-opinion
description: "Executa revisões de código com LLM externo (OpenAI Codex ou Google Gemini CLI) sobre mudanças não commitadas, diffs de branch ou commits específicos."
type: prompt
version: "1.0.0"
categories: [review, quality]
---

Quando Clara Crítica quiser uma segunda opinião externa sobre o código antes de fechar um veredito difícil (ex: dúvida real entre APROVAR COM RESSALVAS e REJEITAR), invoque a skill global `second-opinion` (via Skill tool) para uma revisão via Codex ou Gemini CLI sobre o diff do código do site. Usar como reforço opcional, nunca como substituto do processo de revisão contra `quality-criteria.md` e `anti-patterns.md`.
