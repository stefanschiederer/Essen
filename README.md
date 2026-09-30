# Was essen wir heute?

Familien-App fürs Abendessen: abstimmen, Glücksrad drehen, Rezepte mit Portionsrechner und Kochmodus, Wochenplan und gemeinsame Einkaufsliste.

**App öffnen:** https://stefanschiederer.github.io/Essen/

## Aufbau

| Datei | Inhalt |
|---|---|
| `index.html` | Die komplette App (Oberfläche, Logik, Design) |
| `recipes.js` | Alle Rezepte – hier neue Rezepte ergänzen |
| `img/` | Rezeptfotos (Wikimedia Commons, Lizenz steht beim Rezept) |
| `firebase-config.js` | Zugangsdaten zur Firebase-Datenbank |
| `firestore.rules` | Sicherheitsregeln für Firebase |
| `manifest.webmanifest`, `icons/` | App-Symbol für den Startbildschirm |

## Gemeinsamer Speicher (Firebase)

Ohne Firebase speichert jedes Handy nur für sich. Mit Firebase sehen alle Familienmitglieder live dieselben Daten.

1. Auf https://console.firebase.google.com ein Projekt anlegen (Google Analytics kann aus bleiben).
2. **Build → Firestore Database → Datenbank erstellen**, Standort `europe-west3 (Frankfurt)`, im **Produktionsmodus** starten.
3. Im Reiter **Regeln** den Inhalt von `firestore.rules` einfügen und **Veröffentlichen**.
4. **Projekteinstellungen (Zahnrad) → Allgemein → Meine Apps → Web-App (`</>`)** hinzufügen. Firebase Hosting wird nicht gebraucht.
5. Das angezeigte `firebaseConfig`-Objekt in `firebase-config.js` statt `null` eintragen.

Die Daten jeder Familie liegen unter `familien/<Familien-Code>/…`. Nur wer den Code (oder den Einladungslink) kennt, kann sie lesen und ändern.

## Neues Rezept hinzufügen

In `recipes.js` einen Eintrag nach dem Muster der anderen ergänzen und ein Foto als `img/<id>.jpg` ablegen (ideal: Querformat, ca. 960 px breit).

## Lokal ausprobieren

`index.html` einfach im Browser öffnen.
