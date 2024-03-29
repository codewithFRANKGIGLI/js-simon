// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Array vuoto
const numbersArray = [];
// uso while per popolare l'array fino a 5 elementi
while (numbersArray.length < 5) {
    let randomNumber = getRandomNumber(0, 100);
    if(!numbersArray.includes(randomNumber)) {
        numbersArray.push(randomNumber);
    }
}
// faccio un console.log per vedere l'array
console.log(numbersArray);
// visualizzo l'array all'utente
function displayNumbersArray(numbersArray) {
    const container = document.getElementById('numbers-container');
    const message = document.createElement('p');
    message.textContent = `Lista numeri: ${numbersArray.join(', ')}`;
    container.appendChild(message);
  
    // lo rimuovo dopo 30 sec, per testare uso 3 sec
    setTimeout(function() {
        container.innerHTML ='';
    }, 3000);
}
// chiamo la funzione e il suo argomento e il setTimeout del prompt con 0.5 sec di differenza
displayNumbersArray(numbersArray);
setTimeout(function() {
    checkUserInput(numbersArray);
}, 3500);

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// funzione che verifica i numeri inseriti
function checkUserInput(numbersArray) {
    let correctNumbers = 0;
    let totalNumbers = 0;
    const correctNumbersArray = [];
    for(let i = 0; i < numbersArray.length; i++) { 
        const userGuess = parseInt(prompt(`Inserisci un numero della sequenza: (con -1 esci)`));    
        if (userGuess === -1) {
            break;
        }
        if (numbersArray.includes(userGuess) && !correctNumbersArray.includes(userGuess)) {
            correctNumbersArray.push(userGuess);
            correctNumbers++;
        }
        totalNumbers++;
    }
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    alert(`Numeri azzeccati: ${correctNumbers}\n Numeri totali: ${totalNumbers}`);
}





//  ------------------FUNCTIONS------------------
// Funzione per i numeri random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

