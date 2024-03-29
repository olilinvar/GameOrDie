# Årsoppgave Plan & Dokumentasjon

<details><summary>Uke 3:</summary>

~~**Uke 3:**~~
  + Grov arbeidsplan
  + Prosjektbeskrivelse (hva jeg skal lage, hvordan, og hvorfor)
  + Skisse i XD
  + Mappestruktur til oppgaven
  + Fargepalett
  + Opprette og linke HTML, CSS og JS fil

**Ukas oppsummering:**
Jeg startet uken ved å lage en generell arbeidsplan og mappestruktur til oppgaven, etter det begynte jeg å brainstorme ideer for nettsiden til Game or Die i adobe XD.
Jeg fikk masse inspirasjon fra nettet om mulig tema og utseende. Jeg bestemte meg for å velge et retro/"synthwave" utseende.
Denne uken oprettet jeg html, css og javascript fil. Jeg startet å dele nettsiden inn i rows for å gjøre klart for innhold.
Jeg startet på logo i ukene før uke 11.
<p></p>
</details>

---

<details><summary>Uke 11:</summary>

**Uke 11**
  + Lage logo og designmanual i Illustrator/InDesign helst ferdig innen onsdag
  + Starte å lage alle div's og jobbe med generelt oppsett av sidene inkludert porteføljeside

**Ukas oppsummering:**
Jeg lagde ferdig logo og tilpasset den slik at den var mer synlig på nettsiden.
Jeg flytta hele prosjektet til github. Det tok en stund med jeg satt opp dokumentasjon i mitt repo med markdown. Fra nå av bruker jeg git til å oppdatere kode og synce med filene skyen. Denne uken har jeg også laget navbar(det var 200 linjer med css?!)
<p></p>
</details>

---

<details><summary>Uke 13:</summary>

**Uke 13: mandag-torsdag**
  + Oppsett av sidene MÅ være ferdig innen denne uken!
  + Starte på del 2 av oppgaven (CMS)

**Ukas oppsummering:**
Denne uken har det skjedd en del, jeg startet helt på nytt med siden min fordi navbar ble for komplisert og Simen anbefalte å starte på nytt men denne gangen fokusere mer på å bygge basics med minimal kode. Jeg lagde en ny navbar som var enklere og ganske lik. Jeg la også inn bakgrunnsbilde og text på landing page. Nå har jeg også en enkel CMS publiseringsside der man kan skrive inn text. Jeg la til en tekst editor med node.js og npm. Jeg er igang med eksprimentering av CSS frameworks som Booststrap. Jeg skal prøve å holde hele projektet under 1mb, derfor må alt utenom mine 3 starterfiler hentes fra 
<p></p>

**Påskeferien:**
Jeg finjusterte opsett av siden slik at det blir enkelere å bygge på den i fremtiden. Jeg bruker CDN for å hene inn tekst editor istedenfor at det ligger lokalt.
<p></p>
</details>



---

<details><summary>Uke 16:</summary>

**Uke 16: tirsdag-fredag**
  + Lage 10-sekunders reklame for bedriften
  + Skrive ferdig profilerende tekst om selskapet/bedriften

**Ukas oppsummering:**
<p></p>
</details>

---

<details><summary>Uke 18:</summary>

**Uke 18:**
  + Reklame skal være ferdig
  + Fortsett på CMS

**Ukas oppsummering:**
Denne uken gjorde jeg ferdig CMS, det kjører lokalt og har ikke mye styling men den funker helt greit. Jeg har fikset en forum side der alle posts blir lagt inn. Jeg oppdaterte nav-baren slik at den funker. Jeg har også lagt til en footer med logo og linker til sosiale medier, kontakt oss og en link til github repo.
<p></p>
</details>

---

<details><summary>Uke 20: / "Siste uken" </summary>

**Uke 20:**
  + "Siste uken"
  + CMS skal være ferdig
  + Brukertesting

**Ukas oppsummering:**
På mandag laget jeg et enkelt portfolio oppsett. Jeg har innsett at CSS'en min er ganske rotete, det må jeg finne ut av. Torsdag: Laget ferdig en kort(10s) og en lang(18s) SoMe reklame. Den klar, tydlig og godt tilpasset målgruppen! 
Ble også ferdig med portfolio siden, det var knotete fordi jeg måtte inn i alle projektene og endre kode, bytte masse bilder og ikoner fra png med 1 lag komprimering til webmp med 2 lag komprimering. Filstørrelser er så små som mulig. I portfolio så linker jeg til en gammel terminoppgave med sin helt egen portfolio som skal være fungerene, derfor blir det mange filer å om-linke og komprimere. Jeg kjørte all css gjennom et vertkøy som pekte ut hvilken css som ikke var i bruk, det hjalp meg fjerne en del linjer med css
<p></p>

**Helgen:**
 + **Lørdag:** Ladge ferdig spill-delen av hovedsiden. Ladge også en interaktiv FAQ greie rett over footeren. Komprimerte og converterte flere bilder til webp **(-400kb av bildemappen)** Har planer om å lage ferdig hjemmesiden og style forum i helgen slik at jeg kan brukerteste og lage designmanual på skolen. **+ 100 linjer css denne dagen**
  
 + **Søndag:** Lagde ferdig LAN-delen av hovedsiden, har litt problemer med resonsiviteten på denne delen. Fikset knapp på forum som fører til makePost siden. Stylet også ferdig innlegg på forumet. Alt fra ckeditor blir automatisk formatert med p tags og h tags på forumet. **+ 150 linjer css denne dagen (1075 linjer css totalt (Jeg hater css))**
