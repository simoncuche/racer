# 🌴 Mallorca Rallye

Ein Rennspiel für zwei Kinder und ihre Flitzer: Der **rote Sportwagen** (SX 158) und der
**blaue Jeep** (SX 1718) rasen quer über Mallorca und einmal durch die Schweiz. Von der Kathedrale in Palma über die Ebene Es Pla
nach Artà, von der Luzerner Kapellbrücke dem Sempachersee entlang nach Sursee und durch
Windmühlen- und Sonnenblumenland bis zum Strand von Es Trenc.

Das Spiel ist eine reine Web-App: **eine HTML-Datei, kein Server, keine Installation, keine
Abhängigkeiten.** Grafik, Sound und Strecken werden beim Start im Browser erzeugt. Es läuft auf dem
Handy, am Tablet und am Computer. Aktuelle Version: **3.15.1**, sie steht unten auf dem Startbildschirm. Ein Tipp auf die Versionszeile öffnet den Versionsverlauf; ausführlich steht er in `CHANGELOG.md`.

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

Beim Lenken bleibt das Auto von hinten zu sehen, nur die eingeschlagenen Vorderräder lugen auf der
Kurvenseite leicht hervor. Die Kipp-Steuerung wird in der Streckenauswahl oder im Rennen rechts oben eingeschaltet und bleibt
gespeichert. Sie misst die Neigung über die Schwerkraftrichtung, funktioniert also flach wie steil gehalten gleich, reagiert ab etwa
4 Grad und lenkt bei etwa 20 Grad voll ein. Ein Tipp auf das 📱-Symbol im Rennen setzt die Mitte neu. Hoch- und Querformat
funktionieren beide.

## Was drin ist

### Fahrer und Autos

| | Roter Flitzer | Blauer Jeep |
|---|---|---|
| Fahrerin / Fahrer | Mädchen mit Lockenkopf | Junge im blauen Shirt |
| Tempo | 110 km/h, Boost 150 | 105 km/h, Boost 145 |
| Stärke | Liegt super auf der Straße | Lenkt direkter, etwas kleiner, beschleunigt kräftiger, kommt neben der Straße gut voran |
| Schwäche | Wird im Gelände sehr langsam | 5 km/h langsamer |

Vor der Autowahl gibt jedes Kind seinen Namen ein; zuletzt benutzte Namen stehen als Schnellauswahl bereit.
Dazu gestaltet jedes Kind seinen Avatar im Konfigurator: zwölf Frisuren, elf Haarfarben, sechs Hauttöne, vier
Gesichtsformen, Augenfarbe, Augenbrauen, vier Münder, sechs Schnäuze, sechs Bärte, fünf Brillen, acht Kopfbedeckungen,
Sommersprossen und Ohrringe, dazu ein Zufallsknopf. Der Kopf sitzt dann im Auto, steht im HUD, im Ergebnis und in der
Rangliste neben dem Namen; gespeichert und geteilt werden nur die Merkmale als kurzer Text. Das jeweils andere Auto fährt als Gegner mit.

### Geheimes drittes Fahrzeug

Im Autowahl-Bildschirm ist ein **gelber Doppeldecker** versteckt. Wie man ihn hervorholt, wird hier
nicht verraten, und er muss bei jedem Öffnen der Autowahl neu entdeckt werden. Er wird auch neben der Straße nicht langsamer, schafft
aber nur 60 km/h (Turbo 100). Beim Lenken legt er sich in die Kurve, mit den ▲▼-Buttons in der
Mitte, den Pfeiltasten oder durch Kippen des Handys nach vorne und hinten steigt und sinkt er.
Meeresfrüchte und Turbo-Felder erwischt er nur im Tiefflug, dort trifft er aber auch Verkehr und Büsche. Bäume und Häuser muss er hoch überfliegen, Brücken kann er unter- oder überfliegen, in den Tunnel muss er tief hinein.

### Tempo und Boost

* Grundtempo bis **110 km/h**, automatisch.
* Orange **Boost-Felder** auf der Straße geben gut drei Sekunden Turbo bis **150 km/h**, mit Flammen,
  Tempolinien und glühendem Bildrand.
* Neben der Straße wird es langsam, der Jeep deutlich weniger als der Sportwagen.

### Strecken

