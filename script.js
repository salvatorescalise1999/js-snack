/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

let primoNumero = parseFloat(prompt("inserisci il primo numero:"));
let secondoNumero = parseFloat(prompt("inserisci il secondo numero:"));

if (primoNumero > secondoNumero){
    console.log("il numero maggiore è:", primoNumero);
    
} else if(secondoNumero > primoNumero){
    console.log("il numero maggiore è:", secondoNumero);
    
} else if(primoNumero === secondoNumero){
    console.log("i numeri sono uguali");
    
} else console.log("non mi hai scritto due numeri");

    
