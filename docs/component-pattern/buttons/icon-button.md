# Icon Button

Icon Buttons sind kompakte, platzsparende Steuerelemente, die ein Icon anstelle von Text verwenden. Sie eignen sich besonders für häufig verwendete, universell verständliche Aktionen.

**Inhalt dieser Seite:**
[[toc]]

## Zweck und Verwendung

Icon Buttons werden eingesetzt für:

- Universell verständliche Aktionen (z.B. „Schließen", „Suchen")
- Platzsparende Interfaces
- Wiederkehrende Funktionen
- Visuelle Verstärkung von Aktionen

## Struktur und Aufbau

### Basis-Implementierung

```html
<button 
  type="button" 
  class="btn-icon"
  aria-label="Beschreibender Text für Screenreader">
  <span class="icon" aria-hidden="true">
    <svg focusable="false" width="24" height="24">
      <!-- SVG-Code -->
    </svg>
  </span>
</button>
```

::: note
Die Klassennamen und Demo-Daten dienen der Veranschaulichung der Struktur. Das Pattern demonstriert die korrekte Verwendung von ARIA-Attributen für optimale Accessibility.
:::

**Erklärung:**
- Nativer `<button>` mit aussagekräftigem aria-label
- Icon-Container mit `aria-hidden="true"` für rein dekorative Darstellung
- SVG mit `focusable="false"` zur Vermeidung von Tab-Stops
- Mindestgröße von 44x44px für Touch-Targets

## Barrierefreiheit

### Grundanforderungen

- Aussagekräftige `aria-label` für Screenreader
- Ausreichende Touch-Target-Größe (44px x 44px)
- Deutlicher Fokus-Indikator für Tastaturnavigation
- Kontrastreiche Icons (3:1, WCAG 2.1 AA)
- Deutlich unterscheidbare States (Default, Hover, Focus, Active/Pressed, Disabled)

### Tastaturnavigation

- <kbd>Tab</kbd> **Tab:** Fokussiert den Button

- <kbd>↵</kbd> **Enter:** Aktiviert den Button

- <kbd>Space</kbd> **Space:** Aktiviert den Button

### Best-Practices

- Universell verständliche Icons verwenden
- Konsistente Icon-Größen (24x24px empfohlen, es kann jedoch auch unterschiedliche, vordefinierte Größen geben. Dennoch Target-Size beachten!)
- Ausreichender Padding für das Erreichen der Touch-Targets (wenn nötig Padding der äußeren Container reduzieren)
- Gap / Margin von mind. 4px zwischen den Buttons
- Visuelles Feedback bei allen Interaktionen
- Bei Unsicherheit Text-Button bevorzugen


## Checkliste für Entwickler
- [X] Aussagekräftiges `aria-label` für Screenreader integriert
- [X] Icon als dekorativ markiert
- [X] Touch-Targets mindestens 44px x 44px
- [X] Fokus-Management (Tastaturnavigation) implementiert
- [X] Icon-Kontraste geprüft
- [X] Deutlich unterscheidbare States vorhanden
- [X] Tastaturzugang getestet
- [X] Screenreader-Kompatiblität getestet

<br>

::: warning
Icon-Only Buttons sollten nur für eindeutig verständliche Aktionen verwendet werden. Im Zweifelsfall einen Text-Button oder Text+Icon-Button verwenden.
:::