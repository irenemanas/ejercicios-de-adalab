'use strict'

const arr = [1,2,3];
const newArr = arr.push(4,5,6,7);
console.log(newArr); // Devuelve 7 que es el nº total de elementos del arr

// Recordando BUCLE (loop)

//const numbersArr = [1];
//for (let i = 1; i < 101; i++) {
    //console.log(i); // BUCLE: podemos cambiar el (i) con un nº del 1 al 100 y devuelve ese número
//}


// Ejercicio 09-1
 
const arr1 = [];
 
function get100Numbers () {
    for (let i = 1; i < 101; i++) {
        arr1.push(i);
    }
    return arr1;
}
get100Numbers();
console.log(arr1);


// Ejercicio 09-2

function getReversed100Numbers () {
    console.log(arr1.reverse());
    get100Numbers();
}
    
getReversed100Numbers ();



//OPCIÓN 2 - MIGUEL

/*const arr2 = [];

function getReversed100Numbers () {
   const arr2 = get100Numbers();
   console.log(arr2);
   const arrReversed = arr2.reverse();
   return arrReversed;
}

const newArray = getReversed100Numbers ();
console.log(newArray); */  



