# Bazodiac Relationships — Gesamtkonzept: Vision, Fusion-Darstellung, Fragen-Modus

Status: `PROPOSAL` (Antwort auf die offenen Fragen aus `PRODUCT_CONCEPT_DECISIONS_2026-07-19.md` §10, §15)
Datum: 2026-07-19
Evidenzbasis: lokale Repo-Docs (Contract, Mapping Method, UI/UX Decisions, ADR-001–003, Click-Dummy-Spec, Product Concept Decisions), Jira FUF-53/54/64/92, BAZ-5/30/32/54/55
Autor: Analyse-Session mit Claude, auf Basis der bestehenden Architekturentscheidungen

---

## 0. Entscheidungsvorschläge auf einen Blick

1. **Fragen-Modus: Ja — aber als eigene Evidenzfamilie, nie als Input in die Astro-Berechnung.** Zweistufig: „Resonanz-Check" pro Dynamik-Karte im MVP, „Blind-Spiegel-Modus" (Selbstverortung vor dem Reveal) als V2-Differenzierungsmerkmal.
2. **Die eigentliche Vision lautet: „FuFire berechnet, Bazodiac erklärt, das Paar validiert."** Das Paar ist die vierte — und einzige empirische — unabhängige Evidenzfamilie. Damit wird „systemisch-reflexiv" technisch einlösbar statt nur behauptet.
3. **UI-Kernidee: Die Informationsarchitektur *ist* das Transparenzmodell.** Vier Disclosure-Ebenen, die exakt den epistemischen Schichten der Pipeline entsprechen, plus eine reportweite visuelle Grammatik für die sechs Klassifikationen.
4. **Der Fusion-USP ist Nicht-Fusion mit Haltung: „Wir mitteln nicht. Wir konfrontieren."** Das ist bereits in MAPPING_METHOD.md angelegt — es fehlt die Erzählung nach außen und die konsequente UI-Übersetzung.
5. **Erste Dynamik-Familie für Release 1: Kommunikation & Verarbeitungstempo** (nicht Konflikt & Reparatur).

---

## 1. Befund: Wo das Produkt konzeptionell steht

Die Konzeptlage ist deutlich reifer, als die Frage vermuten lässt. Folgendes ist bereits entschieden und dokumentiert (Status: VERIFIED, aus den Repo-Docs und Jira gelesen):

| Baustein | Stand | Quelle |
|---|---|---|
| Pipeline `native feature → native meaning → relationship signal → pair rule → visible dynamic` | definiert, v0.1 | MAPPING_METHOD.md |
| Relationship-Ontologie v1 (10 Dimensionen, 6 Klassifikationen) | definiert | MAPPING_METHOD.md §4 |
| Evidenzfamilien: BAZI_FAMILY (BaZi+WuXing+HeHun+DaYun als *eine* abhängige Familie), WESTERN_ASTROLOGY, ZWDS | definiert | MAPPING_METHOD.md §9 |
| Konvergenz nur bei ≥2 unabhängigen Familien; Widerspruch wird angezeigt, nie gemittelt | definiert | MAPPING_METHOD.md §7, §9 |
| Kein Kompatibilitätsscore, keine Diagnose, keine Schicksalsaussage | invariant | ADR-003, FUF-53, BAZ-32 |
| RelationshipReport-Vertrag v0.1 (Dynamik-Anatomie, Modulstatus, Evidence-IDs, Versionen) | Draft | RELATIONSHIP_REPORT_CONTRACT.md |
| 27/46/27-Layout, Bento-Dynamikkarten, Evidence Drawer, Convergence Map, Braided Timing | akzeptiert v0.1 | UI_UX_DECISIONS.md |
| FuFire-Seite: Fusion 1 = Western+BaZi, Fusion 2 = +ZWDS über semantische Signale; Beziehungsfusion vorbereitet | Jira-Epics | FUF-53/54/64/92 |
| ZWDS-Paarmapping | `SOURCE_NEEDED` — bewusst blockiert | MAPPING_METHOD.md §14 |
| Fragebogen | `RESEARCH_HYPOTHESIS` — Evidenzklassen skizziert, Design offen | PRODUCT_CONCEPT_DECISIONS §10, §15 |

