# Account Menu Button (TradelinePro, B2B)

::: info
**Achtung:** Diese Seite bezieht sich ausschließlich auf die Account-Menu-Button Komponente, welche durch das TradelinePro Enterprise-Plugin aktiviert wird.
:::

![Platzhalter für Grafik: Responsives Verhalten der Benefit-Bar][placeholder]

Der Account Menu Button ist eine zentrale, Tradeline-Pro spezifische Komponente für die Nutzerverwaltung, die den aktuellen Kontext des angemeldeten Benutzers anzeigt und Zugriff auf kontobezogene Funktionen ermöglicht.

**Inhalt dieser Seite:**
[[toc]]

## Zweck und Herausforderungen
Der Account Menu Button dient als zentraler Zugangspunkt für Kontoeinstellungen und den Firmenwechsel. Die Herausforderung besteht darin, komplexe Informationen kompakt darzustellen und dabei Barrierefreiheit zu gewährleisten.

## Struktur und Aufbau
Der Button besteht aus folgenden Hauptelementen:
1. E-Mail-Adresse des angemeldeten Nutzers
2. Badge für die aktive Firma
3. Benutzer-Icon
4. Chevron-Icon für das Dropdown-Menü

**Hier ein Beispiel-Pattern für die grundlegende HTML-Struktur:**

```html
<button 
  type="button"
  class="account-menu-button"
  aria-haspopup="menu"
  aria-expanded="false"
  aria-controls="account-menu-content">
  
  <span class="account-info">
    <span class="email">testus.testmann@musterfirma.de</span>
    <span class="company-badge" aria-label="Aktive Firma:">Musterfirma</span>
  </span>
  
  <span class="icons" aria-hidden="true">
    <span class="user-icon">
      <svg focusable="false" width="24" height="24"><!-- SVG-Code --></svg>
    </span>
    <span class="chevron-icon">
      <svg focusable="false" width="24" height="24"><!-- SVG-Code --></svg>
    </span>
  </span>
</button>

<div id="account-menu-content" 
  class="menu" 
  role="menu" 
  hidden>
  <!-- Menüinhalt -->
</div>
```

::: note
Die Klassennamen und Demo-Daten dienen der Veranschaulichung der Struktur. Das Pattern demonstriert die korrekte Verwendung von ARIA-Attributen für optimale Accessibility.
:::

**Erklärung:**
- Der Button verwendet type="button" um das standardmäßige Submit-Verhalten zu verhindern und die Rolle als interaktives Element klar zu definieren.
- Das Attribut `aria-haspopup="menu"` signalisiert Screenreader-Nutzern, dass der Button ein Menü öffnet.
- `aria-expanded` zeigt den aktuellen Zustand des Menüs an (offen/geschlossen) und wird via JavaScript aktualisiert.
- `aria-controls` verknüpft den Button mit seinem zugehörigen Menü durch die ID-Referenz.
- Der `.account-info` Container gruppiert die Nutzerinformationen logisch zusammen.
- Die E-Mail-Adresse ist in einem separaten `<span class="email">` für bessere Strukturierung und mögliche CSS-Styling-Optionen.
- Das Company-Badge nutzt `aria-label="Aktive Firma:"` um Screenreader-Nutzern zusätzlichen Kontext zu geben.
- Der Icons-Container ist mit `aria-hidden="true"` markiert, da die Icons rein dekorativ sind und keine zusätzlichen Informationen für Screenreader-Nutzer bieten.
- Die SVGs sind mit `focusable="false"` versehen, um unerwünschte Fokuspunkte in der Tab-Reihenfolge zu vermeiden.
- Das Menü selbst nutzt `role="menu"` für die korrekte semantische Bedeutung und hidden für initiales Verbergen.
- Die gesamte Struktur ermöglicht eine klare Tab-Reihenfolge, bei der der Button als einzelnes Element fokussierbar ist.


## Barrierefreiheit
- Verwende `aria-haspopup="menu"` und `aria-expanded` für das Dropdown-Verhalten
- Stelle sicher, dass der Button per Tastatur bedienbar ist
- Implementiere Escape-Taste zum schließen des Menüs
- Nutze aussagekräftige ARIA-Labels
- Vermeide rein visuelle Zustandsanzeigen _(color-independence)_

## Best Practices
- Setze eine Mindest- oder Maximalbreite für optimale Lesbarkeit
- Implementiere eine Ellipsis für lange E-Mail-Adressen mit Tooltip
- Stelle konsistente Hover- und Fokus-States bereit
- Nutze semantisch korrektes HTML
- Gewährleiste Touch-Targets von mindestens 44x44px

## States und Interaktionen
Der Button sollte folgende Zustände unterstützen:
- Default
- Hover
- Focus
- Active/Pressed
- Expanded (Menü geöffnet)
- Disabled (optional)

## JavaScript-Verhalten (Optionales Beispiel)
```js
const button = document.querySelector('.account-menu-button');
const menu = document.querySelector('#account-menu-content');

button.addEventListener('click', () => {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isExpanded);
  menu.hidden = isExpanded;
});

// Schließen bei Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !menu.hidden) {
    button.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    button.focus();
  }
});
```

::: note
Dies ist ein rein optionales Beispiel, welches zur Umsetzung bei Bedarf hinzugezogen werden kann. Eine sinnvolle Implementierung kann abhängig von den technischen Gegebenheiten variieren.
:::

## Checkliste für Entwickler
- [X] HTML-Struktur entspricht dem Pattern
- [X] ARIA-Attribute korrekt implementiert
::: warning
Hier ist es wichtig, dass du die ARIA-Attribute korrekt gewählt sind. Für Screenreader-Nutzer sind falsche ARIA-Attribute schlimmer als garkeine ARIA-Attribute. 
:::
- [X] Tastaturnavigation überprüft und verifiziert
- [X] Hover/Focus States vorhanden
- [X] Screenreader-Kompatiblität verifiziert
- [X] Ellipsis mit Tooltip für lange E-Mail-Adressen implementiert (optional)
- [X] Escape-Taste schließt Menü

<br>

::: info
Gerne darfst du aktiv zur Verbesserung dieses Lösungsansatzes beitragen. Wenn du Vorschläge oder Optimierungen hast, teile sie bitte mit dem entsprechenden Ansprechpartner.
:::