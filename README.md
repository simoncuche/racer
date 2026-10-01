# 🌴 Mallorca Rallye

Ein kleines Rennspiel für zwei Kinder und ihre Flitzer: der **rote Sportwagen** (SX 158) und der
**blaue Jeep** (SX 1718) rasen durch Mallorca – von Palma über die Tramuntana nach Sóller, die
Küstenstraße zum Cap de Formentor entlang und durch Windmühlen-Land bis zum Strand von Es Trenc.

Das Spiel ist eine reine Web-App: **eine HTML-Datei, kein Server, keine Installation, kein Internet nötig.**

## Spielen

* **Auf dem Handy:** `index.html` öffnen (z. B. per AirDrop/Mail/Dateien-App an das Handy schicken und
  im Browser öffnen) oder die Datei auf einen beliebigen Webspace legen. Über „Zum Home-Bildschirm
  hinzufügen“ läuft es bildschirmfüllend wie eine App. Gelenkt wird mit den Pfeil-Buttons unten oder durch
  Antippen der linken/rechten Bildschirmhälfte. ▲ ist Gas, ▼ ist Bremse. Ohne Gas rollt das Auto von allein
  mit halber Geschwindigkeit – auch die Kleinsten kommen so ins Ziel.
* **Am Computer:** `index.html` doppelklicken. Pfeiltasten oder `W A S D`, `P`/`Esc` für Pause.

## Was drin ist

* Zwei Fahrer mit eigenem Fahrverhalten: Der Sportwagen ist schneller, der Jeep kommt besser über
  Wiese und Schotter. Die Namen der Kinder lassen sich im Auswahlbildschirm eintippen.
* Drei Strecken mit Ortsschildern, Kathedrale, Trockensteinmauern, Olivenbäumen, Oleander, Pinien,
  Mandelbäumen, Windmühlen, Leuchtturm, Strand und Meer.
* Das jeweils andere Kind fährt als Gegner mit. Dazu Touristenbusse, Roller, Radfahrer und Ziegen.
* Orangen und Ensaimadas einsammeln gibt einen kleinen Schub.
* Bestzeiten und Siege werden im Browser gespeichert (localStorage).
* Motorsound und Signaltöne per WebAudio, abschaltbar über den Lautsprecher-Button.
* `manifest.json` und `sw.js` machen es zur installierbaren, offline-fähigen PWA, wenn es über
  `http(s)` ausgeliefert wird (bei direktem Öffnen der Datei werden sie einfach ignoriert).

Alle Grafiken und Töne werden zur Laufzeit im Browser erzeugt – es gibt keine Bild- oder Audiodateien.
