// Scrivi una funzione che accetti una stringa come argomento e la ritorni
function girami(parola){
    var inverso = "";

    for (i = parola.length - 1; i >= 0; i--){
        inverso += parola[i];
    };

    return inverso
}
var risultato = girami(prompt('scrivi una parola'));

// girata (es. Ciao -> oaiC)
console.log(risultato);