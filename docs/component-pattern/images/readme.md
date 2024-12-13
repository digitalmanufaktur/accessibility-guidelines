# Bilder

Bilder müssen grundsätzlich mit Textalternativen (z.B. `alt`-Tags) versehen sein, die die Informationen oder Funktion der Bilder beschreiben. Die Beschreibung stellt sicher, dass die Bilder von Menschen mit verschiedenen Behinderungen korrekt interpretiert und erfasst werden können. Im folgenden Abschnitt wird beschrieben, wie man je nach Bild-Typ und Zweck eine geeignete Textalternative bereitstellt.

**Inhalt dieser Seite:**
[[toc]]

## Bild-Typen

### [Informative Bilder](./informative-images.md) 

Informative Bilder sind visuelle Elemente wie Fotos, Illustrationen, Diagramme oder Screenshots, die wesentliche Inhalte eigenständig vermitteln oder Textinhalte sinnvoll ergänzen. Im Gegensatz zu dekorativen Elementen tragen sie aktiv zum Verständnis des Themas bei.

**Merkmale:**
- Eigenständige Informationsträger
- Ergänzen Textinhalte
- Nicht rein dekorativ

**Barrierefreiheit und Alternativtexte:**
Für eine barrierefreie Gestaltung benötigen informative Bilder präzise Alternativtexte. Diese kurzen, prägnanten Beschreibungen erfassen den Kerninhalt oder die Funktion des Bildes, ohne unnötige Details zu nennen. Sie ermöglichen Menschen mit Sehbehinderungen den Zugang zu den Bildinformationen durch Hilfstechnologien wie Screenreader. Ein gut formulierter Alternativtext fokussiert auf das Wesentliche und gewährleistet so die Zugänglichkeit der visuellen Inhalte für alle Nutzer.


### [Dekorative Bilder](./decorative-images.md)

Dekorative Bilder sind visuelle Elemente, die primär ästhetischen Zwecken dienen und keine inhaltliche Bedeutung für das Verständnis der Webseite oder des Dokuments haben. Sie umfassen Hintergrundmuster, Trennlinien, Schmuckelemente oder rein stilistische Grafiken.

**Merkmale:**
- Dienen der visuellen Gestaltung
- Übermitteln keine wesentlichen Informationen
- Beeinflussen das Verständnis des Inhalts nicht

**Barrierefreiheit:**
Dekorative Bilder sollten für Screenreader und andere assistive Technologien ignoriert werden. Dies wird erreicht, indem man ihnen ein leeres alt-Attribut (`alt=""`) zuweist. Dadurch wird sichergestellt, dass Nutzer von Hilfstechnologien nicht durch irrelevante Informationen abgelenkt werden und sich auf den wesentlichen Inhalt konzentrieren können.


### [Funktionale Bilder](./functional-images.md)

Funktionale Bilder sind visuelle Elemente, die eine bestimmte Aktion oder Funktion auf einer Webseite repräsentieren. Sie dienen als interaktive Elemente und sind oft in Links, Buttons oder anderen Bedienelementen integriert.

**Merkmale:**
- Lösen Aktionen aus oder vermitteln Funktionalität
- Häufig als Icons oder Symbole dargestellt
- Können allein stehen oder Text ergänzen

**Barrierefreiheit und Alternativtexte:**
Funktionale Bilder erfordern präzise Alternativtexte, die ihre Funktion oder das Ziel der Aktion beschreiben. Der Alternativtext sollte die Aktion oder das Ergebnis des Klicks auf das Bild verdeutlichen, nicht das Bild selbst beschreiben. Bei Bildern innerhalb von Links oder Buttons mit bereits vorhandenem beschreibendem Text kann ein leerer Alternativtext (alt="") verwendet werden, um Redundanz zu vermeiden.

**Beispiele:**
- Logos als Links (`alt="Firmenname Homepage"`)
- Druckersymbol (`alt="Seite drucken"`)
- Lupensymbol in einem Suchbutton (`alt="Suchen"`)
- Icon für „Neues Fenster“ neben einem Link (`alt="Öffnet in neuem Fenster"`)


### [Bildgruppen](./groups-of-images.md)

