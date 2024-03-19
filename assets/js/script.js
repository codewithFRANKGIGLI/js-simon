// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Array vuoto
let numbersArray = [];
// uso while per popolare l'array fino a 5 elementi
while (numbersArray.length < 5) {
    let randomNumber = getRandomNumber(0, 100);
    if(!numbersArray.includes(randomNumber)) {
        numbersArray.push(randomNumber);
    }
}
// faccio un console.log per vedere l'array
console.log(numbersArray);

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//  ------------------FUNCTIONS------------------
// Funzione per i numeri random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}