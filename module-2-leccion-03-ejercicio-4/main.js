'use strict'

const firstYearDog = 15;
const secondYearDog = 9;
const restYearDog = 5;

const humanYear = 4;
let result = 0;

if (humanYear === 1) {
    result = firstYearDog;
    console.log('La edad del perro es:' + result);
} else if (humanYear === 2) {
    result = firstYearDog + secondYearDog;
    console.log('La edad del perro es:' + result);
} else {
    result = firstYearDog + secondYearDog + (humanYear - 2) * restYearDog;
    console.log('La edad del perro es:' + result); 
}

