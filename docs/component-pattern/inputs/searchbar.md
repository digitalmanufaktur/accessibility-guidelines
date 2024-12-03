# Searchbar

Das Suchfeld im Header ist eine zentrale Komponente für die Navigation und Produktsuche. Es muss barrierefrei und intuitiv bedienbar sein, während es gleichzeitig die Live-Suchergebnisse zugänglich präsentiert.

**Inhalt dieser Seite:**
[[toc]]

## Zweck und Herausforderungen
Die Hauptaufgabe der Suche ist es, Nutzern einen schnellen Zugriff auf Produkte zu ermöglichen. Die Herausforderungen liegen in der barrierefreien Umsetzung der Live-Suche und der korrekten Kommunikation von Statusänderungen an Screenreader.

## Struktur und Aufbau
**Hier ein Beispiel-Pattern für die grundlegende HTML-Struktur:**

```html
<div class="search-container" role="search">
  <label for="search-input" class="visually-hidden">Produktsuche</label>
  
  <div class="search-input-wrapper">
    <input 
      type="search"
      id="search-input"
      class="search-input"
      placeholder="Suchbegriff eingeben ..."
      aria-expanded="false"
      aria-controls="search-results"
      aria-describedby="search-description"
      aria-activedescendant=""
    >
    
    <button 
      type="submit" 
      class="search-button"
      aria-label="Suche ausführen">
      <svg aria-hidden="true" focusable="false"><!-- SVG-Code --></svg>
    </button>
  </div>

  <div id="search-description" class="visually-hidden">
    Während der Eingabe werden Ihnen Suchvorschläge angezeigt
  </div>

  <div 
    id="search-results" 
    class="search-results" 
    role="listbox" 
    aria-label="Suchergebnisse"
    hidden>
    <div class="search-results-header">
      <h2 class="visually-hidden">Suchergebnisse</h2>
      <button 
        type="button" 
        class="close-button"
        aria-label="Suchergebnisse schließen">
        <svg aria-hidden="true" focusable="false"><!-- SVG-Code --></svg>
      </button>
    </div>
    
    <!-- Beispiel für Suchergebnisse -->
    <div 
      class="search-result-item" 
      role="option" 
      id="result-1"
      aria-selected="false">
      <div class="result-content">
        <img 
          src="product-1.jpg" 
          alt="Produktbild Kaffeetasse"
          class="result-image"
          width="50" 
          height="50">
        <div class="result-details">
          <span class="product-name">Kaffeetasse Classic</span>
          <span class="product-price" aria-label="Preis: 26,99 Euro">26,99 €</span>
        </div>
      </div>
    </div>

    <div 
      class="search-result-item" 
      role="option" 
      id="result-2"
      aria-selected="false">
      <div class="result-content">
        <img 
          src="product-2.jpg" 
          alt="Produktbild Espressotasse"
          class="result-image"
          width="50" 
          height="50">
        <div class="result-details">
          <span class="product-name">Espressotasse Premium</span>
          <span class="product-price" aria-label="Preis: 19,99 Euro">19,99 €</span>
        </div>
      </div>
    </div>

    <a 
      href="/search?q=kaffee" 
      class="show-all-results"
      role="option"
      id="show-all"
      aria-selected="false">
      <span>Alle Suchergebnisse anzeigen</span>
      <span class="result-count" aria-label="5 Suchergebnisse gefunden">5 Suchergebnisse</span>
    </a>
  </div>
</div>
```

::: note
Die Klassennamen dienen der Veranschaulichung der Struktur. Das Pattern demonstriert die korrekte Verwendung von ARIA-Attributen für optimale Accessibility.
:::

**Erklärung HTML-Struktur:**
- Der Suchbereich ist in einem `<div>` mit `role="search"` eingeschlossen, was Screenreader-Nutzern den Zweck dieser Komponente verdeutlicht.
- Ein verstecktes `<label>` verknüpft die Beschriftung "Produktsuche" mit dem Eingabefeld, ohne das visuelle Design zu beeinflussen.
- Das Eingabefeld verwendet den nativen `type="search"` für beste Zugänglichkeit und enthält wichtige ARIA-Attribute:
  - `aria-expanded`: Kommuniziert den Zustand des Ergebnisfensters
  - `aria-controls`: Verknüpft das Eingabefeld mit seinen Ergebnissen
  - `aria-describedby`: Bietet zusätzliche Kontext-Informationen zur Funktionsweise
  - `aria-activedescendant`: Verweist auf das aktuell ausgewählte Suchergebnis
