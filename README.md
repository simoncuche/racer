# 🌴 Mallorca Rallye

Ein Rennspiel für zwei Kinder und ihre Flitzer: Der **rote Sportwagen** (SX 158) und der
**blaue Jeep** (SX 1718) rasen quer über Mallorca. Von der Kathedrale in Palma durch die Serra de
Tramuntana nach Sóller, die Küstenstraße hinauf zum Leuchtturm am Cap de Formentor und durch
Windmühlen- und Sonnenblumenland bis zum Strand von Es Trenc.

Das Spiel ist eine reine Web-App: **eine HTML-Datei, kein Server, keine Installation, keine
Abhängigkeiten.** Grafik, Sound und Strecken werden beim Start im Browser erzeugt. Es läuft auf dem
Handy, am Tablet und am Computer. Aktuelle Version: **1.7.1**, sie steht unten auf dem Startbildschirm.

## Spielen

### Auf dem iPhone oder Android-Handy

Am einfachsten über eine Webadresse, zum Beispiel GitHub Pages:

1. Die Seite in Safari oder Chrome öffnen.
2. Über das Teilen-Symbol **„Zum Home-Bildschirm“** wählen. Danach startet das Spiel als
   bildschirmfüllende App und läuft dank Service Worker auch ohne Internet.
3. Beim ersten Einschalten der Kipp-Steuerung einmal den Zugriff auf den Bewegungssensor erlauben.

Hinweis: Safari führt bei einer direkt aus der Dateien-App geöffneten HTML-Datei kein JavaScript
aus, dort braucht es also eine Webadresse. Die Seite holt sich bei jedem Start die neueste Version
vom Server und nutzt die gespeicherte Kopie nur ohne Verbindung.

### Am Computer

`index.html` doppelklicken, fertig. Es ist kein lokaler Webserver nötig.

### Steuerung

Das Auto gibt von allein Gas, es wird nur gelenkt.

| Gerät | Lenken | Sonstiges |
|---|---|---|
| Handy | Pfeil-Buttons unten, oder linke/rechte Bildschirmhälfte antippen | ⏸ Pause, 🔊 Ton, 📱 Kipp-Steuerung |
| Handy mit Kipp-Steuerung | Handy nach links oder rechts neigen | Beim Rennstart kurz ruhig halten, das legt die Mitte fest |
| Computer | `←` `→` oder `A` `D` | `P` oder `Esc` für Pause |

Die Kipp-Steuerung wird in der Streckenauswahl oder im Rennen rechts oben eingeschaltet und bleibt
gespeichert. Sie reagiert ab etwa 3 Grad und lenkt bei etwa 22 Grad voll ein. Hoch- und Querformat
funktionieren beide.

## Was drin ist

### Fahrer und Autos

| | Roter Flitzer | Blauer Jeep |
|---|---|---|
| Fahrerin / Fahrer | Mädchen mit Lockenkopf | Junge im blauen Shirt |
| Stärke | Liegt super auf der Straße | Beschleunigt kräftiger, kommt neben der Straße gut voran |
| Schwäche | Wird im Gelände sehr langsam | – |

Die Namen der Kinder lassen sich im Auswahlbildschirm eintippen und werden gespeichert. Das jeweils
andere Kind fährt als Gegner mit.

### Tempo und Boost

* Grundtempo bis **110 km/h**, automatisch.
* Orange **Boost-Felder** auf der Straße geben gut drei Sekunden Turbo bis **150 km/h**, mit Flammen,
  Tempolinien und glühendem Bildrand.
* Neben der Straße wird es langsam, der Jeep deutlich weniger als der Sportwagen.

### Strecken

| Strecke | Unterwegs |
|---|---|
| ⛰️ Palma → Sóller | Kathedrale, Altstadt, Trockensteinmauern, Olivenhaine, Bergmassive, Valldemossa, Deià, Steinbrücken, Orangental, Sóller-Tram |
| 🌊 Pollença → Formentor | Hafenort mit Café, Strandhütten, Klippen, Pinien, Serpentinen, Mirador, Leuchtturm |
| 🏖️ Santanyí → Es Trenc | Windmühlen, Mandelbäume, Weinberge, Sonnenblumen, Kakteen, Schafe, Ses Salines, Colònia, Dünen und Strand |

Jede Fahrt dauert etwa anderthalb Minuten. Ortsschilder zeigen, wo man gerade ist. Im Ziel wartet ein
Zielbogen mit Konfetti-Regen.

### Verkehr und Crashs

Touristenbusse, Roller, Radfahrer und Ziegen sind unterwegs. Beim Zusammenstoß sprühen Funken, Staub
steigt auf, Sterne kreisen über dem Kopf und das Auto verliert Tempo. Auch das andere Kind weicht
dem Verkehr aus.

