"use strict";

// Gesamtbilanz anlegen
let einnahmen, 
    ausgaben, 
    bilanz, 
    titel, 
    typ, 
    betrag, 
    datum;



const eintrag_erfassen = function() {
    titel = prompt("Titel: ");
    typ = prompt("Typ (Einnahme / Ausgabe): ");
    betrag = parseInt(prompt("Betrag (in Cent): "));
    datum = prompt("Datum (jjjj-mm-tt): ");
};


const eintrag_ausgeben = function(titel, typ, betrag, datum) {
    console.log(`Titel: ${titel}
Typ: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`);  
};


const eintrag_mit_gesamtbilanz_verrechnen = function(typ, betrag) {
    if (typ === "Einnahme") {
        einnahmen += betrag;
        bilanz = bilanz + betrag;
    } else if (typ === "Ausgabe") {
        ausgaben += betrag;
        bilanz -= betrag;
    }else {
        console.log(`Der Typ "${typ}" ist nicht bekannt`)
    }
};


const gesamtbilanz_ausgeben = function(einnahmen, ausgaben, bilanz) {
    console.log(`Bilanz: ${ bilanz} ct`);
    console.log(`
Einnahmen: ${einnahmen} ct
Ausgaben: ${ausgaben} ct
Bilanz: ${bilanz} ct
Bilanz ist positiv: ${bilanz >= 0}`);
};


const eintrag_hinzufuegen = function() {
    eintrag_erfassen();
    eintrag_ausgeben(titel, typ, betrag, datum);
    eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
    gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
};



eintrag_hinzufuegen();
