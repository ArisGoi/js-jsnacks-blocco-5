// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
var raccolto = [
    {
        "name": "zucchina",
        "tipo": "A",
        "peso": 200,
        "lunghezza": 30
    },
    {
        "name": "zucchina",
        "tipo": "A",
        "peso": 120,
        "lunghezza": 10
    },
    {
        "name": "zucchina",
        "tipo": "A",
        "peso": 190,
        "lunghezza": 28
    },
    {
        "name": "zucchina",
        "tipo": "B",
        "peso": 20,
        "lunghezza": 10
    },
    {
        "name": "zucchina",
        "tipo": "A",
        "peso": 250,
        "lunghezza": 35
    },
    {
        "name": "zucchina",
        "tipo": "A",
        "peso": 201,
        "lunghezza": 30
    },
    {
        "name": "zucchina",
        "tipo": "A",
        "peso": 156,
        "lunghezza": 23
    },
    {
        "name": "zucchina",
        "tipo": "A",
        "peso": 200,
        "lunghezza": 30
    },
    {
        "name": "zucchina",
        "tipo": "C",
        "peso": 133,
        "lunghezza": 24
    },
    {
        "name": "zucchina",
        "tipo": "C",
        "peso": 212,
        "lunghezza": 32
    },
];

// Calcola quanto pesano tutte le zucchine.
var totPeso = 0;
for (i=0; i<raccolto.length; i++){
    totPeso += raccolto[i].peso;
};


console.log(`le zucchine in totale pesano: ${totPeso} g`);