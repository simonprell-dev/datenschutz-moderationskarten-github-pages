# Datenschutz – Moderationskarten

Fertige, **touch-optimierte iPad-Webseite** für acht Interviewfragen zu Datenschutz und Digitalisierung.

## Starten

Die Seite besteht aus reinen statischen Dateien und funktioniert auf GitHub Pages **ohne Build-Prozess** und ohne externe JavaScript- oder Font-Dienste.

1. ZIP entpacken.
2. Auf GitHub ein neues Repository anlegen, z. B. `datenschutz-karten`.
3. Alle Dateien **aus dem Projektordner direkt ins Hauptverzeichnis** des Repositorys hochladen: `index.html`, `styles.css`, `app.js`, `favicon.svg`, `.nojekyll` und `README.md`.
4. Unter **Settings → Pages → Build and deployment → Deploy from a branch** den Branch `main` und Ordner `/ (root)` wählen, anschließend speichern.
5. Die Seite ist danach unter `https://BENUTZERNAME.github.io/datenschutz-karten/` erreichbar (GitHub kann für die erstmalige Veröffentlichung etwas Zeit benötigen).

Für eine **User-Page** mit Repository `BENUTZERNAME.github.io` lautet die Adresse entsprechend `https://BENUTZERNAME.github.io/`.

**Live-Seite:** https://simonprell-dev.github.io/datenschutz-moderationskarten-github-pages/
**Repository:** https://github.com/simonprell-dev/datenschutz-moderationskarten-github-pages

## Bedienung auf dem iPad

- Im Querformat besonders gut lesbar; Hochformat funktioniert ebenfalls.
- Große Tasten **Zurück** und **Weiter** oder horizontal auf der Karte wischen.
- Die acht kleinen Markierungen unten erlauben direkten Kartenwechsel.
- Das Kachel-Symbol oben rechts öffnet die Übersicht aller Fragen.
- **Weiterführende Informationen** öffnet Hintergrundwissen, Quellen und den gesprochenen Webseiten-Tipp.
- In Safari über **Teilen → Zum Home-Bildschirm** als Web-App ablegen.
- Tastatur: `←`/`→` und `Bild ↑`/`Bild ↓` wechseln Karten; `I` öffnet die Info; `Esc` schließt sie.
- Jede Karte hat einen Direktlink, z. B. `?karte=4`.

## Aufteilung

1. Philipp · Datensammlung
2. Simon · Rechtsgrundlagen
3. Philipp · Suchmaschinen
4. Simon · Selbstschutz
5. Philipp · Gesetze
6. Simon · KI
7. Philipp · Bildung
8. Simon · Fazit

## Inhalte ändern

Die Texte und Quellen stehen übersichtlich als `cards`-Array **ganz oben in `app.js`**. Pro Karte können `question`, `cues` (große Gedankenstützen), `answer`, `details`, `resources` und `tip` geändert werden. Die Sprecher stehen in `speaker`.

Beachte: Aussagen sind als Vorschläge für eine mündliche Experteneinschätzung formuliert, nicht als verbindliche Rechtsberatung. Externe Links werden nur beim Antippen geöffnet.

## Datenschutz und Technik

- Keine Analyse-/Tracking-Dienste, keine Cookies, kein Login, keine extern geladenen Schriftarten.
- Zur Darstellung benötigt die Seite keine externen APIs; nur die Links im Info-Bereich führen zu fremden Websites.
- GitHub Pages selbst wird von GitHub bereitgestellt; GitHub kann dabei wie bei anderen Webhostern technisch notwendige Zugriffsdaten verarbeiten.
- Die App ist ohne zusätzliche PWA-Offline-Caches gehalten, damit Textänderungen nach GitHub-Veröffentlichung zuverlässig erscheinen.
- Systemschriften (Avenir Next, Segoe UI usw.) sorgen für eine gut lesbare, schnelle Darstellung ohne Font-Download.

## Dateien

- `index.html` – Oberfläche
- `styles.css` – responsive Design
- `app.js` – Fragen, Texte und Touch-/Tastatursteuerung
- `favicon.svg` – Icon
- `.nojekyll` – unkompliziertes GitHub-Pages-Hosting
