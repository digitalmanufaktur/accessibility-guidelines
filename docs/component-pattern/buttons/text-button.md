# Text-Button

Text Buttons sind die grundlegendste Form von Buttons und werden für klare, eindeutige Aktionen verwendet. Sie sind z.B. besonders wichtig für primäre Call-to-Actions im E-Commerce.

**Inhalt dieser Seite:**
[[toc]]

## Zweck und Verwendung

Text Buttons dienen der direkten, unmissverständlichen Benutzerinteraktion. Sie sind ideal für:
- Primäre Aktionen („Kaufen”, „In den Warenkorb“)
- Formular-Submissions („Speichern“, „Absenden“)
- Navigationselemente („Weiter“, „Zurück“)

## Struktur und Aufbau

### Basis Implementierung

```html
<button 
  type="button" 
  class="btn"
  aria-pressed="false">
  Label text
</button>
```

::: note
Die Klassennamen und Demo-Daten dienen der Veranschaulichung der Struktur. Das Pattern demonstriert die korrekte Verwendung von ARIA-Attributen für optimale Accessibility.
:::

**Erklärung:**

- Verwendung des nativen `<button>`-Tags für optimale Accessibility
- `type="button"` verhindert ungewolltes Submit-Verhalten
- Klares, prägnantes Label ohne ablenkende Elemente (Ein Button oder Link gleicht immer einem Versprechen dem User gegenüber!)
- `aria-pressed` für Toggle-Buttons (optional)

## Barrierefreiheit

### Grundanforderungen

- Eindeutige, aussagekräftige Labels
- Ausreichender Kontrast nach WCAG 2.1 AA (4.5:1 für Text, 3:1 für Button zu Button-Hintergrund)
- Mindestgröße 44x44px für Touch-Targets
- Sichtbarer Fokus-Indikator
- Konsistente Button-States

### Tastaturinteraktion

- <kbd>Tab</kbd> **Tab:** Fokussiert den Button

- <kbd>↵</kbd> **Enter:** Aktiviert den Button / Öffnet den Link

- <kbd>esc</kbd> **Escape:** Bricht Aktion ab (nur wenn relevant durch z.B. ein durch den Button ausgelöster Prozess aktiviert wurde)

## E-Commerce Leitfaden:

### Primäre Aktionen

- „In den Warenkorb“ Buttons prominent platzieren
- Status-Feedback bei Warenkorbaktionen
- Loading-States für asynchrone Prozesse

### Hierarchie
- Primär: Volle Farbfüllung
- Sekundär: Outline oder reduzierte Farbintensität
- Tertiär: Text-Only oder Ghost-Button

### Best-Practices

- Konsistente Größen und Abstände
- Klare visuelle Hierarchie
- Eindeutige Aktionsbeschreibungen
- Vermeidung generischer Labels („Klicken“, „Hier“, „Mehr lesen“, etc.)
- Status-Feedback bei Interaktion (States)

## Checkliste für Entwickler

- [X] Native Button-Elemente verwendet
- [X] Aussagekräftige Labels implementiert
- [X] Ausreichende Touch-Targets
- [X] Kontraste WCAG 2.1 AA konform
- [X] Tastaturzugang getestet
- [X] Status-Feedback implementiert
- [X] Loading-States vorhanden
- [X] Fokus-Management korrekt

<br>

::: warning
Vermeide die Verwendung von DIV- oder SPAN-Elementen als Buttons. Native Button-Elemente bieten die beste Accessibility und Kompatibilität.
:::