# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Helles, mobiles Business-Dashboard: weiße Flächen, dunkles Marineblau (#23233C) für Text und Primäraktionen, Koralle (#FF6969) als Akzent sowie Grün/Amber/Rot als Statusfarben — ruhig und funktional wie ein modernes Restaurant-Verwaltungstool; ergänzt wurden nur fehlende Button-Zustände, der Desktop-Breakpoint und ein Modal im Stil der Frames.

## Colors

- `--color-bg`: **#FFFFFF**
- `--color-surface`: **#FFFFFF**
- `--color-fg`: **#23233C**
- `--color-black`: **#000000**
- `--color-accent`: **#FF6969**
- `--color-border`: **#BBC7DB**
- `--color-muted`: **#1C1C1C**
- `--color-muted_light`: **#BBC7DB**
- `--color-danger`: **#ED2B2B**
- `--color-danger_strong`: **#FF4343**
- `--color-success`: **#5E8E11**
- `--color-success_hover`: **#71AA21**
- `--color-success_light`: **#6CC57C**
- `--color-warning`: **#FFC648**
- `--color-warning_light`: **#FFE3A6**
- `--color-navy`: **#153E73**
- `--color-dark`: **#192534**
- `--color-ink`: **#2F2E41**

## Typography

- `font_family`: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif
- `heading_family`: Aleo, Georgia, 'Times New Roman', serif
- `label_family`: Poppins, Inter, system-ui, sans-serif
- `heading_weight`: 700
- `body_weight`: 400
- `label_tracking`: 0.38px
- `size_scale`: 9px, 11px, 12px, 14px, 15px, 16px, 20px, 24px, 32px

## Spacing Scale

- `--space-0`: 4px
- `--space-1`: 8px
- `--space-2`: 12px
- `--space-3`: 16px
- `--space-4`: 24px
- `--space-5`: 32px
- `--space-6`: 40px

## Border-Radii

- `--radius-sm`: 5px
- `--radius-md`: 8px
- `--radius-lg`: 10px
- `--radius-xl`: 14px
- `--radius-card`: 15px
- `--radius-pill`: 999px

## Components

### Button

Primär: bg #23233C, Text #FFFFFF, Schrift Aleo 14px/17px 700, padding 12px 24px, radius md 8px, min-height 44px (Touch-Ziel). Hover bg #2F2E41, Active bg #1C1C1C + translateY(1px), Disabled opacity 0.5 + cursor not-allowed. Varianten: Akzent bg #FF6969 (Hover #ED2B2B), Erfolg bg #5E8E11 (Hover #71AA21), Gefahr bg #FF4343, Ghost: transparent + 1px Rand #BBC7DB + Text #23233C (Hover bg rgba(35,35,60,0.05)).

### Card

bg #FFFFFF, 1px Rand #BBC7DB, radius 15px, padding 16px, Schatten 0 1px 3px rgba(35,35,60,0.08). KPI-Variante: Kennzahl Aleo 32px/700 #23233C, Label Inter 12px/400 #1C1C1C, Delta als Badge.

### Input

bg #FFFFFF, 1px Rand #BBC7DB, radius md 8px, padding 12px 16px, Schrift Inter 14px/400, min-height 44px. Focus Rand #23233C (2px), Placeholder #BBC7DB, Disabled bg #FFFFFF + opacity 0.6.

### Navigation

Mobil: Bottom-Nav fixiert unten, bg #FFFFFF, oberer Rand 1px #BBC7DB, Höhe 64px. Items: Icon + Label Poppins 11px/400, aktiv #23233C mit Akzentbalken #FF6969 oben, inaktiv #1C1C1C. Desktop ≥768px: Seiten-Nav bg #FFFFFF, aktiver Punkt bg #23233C + Text #FFFFFF + radius pill, Touch-Ziel ≥44px.

### ListRow

bg #FFFFFF, 1px Rand #BBC7DB, radius md 8px, padding 12px 16px, min-height 56px. Titel Aleo 14px/700 #23233C, Untertitel Inter 12px/400 #1C1C1C. Aktionen: Icon-Buttons 44×44px, radius sm 5px, Hover bg rgba(35,35,60,0.05).

### Badge

radius pill, padding 4px 8px, Schrift Inter 11px/400. Erfolg: bg #6CC57C + Text #5E8E11. Warnung: bg #FFE3A6 + Text #1C1C1C. Gefahr: bg #FF6969 + Text #FFFFFF. Neutral: bg #BBC7DB + Text #23233C.

### Toggle

Track 44×24px, radius pill, Aus bg #BBC7DB, Ein bg #5E8E11, Knopf 20px rund bg #FFFFFF mit Schatten, Übergang 150ms ease. Fokus: 2px Rand #23233C. Touch-Ziel ≥44px.

### Modal

Overlay rgba(35,35,60,0.5), Dialog bg #FFFFFF radius 15px padding 24px, max-width 400px. Titel Aleo 14px/700 #23233C, Text Inter 14px/400 #1C1C1C, Abstand zwischen Feldern 16px, Aktionen rechtsbündig (Button).

## Layout Principles

- Mobile-first mit Referenz 414px Breite, Container-Padding 16px, kein horizontales Scrollen.
- Breakpoints: <768px gestapelt + Bottom-Nav; ≥768px Seiten-Nav + Inhaltsbereich; Desktop-Container max-width 1120px.
- Dashboard-KPIs: 1 Spalte mobil, 2 Spalten ≥768px, 4 Spalten ≥1024px, Gap 16px.
- Sektionen: Abstand 24px (mobil) / 32px (Desktop), Seitenüberschrift in Aleo 700.
- Kontrast: Fließtext #23233C auf #FFFFFF (≥ 12:1), Akzentfarbe nur für Aktionen und Status.

## Source Frames

This design was taken from the Figma frames below. They are the reference; the tokens above were read from them.

- **Login Slide** · businesshandler — `design/figma/login-slide.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-20
- **Login** · businesshandler — `design/figma/login.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-81
- **Login Slide 2** · businesshandler — `design/figma/login-slide-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-208
- **Food Management** · businesshandler — `design/figma/food-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-340
- **Food Management 3** · businesshandler — `design/figma/food-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-429
- **Dashboard** · businesshandler — `design/figma/dashboard.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-681
- **Time Management** · businesshandler — `design/figma/time-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-803
- **Dashboard Stats** · businesshandler — `design/figma/dashboard-stats.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-900
- **Time Management - 3** · businesshandler — `design/figma/time-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-1029
- **App Management** · businesshandler — `design/figma/app-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-1125
- **Food Management 2** · businesshandler — `design/figma/food-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2215
- **Food Management 4** · businesshandler — `design/figma/food-management-4.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2350
