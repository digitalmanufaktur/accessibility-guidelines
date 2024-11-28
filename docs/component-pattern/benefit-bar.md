# Benefit Bar
Die Benefit-Bar ist eine wichtige Komponente in unserem Online-Shop, die Kunden über zentrale Vorteile und Services informiert. Sie wird prominent über der Navigation platziert und passt sich responsiv an verschiedene Bildschirmgrößen an.

**Inhalt dieser Seite:**
[[toc]]

## Zweck und Herausforderungen
Der Hauptzweck der Benefit-Bar ist es, wichtige Informationen wie Lieferbedingungen, Serviceleistungen oder Zertifizierungen auf einen Blick zu präsentieren. Die Herausforderung besteht darin, diese Informationen auf allen Geräten optimal darzustellen und dabei Barrierefreiheit zu gewährleisten.

## Struktur und Aufbau
Die Benefit-Bar besteht aus folgenden Hauptelementen:
1. Container mit semantischer Bedeutung
2. Versteckte Überschrift für Screenreader
3. Inhaltlicher Bereich (Slider auf kleineren Bildschirmen)
4. Navigationselemente (auf kleineren Bildschirmen(Slider))

**Hier ein Beispiel-Pattern für die grundlegende HTML-Struktur:**
```html
<div class="benefit-bar" role="region" aria-label="Kundenvorteile">
  <h2 class="visually-hidden">Unsere Vorteile für Sie</h2>
  
  <div class="benefit-bar-container">
    <!-- Hier Slider, bzw. Benefits einsetzen -->
  </div>
  
  <!-- Hier ein Beispiel für die korrekte Struktur der Controls -->
  <div class="benefit-bar-controls">
    <button class="benefit-bar-button benefit-bar-button-prev" type="button" aria-label="Vorherige Vorteile">
      <span class="visually-hidden">Vorherige</span>
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
        <!-- verwendetes SVG-Icon -->
      </svg>
    </button>
    <button class="benefit-bar-button benefit-bar-button-next" type="button" aria-label="Nächste Vorteile">
      <span class="visually-hidden">Nächste</span>
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
        <!-- verwendetes SVG-Icon -->
      </svg>
    </button>
  </div>
</div>
```

::: note
Die Benennung der Klassen im Pattern dient ausschließlich der Nachvollziehbarkeit der HTML-Struktur. Die im Beispiel verwendeten Klassen müssen so nicht in der Implementierung vorkommen.

Das Beispiel soll die korrekte Verwendung von W3 ARIA-Rollen und korrekter HTML-Semantik im Hinblick auf Nutzer von assistiven Technologien verdeutlichen. Erläuterung im Folgenden. Alle nicht betroffenen Aspekte können natürlich bei Bedarf von diesem Beispiel abweichen.
:::


**Erklärung:**
- Die gesamte Benefit-Bar ist in einem `<div>` mit der Rolle `role="region"` und einem beschreibenden `aria-label="Kundenvorteile"` eingeschlossen. Dies hilft Screenreader-Nutzern, den Zweck dieses Bereichs zu verstehen.
- Eine versteckte Überschrift (`<h2 class="visually-hidden">`) wird verwendet, um die Struktur der Seite für Screenreader-Nutzer zu verbessern, ohne das visuelle Design zu beeinflussen.
- Der eigentliche Slider-Inhalt wird in einem separaten Container platziert. Hier würde der Splide-Slider eingefügt werden. (`.benefit-bar-container`)
- Die Steuerelemente (Vor- und Zurück-Buttons) sind außerhalb des Slider-Containers platziert, um eine konsistente Positionierung zu gewährleisten.
- Die Buttons haben aussagekräftige aria-label-Attribute (`aria-label="Vorherige Vorteile"`, `aria-label="Nächste Vorteile"`), die Screenreader-Nutzern den Zweck der Buttons erklären.
- Die Pfeil-Icons sind als SVGs eingebunden, mit `aria-hidden="true"` und `focusable="false"`, um sie vor Screenreadern zu verbergen, da ihre Funktion bereits durch die Button-Labels beschrieben wird.
- Zusätzliche visuelle versteckte Texte (`<span class="visually-hidden">`) innerhalb der Buttons bieten weitere Kontextinformationen für Screenreader-Nutzer.

## Responsives Verhalten
- Desktop: Alle 4 Benefits werden nebeneinander dargestellt (genug Platz vorhanden).
- Tablet/schmale Layouts: 2 Benefits werden gleichzeitig angezeigt, Slider-Funktionalität aktiviert (siehe Splide-Slider).
- Smartphone: Nur 1 Benefit wird angezeigt, Slider-Funktionalität aktiviert.

[Platzhalter für Grafik: Responsives Verhalten der Benefit-Bar]

## Barrierefreiheit
- Verwende semantisch korrekte HTML-Struktur.
- Nutze ARIA-Attribute für bessere Screenreader-Unterstützung.  
::: warning
Hier ist es wichtig, dass du die ARIA-Attribute korrekt gewählt sind. Für Screenreader-Nutzer sind falsche ARIA-Attribute schlimmer als garkeine ARIA-Attribute. 
:::
- Stelle sicher, dass die Tastaturbedienbarkeit für alle interaktiven Elmemente gewährleistet ist.
- Stelle sicher, dass die Fokus-Reihenfolge logisch und den Erwartungen entsprechend funktioniert und dass alle interaktive Elemente deutlich sichtbare Fokus-States haben.
- Achte auf ausreichende Kontrastverhältnisse zwischen den Elementen und ihrem Hintergrund (z.B. Text zu Button-Hintergrund oder Button zu Hintergrund der Section).
::: note
Für das Checken der Kontrastverhältnisse kannst du den [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) nutzen.
Wir streben **WCAG 2.1 AA** Standard an.
:::
- Achte auf Textalternativen für SVG-Icons und Grafiken.

## dmf Best Practices
- Verwende den [Splide-Slider](https://splidejs.com/) für optimale Barrierefreiheit.
- Implementiere in der Benefit-Bar wenn nicht anders gewünscht eine Fade-Transition mit 0.2s Dauer für subtile Übergänge. Die Anzeigedauer eines Slides soll 5s betragen.
- Setze eine Mindesthöhe und -breite für Touch-Targets.
- Wenn nicht anders gewünscht begrenze den Text auf maximal zwei Zeilen, danach Ellipsis mit Tooltip.
- Pausiere den Slider bei Tastatur-Fokus (natives Verhalten des [Splide-Slider](https://splidejs.com/))

## Checkliste für Entwickler
- [X] HTML-Struktur entspricht dem empfohlenen Pattern
- [X] Splide Slider korrekt implementiert und konfiguriert
- [X] Responsives Verhalten auf allen Breakpoints getestet
- [X] Barrierefreiheit mit Screenreader (z.B. VoiceOver auf dem Mac oder NVDA auf Windows)
- [X] Fade-Transition und Timing korrekt umgesetzt
- [X] Touch-Targets haben eine Mindestgröße von 48px in Breite und Höhe
- [X] Texte werden nach zwei Zeilen mit Ellipsis abgeschnitten
- [X] Tooltip für abgeschnittene Texte implementiert
- [X] Slider pausiert bei Tastaturfokus

<br>

::: info
Gerne darfst du aktiv zur Verbesserung dieses Lösungsansatzes beitragen. Wenn du Vorschläge oder Optimierungen hast, teile sie bitte mit dem entsprechenden Ansprechpartner.
:::