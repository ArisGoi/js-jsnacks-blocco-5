// Crea 10 oggetti che rappresentano una zucchina.
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
        "peso": 50,
        "lunghezza": 8
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

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchinePiccole = [];
var zucchineGrandi = [];

var pesoGrandi = 0;
var pesoPiccole = 0;

for (i=0; i<raccolto.length; i++){
    // totPeso += raccolto[i].peso;
    if(raccolto[i].lunghezza < 15){
        zucchinePiccole.push(raccolto[i]);
        pesoPiccole += raccolto[i].peso;
    } else {
        zucchineGrandi.push(raccolto[i]);
        pesoGrandi += raccolto[i].peso;
    }
};

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
console.log(zucchinePiccole);
console.log(pesoPiccole);

console.log(zucchineGrandi);
console.log(pesoGrandi);