# BusinessHandler

Kleine responsive Web-App für ein Restaurant-Verwaltungstool, das die drei Kernseiten **Dashboard**, **Food Management** und **Time Management** als klickbare Oberfläche nach dem Figma-Design „businesshandler" umsetzt. Die App läuft vollständig offline und ohne Backend — alle Daten sind Beispieldaten im Code.

## Tech-Stack

- **Sprache:** JavaScript (Vanilla, keine ES-Module)
- **Markup:** HTML5
- **Styling:** CSS3 (Custom Properties, ohne Framework)
- **Laufzeit:** Browser — kein Backend, kein Build, keine externen Abhängigkeiten

## Installation

Keine Installation nötig. Die App ist eine reine statische Seite:

```bash
git clone <repository-url>
```

## Starten (Development)

Die App wird über einen einfachen statischen Server ausgeliefert (die Seite funktioniert auch direkt per `file://`, ein lokaler Server ist aber der empfohlene Weg):

```bash
py -m http.server 8000
```

Anschließend im Browser öffnen: `http://localhost:8000`

Alternativ funktioniert ein Doppelklick auf `index.html` direkt im Dateisystem.

## Bedienung

Die App besteht aus drei Seiten, die über die Navigation (unten auf dem Mobilgerät, seitlich ab 768 px) erreichbar sind:

1. **Dashboard** (`index.html`) — Übersicht über Umsatz, Bestellungen und Schichten.
2. **Food Management** (`food.html`) — Speisen anlegen, bearbeiten und entfernen.
3. **Time Management** (`time.html`) — Schichtplan und Anwesenheit der Mitarbeiter.

Die aktive Seite ist in der Navigation farblich hervorgehoben (`.is-active`).

## Features

- Drei Kernseiten mit gemeinsamer, responsiver Navigation (mobil: Bottom-Nav, Desktop: Seiten-Nav)
- Design-Tokens als CSS-Custom-Properties (Farben, Schriften, Abstände, Radien) gemäß `DESIGN.md`
- Responsives Layout von mobiler Breite (ca. 414 px) bis Desktop ohne horizontales Scrollen
- Vollständig offline nutzbar, keine externen Abhängigkeiten

## Projektstruktur

```
index.html          Dashboard
food.html           Food Management
time.html           Time Management
css/base.css        Design-Tokens, Reset, Grundlayout, Navigation
css/dashboard.css   Seiten-Styles Dashboard
css/food.css        Seiten-Styles Food Management
css/time.css        Seiten-Styles Time Management
js/dashboard.js     Seiten-Skript Dashboard
js/food.js          Seiten-Skript Food Management
js/time.js          Seiten-Skript Time Management
RUN.json            Start-Deklaration (statischer Server, Port 8000)
```
