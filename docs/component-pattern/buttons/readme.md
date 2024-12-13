# Buttons

Buttons sind essenzielle interaktive Elemente jeder Benutzeroberfläche. Dieses Kapitel beschreibt die verschiedenen Button-Typen, ihre Implementierung und Best Practices für Barrierefreiheit.

**Inhalt dieser Seite:**
[[toc]]

## Übersicht Button-Typen

### Standard Buttons

[Text Button:](./text-button.md)  
Für klare, eindeutige Aktionen

[Icon Button:](./icon-button.md)  
Für platzsparende, universelle Aktionen

[Text + Icon Button:](./text-icon-button.md)  
Kombination für verstärkte visuelle Bedeutung

### Spezielle Button-Typen

[Menu Button:](./menu-button.md)  
Für Dropdown-Menüs und Navigation

[Status Button:](./status-button.md)  
Für Zustandsänderungen und Feedback

## Grundlegende Anforderungen

### Barrierefreiheit
- Tastaturzugang muss gewährleistet sein
- Mindestgröße von 44x44px für Touch-Targets
- Ausreichende Kontrastverhältnisse (WCAG 2.1 AA)
- Korrekte ARIA-Attribute je nach Button-Typ
- Screenreader-kompatible Beschriftungen

### Interaktionsdesign
- Klare visuelle Unterscheidung von interaktiven Elementen
- Konsistente Hover- und Fokus-States
- Deutliches visuelles Feedback bei Aktionen
- Logische Tab-Reihenfolge

## Gemeinsame Prinzipien

### HTML-Struktur
- Verwende möglichst immer native `<button>`-Elemente
- Setze korrekte `type`-Attribute
- Implementiere semantisch korrekte Verschachtelung
- Vermeide unnötige Wrapper-Elemente

### Wichtige Zustände _(States)_ eines Buttons
- Default
- Hover
- Focus
- Active/Pressed
- Disabled

### ARIA-Grundlagen
- Korrekte Rollen und Attribute
- Statusänderungen kommunizieren
- Beschreibende Labels
- Korrekte Verschachtelung

## E-Commerce Best-Practices
- Klare Call-to-Actions (in Aussage und visueller Hierarchie)
- Konsistente Button-Hierarchien über den gesamten Shop
- Status-Feedback bei direkt ausgeführten Aktionen (z.B. „In den Warenkorb“)
- Loading-States für asynchrone Prozesse implementieren

<br>

::: warning
Buttons sollten immer native HTML-Elemente verwenden. Custom-Implementierungen nur in Ausnahmefällen mit vollständiger ARIA-Unterstützung.
:::

::: info
Detaillierte Implementierungsbeispiele und spezifische Anforderungen findest du in den jeweiligen Unterseiten der Button-Typen.
:::