**Konsequenz für dieses Dokument:** Es erfindet die Architektur nicht neu. Es beantwortet die drei offenen Fragen — Vision-Schärfung, intuitive Darstellbarkeit, Fragen-Modus — *innerhalb* der bestehenden Invarianten.

---

## 2. Die eigentliche Vision

### 2.1 Das Problem mit „evidenzbasierte Astrologie"

Astrologische Systeme haben keine empirische Vorhersagevalidität. Ein Produkt, das „evidenzbasiert" verspricht, kann das nur auf zwei Ebenen ehrlich einlösen — und genau diese zwei Ebenen sind in der Architektur bereits angelegt:

1. **Evidenz der Herleitung:** Jede sichtbare Aussage ist deterministisch berechnet, regelgebunden, versioniert und bis zum nativen Chart-Merkmal rückverfolgbar (Derivation Trace, Evidence-IDs, Rule Cards). Das System ist ehrlich darüber, *woher* eine Deutung kommt — nicht darüber, *dass sie wahr ist*.
2. **Evidenz der Resonanz:** Ob eine Dynamik-Hypothese für dieses konkrete Paar zutrifft, kann kein astrologisches System entscheiden — nur das Paar selbst, im Abgleich mit gelebter Erfahrung. PRODUCT_CONCEPT_DECISIONS §5 sagt das bereits: „All relationship-level claims must remain conditional and should be compared with lived experience."

