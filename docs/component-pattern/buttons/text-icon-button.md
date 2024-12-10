# Text + Icon Button

Text + Icon Buttons kombinieren die Vorteile von Text- und Icon-Buttons und bieten sowohl visuelle als auch textliche Information. Sie sind besonders effektiv für wichtige Aktionen, die schnell erkannt werden sollen.

**Inhalt dieser Seite:**
[[toc]]

## Zweck und Verwendung:

Diese Button-Variante eignet sich besonders für:

- Primäre Aktionen mit visueller Unterstützung
- Wichtige Navigationselemente
- Funktionen, die schnell erkennbar sein müssen
- Aktionen, die zusätzliche visuelle Hinweise benötigen

## Struktur und Aufbau

### Basis-Implementierung

```html
<button 
  type="button" 
  class="btn btn-icon-text"
  aria-pressed="false">
  <span class="icon" aria-hidden="true">
    <svg focusable="false" width="24" height="24">
      <!-- SVG-Code -->
    </svg>
  </span>
  <span class="label">Button Label</span>
</button>
```
::: note
Die Klassennamen und Demo-Daten dienen der Veranschaulichung der Struktur. Das Pattern demonstriert die korrekte Verwendung von ARIA-Attributen für optimale Accessibility.
:::

**Erklärung:**

- Der Button verwendet eine semantisch korrekte `<button>`-Struktur mit `type="button"`
- Das Icon ist in einem `<span class="icon">` Container mit `aria-hidden="true"` gekapselt, da es rein dekorativ ist
- Das SVG-Element hat `focusable="false"`, um unerwünschte Tab-Stops zu vermeiden
- Der Text ist in einem separaten `<span class="label">` für bessere Strukturierung und Styling-Optionen

## Barrierefreiheit

### Grundanforderungen

- Klarer, aussagekräftiger Text
- Icon unterstützt die Bedeutung visuell (⚠️ sinnvoll und verständlich)
- Ausreichende Touch-Target-Größe (mindestens 44px x 44px)
- Deutlicher Fokus-Indikator
- Konsistente, deutlich unterscheidbare Button-States

### Tastaturnavigation

- <kbd>Tab</kbd> **Tab:** Fokussiert den Button

- <kbd>↵</kbd> **Enter:** Aktiviert den Button

- <kbd>Space</kbd> **Space:** Aktiviert den Button

### Best Practices

- Icon und Text müssen inhaltlich zusammenpassen
- Konsistente Abstände zwischen Icon und Text
- Konsistente Icon-Größen (24x24px empfohlen, es kann jedoch auch unterschiedliche, vordefinierte Größen geben. Dennoch Target-Size beachten!)
- Logische Icon-Platzierung, z.B.:
  - Links vom Text bei „Zurück“ (Pfeil links)
  - Rechts vom Text bei „Weiter“ (Pfeil rechts)
- Ausreichendes Padding für das Erreichen der Touch-Targets (wenn nötig Padding der äußeren Container reduzieren)
- Gap / Margin von mind. 4px zwischen den Buttons
- Visuelles Feedback bei allen Interaktionen

## Checkliste für Entwickler

- [X] Semantisch korrekte Button-Struktur implementiert
- [X] Icon als dekorativ markiert
- [X] Ausreichende Touch-Target-Size
- [X] Fokus-Management (Tastaturnavigation) implementiert
- [X] Text-Icon-Abstände einheitlich implementiert
- [X] Eindeutig unterscheidbare States vorhanden
- [X] Tastaturnavigation getestet
- [X] Screenreader-Kompatiblität getestet

<br>

::: warning
Achte darauf, dass das Icon die Textbedeutung unterstützt und nicht davon ablenkt. Das Icon sollte die Aktion visuell verstärken.
:::