// inseriamo prima quanti km deve fare l'utente//
// inseriamo quanti anni ha l'utente//

let kmstr= prompt ("Quanti km devi fare per raggiungere la destinazione finale?");
let agestr= prompt ("Quanti anni hai?");






//prezzo del biglietto//

const prezzobase=   0.21;
let prezzoTotale= kmstr * prezzobase;

//applicare gli sconti in base agli sconti//

if (agestr < 18) { 
    let sconto = prezzoTotale * 20  / 100;
    prezzoTotale= prezzoTotale - sconto;
}
else if (agestr > 65) {
    let sconto = prezzoTotale * 40  / 100;
    prezzoTotale= prezzoTotale - sconto;
}
    

//formula per i prezzi in decimali//
prezzoTotale=
    prezzoTotale.toFixed(2);

    
if (isNaN("kmstr,agestr") === true ) {
    console.log ("Non valido,ricarica la pagina e inserire il numero");
    alert  ("Non valido,ricarica la pagina e inserire il numero")
    
    
} 

  let km = parseInt(kmstr);
  let age = parseInt(agestr);
   console.log(kmstr,agestr);

   

 



  

    // risultato finale//

    

    console.log(prezzoTotale)
    alert  (`il prezzo totale del viaggio e: ${prezzoTotale}`)

    
