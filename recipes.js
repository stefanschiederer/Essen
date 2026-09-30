// Rezeptsammlung für "Was essen wir heute?"
// Alle Mengen sind für `portionen` Personen angegeben; die App rechnet sie um.
// Zutat: { a: Menge (Zahl oder null), u: Einheit, n: Name }  ·  { s: "Überschrift" } für Abschnitte
// tags: veg = vegetarisch, schnell = max. 30 Min., kinder = Kinder-Liebling, suess = süßes Hauptgericht
// Bilder: Wikimedia Commons, Lizenz und Urheber in `bild`.

window.REZEPTE = [
  {
    id: "bolognese",
    name: "Spaghetti Bolognese",
    kurz: "Der Klassiker mit langsam geschmorter Hackfleischsoße.",
    zeit: 60, aktiv: 20, level: "einfach", portionen: 4, kcal: 680,
    tags: ["kinder"],
    bild: { artist: "Superbass", lizenz: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Spaghetti_Bolognese_Lokal_K.jpg" },
    zutaten: [
      { a: 500, u: "g", n: "Spaghetti" },
      { a: 500, u: "g", n: "Rinderhackfleisch (oder gemischtes Hack)" },
      { a: 1, u: "", n: "Zwiebel" },
      { a: 1, u: "", n: "Karotte" },
      { a: 1, u: "Stange", n: "Staudensellerie" },
      { a: 2, u: "Zehen", n: "Knoblauch" },
      { a: 2, u: "EL", n: "Olivenöl" },
      { a: 2, u: "EL", n: "Tomatenmark" },
      { a: 800, u: "g", n: "stückige Tomaten (2 Dosen)" },
      { a: 150, u: "ml", n: "Gemüsebrühe" },
      { a: 1, u: "TL", n: "getrockneter Oregano" },
      { a: 1, u: "TL", n: "Zucker" },
      { a: null, u: "", n: "Salz und Pfeffer" },
      { a: 60, u: "g", n: "Parmesan, frisch gerieben" }
    ],
    schritte: [
      "Zwiebel, Karotte und Sellerie sehr fein würfeln, Knoblauch fein hacken.",
      "Olivenöl in einem großen Topf erhitzen. Das Hackfleisch darin bei starker Hitze 5–6 Minuten krümelig und braun anbraten.",
      "Gemüse und Knoblauch dazugeben und 4 Minuten mitbraten, bis die Zwiebel glasig ist.",
      "Tomatenmark einrühren und 1 Minute anrösten. Mit Tomaten und Brühe ablöschen, Oregano, Zucker, Salz und Pfeffer dazugeben.",
      "Die Soße ohne Deckel bei kleiner Hitze mindestens 30 Minuten köcheln lassen, gelegentlich umrühren. Je länger, desto besser.",
      "In der Zwischenzeit die Spaghetti in reichlich Salzwasser nach Packungsangabe bissfest kochen und abgießen.",
      "Soße abschmecken, mit den Nudeln anrichten und mit Parmesan bestreuen."
    ]
  },
  {
    id: "kaesespaetzle",
    name: "Käsespätzle",
    kurz: "Schwäbische Spätzle mit viel Bergkäse und Röstzwiebeln.",
    zeit: 45, aktiv: 30, level: "mittel", portionen: 4, kcal: 820,
    tags: ["veg", "kinder"],
    bild: { artist: "4028mdk09", lizenz: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:K%C3%A4sesp%C3%A4tzle_mit_Zwiebeln_und_Beilagensalat.JPG" },
    zutaten: [
      { s: "Spätzleteig" },
      { a: 400, u: "g", n: "Weizenmehl (Type 405 oder Spätzlemehl)" },
      { a: 4, u: "", n: "Eier" },
      { a: 150, u: "ml", n: "Mineralwasser mit Kohlensäure" },
      { a: 1, u: "TL", n: "Salz" },
      { s: "Außerdem" },
      { a: 250, u: "g", n: "Bergkäse oder Emmentaler, gerieben" },
      { a: 3, u: "", n: "Zwiebeln" },
      { a: 40, u: "g", n: "Butter" },
      { a: 1, u: "EL", n: "Mehl (für die Zwiebeln)" },
      { a: null, u: "", n: "Pfeffer, Schnittlauch zum Bestreuen" }
    ],
    schritte: [
      "Mehl, Eier, Salz und Mineralwasser in einer Schüssel mit einem Kochlöffel so lange schlagen, bis der Teig Blasen wirft und zäh vom Löffel reißt (ca. 5 Minuten). 10 Minuten ruhen lassen.",
      "Zwiebeln in feine Ringe schneiden, in 1 EL Mehl wenden und in der Butter bei mittlerer Hitze 10–15 Minuten goldbraun und knusprig braten. Auf Küchenpapier abtropfen lassen.",
      "Backofen auf 180 °C Ober-/Unterhitze vorheizen. Einen großen Topf Salzwasser zum Kochen bringen.",
      "Den Teig portionsweise mit Spätzlehobel oder -presse ins siedende Wasser drücken. Sobald die Spätzle oben schwimmen, mit einer Schaumkelle herausheben.",
      "Spätzle in eine Auflaufform schichten, dabei jede Schicht mit Käse und etwas Pfeffer bestreuen. Oben mit Käse abschließen.",
      "Ca. 10 Minuten im Ofen überbacken, bis der Käse geschmolzen ist.",
      "Mit Röstzwiebeln und Schnittlauch bestreuen. Dazu passt ein grüner Salat."
    ]
  },
  {
    id: "pfannkuchen",
    name: "Pfannkuchen",
    kurz: "Dünne, goldene Pfannkuchen – süß mit Apfelmus oder Zimtzucker.",
    zeit: 30, aktiv: 25, level: "einfach", portionen: 4, kcal: 520,
    tags: ["veg", "schnell", "kinder", "suess"],
    bild: { artist: "Shisma", lizenz: "CC BY 4.0", url: "https://commons.wikimedia.org/wiki/File:Pancake_on_plate.jpg" },
    zutaten: [
      { a: 300, u: "g", n: "Weizenmehl" },
      { a: 4, u: "", n: "Eier" },
      { a: 500, u: "ml", n: "Milch" },
      { a: 100, u: "ml", n: "Mineralwasser" },
      { a: 1, u: "EL", n: "Zucker" },
      { a: 1, u: "Prise", n: "Salz" },
      { a: 3, u: "EL", n: "Butter oder Öl zum Ausbacken" },
      { s: "Zum Servieren" },
      { a: 1, u: "Glas", n: "Apfelmus (ca. 700 g)" },
      { a: 4, u: "EL", n: "Zucker mit 1 TL Zimt gemischt" }
    ],
    schritte: [
      "Mehl, Zucker und Salz in eine Schüssel geben. Milch und Eier dazugeben und alles mit dem Schneebesen glatt rühren.",
      "Mineralwasser unterrühren und den Teig 10 Minuten quellen lassen.",
      "Eine beschichtete Pfanne auf mittlerer Stufe erhitzen und dünn mit Butter ausstreichen.",
      "Eine kleine Kelle Teig hineingeben und die Pfanne schwenken, damit sich der Teig dünn verteilt.",
      "Nach 1–2 Minuten, wenn die Unterseite goldbraun ist, wenden und die zweite Seite 1 Minute backen.",
      "Fertige Pfannkuchen im Ofen bei 80 °C warm halten, bis alle gebacken sind.",
      "Mit Apfelmus oder Zimtzucker servieren – jeder rollt sich seinen selbst."
    ]
  },
  {
    id: "schnitzel",
    name: "Schnitzel mit Kartoffelsalat",
    kurz: "Knusprig paniert, dazu schwäbischer Kartoffelsalat ohne Mayo.",
    zeit: 60, aktiv: 40, level: "mittel", portionen: 4, kcal: 750,
    tags: ["kinder"],
    bild: { artist: "Holger.Ellgaard", lizenz: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Wiener_Schnitzel_2012.jpg" },
    zutaten: [
      { s: "Kartoffelsalat" },
      { a: 1, u: "kg", n: "festkochende Kartoffeln" },
      { a: 1, u: "", n: "Zwiebel" },
      { a: 250, u: "ml", n: "heiße Gemüsebrühe" },
      { a: 4, u: "EL", n: "Weißweinessig" },
      { a: 1, u: "TL", n: "mittelscharfer Senf" },
      { a: 4, u: "EL", n: "Sonnenblumenöl" },
      { a: 0.5, u: "", n: "Salatgurke" },
      { a: null, u: "", n: "Salz, Pfeffer, 1 Prise Zucker, Schnittlauch" },
      { s: "Schnitzel" },
      { a: 4, u: "", n: "Schweine- oder Kalbsschnitzel (à ca. 150 g)" },
      { a: 50, u: "g", n: "Mehl" },
      { a: 2, u: "", n: "Eier" },
      { a: 100, u: "g", n: "Semmelbrösel" },
      { a: 150, u: "ml", n: "Butterschmalz oder Öl zum Braten" },
      { a: 1, u: "", n: "Zitrone" }
    ],
    schritte: [
      "Kartoffeln mit Schale in Salzwasser ca. 20 Minuten gar kochen, abgießen, kurz ausdampfen lassen, pellen und noch warm in dünne Scheiben schneiden.",
      "Zwiebel fein würfeln und in der heißen Brühe kurz aufkochen. Essig, Senf, Salz, Pfeffer und Zucker einrühren.",
      "Die heiße Marinade über die Kartoffeln gießen, vorsichtig mischen und mindestens 20 Minuten ziehen lassen. Dann Öl, Gurkenscheiben und Schnittlauch untermischen.",
      "Schnitzel zwischen Frischhaltefolie dünn klopfen (ca. 4 mm) und mit Salz und Pfeffer würzen.",
      "Drei tiefe Teller vorbereiten: Mehl, verquirlte Eier, Semmelbrösel. Schnitzel nacheinander darin wenden, die Brösel nur locker andrücken.",
      "Reichlich Butterschmalz in einer großen Pfanne erhitzen. Die Schnitzel darin pro Seite 2–3 Minuten goldbraun ausbacken, dabei die Pfanne leicht schwenken, damit die Panade Wellen wirft.",
      "Auf Küchenpapier abtropfen lassen und mit Zitronenspalten und dem Kartoffelsalat servieren."
    ]
  },
  {
    id: "lasagne",
    name: "Lasagne",
    kurz: "Schichten aus Bolognese, Béchamel und Käse aus dem Ofen.",
    zeit: 100, aktiv: 45, level: "mittel", portionen: 4, kcal: 890,
    tags: ["kinder"],
    bild: { artist: "Ricettario di Mamidoli", lizenz: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Lasagne_al_forno.jpg" },
    zutaten: [
      { s: "Fleischsoße" },
      { a: 500, u: "g", n: "Rinderhackfleisch" },
      { a: 1, u: "", n: "Zwiebel" },
      { a: 1, u: "", n: "Karotte" },
      { a: 2, u: "Zehen", n: "Knoblauch" },
      { a: 2, u: "EL", n: "Tomatenmark" },
      { a: 800, u: "g", n: "passierte Tomaten" },
      { a: 1, u: "TL", n: "Oregano" },
      { a: 2, u: "EL", n: "Olivenöl" },
      { s: "Béchamelsoße" },
      { a: 50, u: "g", n: "Butter" },
      { a: 50, u: "g", n: "Mehl" },
      { a: 750, u: "ml", n: "Milch" },
      { a: null, u: "", n: "Muskatnuss, Salz, Pfeffer" },
      { s: "Außerdem" },
      { a: 250, u: "g", n: "Lasagneplatten (ohne Vorkochen)" },
      { a: 125, u: "g", n: "Mozzarella" },
      { a: 80, u: "g", n: "Parmesan, gerieben" }
    ],
    schritte: [
      "Zwiebel, Karotte und Knoblauch fein würfeln. Hackfleisch im Olivenöl krümelig anbraten, Gemüse dazugeben und 3 Minuten mitbraten.",
      "Tomatenmark kurz mitrösten, passierte Tomaten und Oregano dazugeben, salzen, pfeffern und 20 Minuten köcheln lassen.",
      "Für die Béchamel die Butter im Topf schmelzen, Mehl einrühren und 1 Minute anschwitzen. Nach und nach die kalte Milch mit dem Schneebesen einrühren und 5 Minuten unter Rühren köcheln lassen, bis die Soße andickt. Mit Muskat, Salz und Pfeffer würzen.",
      "Backofen auf 180 °C Ober-/Unterhitze vorheizen.",
      "In eine Auflaufform (ca. 20 × 30 cm) etwas Béchamel streichen. Dann abwechselnd Lasagneplatten, Fleischsoße und Béchamel schichten (3–4 Lagen). Mit Béchamel abschließen.",
      "Mozzarella zerzupfen und mit dem Parmesan darauf verteilen.",
      "40 Minuten backen, bis die Oberfläche goldbraun ist. Vor dem Anschneiden 10 Minuten ruhen lassen."
    ]
  },
  {
    id: "chili",
    name: "Chili con Carne",
    kurz: "Würziger Eintopf mit Bohnen und Mais – schön mild für Kinder.",
    zeit: 50, aktiv: 20, level: "einfach", portionen: 4, kcal: 610,
    tags: [],
    bild: { artist: "Carstor", lizenz: "CC BY-SA 2.5", url: "https://commons.wikimedia.org/wiki/File:Bowl_of_chili.jpg" },
    zutaten: [
      { a: 500, u: "g", n: "Rinderhackfleisch" },
      { a: 2, u: "", n: "Zwiebeln" },
      { a: 2, u: "Zehen", n: "Knoblauch" },
      { a: 1, u: "", n: "rote Paprika" },
      { a: 2, u: "EL", n: "Öl" },
      { a: 2, u: "EL", n: "Tomatenmark" },
      { a: 800, u: "g", n: "stückige Tomaten (2 Dosen)" },
      { a: 400, u: "g", n: "Kidneybohnen (1 Dose, abgetropft)" },
      { a: 285, u: "g", n: "Mais (1 Dose, abgetropft)" },
      { a: 200, u: "ml", n: "Rinderbrühe" },
      { a: 2, u: "TL", n: "Paprikapulver edelsüß" },
      { a: 1, u: "TL", n: "gemahlener Kreuzkümmel" },
      { a: 0.5, u: "TL", n: "Chilipulver (nach Geschmack)" },
      { a: 1, u: "TL", n: "Kakaopulver (optional)" },
      { a: null, u: "", n: "Salz und Pfeffer" },
      { s: "Zum Servieren" },
      { a: 250, u: "g", n: "Reis oder Baguette" },
      { a: 150, u: "g", n: "Schmand oder saure Sahne" }
    ],
    schritte: [
      "Zwiebeln und Knoblauch fein würfeln, Paprika in kleine Stücke schneiden.",
      "Öl in einem großen Topf erhitzen und das Hackfleisch darin kräftig krümelig anbraten.",
      "Zwiebeln, Knoblauch und Paprika dazugeben und 3 Minuten mitbraten. Tomatenmark und alle Gewürze einrühren und 1 Minute anrösten.",
      "Tomaten und Brühe dazugeben, aufkochen und zugedeckt 20 Minuten bei kleiner Hitze köcheln lassen.",
      "Bohnen und Mais untermischen und weitere 10 Minuten ohne Deckel köcheln lassen.",
      "Mit Salz, Pfeffer und Chili abschmecken. Für Kinder das Chilipulver weglassen und scharfe Soße am Tisch dazustellen.",
      "Mit Reis oder Brot und einem Klecks Schmand servieren."
    ]
  },
  {
    id: "curry",
    name: "Mildes Hähnchen-Curry",
    kurz: "Cremiges Curry mit Kokosmilch, zart und nicht scharf.",
    zeit: 40, aktiv: 25, level: "einfach", portionen: 4, kcal: 640,
    tags: ["kinder"],
    bild: { artist: "Miansari66", lizenz: "CC0", url: "https://commons.wikimedia.org/wiki/File:Chicken_Korma.JPG" },
    zutaten: [
      { a: 600, u: "g", n: "Hähnchenbrustfilet" },
      { a: 1, u: "", n: "Zwiebel" },
      { a: 2, u: "Zehen", n: "Knoblauch" },
      { a: 1, u: "Stück", n: "Ingwer (ca. 2 cm)" },
      { a: 2, u: "EL", n: "Öl" },
      { a: 2, u: "EL", n: "mildes Currypulver" },
      { a: 400, u: "ml", n: "Kokosmilch (1 Dose)" },
      { a: 200, u: "g", n: "passierte Tomaten" },
      { a: 150, u: "g", n: "TK-Erbsen" },
      { a: 1, u: "TL", n: "Honig" },
      { a: null, u: "", n: "Salz, Saft von ½ Limette, frischer Koriander oder Petersilie" },
      { s: "Beilage" },
      { a: 300, u: "g", n: "Basmatireis" }
    ],
    schritte: [
      "Reis nach Packungsangabe kochen.",
      "Hähnchen in mundgerechte Würfel schneiden. Zwiebel würfeln, Knoblauch und Ingwer fein reiben.",
      "Öl in einer tiefen Pfanne erhitzen, Hähnchen darin rundherum 4–5 Minuten goldbraun anbraten und herausnehmen.",
      "Zwiebel im Bratfett 3 Minuten glasig dünsten. Knoblauch, Ingwer und Currypulver dazugeben und 1 Minute unter Rühren anrösten.",
      "Kokosmilch und passierte Tomaten einrühren, aufkochen und 10 Minuten sanft köcheln lassen.",
      "Hähnchen und Erbsen dazugeben und weitere 5 Minuten garen, bis das Fleisch durch ist.",
      "Mit Honig, Salz und Limettensaft abschmecken, mit Kräutern bestreuen und mit Reis servieren."
    ]
  },
  {
    id: "pizza",
    name: "Pizza Margherita",
    kurz: "Selbstgemachter Hefeteig – jeder belegt seine Pizza, wie er mag.",
    zeit: 120, aktiv: 30, level: "mittel", portionen: 4, kcal: 780,
    tags: ["veg", "kinder"],
    bild: { artist: "Mario56", lizenz: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Margherita_Originale.JPG" },
    zutaten: [
      { s: "Teig (2 Bleche oder 4 runde Pizzen)" },
      { a: 500, u: "g", n: "Weizenmehl (Type 00 oder 550)" },
      { a: 325, u: "ml", n: "lauwarmes Wasser" },
      { a: 0.5, u: "Würfel", n: "frische Hefe (21 g) oder 1 Päckchen Trockenhefe" },
      { a: 2, u: "EL", n: "Olivenöl" },
      { a: 2, u: "TL", n: "Salz" },
      { a: 1, u: "TL", n: "Zucker" },
      { s: "Belag" },
      { a: 400, u: "g", n: "passierte Tomaten" },
      { a: 1, u: "TL", n: "Oregano" },
      { a: 1, u: "Zehe", n: "Knoblauch" },
      { a: 250, u: "g", n: "Mozzarella (2 Kugeln)" },
      { a: 1, u: "Bund", n: "frisches Basilikum" },
      { a: null, u: "", n: "Salz, Pfeffer, Olivenöl" }
    ],
    schritte: [
      "Hefe und Zucker im lauwarmen Wasser auflösen. Mit Mehl, Salz und Olivenöl 8–10 Minuten zu einem glatten, geschmeidigen Teig kneten.",
      "Teig abgedeckt an einem warmen Ort ca. 1 Stunde gehen lassen, bis er sich verdoppelt hat.",
      "Backofen mit Blech (oder Pizzastein) auf höchster Stufe (250 °C Ober-/Unterhitze) vorheizen.",
      "Passierte Tomaten mit gepresstem Knoblauch, Oregano, Salz und Pfeffer verrühren. Mozzarella gut abtropfen lassen und in Stücke zupfen.",
      "Teig in 4 Portionen teilen und auf Backpapier dünn ausziehen oder ausrollen. Mit Tomatensoße bestreichen und mit Mozzarella belegen. Jeder kann nach Wunsch weiteren Belag verteilen.",
      "Pizza mit dem Backpapier auf das heiße Blech ziehen und 8–12 Minuten backen, bis der Rand gebräunt ist.",
      "Mit frischem Basilikum und einem Spritzer Olivenöl servieren."
    ]
  },
  {
    id: "kartoffelsuppe",
    name: "Kartoffelsuppe mit Würstchen",
    kurz: "Sämige Omas-Kartoffelsuppe mit Speck, Würstchen und Majoran.",
    zeit: 45, aktiv: 20, level: "einfach", portionen: 4, kcal: 540,
    tags: ["kinder"],
    bild: { artist: "jeffreyw", lizenz: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Cream_of_potato_soup.jpg" },
    zutaten: [
      { a: 1, u: "kg", n: "mehligkochende Kartoffeln" },
      { a: 2, u: "", n: "Karotten" },
      { a: 0.25, u: "", n: "Knollensellerie (ca. 150 g)" },
      { a: 1, u: "Stange", n: "Lauch" },
      { a: 1, u: "", n: "Zwiebel" },
      { a: 100, u: "g", n: "Speckwürfel (optional)" },
      { a: 1, u: "EL", n: "Butter" },
      { a: 1.2, u: "l", n: "Gemüsebrühe" },
      { a: 100, u: "ml", n: "Sahne" },
      { a: 4, u: "", n: "Wiener Würstchen" },
      { a: 1, u: "TL", n: "getrockneter Majoran" },
      { a: null, u: "", n: "Salz, Pfeffer, Muskat, Petersilie" }
    ],
    schritte: [
      "Kartoffeln, Karotten und Sellerie schälen und in Würfel schneiden. Lauch in Ringe schneiden und waschen, Zwiebel würfeln.",
      "Butter in einem großen Topf erhitzen, Speck und Zwiebel darin 3 Minuten anbraten.",
      "Kartoffeln, Karotten, Sellerie und Lauch dazugeben und kurz mitdünsten.",
      "Mit der Brühe aufgießen, Majoran dazugeben und zugedeckt ca. 20 Minuten köcheln lassen, bis alles weich ist.",
      "Etwa die Hälfte der Suppe mit dem Stabmixer pürieren, sodass sie sämig wird, aber noch Stückchen hat. Sahne einrühren.",
      "Würstchen in Scheiben schneiden und in der Suppe 5 Minuten erhitzen (nicht kochen).",
      "Mit Salz, Pfeffer und Muskat abschmecken und mit gehackter Petersilie servieren."
    ]
  },
  {
    id: "burger",
    name: "Hausgemachte Burger",
    kurz: "Saftige Patties, jeder baut sich seinen Burger selbst.",
    zeit: 40, aktiv: 30, level: "einfach", portionen: 4, kcal: 820,
    tags: ["kinder"],
    bild: { artist: "Ralff Nestor Nacor", lizenz: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Homemade_Hamburger,_May_2024.jpg" },
    zutaten: [
      { a: 600, u: "g", n: "Rinderhackfleisch (ca. 20 % Fett)" },
      { a: 4, u: "", n: "Burgerbrötchen" },
      { a: 4, u: "Scheiben", n: "Cheddar" },
      { a: 1, u: "", n: "Tomate" },
      { a: 4, u: "Blätter", n: "Eisbergsalat" },
      { a: 1, u: "", n: "rote Zwiebel" },
      { a: 4, u: "", n: "Gewürzgurken" },
      { a: 1, u: "EL", n: "Öl" },
      { a: null, u: "", n: "Salz und Pfeffer" },
      { s: "Burgersoße" },
      { a: 4, u: "EL", n: "Mayonnaise" },
      { a: 2, u: "EL", n: "Ketchup" },
      { a: 1, u: "TL", n: "Senf" },
      { a: 1, u: "EL", n: "fein gehackte Gewürzgurke" }
    ],
    schritte: [
      "Hackfleisch in 4 gleiche Portionen teilen und locker zu flachen Patties formen (etwas größer als die Brötchen). In die Mitte eine kleine Mulde drücken, dann bleiben sie beim Braten flach.",
      "Alle Zutaten für die Soße verrühren. Tomate, Zwiebel und Gurken in Scheiben schneiden, Salat waschen.",
      "Brötchen aufschneiden und mit der Schnittfläche in einer Pfanne ohne Fett 1 Minute anrösten.",
      "Öl in der Pfanne stark erhitzen. Patties erst jetzt salzen und pfeffern und pro Seite 3–4 Minuten braten.",
      "In der letzten Minute je eine Scheibe Cheddar auflegen und die Pfanne kurz abdecken, damit er schmilzt.",
      "Brötchen mit Soße bestreichen und mit Salat, Patty, Tomate, Zwiebel und Gurke belegen. Dazu passen Ofen-Pommes."
    ]
  },
  {
    id: "lachs",
    name: "Ofenlachs mit Gemüse",
    kurz: "Alles auf einem Blech: Lachs, Kartoffeln und buntes Gemüse.",
    zeit: 45, aktiv: 15, level: "einfach", portionen: 4, kcal: 560,
    tags: [],
    bild: { artist: "HaJunkiyada", lizenz: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Oven-baked_teriyaki_salmon_with_vegetables.jpg" },
    zutaten: [
      { a: 4, u: "", n: "Lachsfilets (à ca. 150 g, ohne Haut)" },
      { a: 600, u: "g", n: "kleine Drillinge (Kartoffeln)" },
      { a: 3, u: "", n: "Karotten" },
      { a: 1, u: "", n: "Brokkoli" },
      { a: 1, u: "", n: "Zucchini" },
      { a: 4, u: "EL", n: "Olivenöl" },
      { a: 1, u: "", n: "Bio-Zitrone" },
      { a: 2, u: "EL", n: "Honig" },
      { a: 2, u: "EL", n: "Sojasoße" },
      { a: 1, u: "Zehe", n: "Knoblauch" },
      { a: null, u: "", n: "Salz, Pfeffer, Dill oder Petersilie" }
    ],
    schritte: [
      "Backofen auf 200 °C Ober-/Unterhitze vorheizen.",
      "Kartoffeln halbieren, Karotten in dicke Scheiben schneiden. Mit 2 EL Öl, Salz und Pfeffer auf einem Backblech mischen und 15 Minuten vorbacken.",
      "Brokkoli in Röschen teilen, Zucchini in Halbmonde schneiden und mit dem restlichen Öl und etwas Salz mischen.",
      "Honig, Sojasoße, gepressten Knoblauch und etwas abgeriebene Zitronenschale verrühren.",
      "Brokkoli und Zucchini aufs Blech geben, Platz in der Mitte schaffen und die Lachsfilets darauflegen. Lachs mit der Honig-Soja-Mischung bestreichen.",
      "Weitere 12–15 Minuten backen, bis der Lachs innen gerade durch und leicht glasig ist.",
      "Mit Zitronenspalten und frischen Kräutern servieren."
    ]
  },
  {
    id: "tacos",
    name: "Tacos",
    kurz: "Würziges Hack, frische Toppings – jeder füllt seine eigenen.",
    zeit: 30, aktiv: 30, level: "einfach", portionen: 4, kcal: 690,
    tags: ["schnell", "kinder"],
    bild: { artist: "Popo le Chien", lizenz: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Tacos_2.jpg" },
    zutaten: [
      { a: 12, u: "", n: "kleine Weizen- oder Maistortillas" },
      { a: 500, u: "g", n: "Rinderhackfleisch" },
      { a: 1, u: "", n: "Zwiebel" },
      { a: 1, u: "EL", n: "Öl" },
      { a: 2, u: "TL", n: "Paprikapulver edelsüß" },
      { a: 1, u: "TL", n: "Kreuzkümmel" },
      { a: 0.5, u: "TL", n: "Knoblauchpulver" },
      { a: 3, u: "EL", n: "Tomatenmark" },
      { a: 100, u: "ml", n: "Wasser" },
      { s: "Toppings" },
      { a: 2, u: "", n: "Tomaten" },
      { a: 0.5, u: "", n: "Eisbergsalat" },
      { a: 1, u: "", n: "Avocado" },
      { a: 150, u: "g", n: "geriebener Cheddar" },
      { a: 150, u: "g", n: "saure Sahne" },
      { a: 285, u: "g", n: "Mais (1 Dose)" },
      { a: 1, u: "", n: "Limette" }
    ],
    schritte: [
      "Zwiebel fein würfeln. Öl erhitzen, Hackfleisch und Zwiebel darin krümelig braun braten.",
      "Gewürze und Tomatenmark einrühren und 1 Minute anrösten. Wasser dazugeben und 5 Minuten einköcheln lassen, bis die Masse saftig, aber nicht flüssig ist. Mit Salz abschmecken.",
      "Tomaten würfeln, Salat in feine Streifen schneiden, Avocado würfeln und mit Limettensaft beträufeln, Mais abtropfen lassen.",
      "Tortillas in einer trockenen Pfanne kurz von beiden Seiten erwärmen und in ein Küchentuch einschlagen.",
      "Alles in Schälchen auf den Tisch stellen – jeder füllt seine Tacos selbst."
    ]
  },
  {
    id: "flammkuchen",
    name: "Flammkuchen",
    kurz: "Hauchdünner Boden mit Schmand, Zwiebeln und Speck.",
    zeit: 35, aktiv: 20, level: "einfach", portionen: 4, kcal: 620,
    tags: [],
    bild: { artist: "Brücke-Osteuropa", lizenz: "CC0", url: "https://commons.wikimedia.org/wiki/File:Els%C3%A4sser_Flammkuchen_in_Strasbourg_2.JPG" },
    zutaten: [
      { s: "Teig (ohne Hefe)" },
      { a: 300, u: "g", n: "Weizenmehl" },
      { a: 170, u: "ml", n: "Wasser" },
      { a: 3, u: "EL", n: "Öl" },
      { a: 1, u: "TL", n: "Salz" },
      { s: "Belag" },
      { a: 200, u: "g", n: "Schmand" },
      { a: 100, u: "g", n: "Crème fraîche" },
      { a: 2, u: "", n: "Zwiebeln" },
      { a: 150, u: "g", n: "Speckwürfel (oder Räuchertofu)" },
      { a: null, u: "", n: "Salz, Pfeffer, Muskat, Schnittlauch" }
    ],
    schritte: [
      "Backofen mit Blech auf 250 °C Ober-/Unterhitze vorheizen.",
      "Mehl, Wasser, Öl und Salz zu einem glatten Teig verkneten und 10 Minuten ruhen lassen.",
      "Schmand und Crème fraîche verrühren und mit Salz, Pfeffer und Muskat würzen. Zwiebeln in sehr dünne Ringe schneiden.",
      "Teig halbieren und jede Hälfte auf Backpapier hauchdünn ausrollen.",
      "Mit der Schmandcreme bestreichen und Zwiebeln und Speck darauf verteilen.",
      "Nacheinander auf dem heißen Blech 10–12 Minuten backen, bis die Ränder knusprig und braun sind.",
      "Mit Schnittlauch bestreuen, in Stücke schneiden und sofort servieren."
    ]
  },
  {
    id: "frikadellen",
    name: "Frikadellen mit Kartoffelpüree",
    kurz: "Saftige Frikadellen, cremiges Püree und Möhrengemüse.",
    zeit: 45, aktiv: 35, level: "einfach", portionen: 4, kcal: 710,
    tags: ["kinder"],
    bild: { artist: "Silar", lizenz: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:020230716_Frikadelle_mit_Gem%C3%BCse_und_Kartoffeln.jpg" },
    zutaten: [
      { s: "Frikadellen" },
      { a: 500, u: "g", n: "gemischtes Hackfleisch" },
      { a: 1, u: "", n: "Brötchen vom Vortag" },
      { a: 1, u: "", n: "Zwiebel" },
      { a: 1, u: "", n: "Ei" },
      { a: 1, u: "TL", n: "Senf" },
      { a: 1, u: "TL", n: "Paprikapulver" },
      { a: 2, u: "EL", n: "gehackte Petersilie" },
      { a: 3, u: "EL", n: "Öl zum Braten" },
      { a: null, u: "", n: "Salz und Pfeffer" },
      { s: "Kartoffelpüree" },
      { a: 1, u: "kg", n: "mehligkochende Kartoffeln" },
      { a: 200, u: "ml", n: "Milch" },
      { a: 50, u: "g", n: "Butter" },
      { a: null, u: "", n: "Salz, Muskat" },
      { s: "Möhrengemüse" },
      { a: 500, u: "g", n: "Karotten" },
      { a: 1, u: "EL", n: "Butter" },
      { a: 1, u: "TL", n: "Zucker" }
    ],
    schritte: [
      "Kartoffeln schälen, in Stücke schneiden und in Salzwasser ca. 20 Minuten weich kochen.",
      "Brötchen in Wasser einweichen und gut ausdrücken. Zwiebel sehr fein würfeln.",
      "Hackfleisch mit Brötchen, Zwiebel, Ei, Senf, Paprika, Petersilie, Salz und Pfeffer gut verkneten. Mit nassen Händen 8 flache Frikadellen formen.",
      "Öl in einer Pfanne erhitzen und die Frikadellen bei mittlerer Hitze pro Seite 5–6 Minuten braten, bis sie durchgegart sind.",
      "Karotten in Scheiben schneiden und mit Butter, Zucker, einer Prise Salz und 3 EL Wasser zugedeckt 10 Minuten dünsten.",
      "Kartoffeln abgießen. Milch mit Butter erwärmen, zu den Kartoffeln geben und alles mit dem Kartoffelstampfer zu Püree stampfen. Mit Salz und Muskat abschmecken.",
      "Frikadellen mit Püree und Möhrengemüse servieren."
    ]
  },
  {
    id: "reis",
    name: "Gebratener Gemüsereis",
    kurz: "Schnelle Resteverwertung mit Ei, Erbsen und Sojasoße.",
    zeit: 25, aktiv: 20, level: "einfach", portionen: 4, kcal: 480,
    tags: ["veg", "schnell"],
    bild: { artist: "Gary Dee", lizenz: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Fried_Rice_1_(Eggs_%26_Vegetables).jpg" },
    zutaten: [
      { a: 300, u: "g", n: "Reis (am besten vom Vortag, gekocht ca. 750 g)" },
      { a: 4, u: "", n: "Eier" },
      { a: 2, u: "", n: "Karotten" },
      { a: 1, u: "", n: "rote Paprika" },
      { a: 150, u: "g", n: "TK-Erbsen" },
      { a: 4, u: "", n: "Frühlingszwiebeln" },
      { a: 2, u: "Zehen", n: "Knoblauch" },
      { a: 3, u: "EL", n: "neutrales Öl" },
      { a: 4, u: "EL", n: "Sojasoße" },
      { a: 1, u: "TL", n: "Sesamöl (optional)" },
      { a: null, u: "", n: "Pfeffer" }
    ],
    schritte: [
      "Falls kein Reis vom Vortag da ist: Reis kochen, auf einem Blech ausbreiten und gut abkühlen lassen – nur so wird er schön körnig.",
      "Karotten und Paprika klein würfeln, Frühlingszwiebeln in Ringe schneiden, Knoblauch hacken.",
      "1 EL Öl in einer großen Pfanne oder einem Wok erhitzen, die verquirlten Eier darin stocken lassen, zerteilen und herausnehmen.",
      "Restliches Öl stark erhitzen. Karotten und Paprika 3 Minuten braten, dann Knoblauch, das Weiße der Frühlingszwiebeln und die Erbsen 2 Minuten mitbraten.",
      "Reis dazugeben und unter Rühren 4–5 Minuten braten, bis er heiß ist und leicht anröstet.",
      "Ei, Sojasoße und Sesamöl untermischen, pfeffern und mit dem Grün der Frühlingszwiebeln bestreuen."
    ]
  },
  {
    id: "kaiserschmarrn",
    name: "Kaiserschmarrn",
    kurz: "Fluffig zerrupfter Pfannkuchen mit Rosinen und Puderzucker.",
    zeit: 30, aktiv: 25, level: "mittel", portionen: 4, kcal: 590,
    tags: ["veg", "schnell", "kinder", "suess"],
    bild: { artist: "Gerda Arendt", lizenz: "CC0", url: "https://commons.wikimedia.org/wiki/File:Kaiserschmarrn,_Munich.jpg" },
    zutaten: [
      { a: 6, u: "", n: "Eier" },
      { a: 250, u: "g", n: "Weizenmehl" },
      { a: 400, u: "ml", n: "Milch" },
      { a: 2, u: "EL", n: "Zucker (für den Teig)" },
      { a: 1, u: "Päckchen", n: "Vanillezucker" },
      { a: 1, u: "Prise", n: "Salz" },
      { a: 50, u: "g", n: "Rosinen (optional)" },
      { a: 40, u: "g", n: "Butter" },
      { a: 2, u: "EL", n: "Zucker (zum Karamellisieren)" },
      { a: 3, u: "EL", n: "Puderzucker" },
      { a: 1, u: "Glas", n: "Apfelmus oder Zwetschgenröster" }
    ],
    schritte: [
      "Eier trennen. Eigelbe mit Mehl, Milch, Zucker, Vanillezucker und Salz glatt rühren.",
      "Eiweiße steif schlagen und vorsichtig unter den Teig heben.",
      "Die Hälfte der Butter in einer großen Pfanne erhitzen, den Teig hineingießen und die Rosinen darüberstreuen. Bei mittlerer Hitze 4–5 Minuten backen, bis die Unterseite goldbraun ist.",
      "Den Teig vierteln, die Stücke wenden und die zweite Seite 3 Minuten backen.",
      "Mit zwei Gabeln in mundgerechte Stücke zerrupfen. Restliche Butter und 2 EL Zucker dazugeben und unter Wenden 2 Minuten karamellisieren lassen.",
      "Mit Puderzucker bestäuben und mit Apfelmus oder Zwetschgenröster servieren."
    ]
  },
  {
    id: "minestrone",
    name: "Minestrone",
    kurz: "Italienische Gemüsesuppe mit kleinen Nudeln und Bohnen.",
    zeit: 45, aktiv: 20, level: "einfach", portionen: 4, kcal: 390,
    tags: ["veg"],
    bild: { artist: "Katrin Morenz", lizenz: "CC BY-SA 2.0", url: "https://commons.wikimedia.org/wiki/File:Minestrone_soup.jpg" },
    zutaten: [
      { a: 1, u: "", n: "Zwiebel" },
      { a: 2, u: "Zehen", n: "Knoblauch" },
      { a: 2, u: "", n: "Karotten" },
      { a: 2, u: "Stangen", n: "Staudensellerie" },
      { a: 1, u: "", n: "Zucchini" },
      { a: 2, u: "", n: "Kartoffeln" },
      { a: 3, u: "EL", n: "Olivenöl" },
      { a: 400, u: "g", n: "stückige Tomaten (1 Dose)" },
      { a: 1.2, u: "l", n: "Gemüsebrühe" },
      { a: 400, u: "g", n: "weiße Bohnen (1 Dose, abgetropft)" },
      { a: 100, u: "g", n: "kleine Suppennudeln (z. B. Ditalini)" },
      { a: 100, u: "g", n: "grüne Bohnen oder Erbsen" },
      { a: 1, u: "TL", n: "getrocknete italienische Kräuter" },
      { a: 50, u: "g", n: "Parmesan" },
      { a: null, u: "", n: "Salz, Pfeffer, frisches Basilikum" }
    ],
    schritte: [
      "Zwiebel, Knoblauch, Karotten, Sellerie, Zucchini und Kartoffeln in kleine Würfel schneiden.",
      "Olivenöl in einem großen Topf erhitzen. Zwiebel, Knoblauch, Karotten und Sellerie 5 Minuten andünsten.",
      "Kartoffeln, Tomaten, Brühe und Kräuter dazugeben und 15 Minuten köcheln lassen.",
      "Zucchini, grüne Bohnen, weiße Bohnen und Nudeln dazugeben und weitere 10 Minuten kochen, bis die Nudeln gar sind.",
      "Mit Salz und Pfeffer abschmecken. Mit geriebenem Parmesan und Basilikum servieren."
    ]
  }
];