### Meeresfrüchte sammeln

Garnelen, Fische, Krabben, Muscheln und Tintenfische schweben animiert über der Straße. Wer sie
einsammelt, bekommt Funken, ein aufsteigendes „+1“ und einen Eintrag im Ergebnis.

### Rangliste

Pro Strecke werden die zehn besten Zeiten mit Name, Auto, Datum, gesammelten Meeresfrüchten und
Turbos gespeichert. Die Rangliste ist über den Startbildschirm erreichbar, nach jedem Rennen steht
der eigene Platz im Ergebnis. Gespeichert wird im Browser (localStorage) und zusätzlich als Cookie.

### Sound

Motorsound, Countdown, Einsammel-, Turbo- und Crash-Geräusche sowie eine Fanfare im Ziel, alles per
WebAudio erzeugt. Über das Lautsprecher-Symbol abschaltbar.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Das komplette Spiel: Layout, Grafik, Strecken, Physik, Sound, Menüs |
| `manifest.json` | Macht die Seite auf dem Home-Bildschirm zur App (Name, Farben, Vollbild) |
| `sw.js` | Service Worker für Offline-Betrieb. Fragt zuerst das Netz, liefert ohne Verbindung aus dem Cache |
| `LICENSE` | MIT-Lizenz |

## Technik

* **Pseudo-3D-Engine** nach klassischem Arcade-Vorbild: Die Strecke besteht aus Segmenten mit Kurve
  und Höhe, die pro Bild auf den Bildschirm projiziert werden. Objekte am Straßenrand sind Sprites,
  die mit der Entfernung skaliert und an Kuppen abgeschnitten werden.
* **Alle Grafiken werden prozedural gezeichnet**: Autos, Kinder, Palmen, Oleander, Häuser, Kirchen,
  Brücken, Berge, Meeresfrüchte und so weiter entstehen beim Start als Canvas-Sprites. Es gibt keine
  Bilddateien.
* **Hintergrund** mit Himmel, Sonne, Wolken, Bergkette, Meer und Hügeln in mehreren Ebenen, die sich
  in Kurven unterschiedlich schnell bewegen.
* **Partikelsystem** für Funken, Staub, Flammen, Reifenqualm und Konfetti.
* **Eingabe**: Touch-Buttons, Antippen der Bildschirmhälften, Tastatur und Lagesensor
  (DeviceOrientation, mit iOS-Berechtigungsabfrage). Die Lenkung ist stufenlos.
* **Rendering**: Die interne Auflösung ist auf 900 Pixel Kantenlänge begrenzt, damit es auf dem Handy
  flüssig bleibt. Ein Fehler in der Spielschleife wird abgefangen, das Bild friert nie ein.
* **Speicher**: Namen, Fahrer, Strecke, Ton, Kipp-Steuerung, Bestzeiten und Rangliste liegen im
  localStorage, die Rangliste zusätzlich im Cookie `mr_lb`.

### Spielwerte anpassen

Die wichtigsten Stellschrauben stehen oben in `index.html`:

```js
const VERSION='1.7.1', VERSION_DATE='2026-10-01';
const KMH_MAX=110, KMH_BOOST=150, BOOST_SEC=3.2;   // Tempo und Dauer des Turbos
const DRAW_DIST=240;                                // Sichtweite in Segmenten
```

Pro Strecke in `STAGES`: `rivalSpeed` (Tempo des Gegners relativ zum Spieler), Farben für Himmel,
Gras und Straße, die Ortsschilder und in `build()` der Streckenverlauf mit `straight`, `curve`,
`sCurve`, `hill` sowie die Landschaft mit `fill`, `mix`, `town`, `far`, `over` und `sprite`.

### Neue Version veröffentlichen

1. `VERSION` und `VERSION_DATE` in `index.html` anpassen.
2. Den Cache-Namen in `sw.js` auf dieselbe Nummer setzen.
3. Committen und pushen. Nach etwa einer Minute ist die neue Version online, geöffnete Handys laden
   sie beim nächsten Start selbst nach.

### Testen

Für einen schnellen Durchlauf ohne Handy reicht Chromium mit Playwright, zum Beispiel:

```js
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  page.on('pageerror', e => console.error(e.message));
  await page.goto('file:///pfad/zu/racer/index.html');
  await page.click('#btnStart'); await page.click('#btnToStages'); await page.click('#btnRace');
  await page.waitForTimeout(8000);
  await page.screenshot({ path: 'rennen.png' });
  await browser.close();
})();
```

Der Spielzustand ist im Browser als `G` erreichbar (`G.position`, `G.speed`, `G.items`, …), die
Strecke als `G.track`, die Effekte als `FX`.

## Lizenz

MIT, siehe `LICENSE`.
