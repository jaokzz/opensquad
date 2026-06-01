# Visual Identity — Studio Dev Marketing

## Color Palette
- **Background:** #F2F0EC — warm off-white, editorial and clean
- **Primary Text:** #0C0A07 — near-black with warm undertone
- **Accent:** #E8A020 / #E8C547 — warm amber/gold; used for numbers, CTA buttons, emphasis lines
- **Secondary Accent:** #B8860B — muted gold for tags and labels
- **White Card:** #FFFFFF — card background with subtle shadow
- **Surface Tint:** #0C0A0706 — double-bezel shell background

## Typography
- **Headlines/Display:** DM Serif Display, italic, weight 400 — for hero text, numbers, emotional hooks
- **Body/UI:** Plus Jakarta Sans, weight 400–800 — for all body text, labels, cards, CTAs
- **Minimum sizes (Instagram Reel 1080×1920):** Hero 94px, Heading 72px, Body 34px, Caption 26px
- **Font weight floor:** 500+ for all readable text

## Layout
- **Viewport:** 1080×1920 px (Instagram Reel/Story)
- **Padding:** 80px vertical, 68px horizontal
- **Grid:** Single column, flex column
- **Section spacing:** 48–80px between major sections

## Composition Rules
- **Profile placement:** Top-left header with avatar (64px circle, dark fill) + handle
- **Tag placement:** Top-right, pill-shaped border with letter-spacing
- **Hero hook:** Left-aligned DM Serif Display italic; "working word" in italic amber
- **Rule/divider:** Single dot + gradient line fading right
- **Cards:** Double-bezel (outer shell #0C0A0706 + 1px border, inner white card with ambient shadow)
- **CTA block:** Full-width dark block (#0C0A07) with serif italic text + circular amber arrow button
- **Footer:** Handle left, "ARRASTE →" right, thin top border

## Double-Bezel Pattern
Outer shell: `background:#0C0A0706; border:1px solid #0C0A0710; border-radius:24px; padding:4px`
Inner core: `background:#fff; border-radius:20px; box-shadow:0 2px 20px #0C0A0706, inset 0 1px 0 #ffffffcc`

## Adaptation Rules
- Reel format (1080×1920): full layout as-is
- Carousel (1080×1440): reduce padding to 64px, compress card gaps to 12px
- All HTML must be self-contained with Google Fonts @import only
- Never use Inter, Roboto, or generic sans-serif as primary font
