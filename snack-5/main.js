// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

function extrator(arr, a, b){
    let arrEstratto = [];

    for(i=a-1; i<b; i++){
        arrEstratto.push(arr[i])
    };

    return arrEstratto
};

var inputStart = parseInt(prompt('Estrai da un\'array: inserisci un numero di inizio (max_25)'));
var inputEnd = parseInt(prompt('Estrai da un\'array: inserisci un numero di fine (max_25)'));

const arrInizio = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var arrFine = extrator(arrInizio, inputStart, inputEnd);

console.log(arrFine);