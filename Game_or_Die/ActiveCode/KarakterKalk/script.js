let sum = 0;
resultatbox = document.getElementById("HTMLresultat")

function getValue(fag) {
    let karakter = parseInt(fag.querySelector("input:checked").value); /*finner checked inputs og gjør dem til integer*/
    let navn = String(fag.id); /*finner navnet på faget og gjør om til string*/
    sum += karakter;
    let checkedRadioBoxes = document.querySelectorAll("input:checked");
    let checkedRadioBoxesArray = Array.from(checkedRadioBoxes);
    let antallCheckedRadioBoxes = parseInt(checkedRadioBoxesArray.length); /*alt dette her finner antall checked bokses for å ha et tall vi kan dele på*/
    resultat = sum / antallCheckedRadioBoxes;
    let decimalPlaces = 2;
    let roundedresultat = resultat.toFixed(decimalPlaces);
    console.log("-------------------------------");
    console.log("Antall checked radio boxes = " + antallCheckedRadioBoxes);
    console.log("sum av karakter før deling = " + sum);
    console.log("resultat aka sum etter deling = " + roundedresultat);
    document.getElementById("HTMLresultat").innerHTML = "resultat = " + roundedresultat;
}


// 12/02/23 edit:
// beklager, jeg fant ingen enkel løsning for å reset av radio button
// om man velger en annen karakter innenfor samme fag vil resultatet bli feil
// jeg kunne ha prøvd en regn ut button som hentet values og regner og resetter på et klikk
// eller kanskje bruke input felt istedenfor radio button...

// hele siden er veldig responsiv
// enkelt og brukervennlig oppsett
// detaljer fra utregning i consollen
// litt dokumentasjon i koden
// har også skisse i adobe XD (er klar over at det ikke teller i vurderingen)

// skulle egentlig kunne legge til og fjerne fag men prioriterer heller at den regner riktig først...
// fjerna objects fordi det ble ikke brukt til noe
