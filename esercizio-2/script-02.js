// JSnack 3
//  Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//  Il programma stampa la somma di tutti i numeri inseriti. 
//  Esegui questo programma in due versioni, con il for e con il while (facoltativo)


let somma = 0;

for (let i = 1; i <= 5; i++) {
  let numero = parseFloat(prompt("Inserisci il numero " + i + ":"));

  if (isNaN(numero)) {
    alert("Non hai inserito un numero valido! Riprova.");
    i--; // torna indietro e richiedi lo stesso numero
  } else {
    somma += numero;
  }
}

console.log("La somma è:", somma);
alert("La somma dei numeri inseriti è: " + somma);

