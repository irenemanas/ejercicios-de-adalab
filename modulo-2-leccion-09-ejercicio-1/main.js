'use strict'

const arr = [1,2,3];
const newArr = arr.push(4,5,6,7);
console.log(newArr); // Devuelve 7 que es el nº total de elementos del arr

// Ejercicio 09-1

//const numbersArr = [1];
//for (let i = 1; i < 101; i++) {
    //console.log(i); // BUCLE: podemos cambiar el (i) con un nº del 1 al 100 y devuelve ese número
//}
 
const numbersArr = [1];
 
function get100Numbers () {
    for (let i = 1; i < 101; i++) {
        get100Numbers = numbersArr.push(i);
    }
}
console.log(77);