<p></p>

<p></p>
</details>

---

<details><summary>Uke 21:</summary>

**Uke 21:**
  + Buffer

**Ukas oppsummering:**
Linket alt i portfolio. Linket til portfolio og github i footer. Brukertestet litt. Ladge designmanual.
<p></p>
</details>

---

## Prosjektbeskrivelse:
<p>
Jeg har blitt kontaktet av Game or Die AS for de ønsker at jeg skal lage en nettside for dem. Game or Die AS jobber å arrangere LAN, salg og leie av spill, og tekniske løsninger for arrangering av store LAN. Nettsiden skal vise fram Game or Die og hva dem tilbyr av produkter og tjenester. Jeg skal sørge for at deres budskap blir presentert på tydelig og konsekvent vis.</p>
Nettsiden skal ha et enkelt oppsett uten unødvendig innhold, slik at den blir enklere å navigere. Jeg skal bruke virkemidler som vekker og leder brukerens oppmerksomhet mot kjøp av tjenester. Nettsiden skal bestå av et passene logo og fargepalett som bidrar til å styrke identiteten til Game or Die AS. Nettsiden skal være responsiv, slik at den ikke mister funksjonalitet på andre enheter som for eksempel mobiltelefon. Jeg skal lage en effektiv og brukervennlig CMS som vil gjøre det mulig for ansatte uten IT-kompetanse å publisere innhold på nettsiden på enkelt vis. Jeg skal ha en hamburgermeny for brukere på mobiltelefon.</p>

---

### Sidene skal inneholde:
>  + Profilerende tekst om selskapet/bedriften
>  + Hensiktsmessige bilder og/eller illustrasjoner som tydeliggjør budskapet ditt
>  + En reklame som skal vises på SoMe for din bedrift, 5-10 sekunder
>  + Designmanual inkludert logo
>  + Interaktivitet ved hjelp av programmering
>  + Lenke til en porteføljeside som viser deg som tjenesteleverandøren
>  + Hosting av nettside (for eksempel på IIS)

```Notater:```

---

### CMS bør inneholde:
> + Registrering av nye medlemmer
> +	Oversikt over alle medlemmer og deres kontaktinfo
> +	Publiseringssystem for å legge ut nytt innhold på siden
> +	Brukerveiledning for publiseringssystemet

```Notater: Skal teste ut Firebase slik at jeg kan kjøre CMS eksternt ```

---

### Felles vurderingskriterier
> +	Du innfrir alle oppdragsgivers krav
> +	Nettsiden er brukertestet og testene er dokumentert
> +	Nettsiden er tilpasset målgruppen
> +	Nettsiden er interaktiv og brukervennlig, gjerne responsiv
> +	Nettsiden har en oversiktlig og logisk filstruktur og navngivning
> +	Navigasjonsbar og logo på alle sider
> +	Siden skal være bygget opp med div’er

```Notater:```

---

## TODO

---

### Har laget?

> - [x] Laget prosjektbeskrivelse
> - [x] Laget skisse i XD
> - [ ] Laget designmanual
> - [x] Laget tydlig fargeprofil
> - [x] Laget porteføljeside
> - [x] Laget navigasjonsbar + logo på alle sider
> - [x] Laget SoMe reklame på 10 sekunder
> - [x] Laget passende grafikk og illustrasjoner
> - [x] Laget profilerende tekst om bedriften
> - [x] Laget brødtekst
> - [x] Laget CTA (call to action)
> - [x] Laget hamburgermeny for mobil

---

### Spør seg selv!

> - [x] Nettsiden er responisv
> - [x] Nettsiden er interaktiv
> - [ ] Nettsiden er brukervennlig
> - [x] Nettsiden er brukertestet og testene er dokumentert
> - [ ] Nettsiden er bygget med ryddig kode
> - [x] Nettsiden kommuniserer et budskap til målgruppe
> - [ ] Nettsiden følger regelverk og etikk
> - [ ] Nettsiden følger universell utforming
> - [ ] Nettsiden følger oppdragsgivers krav
> - [x] Nettsiden har et gjennomgående design og tema
> - [x] Nettsiden har oversiktlig mappestruktur
> - [x] Nettsiden har riktige filtyper og navn
> - [x] Nettsiden har små filstørrelser
> - [x] Nettsiden laster på kort tid
> - [ ] Nettsiden bruker virkemidler
> - [x] Nettsiden fanger oppmerksomheten

### Ekstra:

> - [x] Grunnleggene oppsett CMS
> - [ ] Sette opp Firebase
> - [x] Fjerne all ubrukt CSS (bruke verktøy som PurgeCSS?)
> - [x] Linke alt inne i portfolio
> - [x] Linke portfolio i footer
> - [x] Linke github i footer 
> - [x] Lage FAQ og LAN rows
> - [x] Sendt til forum etter submit post
> - [ ] Vise SoMe reklamen på via nettsiden. YouTube?
> - [ ] Dobbeltsjekke navn på filer, classes, variabler for å forbedre dem
---

<br>
 
## **Brukertesting:**

#### Jeg spurte om 3 ting jeg kunne forbedre med nettsiden
<br>

**Aleksander sin tilbakemelding:**
 + "Noe som sier at man har publisert en melding"
 + "Klikke på logo for å komme tilbake til hjemmesiden"

<br>

### Hva jeg gjorde med tilbakemeldingen

Nå blir man videreført til forum etter å ha publisert noe


<br>

Jeg har spurt om elever og læreres meninger om diverse forbedringer på nettsiden opp gjennom ukene. Jeg mente det ikke var stort nok til å dokumenteres.

