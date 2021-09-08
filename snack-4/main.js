// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const array1 = ["a","b","c"];
const array2 = [1,2,3];

function arraySomma(array1, array2){
    let arraySomma = [];

    for(i=0; i<array1.length; i++){
        arraySomma.push(array1[i]);
        arraySomma.push(array2[i]);
    };

    return arraySomma
}

console.log(arraySomma(array1, array2));