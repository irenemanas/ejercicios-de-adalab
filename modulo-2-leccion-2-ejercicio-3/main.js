'use strict'

//Veo operaciones en console
const kiwiKilo = 2;
const kiwiPrice = 5;
console.log(kiwiKilo*kiwiPrice);
const pearKilo = 3;
const pearPrice = 2;
console.log(pearKilo*pearPrice);
const grapeKilo = 0.5;
const grapePrice = 4;
console.log(grapeKilo*grapePrice);

//Redefino nuevas variables


const totalKiwi = (kiwiKilo * kiwiPrice);
const totalPear = (pearKilo * pearPrice);
const totalGrape = (grapeKilo * grapePrice);
const totalCost = (totalKiwi + totalPear + totalGrape);
console.log('El coste total de la compra es: ' + totalCost + '€');



