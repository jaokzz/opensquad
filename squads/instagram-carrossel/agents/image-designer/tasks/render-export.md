---
task: "Render and Export"
order: 3
input:
  - slide_html_files: output/slides/slide-0*.html (todos os arquivos HTML gerados)
output:
  - rendered_images: Imagens PNG renderizadas de cada slide em output/slides/rendered/
  - export_manifest: output/slides/rendered/manifest.json com lista de imagens prontas
---

# Render and Export

Renderiza todos os slides HTML como imagens PNG chamando o Chrome headless diretamente via `file://`, sem depender de servidor HTTP. Verifica cada imagem renderizada individualmente e produz o manifesto final pronto para o Publisher.

## Process

1. **Criar diretório de output.** Garantir que `output/slides/rendered/` existe.

2. **Renderizar slide 1 primeiro** com o comando abaixo (ajustar o path do slide e do output):

   ```
   "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1080,1350 --virtual-time-budget=20000 --user-data-dir="<pasta temporária dedicada, ex: C:/Users/.../AppData/Local/Temp/chrome-headless-profile>" --screenshot="output/slides/rendered/slide-01.png" "file:///<caminho-absoluto>/output/slides/slide-01.html"
   ```

   - Path do slide precisa ser absoluto e com `file:///`. Se o path tiver espaços, viram `%20` na URL.
   - `--window-size=1080,1350` corresponde ao 4:5 do feed do Instagram — não usar outro tamanho.
   - **`--user-data-dir` dedicado é obrigatório.** Sem ele, se já existir uma instância normal do Chrome aberta no PC, o comando falha com `Failed to write file ...: Access is denied` (conflito de lock de profile). Usar sempre uma pasta temporária separada do profile padrão.
   - **Ler a imagem renderizada e verificar visualmente:** dimensões corretas, texto legível, sem overflow, foto de capa (se houver) aparecendo corretamente atrás do overlay.
   - Se houver problema, corrigir o HTML/CSS do slide e rerenderizar antes de continuar.

3. **Renderizar todos os demais slides em sequência**, com o mesmo comando trocando o nome do arquivo (slide-02, slide-03, ...).

4. **Ler cada PNG renderizado individualmente** (não só o primeiro) — cada slide tem texto de comprimento diferente, então cada um pode ter um problema de espaçamento/overflow distinto do slide 1.

5. **Verificação de qualidade do batch.** Para cada imagem renderizada:
   - Arquivo existe e não está corrompido?
   - Dimensões: 1080×1350px?
   - Tamanho do arquivo: abaixo de 30MB (limite da API Instagram)?
   - Visualmente: texto legível, sem elementos cortados, foto (se houver) sem distorção?

6. **Gerar manifest.json.** Criar o arquivo de manifesto que o Publisher vai ler para executar o upload.

## Manifest Format

Salvar em `output/slides/rendered/manifest.json`:

```json
{
  "carousel_title": "[Título do carrossel]",
  "render_date": "YYYY-MM-DD",
  "slide_count": 7,
  "format": "PNG",
  "dimensions": "1080x1350px",
  "aspect_ratio": "4:5",
  "total_size_mb": 12.4,
  "slides": [
    {
      "order": 1,
      "filename": "slide-01.png",
      "path": "output/slides/rendered/slide-01.png",
      "size_kb": 1240,
      "status": "OK"
    },
    {
      "order": 2,
      "filename": "slide-02.png",
      "path": "output/slides/rendered/slide-02.png",
      "size_kb": 980,
      "status": "OK"
    }
  ],
  "caption_path": "output/carousel-draft.md",
  "ready_to_publish": true,
  "notes": ""
}
```

## Critical Notes

1. **Chrome headless via `file://` é o mecanismo de rendering.** Não usar a skill `image-creator` (que depende de servidor HTTP) — o render direto via `file://` é mais simples e já validado em produção.

2. **Cada slide é verificado individualmente**, não só o primeiro. Um erro sistêmico (fonte errada, overflow) tende a aparecer em todos, mas problemas de espaçamento específicos (título mais longo empurrando o layout) só aparecem slide a slide.

3. **Arquivo acima de 30MB é erro crítico para o Publisher.** Se qualquer slide PNG estiver acima de 30MB, reportar imediatamente — a API do Instagram rejeita o upload.

4. **Dimensões corretas desde o início:** 1080×1350px (4:5). Não há necessidade de fallback — essa é a proporção máxima suportada pelo feed do Instagram.

## Quality Criteria

- [ ] Todos os slides renderizados com dimensões 1080×1350px
- [ ] Nenhum arquivo de slide acima de 30MB
- [ ] Cada slide (não só o primeiro) verificado visualmente lendo o PNG
- [ ] Manifest.json gerado com lista completa e status de cada slide
- [ ] ready_to_publish: true somente se TODOS os slides passaram na verificação

## Error Handling

| Erro | Ação |
|------|------|
| Fonte não carregada (texto sistema aparece no lugar da fonte esperada) | Verificar `@import`/`@font-face` no `base.css`, corrigir e rerenderizar |
| Texto fora do container | Corrigir CSS do slide problemático e rerenderizar |
| Arquivo acima de 30MB | Comprimir ou converter para JPEG antes de continuar |
| Render falha completamente | Verificar se o Chrome está instalado no path esperado; ajustar o path do executável se necessário |
| `Failed to write file ...: Access is denied` | Já existe uma instância normal do Chrome aberta usando o profile padrão. Adicionar `--user-data-dir` apontando pra uma pasta temporária dedicada |
| Path com espaços quebrando a URL `file://` | Confirmar que os espaços foram convertidos para `%20` |