- Der Such-Button verwendet `aria-label` für eine klare Beschreibung seiner Funktion, während das Icon als dekorativ markiert ist.
- Ein versteckter Beschreibungstext erklärt die Live-Suche-Funktionalität für Screenreader-Nutzer.
- Der Ergebnisbereich nutzt `role="listbox"` für die korrekte semantische Bedeutung einer interaktiven Liste.
- Jedes Suchergebnis erhält `role="option"` und `aria-selected` für die korrekte Screenreader-Interpretation.
- Der Schließen-Button im Ergebnisfenster hat ein aussagekräftiges `aria-label` und sein Icon ist als dekorativ gekennzeichnet.

### Shopware 6 Anpassungen
Die Standard-Shopware-Implementierung wurde wie folgt optimiert:
- Der Schließen-Button wurde vom Header in das Suchergebnisfenster verschoben für bessere Usability
- Die ARIA-Attribute wurden für bessere Screenreader-Unterstützung angepasst
- Die Tastaturnavigation wurde verbessert und folgt nun einem logischen Fluss
- Die Fokus-Verwaltung wurde optimiert, insbesondere beim Öffnen und Schließen des Ergebnisfensters

::: warning
Bei Verwendung anderer technischer Grundlagen (z.B. PWA mit Hubble) muss die Struktur entsprechend adaptiert werden, wobei die grundlegenden Accessibility-Patterns beibehalten werden sollten.
:::

## Tastaturinteraktion
**<kbd>⇥</kbd>&nbsp;&nbsp;Tab:** Navigation zum Suchfeld und zwischen den Suchergebnissen.

**<kbd>esc</kbd>&nbsp;&nbsp;Escape:** Schließt das Suchergebnisfenster und setzt Fokus zurück auf Suchfeld.

**<kbd>↑</kbd>, <kbd>↓</kbd>&nbsp;&nbsp;Pfeiltasten:** Navigation durch die Suchergebnisse mit visueller Fokusanzeige.

**<kbd>↵</kbd>&nbsp;&nbsp;Enter:** Auswahl eines Suchergebnisses oder Ausführen der Suche.

## States und ARIA-Attribute

- `aria-expanded`: Zeigt den Zustand des Suchergebnisfensters an
- `aria-controls`: Verknüpft das Suchfeld mit den Ergebnissen
- `aria-describedby`: Liefert zusätzliche Informationen zum Suchverhalten
- `role="search"`: Kennzeichnet den Suchbereich
- `role="listbox"`: Definiert die Ergebnisliste als interaktive Liste
- `role="option"`: Kennzeichnet einzelne Suchergebnisse als auswählbar
- `aria-selected`: Zeigt den Auswahlstatus eines Suchergebnisses an

## ARIA-Pattern und Rollen

### Verwendete ARIA-Rollen
- `role="search"`: Kennzeichnet den gesamten Suchbereich als Suchfunktion
  - Wichtig für die Navigation mit Screenreadern
  - Ermöglicht schnelles Auffinden der Suchfunktion
- `role="listbox"`: Definiert die Suchergebnisliste
  - Kommuniziert die interaktive Natur der Ergebnisse
  - Ermöglicht korrekte Navigation durch Pfeiltasten
- `role="option"`: Kennzeichnet einzelne Suchergebnisse
  - Muss für jedes Suchergebnis gesetzt werden
  - Ermöglicht die korrekte Auswahl via Tastatur
  - Wird mit eindeutiger ID für aria-activedescendant versehen

### ARIA-States und Properties
- `aria-expanded`: 
  - Zeigt den Zustand des Ergebnisfensters an
  - Werte: "true" wenn geöffnet, "false" wenn geschlossen
  - Wird dynamisch beim Öffnen/Schließen aktualisiert
- `aria-controls`: 
  - Verknüpft Suchfeld mit Ergebnisbereich
  - ID muss mit Ergebnisbereich übereinstimmen
  - Wichtig für die programmatische Beziehung
- `aria-activedescendant`:
  - Zeigt aktuell fokussiertes Ergebnis an
  - Wird dynamisch aktualisiert bei Tastaturnavigation
  - Verweist auf die ID des aktiven Suchergebnisses

### Screenreader-Ankündigungen
- **Suchfeld:**  
 🔉 _"Produktsuche, Suchfeld"_
- **Bei Öffnen der Ergebnisse:**  
 🔉 _"5 Suchergebnisse verfügbar"_
- **Bei Navigation:**  
 🔉 _"Produktname, X Euro, Ergebnis 1 von 5"_
- **Bei Schließen:**  
 🔉 _"Suchergebnisse geschlossen"_
- **Bei keinen Ergebnissen:**  
 🔉 _"Keine Suchergebnisse gefunden"_
- **Bei Hover/Fokus:**  
 🔉 _"Produktname auswählen, X Euro"_