Der zweite Punkt ist bisher nur eine Textanweisung an die Nutzer („vergleicht das mal"). **Die Vision wird erst vollständig, wenn dieser Abgleich ein Produktmechanismus ist.** Genau hier sitzt der Fragen-Modus (→ §3).

### 2.2 Vision-Statement

> Bazodiac Relationships ist kein Kompatibilitätsorakel, sondern ein Spiegelraum mit Herkunftsnachweis: Vier Deutungstraditionen erzeugen unabhängig voneinander strukturierte Hypothesen über die Dynamik eines Paares. Die App legt radikal offen, woher jede Hypothese stammt, zeigt Übereinstimmung *und* Widerspruch zwischen den Systemen ungeschönt — und gibt dem Paar die Werkzeuge, jede Hypothese an der eigenen Erfahrung zu prüfen. Die letzte Autorität ist nie ein System. Sie ist das Paar.

Als Betriebsformel, anschlussfähig an FUF-54 („FuFire berechnet und Bazodiac erklärt"):

> **FuFire berechnet. Bazodiac erklärt. Das Paar validiert.**

### 2.3 Warum das trägt

- **Epistemisch:** Die Schwäche der Astrologie (keine Wahrheitsansprüche möglich) wird zur Produktstärke: Weil kein System Wahrheit beansprucht, können vier Systeme plus Selbstbild ehrlich nebeneinandergestellt werden. Ein Produkt, das *einen* Wahrheitsanspruch verkaufte, könnte das nicht.
- **Marktseitig:** Jeder Wettbewerber mittelt, scored und verdiktet. Die disziplinierte Nicht-Fusion („Wir zeigen euch auch, wo die Systeme sich widersprechen — und wo wir nichts sagen können") ist als Vertrauenssignal unkopierbar, solange die Konkurrenz vom Score-Geschäftsmodell lebt.
- **Systemisch:** „Systemisch-reflexiv" ohne die Perspektive des Systems selbst (des Paares) wäre ein Kategorienfehler. Reflexivität setzt den Beobachter in der Schleife voraus. Der Fragen-Modus ist deshalb kein Feature-Add-on, sondern die fehlende Hälfte des Produktversprechens.

---

## 3. Kernfrage: Fragen-Modus — Empfehlung und Design

### 3.1 Entscheidung

**Ja zum Fragen-Modus — unter vier harten Prinzipien.** „Nur reine Astrologiedaten" wäre die schwächere Produktvariante: Sie erzeugt passiven Horoskop-Konsum, lässt die Barnum-Kritik unbeantwortet und bricht das Reflexivitätsversprechen. Zugleich gilt: Der Astro-Report muss ohne jede Frage vollwertig sein — der Fragen-Modus ist strikt optional, inkrementell und unterbricht nie den Weg zum Report.

### 3.2 Die vier Prinzipien

**P1 — Getrennte Evidenzklassen, gemeinsame Ontologie.**
Selbstauskunft (`SELF_REPORT`) und Partnerwahrnehmung (`PARTNER_OBSERVATION`) werden Evidenzfamilien im selben Sinn wie BAZI_FAMILY, WESTERN_ASTROLOGY, ZWDS — mit eigenem Modulstatus, eigener Provenienz, eigenen Versionen. Sie mappen auf dieselben neutralen Dimensionen (COMMUNICATION_TEMPO, AUTONOMY_ORIENTATION …), damit Vergleichbarkeit entsteht. Das entspricht exakt der in §10 der Product Concept Decisions skizzierten Klassentrennung — hier wird sie zum Datenmodell.

**P2 — Selbstauskunft verändert nie die astrologische Berechnung oder deren Confidence.**
Kein Antwort-Datum fließt in FuFire-Calls, Mapping-Regeln, `mappingConfidence` oder Sichtbarkeitsentscheidungen astrologischer Signale ein. Was Antworten verändern dürfen — und das wird offengelegt: die **Salienz** (welche Dynamiken im Reflexionsmodus zuerst angeboten werden) und die **Generierung von Reflexionsfragen**. Wer das vermischt, zerstört beides: Die Astrologie wirkt wie ein Barnum-Trick, der sich aus den eigenen Antworten speist, und die Selbstauskunft wird als Astro-Bestätigungsmaschine korrumpiert („must not be designed to confirm astrological outputs", §10).

**P3 — Nicht-diagnostisch durch Konstruktion, nicht durch Disclaimer.**
- Keine validierten klinischen oder paartherapeutischen Instrumente (kein Gottman-Assessment, kein PREPARE/ENRICH) — auch nicht „inspiriert paraphrasiert". Eigener, versionierter Fragenkatalog.
- Format: **bipolare Selbstverortung zwischen zwei gleichwertigen Polen**, kongruent zum Komplementaritäts-Frame der Mapping-Methode. Beispiel: „Nach einem Konflikt brauche ich eher … ○—○—○—○—○ … schnelle Nähe / Zeit für mich." Kein Pol ist pathologisch, es gibt keine Normwerte, keine Scores, keine Auswertungslabels.
- Kein Freitext im geteilten Raum (nur private Notizen). Damit entfällt die Pflicht, Freitext auf Krisensignale zu „screenen" — was selbst schon Diagnostik wäre.
- Sicherheitsgrenze (beantwortet §15 „Safety boundary" teilweise): Bei Dimensionen mit Konfliktbezug wird ein statischer, unbedingter Ressourcen-Hinweis angezeigt (immer, für alle — keine konditionale „Erkennungslogik").

**P4 — Konsent-Symmetrie.**
Beide Partner beantworten dieselben Fragen; Antworten sind privat by default; Freigabe an den Partner erfolgt pro Antwort (granulare Erweiterung des Dual-Consent-Modells aus BAZ-34). Antworten sind editierbar mit sichtbarem Stand („Selbstbild vom 19.07."). Antwortdaten gelten als sensibler als Geburtsdaten: nie in Logs, getrennt löschbar pro Person, kein Export ohne beide Freigaben. Damit sind die vier offenen Fragebogen-Fragen aus §15 beantwortet: beide Befragte; privat mit Einzelfreigabe; editierbar mit Versionsstand; ja, Drei-Quellen-Vergleich.

### 3.3 Zwei Mechanismen, zwei Ausbaustufen

**Stufe 1 (MVP): Resonanz-Check pro Dynamik-Karte.**
Jede sichtbare Dynamik erhält eine minimale Interaktion pro Partner: *„Erkennt ihr das?" — passt / teils / passt nicht / später.* 

- Kosten: gering (eine UI-Komponente, ein kleines Datenmodell, keine Katalog-Review nötig).
- Wirkung: Der RAIN-adaptierte „Recognize"-Schritt (§11 Product Concept Decisions) wird vom Text zur Handlung. Die Karte zeigt danach zwei kleine Avatar-Chips (A: passt · B: teils) — die gelebte Erfahrung wird im Report sichtbar, in derselben Grammatik wie die Systemevidenz.
- Ehrlichkeit: Ein „passt nicht" von beiden bleibt stehen und wird angezeigt — nicht wegerklärt, nicht ausgeblendet, nicht von der LLM aufgelöst (Widerspruchsregel aus §10 gilt auch hier).

**Stufe 2 (V2, Differenzierungsmerkmal): Blind-Spiegel-Modus.**
*Vor* dem ersten Report-Reveal beantwortet jeder Partner unabhängig 6–10 bipolare Selbstverortungen entlang derselben Ontologie-Dimensionen — optional plus Fremdverortung („Wie erlebst du deine Partnerin auf dieser Achse?"). Erst danach öffnet sich der Report, und jede Dimension zeigt den **Drei-Quellen-Vergleich: Symbolische Systeme | Selbstbild | Fremdbild.**

- Weil die Antworten *blind* (vor dem Reveal) abgegeben wurden, ist Konvergenz aussagekräftig und Priming/Barnum strukturell entschärft. Das ist Pre-Registration als UX — die produktgewordene Form von „evidenzbasiert".
- Der Magic Moment: „Zwei Traditionen und dein Partner haben unabhängig dasselbe Thema markiert — bevor ihr es ausgesprochen habt." Und genauso ehrlich: „Hier sagt das System etwas, das ihr beide nicht erkennt — beobachtet es, oder verwerft es."
- Der Modus ist überspringbar; wer direkt zum Report will, bekommt den Resonanz-Check nachgelagert.

**Gegenargument, geprüft:** *Verwässert Selbstauskunft die Astrologie — wirkt das Produkt dann unsicher?* Nein, das Gegenteil: Ohne Resonanzmechanismus bleibt die stärkste Kritik („das ist doch Barnum") unbeantwortet. Mit ihm hat das Produkt eine strukturelle Antwort: Es *lädt zur Falsifikation ein*. Das Restrisiko ist Reibung im Funnel — deshalb strikt optional und der Astro-Report allein vollwertig. Zweites geprüftes Gegenargument: *Zusatzaufwand vor dem ersten Wert.* Mitigiert durch Stufe 1 (nachgelagert, in-flow, pro Karte drei Sekunden).

### 3.4 Datenmodell-Skizze (additiv zu Contract v0.1)

```text
QuestionCard (analog RuleCard):
  questionId, version, status (EXPERT_REVIEW_REQUIRED | RELEASED)
  dimension (aus relationship-ontology.v1)
  polarity: { poleA, poleB }          // beide Pole gleichwertig formuliert
  scope: SELF | PARTNER_OBSERVATION
  locale-Varianten, allowedClaims / blockedClaims

ResonanceEntry:
  dynamicId, person (a|b), value (FITS | PARTLY | NO_FIT), answeredAt, shared (bool)

SelfPositioning:
  questionId, person, value (1..5), answeredAt, blind (bool), shared (bool)

RelationshipDynamic (Erweiterung):
  resonance: { a: …, b: … }           // Anzeige-Layer, NIE Input in quality.*
  systemSupport += { selfReport, partnerObservation }   // eigene Familien-Spalten
```

Sichtbarkeitsregel-Ergänzung: `SELF_REPORT`-Konvergenz zählt **nicht** als unabhängige Bestätigung für die Sichtbarkeit astrologischer Dynamiken (P2). Sie erzeugt eine eigene Anzeigekategorie: `LIVED_RESONANCE: CONFIRMED | MIXED | DISCONFIRMED | UNANSWERED`.

Ein legitimer Sekundärnutzen (klar getrennt, opt-in, aggregiert, anonymisiert): Resonanzdaten als *Research-Telemetrie* zur Priorisierung der Rule-Card-Reviews — welche Regeln erzeugen systematisch „passt nicht"? Das bleibt Human-Review-Input, nie automatische Confidence-Anpassung.

---

## 4. UI-Gesamtkonzept: Intuitive Darstellbarkeit

Das Grundgerüst (27/46/27, Bento, Evidence Drawer, Convergence Map, Braided Timing) steht und ist gut. Das offene Problem ist ein anderes: **Wie fühlt sich ein evidenzdisziplinierter Multi-System-Report intuitiv an — statt wie ein Audit-Dokument?** Fünf Antworten:

### 4.1 Disclosure-Ebenen = Epistemik-Ebenen

Die Informationsarchitektur spiegelt die Pipeline. Jede Ebene ist einen Tap entfernt, die Sprache wird pro Ebene technischer:

```text
Ebene 0  Beziehungs-Snapshot        „Drei Themen zeichnen sich ab …"        (Alltagssprache)
Ebene 1  Dynamik-Karten (Bento)     Kernmuster, A/B, Schatten/Chance        (konditionale Sprache)
Ebene 2  Evidence Drawer            Familien, Klassifikation, Relation,      (Systemsprache)
                                    LIVED_RESONANCE, Versionen
Ebene 3  Derivation Trace           Rule Cards, native Merkmale, Quellen    (Fachsprache, Hanzi korrekt)
```

Überall dieselbe Affordance: **„Warum sehe ich das?"** — der eine Button, der das Transparenzversprechen an jeder Stelle einlöst. Nutzer, die nie tiefer gehen, verlieren nichts; Nutzer, die zweifeln, finden immer eine Schicht tiefer eine Antwort. Der 5-Minuten-Verständnistest aus UI_UX_DECISIONS §15 gilt für Ebene 0–1; Ebene 2–3 dürfen anspruchsvoll sein.

### 4.2 Eine reportweite Relations-Grammatik

Die sechs Klassifikationen (RESONANCE, COMPLEMENTARITY, ASYMMETRY, FRICTION, AMBIVALENCE, CONTRADICTION) bekommen je ein konsistentes Icon-/Linienmuster, das überall identisch auftaucht: auf Karten, Filter-Chips, in der Convergence Map, im Drawer, im PDF. Vorschlag, anschlussfähig an die vorhandene Liniensemantik (solid/dashed/double/split):

- Resonanz: zwei parallele Linien, die zusammenlaufen
- Komplementarität: zwei ineinandergreifende Halbformen
- Asymmetrie: ungleichgewichtige Doppellinie
- Friktion: Zickzack-Kreuzung
- Ambivalenz: gepunktete Doppellinie
- Kontradiktion: Gabelung, beide Zweige sichtbar

Nutzer lernen den Report *lesen* wie eine Legende — das ist die intuitive Form von Transparenz. Nie nur Farbe als Träger (Accessibility-Invariante bleibt).

### 4.3 Das Paar als vierte Gruppe der Convergence Map

Sobald der Fragen-Modus existiert, erhält die Convergence Map neben BaZi-Familie, Western und ZWDS eine vierte äußere Gruppe: **„Euer Selbstbild."** Eine Doppellinie von dort zu einer Dimension heißt: System und gelebte Erfahrung konvergieren. Eine Split-Linie heißt: Das System sieht etwas, das ihr nicht seht — oder umgekehrt. Damit wird die Karte vom Systemvergleich zum vollständigen Erkenntnisbild des Reports — und der Fragen-Modus fügt sich in die bestehende Visualisierung ein, statt eine neue zu fordern.

### 4.4 Zwei Nutzungsmodi: Lesen und Reflektieren

- **Lesen** (analytisch): das bestehende Report-Layout, Desktop-zentriert, Drei-Spalten.
- **Reflektieren** (dialogisch): eine Dynamik pro Screen als Karten-Sequenz — gebaut für zwei Menschen an einem Gerät auf dem Sofa. Ablauf pro Karte entlang der produkteigenen RAIN-Adaption (§11): Muster erkennen → Resonanz-Check beider Partner → Bedingungen erkunden („Wann gilt das bei euch — wann nicht?") → Nicht-Identifikation („Das ist ein Muster *zwischen* euch, nicht eine Eigenschaft von einem von euch"). Mobile-first, große Typo, keine Evidenz-Chips im Vordergrund (eine Ebene tiefer erreichbar).

Das trennt sauber: Der Lese-Modus beweist Seriosität, der Reflexions-Modus stiftet den eigentlichen Paar-Wert. Beide arbeiten auf demselben Report-Datenmodell.

### 4.5 Nicht-Wissen als sichtbares Feature + Dyaden-Signatur

- **Ehrliche Leerstellen:** `SOURCE_NEEDED`, `NOT_AVAILABLE`, Abstention und `MISSING_INPUT` bekommen gestaltete Empty-States mit Begründung („Für ZWDS-Paardeutung existiert noch keine geprüfte Methodik — wir zeigen lieber nichts als Erfundenes."). Eine eigene Report-Sektion **„Was wir nicht wissen"** macht die Enthaltsamkeit zum sichtbaren USP — auch auf der Landing Page als Vertrauensanker („Warum wir keinen Score zeigen").
- **Dyaden-Signatur (prüfenswert, mit Vorsicht):** Als Ersatz für das emotionale Bedürfnis, das Score-Produkte bedienen („gib mir *ein* Bild von uns"), kann der Report eine generative, wertungsfreie Signatur-Grafik der Beziehung tragen — komponiert ausschließlich aus Struktur (welche Dimensionen sichtbar, welche Klassifikationen), nie aus Valenz. Kein Score-Proxy: keine Größen-, Farb- oder Symmetrie-Kodierung von „gut/schlecht". Nebeneffekt: natürliche Brücke zur Product Factory (ZSH-16, Paar-Poster). Risiko: Nutzer lesen trotzdem Wertung hinein — vor Einführung mit Comprehension-Tests prüfen, sonst streichen.

---

## 5. Mapping-Innovation: Was der USP wirklich ist — und was noch fehlt

### 5.1 Die Erzählung nach außen

Die innovative Leistung ist nicht „vier Systeme fusioniert" — das behaupten viele. Sie ist die **disziplinierte Nicht-Fusion**:

> Wir übersetzen jedes System erst in seine eigene Bedeutung, dann in neutrale Beziehungssignale. Wir zählen Verwandtes nicht doppelt. Wir mitteln Widersprüche nicht weg. Wir zeigen, wo Systeme konvergieren, wo sie sich widersprechen — und wo wir schweigen, weil die Quellenlage fehlt. Und am Ende fragt der Report euch, nicht umgekehrt.

Jeder Satz davon ist durch die Architektur gedeckt (Dreistufen-Mapping, Familien-Aggregation mit Kappung, Kontradiktions-Regel, SOURCE_NEEDED, Resonanz-Loop). Diese Erzählung gehört auf die Landing Page und in die Methoden-Seite — sie ist das Marketing, das die Architektur gratis mitliefert.

### 5.2 Offene Lücken (unverändert kritisch)

1. **ZWDS-Paarmapping bleibt `SOURCE_NEEDED`** — und das ist der Charaktertest des Produkts. Empfehlung: ZWDS in Release 1 ausschließlich als Quellen-Ansicht (Source Panel) führen, im Systems-Toggle des Contracts default `false` (ist bereits so). Kein Druck, es „irgendwie reinzunehmen".
2. **Western-Synastrie-Vertrag als Release-Autorität ist noch nicht gewählt** (§15). Ohne ihn ist Western kein Paar-Evidenz-Lieferant, nur Individual-Kontext.
3. **Erste geprüfte Dynamik-Familie fehlt** (Release Gate `MISSING`). Empfehlung: **Kommunikation & Verarbeitungstempo** zuerst — die Beispieldynamik ist bereits durchgearbeitet (Click-Dummy-Spec), die Quellenlage ist in beiden Traditionen am belastbarsten, und sie ist emotional die risikoärmste Familie für den Piloten (Konflikt & Reparatur berührt bei belasteten Paaren schneller die Safety-Grenze).
4. **Salienz-Logik ist unspezifiziert:** Sobald mehr als ~5 Dynamiken sichtbar sind, entscheidet die Reihenfolge über die Wahrnehmung. Die Sortierung (z. B. Konvergenzgrad > Datenqualität > Resonanzstatus) muss versioniert, dokumentiert und im Method-Panel offengelegt werden — sonst entsteht eine unsichtbare Deutungsschicht, die die ganze Transparenzdisziplin unterläuft.

---

## 6. Risiken und Gegenargumente

| Risiko | Einschätzung | Mitigation |
|---|---|---|
| Barnum-Vorwurf | zentral, aber beantwortbar | Blind-Spiegel-Modus, sichtbare Abstention, Kontradiktions-Anzeige, „Was wir nicht wissen" |
| Komplexität erschlägt Zielgruppe 18–35 | real | Ebene-0/1-Sprache strikt alltagsnah; 5-Minuten-Test als Release-Kriterium; Reflexions-Modus als niedrigschwelliger Einstieg |
| Kein Score = Konversionsnachteil ggü. Score-Wettbewerbern | real, bewusst eingegangen | Dyaden-Signatur als wertungsfreies „ein Bild von uns"; Landing-Narrativ macht den Verzicht zum Kaufargument; Hypothese im Piloten messen |
| Fragebogen-Daten sind intimer als Geburtsdaten | hoch | P4-Regime (privat by default, Einzelfreigabe, getrennte Löschung, keine Logs); Orientierung/Identität bleiben ausgeklammert wie in §8 entschieden |
| Person-B-Rechtsgrundlage | bereits `LEGAL_REVIEW_REQUIRED` | unverändert blockierend für Produktion; Fragen-Modus Stufe 2 setzt ohnehin den Shared Relationship Mode (beide eingeladen) voraus — Stufe 1 funktioniert auch im Private Reflection Mode, dann nur mit Resonanz von Person A |
| Scope Creep durch dieses Konzept | real | Stufe 1 ist die einzige MVP-Erweiterung (eine Komponente + kleines Schema); alles andere ist V2 |

---

## 7. Nächste Schritte (kleinste wertvolle Schnitte)

1. **Entscheidung bestätigen:** Release 1 = Relationship MVP (Option B) mit Familie „Kommunikation & Verarbeitungstempo"; Resonanz-Check Stufe 1 in den MVP-Scope; Blind-Spiegel als V2-Epic anlegen.
2. **Click-Dummy erweitern (BAZ-55):** Resonanz-Check-Interaktion + Avatar-Chips in die Dynamik-Karten des Prototyps aufnehmen — testet den Kernloop vor jeder Backend-Zeile.
3. **Contract v0.2 (additiv):** `resonance`-Block, `LIVED_RESONANCE`-Status, `SELF_REPORT`/`PARTNER_OBSERVATION` als Modul-/Familienplätze reservieren (auch wenn V2) — verhindert späteren Breaking Change.
4. **QuestionCard-Schema als Entwurf** neben die RuleCard legen (docs/mapping/), Status `EXPERT_REVIEW_REQUIRED`.
5. **Salienz-Regel v0** dokumentieren (eine Seite reicht), bevor mehr als eine Familie sichtbar wird.
6. **Jira nachziehen:** Stories unter BAZ-5 für (2)–(5); Fragebogen-Gate in PRODUCT_CONCEPT_DECISIONS von `RESEARCH_HYPOTHESIS` auf `DESIGN_PROPOSED` heben, sobald dieses Konzept reviewt ist.

---

## 8. Statusanhang (Claim-Disziplin)

- **VERIFIED:** Alle Aussagen über bestehende Entscheidungen, Verträge, Jira-Inhalte (aus den Repo-Docs und Jira-Issues dieser Session gelesen; Dateipfade und Issue-Keys jeweils genannt).
- **INFERENCE:** Vision-Schärfung (§2), Begründungslinien zu Barnum/Markt (§2.3, §6).
- **PROPOSAL (unvalidiert):** Fragen-Modus-Design (§3), Disclosure-/Grammatik-/Modi-Konzepte (§4), Familien-Empfehlung und Salienz-Punkt (§5.2), alle nächsten Schritte. Nichts davon ist mit Nutzern getestet; der 5-Minuten-Test und Pilot-Interviews sind die Prüfinstanzen.
- **NICHT GEPRÜFT:** Konversionswirkung des Score-Verzichts; Wahrnehmung der Dyaden-Signatur; rechtliche Bewertung Person B (liegt außerhalb dieser Analyse).