| Strecke | Unterwegs |
|---|---|
| 🏰 Palma → Artà | Kathedrale, spanische Fahnen, Windmühlen von Sant Jordi, Mandelbäume und Schafe auf der Ebene Es Pla, Algaida, Montuïri, Manacor, Strand von Cala Millor mit Liegestühlen, Sonnenschirmen und Booten, Weinberge, Steinbrücken, Talaiot und die Wallfahrtskirche hoch über Artà |
| 🇨🇭 Luzern → Sursee | Bergig: zwei Anstiege, Abfahrt ins Tal, Viadukt mit Steinbrüstung über das Tal, Serpentinen und ein Tunnel durch einen Berg mit Felsportal und Gewölbe zum Pass, lange Abfahrt zum See, zum Schluss noch zwei Hügel. Statt Meeresfrüchten gibt es Käse, Schokolade, Bratwurst und Zopf zu sammeln, im Ziel jubeln Kühe und Murmeltiere. Kapellbrücke mit Wasserturm, Löwendenkmal, Sendeturm Beromünster, Schenkon am See, Gansabhauet in Sursee, Chalets, Tannen, Apfelbäume, schwarz-weiße Kühe mit Glocke, Murmeltiere, Schweizer Fahnen, Luftseilbahnen mit fahrender Gondel, Berge mit Schneekuppe direkt an der Straße, Sempachersee mit Segelbooten am Straßenrand, Emmen, Rothenburg, Sempach; Schneeberge im Hintergrund und graue Straßenkante statt Rot-Weiß |
| 🚀 Mondbasis → Alienstadt | Mondlandschaft mit Kratern und Felsen, Sternenhimmel mit Mond, Sonne und Ringplanet, Raketen, Kuppelbasen, Antennen, Raumtore über der Straße, UFOs, Mondrover und Astronauten als Verkehr, Aliens und Roboter am Rand und als Publikum, Kristalle, Kometen, Mini-Planeten und Alien-Eier zum Sammeln, leuchtende Fahrbahnränder |

Die Strecken werden mit einem festen Zufallsgenerator je Strecke aufgebaut und sind damit auf allen
Geräten identisch, inklusive Objekten, Meeresfrüchten, Boost-Feldern und Verkehr. Jede Fahrt dauert etwa
anderthalb Minuten. Ortsschilder zeigen, wo man gerade ist. Im Ziel warten ein
Zielbogen, Konfetti-Regen, Applaus und eine Allee voller hüpfender, klatschender Meeresfrüchte.

### Start

Vor dem Auto liegt eine Schachbrett-Startlinie, links und rechts stehen Streckenposten mit
Zielflagge. Während des Countdowns leuchtet die Startampel über der Straße Licht für Licht rot, der
Motor dreht hörbar und sichtbar hoch, Auspuffwölkchen steigen auf. Bei „LOS!“ springt die Ampel auf
Grün, die Posten senken die Flagge und die Reifen qualmen.

### Verkehr und Crashs

Touristenbusse mit blinkendem Blinker, Roller mit Auspuffwölkchen, strampelnde Radfahrer und trottende
Ziegen mit Glocke sind unterwegs, alle mit zwei Bewegungsphasen und kleinen Seitenbewegungen. Beim
Zusammenstoß blitzt es kurz auf, eine Druckwelle läuft vom Aufprallpunkt weg, Funken und Trümmer fliegen, das Auto hüpft, rutscht zur Seite und qualmt, Sterne kreisen über dem Kopf, der getroffene Verkehrsteilnehmer wird weggeschubst und wackelt, und das Auto verliert Tempo. Auf Android-Handys vibriert das Gerät dabei kurz (iPhones erlauben im Browser keine Vibration). Auch das andere Kind weicht
dem Verkehr aus.

### Meeresfrüchte sammeln

Garnelen, Fische, Krabben, Muscheln und Tintenfische schweben animiert über der Straße. Wer sie
einsammelt, bekommt Funken, ein aufsteigendes „+1“ und einen Eintrag im Ergebnis.

### Punkte und gemeinsame Rangliste

Jedes Rennen ergibt eine Punktzahl: Zeitbonus `(200 − Sekunden) × 20`, dazu 80 Punkte pro
Meeresfrucht und 50 pro Turbo. Das andere Auto fährt nur als Verkehr mit, das Duell zählt nicht. Die Punkte laufen im HUD live
mit.