## JavaScript-Verhalten (Optionales Beispiel)

```js
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');
const closeButton = document.querySelector('.close-button');

// Suchergebnisse anzeigen
searchInput.addEventListener('input', () => {
  const hasValue = searchInput.value.length > 0;
  searchInput.setAttribute('aria-expanded', hasValue);
  searchResults.hidden = !hasValue;
});

// Schließen-Funktion
const closeSearch = () => {
  searchInput.setAttribute('aria-expanded', 'false');
  searchResults.hidden = true;
  searchInput.focus();
};

closeButton.addEventListener('click', closeSearch);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !searchResults.hidden) {
    closeSearch();
  }
});
```

::: note
Dies ist ein rein optionales Beispiel, welches zur Umsetzung bei Bedarf hinzugezogen werden kann. Eine sinnvolle Implementierung kann abhängig von den technischen Gegebenheiten variieren.
:::

**Erklärung JavaScript-Funktionalität:**
- Der Code selektiert die wichtigsten Interaktionselemente über ihre IDs und Klassen.
- Ein Input-Event-Listener überwacht Eingaben und:
  - Aktualisiert den `aria-expanded` Status des Suchfelds
  - Steuert die Sichtbarkeit des Ergebnisbereichs
- Die Schließen-Funktion:
  - Setzt den Expanded-Status zurück
  - Verbirgt die Ergebnisse
  - Setzt den Fokus zurück aufs Suchfeld für optimale Tastaturnavigation
- Event-Listener für den Schließen-Button und die Escape-Taste bieten verschiedene Möglichkeiten zum Schließen der Ergebnisse
- Die Fokus-Verwaltung gewährleistet eine konsistente und zugängliche Nutzererfahrung

## Barrierefreiheit

- Verwende native HTML5 `search`-Input
- Implementiere korrekte ARIA-Attribute
- Stelle sichtbare Fokus-Indikatoren bereit
- Gewährleiste Tastaturbedienbarkeit
- Kommuniziere Statusänderungen an Screenreader

::: warning
Falsche ARIA-Attribute können die Nutzererfahrung verschlechtern. Teste die Implementierung gründlich mit Screenreadern.
:::

## Best Practices
- Mindestens 44x44px Touch-Target-Größe
- Deutliche visuelle Fokus-Indikatoren
- Ausreichende Kontrastverhältnisse (WCAG 2.1 AA)
- Verzögerung bei Live-Suche (300-500ms)
- Klare Fehlerbehandlung
- Aussagekräftige Platzhaltertexte

### UI-Pattern
- Suchfeld immer mit Such-Icon kennzeichnen
- Platziere den Schließen-Button für das Suchergebnis-Popup innerhalb des Ergebnisbereichs
- Hover-States für Suchergebnisse mit subtiler Hintergrundfarbe
- Fokus-Indikatoren deutlich sichtbar gestalten
- Suchergebnisse mit Produktbild, Titel und Preis strukturieren
- Maximale Anzahl von 5-7 Suchergebnissen im Popup anzeigen

## Checkliste für Entwickler
- [x] HTML-Struktur entspricht dem Pattern
- [x] ARIA-Attribute korrekt implementiert
- [x] Tastaturnavigation getestet
- [x] Screenreader-Test durchgeführt
- [x] Kontrastverhältnisse geprüft
- [x] Touch-Targets ausreichend groß
- [x] Fehlermeldungen implementiert (falls nötig)
- [x] Live-Region für Statusänderungen

## Testing-Checkliste

### Tastaturnavigation
- [x] Tab-Navigation führt zum Suchfeld
- [x] Escape schließt Ergebnisse
- [x] Pfeiltasten navigieren durch Ergebnisse
- [x] Enter wählt Ergebnis aus
- [x] Shift+Tab navigiert rückwärts

### Screenreader-Tests
- [x] VoiceOver (macOS) Test durchgeführt
- [x] NVDA (Windows) Test durchgeführt
- [x] Korrekte Ankündigungen bei allen Zuständen
- [x] Navigation durch Ergebnisse funktioniert

### Visuelles Testing
- [x] Hover-States sichtbar
- [x] Fokus-Indikatoren deutlich erkennbar
- [x] Kontraste WCAG 2.1 AA konform
- [x] Responsive Verhalten geprüft
- [x] Touch-Targets ausreichend groß

<br>

**📋 Weitere To-Dos für die Zukunft:**
::: details
Weitere Komponenten/Bestandteile, die zukünftig separat dokumentiert werden sollten:
- Erweiterte Suchfilter
- Autocomplete-Funktionalität
- Suchergebnis-Kategorisierung
- No-Results-Handling
:::