# 🌴 Mallorca Rallye

Ein kleines Rennspiel für zwei Kinder und ihre Flitzer: der **rote Sportwagen** (SX 158) und der
**blaue Jeep** (SX 1718) rasen durch Mallorca – von Palma über die Tramuntana nach Sóller, die
Küstenstraße zum Cap de Formentor entlang und durch Windmühlen-Land bis zum Strand von Es Trenc.

Das Spiel ist eine reine Web-App: **eine HTML-Datei, kein Server, keine Installation, kein Internet nötig.**

## Spielen

* **Auf dem Handy:** `index.html` öffnen (z. B. per AirDrop/Mail/Dateien-App an das Handy schicken und
  im Browser öffnen) oder die Datei auf einen beliebigen Webspace legen. Über „Zum Home-Bildschirm
  hinzufügen“ läuft es bildschirmfüllend wie eine App. Das Auto gibt von allein Gas (bis 120 km/h),
  gelenkt wird mit den Pfeil-Buttons unten oder durch Antippen der linken/rechten Bildschirmhälfte.
  **Kipp-Steuerung:** Über den Button „📱 Kipp-Steuerung“ (Streckenauswahl oder rechts oben im Rennen)
  lenkst du durch Neigen des Handys. Beim Rennstart das Handy kurz ruhig halten, das legt die Mitte fest.
  Auf dem iPhone fragt der Browser einmal nach der Erlaubnis für den Bewegungssensor. 
* **Am Computer:** `index.html` doppelklicken. Pfeiltasten links/rechts oder `A`/`D`, `P`/`Esc` für Pause.
* **Boost:** Orange Felder auf der Straße geben für gut drei Sekunden Turbo bis 170 km/h.

## Was drin ist

* Zwei Fahrer mit eigenem Fahrverhalten: Der Sportwagen ist schneller, der Jeep kommt besser über
  Wiese und Schotter. Die Namen der Kinder lassen sich im Auswahlbildschirm eintippen.
* Drei Strecken mit Ortsschildern, Dörfern mit Kirchen und Cafés, Steinbrücken über der Straße, Bergmassiven,
  Kathedrale, Trockensteinmauern, Olivenbäumen, Oleander, Pinien, Mandelbäumen, Weinbergen, Sonnenblumen,
  Kakteen, Schafen, Windmühlen, Sóller-Tram, Strandhütten, Leuchtturm, Strand und Meer.
* Das jeweils andere Kind fährt als Gegner mit. Dazu Touristenbusse, Roller, Radfahrer und Ziegen.
* Meeresfrüchte (Garnele, Fisch, Krabbe, Muschel, Tintenfisch) einsammeln zählt fürs Ergebnis.
* Rangliste: die zehn besten Zeiten pro Strecke mit Name, Datum und Auto. Gespeichert im Browser
  (localStorage) und zusätzlich als Cookie, erreichbar über „Rangliste“ im Startbildschirm.
* Motorsound und Signaltöne per WebAudio, abschaltbar über den Lautsprecher-Button.
* `manifest.json` und `sw.js` machen es zur installierbaren, offline-fähigen PWA, wenn es über
  `http(s)` ausgeliefert wird (bei direktem Öffnen der Datei werden sie einfach ignoriert).

Alle Grafiken und Töne werden zur Laufzeit im Browser erzeugt – es gibt keine Bild- oder Audiodateien.
