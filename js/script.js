// inseriamo prima quanti km deve fare l'utente//
// inseriamo quanti anni ha l'utente//

let km= prompt ("Quanti km devi fare per raggiungere la destinazione finale?");
let age= prompt ("Quanti anni hai?");
console.log(km, age);

//prezzo del biglietto//

const prezzobase=   0.21;
let prezzoTotale= km * prezzobase;

//applicare gli sconti in base agli sconti//
let message;
if (age < 18) { 
    prezzoTotale *=20 / 100;
}
else if (age > 65) {
    prezzoTotale *=40 / 100;
}
//formula per i prezzi in decimali//
prezzoTotale=
    prezzoTotale.toFixed(2);

    // risultato finale//

    const prezzofinale = prompt (`il prezzo totale del viaggio e: ${prezzoTotale}`)

    console.log(prezzoTotale)

   