Die Rangliste ist **online und für alle Handys gemeinsam**: Jedes Ergebnis wird in eine Firebase-Firestore-
Datenbank geschrieben (Projekt `mallorca-ralley`, eine Sammlung pro Strecke und Saison, zum Beispiel
`scores_arta_s2`). Die Konstante `SEASON` in `index.html` hochzählen leert alle Ranglisten, die alten Einträge
bleiben in der Datenbank, werden aber nicht mehr angezeigt. Über „Rangliste“ im Startbildschirm wählt man zuerst eine der drei Strecken und sieht dann deren 25 beste
Punktzahlen aller Spieler; „Zurück“ führt zur Streckenwahl und von dort zum Start. Die Rangliste ist auch
aus jeder Streckenkarte und aus dem Ergebnis erreichbar. Direkt nach der Zieldurchfahrt steht groß der eigene Platz in der gemeinsamen Rangliste („Platz 3 von 27“), und in der
vollen Liste ist der eigene Eintrag hervorgehoben, auch wenn er außerhalb der Top 25 liegt. Ohne Netz werden Ergebnisse in einer
Warteschlange gespeichert und beim nächsten Start nachgereicht. Eine separate lokale Rangliste gibt es
nicht, ohne Netz zeigt der Ranglisten-Bildschirm nur einen Hinweis.

Die Zugriffsregeln der Datenbank stehen in `firestore.rules`: Lesen ist für alle erlaubt, Schreiben nur
für vollständige, plausible Einträge (Name bis 14 Zeichen, Zeit 20 bis 1000 Sekunden, Punkte bis 30000),
Ändern und Löschen ist gesperrt. Sie werden in der Firebase-Konsole unter „Firestore Database“ →
„Regeln“ eingefügt. Die Rangliste ist über den Startbildschirm erreichbar, nach jedem Rennen steht
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
| `firestore.rules` | Zugriffsregeln für die gemeinsame Online-Rangliste, zum Einfügen in die Firebase-Konsole |
| `CHANGELOG.md` | Versionsverlauf, die Kurzfassung steht auch im Spiel hinter der Versionszeile |
| `LICENSE` | MIT-Lizenz |

## Technik

* **Pseudo-3D-Engine** nach klassischem Arcade-Vorbild: Die Strecke besteht aus Segmenten mit Kurve
  und Höhe, die pro Bild auf den Bildschirm projiziert werden. Objekte am Straßenrand sind Sprites,
  die mit der Entfernung skaliert und an Kuppen abgeschnitten werden.
* **Alle Grafiken werden prozedural gezeichnet**: Autos, Kinder, Palmen, Oleander, Häuser, Kirchen,
  Brücken, Berge, Meeresfrüchte und so weiter entstehen beim Start als Canvas-Sprites. Es gibt keine
  Bilddateien.
* **Hintergrund** mit Himmel, Sonne, Wolken, Bergkette, Meer und Hügeln in mehreren Ebenen, die sich
  in Kurven unterschiedlich schnell bewegen. Der Horizont folgt der obersten sichtbaren Straßenkante, so dass
  an Kuppen und Abfahrten keine Fläche zwischen Himmel und Straße entsteht.
* **Partikelsystem** für Funken, Staub, Flammen, Reifenqualm und Konfetti.
* **Eingabe**: Touch-Buttons, Antippen der Bildschirmhälften, Tastatur und Lagesensor
  (DeviceOrientation, mit iOS-Berechtigungsabfrage). Die Lenkung ist stufenlos.
* **Rendering**: Die interne Auflösung ist auf 900 Pixel Kantenlänge begrenzt, damit es auf dem Handy
  flüssig bleibt. Ein Fehler in der Spielschleife wird abgefangen, das Bild friert nie ein.
* **Speicher**: Namen, Fahrer, Strecke, Ton, Kipp-Steuerung und Bestzeiten liegen im localStorage, offene
  Online-Einträge in der Warteschlange `mr_queue`.
* **Online-Rangliste**: Firestore wird direkt über seine REST-Schnittstelle per `fetch` angesprochen, ohne
  Firebase-Bibliothek. Der Web-API-Schlüssel steht im Spiel, das ist bei Firebase so vorgesehen; der Schutz
  kommt über die Regeln in `firestore.rules`.

### Spielwerte anpassen

Die wichtigsten Stellschrauben stehen oben in `index.html`:

```js
const VERSION='1.8.0', VERSION_DATE='2026-10-01';
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