Bildgruppen sind Zusammenstellungen mehrerer Bilder, die gemeinsam eine Information vermitteln oder einen thematischen Zusammenhang bilden. Sie können aus verschiedenen Bildtypen wie Fotos, Illustrationen oder Diagrammen bestehen.

**Merkmale:**
- Mehrere Bilder mit inhaltlichem Zusammenhang
- Vermitteln gemeinsam eine übergeordnete Information
- Können einzeln oder als Gruppe relevant sein

**Barrierefreiheit und Alternativtexte:**
Für eine barrierefreie Gestaltung von Bildgruppen ist ein durchdachter Umgang mit Alternativtexten erforderlich. Der Ansatz variiert je nach Art der Bildgruppe:

1. Bei Bildern, die zusammen eine einzelne Information vermitteln, sollte nur das erste Bild einen beschreibenden Alternativtext erhalten, der die Gesamtinformation wiedergibt. Alle anderen Bilder in der Gruppe erhalten einen leeren Alternativtext (`alt=""`).

2. Bei Bildsammlungen kann jedes Bild einen eigenen Alternativtext haben. Zusätzlich sollte eine übergeordnete Beschreibung für die gesamte Gruppe bereitgestellt werden. Dies kann durch Verwendung von HTML5-Elementen wie `<figure>` und `<figcaption>` sowie ARIA-Attributen wie `role="group"` und `aria-labelledby` umgesetzt werden.

Diese Vorgehensweise stellt sicher, dass Nutzer von Hilfstechnologien sowohl die Einzelinformationen als auch den Gesamtkontext der Bildgruppe erfassen können.


## Alt-Text Entscheidungsbaum

1. **Enthält das Bild Text?**
- **Ja:**
  - Text ist auch als echter Text in der Nähe vorhanden → Leeres `alt`-Attribut  
  (siehe [Dekorative Bilder](./decorative-images.md))
  - Text dient nur visuellen Effekten → Leeres `alt`-Attribut  
   (siehe [Dekorative Bilder](./decorative-images.md))
  - Text hat eine spezifische Funktion (z.B. Icon) → `alt`-Attribut beschreibt die Funktion  
   (siehe [Funktionale Bilder](./functional-images.md))
  - Text im Bild ist nirgendwo sonst vorhanden → `alt`-Attribut enthält den Bildtext
- **Nein:** Weiter zu 2

2. **Wird das Bild in einem Link oder Button verwendet?**
- **Ja:** `alt`-Attribut beschreibt das Linkziel oder die Aktion  
(siehe [Funktionale Bilder](./functional-images.md))
- **Nein:** Weiter zu 3

3. **Trägt das Bild zur Bedeutung der Seite oder des Kontexts bei?**
- **Ja:**
  - Einfache Grafik oder Foto → Kurze Beschreibung im `alt`-Attribut  
 (siehe [Informative Bilder](./informative-images.md))
  - Diagramm oder komplexe Information → Bildinformation anderswo auf der Seite bereitstellen
  - Redundanter Inhalt zu nahegelegenem Text → Leeres `alt`-Attribut  
 (siehe [Funktionale Bilder](./functional-images.md))
- **Nein:** Weiter zu 4

4. **Ist das Bild rein dekorativ oder nicht für Nutzer bestimmt?**
- **Ja:** Leeres `alt`-Attribut  
    (siehe [Dekorative Bilder](./decorative-images.md))
- **Nein:** Weiter zu 5

5. **Ist der Bildtyp nicht aufgeführt oder der `alt`-Text unklar?**
- Orientiere dich an den detaillierten Bildanleitungen oder besuche für weitere Informationenen: [https://www.w3.org/WAI/tutorials/images/](https://www.w3.org/WAI/tutorials/images/)


<br>

**WCAG-Verweise**

- [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG21/quickref/#qr-text-equiv-all)
- [1.4.5 Images of Text](https://www.w3.org/WAI/WCAG21/quickref/#qr-visual-audio-contrast-text-presentation)
- [1.4.9 Images of Text (No Exception)](https://www.w3.org/WAI/WCAG21/quickref/#qr-visual-audio-contrast-text-images)