# Standard Buttons

Buttons sind grundlegende interaktive Elemente, die Nutzerinteraktionen ermöglichen. Sie müssen klar erkennbar, verständlich und barrierefrei bedienbar sein.

**Inhalt dieser Seite:**
[[toc]]

## Grundlegende Varianten

::: tabs

@tab Text Button

### Text Button

Text Buttons werden für klare, eindeutige Aktionen verwendet. Sie sind die direkteste Form der Benutzerinteraktion und besonders geeignet für primäre Aktionen wie „Kaufen“, „Speichern“ oder „Bestellen“.

**HTML-Struktur**

```html
<button type="button" class="btn">
  Label text
</button>
```

<div class="hint-container note">
  <p class="hint-container-title">Notiz</p>
  <p>Die Klassennamen und Demo-Daten dienen der Veranschaulichung der Struktur. Das Pattern demonstriert die korrekte Verwendung von ARIA-Attributen für optimale Accessibility.</p>
</div>

**Erklärung:**
- Verwendet den nativen `<button>` für beste Accessibility
- Klares, eindeutiges Label für die Aktion
- Keine ablenkenden visuellen Elemente
- Ideal für primäre Call-to-Actions

@tab Icon Button

### Icon Button

Icon Buttons werden für häufig verwendete, universell verständliche Aktionen eingesetzt, wie „Schließen“ (X), „Suchen“ (Lupe) oder „Menü“ (Hamburger). Sie sparen Platz, müssen aber **besonders sorgfältig** im Hinblick auf Accessibility implementiert werden.


**HTML-Struktur**

```html
<button 
  type="button" 
  class="btn btn-icon" 
  aria-label="Beschreibender Text für Screenreader">
  <span class="icon" aria-hidden="true">
    <svg focusable="false" width="24" height="24"><!-- SVG-Code --></svg>
  </span>
</button>
```

<div class="hint-container note">
  <p class="hint-container-title">Notiz</p>
  <p>Die Klassennamen und Demo-Daten dienen der Veranschaulichung der Struktur. Das Pattern demonstriert die korrekte Verwendung von ARIA-Attributen für optimale Accessibility.</p>
</div>

**Erklärung:**
- `aria-label` ist zwingend erforderlich für Screenreader.
- Icon wird mit `aria-hidden="true"` als dekorativ markiert.
- Das SVG muss `focusable="false"` haben.
- Touch-Target von mindestens 44px x 44px wichtig.

**Besonders wichtig:** Universell verständliche Icons verwenden.

@tab:active Text + Icon Button

### Text + Icon Button

Diese Kombination verbindet die Vorteile beider Varianten. Sie wird oft für wichtige Aktionen verwendet, bei denen das Icon die Bedeutung visuell unterstützt, wie „In den Warenkorb“ (mit Warenkorb-Icon) oder „Download“ (mit Pfeil-Icon).

**HTML-Struktur**

```html
<button type="button" class="btn">
  <span class="icon" aria-hidden="true">
    <svg focusable="false" width="24" height="24"><!-- SVG-Code --></svg>
  </span>
  <span class="label">Label text</span>
</button>
```

<div class="hint-container note">
  <p class="hint-container-title">Notiz</p>
  <p>Die Klassennamen und Demo-Daten dienen der Veranschaulichung der Struktur. Das Pattern demonstriert die korrekte Verwendung von ARIA-Attributen für optimale Accessibility.</p>
</div>

**Erklärung:**
- Der Button verwendet eine semantisch korrekte `<button>`-Struktur mit `type="button"`
- Das Icon ist in einem `<span class="icon">` Container mit `aria-hidden="true"` gekapselt, da es rein dekorativ ist und der Text die semantische Bedeutung trägt
- Das SVG-Element hat `focusable="false"`, um es als dekorativ zu markieren und unerwünschte Tab-Stops zu vermeiden
- Der Text ist in einem separaten `<span class="label">` gekapselt, was mehrere Vorteile bietet:
  - Flexibles Styling und Positionierung via CSS
  - Klare Trennung von Icon und Text
  - Bessere Wartbarkeit und Anpassbarkeit

:::

## Barrierefreiheit

### Grundanforderungen
- Buttons müssen als interaktive Elemente erkennbar sein
- Mindestens 44x44px Touch-Target-Größe
- Ausreichender Kontrast (mindestens 4.5:1 für Text, 3:1 für interaktive Elemente)
- Fokusindikator muss deutlich sichtbar sein
- Tastaturzugang muss gewährleistet sein

### ARIA-Attribute
- Icon-Only Buttons benötigen immer ein `aria-label`
- Dekorative Icons müssen mit `aria-hidden="true"` versehen werden
- SVGs müssen `focusable="false"` haben
- Bei Zustandsänderungen `aria-pressed` verwenden

## States

### Visuelles Feedback
- Default: Grundzustand
- Hover: Subtile Änderung zur Interaktionsanzeige
- Focus: Deutlicher Fokusring (2px solid)
- Active/Pressed: Visuelles Feedback bei Klick
- Disabled: Reduzierte Opazität, keine Interaktion möglich

### Tastaturinteraktion
- **Tab**: Navigation zum Button
- **Enter/Space**: Aktivierung des Buttons
- **Escape**: Abbruch der Interaktion (wenn relevant)

## Best Practices

### Allgemein
- Native `<button>` Elemente verwenden
- Klare, prägnante Labels
- Konsistentes visuelles Design
- Logische Tab-Reihenfolge

### E-Commerce spezifisch
- Action-Buttons (z.B. "In den Warenkorb") prominent platzieren
- Status-Feedback bei Aktionen geben
- Loading-States für asynchrone Aktionen
- Eindeutige Call-to-Actions

## Checkliste für Entwickler
- [x] Native Button-Elemente verwendet
- [x] ARIA-Attribute korrekt implementiert
- [x] Touch-Targets ausreichend groß
- [x] Kontraste WCAG 2.1 AA konform
- [x] Fokus-Management implementiert
- [x] Tastaturzugang getestet
- [x] Icon-Only Buttons mit Labels versehen
- [x] States visuell unterscheidbar

::: warning
Buttons sollten immer den nativen HTML-Button verwenden. DIV- oder SPAN-Elemente mit Button-Rolle sind nur in Ausnahmefällen zu verwenden.
:::