# Anti-Patterns — O Que o Squad Nunca Entrega

Lista consolidada de erros que definem um site como "genérico de IA" em vez de premium. Qualquer item aqui é motivo de rejeição na Fase 8, independente da opinião pessoal de quem revisa.

## Visual e Layout

1. **Hero centralizado (H1 + subtítulo + botão no meio da tela)**: é o padrão mais previsível de geração de IA. Por que evitar: não comunica hierarquia nem intenção — força um "split-screen" ou layout assimétrico com texto alinhado à esquerda/direita e imagem ocupando o espaço restante.
2. **Gradiente roxo/azul ("AI purple") como fundo ou glow**: estética saturada e reconhecível como "feito por IA". Usar base neutra (zinc/slate) com um único acento saturado específico da marca.
3. **3 cards iguais lado a lado como feature section**: monótono e sem hierarquia. Usar zig-zag de 2 colunas, grid assimétrico (bento) ou faixa horizontal com scroll.
4. **Sombra genérica `shadow-md` cinza sem tingimento**: parece template padrão. Tingir a sombra na cor do fundo, ou usar diffusion shadow bem espalhada.
5. **`h-screen` em hero full-height**: quebra em iOS Safari por causa da barra de endereço dinâmica. Sempre `min-h-[100dvh]`.
6. **Cards genéricos em excesso ("card overuse")**: cada métrica ou bloco de informação dentro de um card com borda e sombra. Usar espaçamento negativo, `divide-y` ou linhas finas quando não há necessidade real de elevação.
7. **Ícones grossos genéricos (Material Icons padrão, emojis)**: sinal amador. Usar lucide-react com stroke-width consistente; nunca emoji em UI.
8. **Cursor customizado**: quebra acessibilidade e performance sem ganho real de experiência.

## Tipografia e Copy

9. **Fonte Inter, Roboto, Arial ou Helvetica em headline**: o sinal mais óbvio de site genérico. Usar Geist, Cabinet Grotesk, Satoshi, Clash Display, General Sans.
10. **Copy com clichês de IA**: "eleve sua presença digital", "solução completa e inovadora", "transforme seu negócio". Usar linguagem concreta e específica do negócio real do cliente.
11. **Dados fake óbvios**: "João Silva", "99.99% de satisfação", "(11) 1234-5678". Usar dados realistas, ligeiramente "orgânicos" (números quebrados, nomes específicos).
12. **H1 gigante sem hierarquia de peso**: tamanho sozinho não cria hierarquia — controlar com peso, cor e posição também.

## Animação

13. **Animar `width`, `height`, `top`, `left`, `margin`**: dispara reflow, quebra performance mobile. Animar exclusivamente `transform` e `opacity`.
14. **`transition: all`**: anima propriedades que não deveriam mudar, incluindo as que causam reflow. Sempre especificar a propriedade exata.
15. **Easing `linear` ou `ease-in-out` padrão em transições de destaque**: parece "computador", não "produto premium". Usar cubic-bezier customizado ou spring physics.
16. **Ignorar `prefers-reduced-motion`**: usuários com sensibilidade a movimento não têm opção de desabilitar. Implementar sempre.
17. **Misturar GSAP e Framer Motion no mesmo componente**: conflito de ciclo de render, jank imprevisível.
18. **`useState` para animação contínua (magnetic hover, loop infinito)**: recalcula em cada frame via re-render do React. Usar `useMotionValue`/`useTransform` (Framer) fora do ciclo de render.

## Performance e Técnico

19. **Ignorar `loading="lazy"` em imagens abaixo da dobra**: aumenta LCP desnecessariamente.
20. **`backdrop-blur` em containers com scroll**: causa repaint contínuo de GPU, derruba frame rate mobile. Aplicar só em fixed/sticky.
21. **z-index arbitrário (`z-50`, `z-[9999]`) sem sistema**: reservar z-index para camadas sistêmicas (nav sticky, modal, overlay, tooltip).
22. **Recomendar WordPress/builders genéricos para sites com animação complexa**: TTFB alto e bloat de plugin inviabilizam Core Web Vitals bons.

## Sempre Fazer (contraponto positivo)

1. **Medir antes de otimizar**: rodar Lighthouse baseline antes de qualquer ajuste de performance — nunca otimizar às cegas.
2. **Testar em mobile primeiro**: 70%+ do tráfego de negócio local é mobile. Abrir em 375px antes de aprovar qualquer tela.
3. **Documentar todo token de design antes do primeiro componente**: cor, fonte, espaçamento — nunca "decidir no CSS".
4. **Especificar animação com valores exatos**: elemento, trigger, propriedade, duration em ms, easing em cubic-bezier, delay. "Suave" não é especificação.
5. **Garantir identidade 100% original por cliente**: nunca reutilizar seção ou layout inteiro entre projetos de clientes diferentes (regra global do squad).
