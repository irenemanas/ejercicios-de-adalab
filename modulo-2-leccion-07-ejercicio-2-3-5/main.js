'use strict'


// Ejercicio 2
for (let i = 1; i < 11; i++) {
    console.log('Voy por la vuelta ' + i);
  }

// Ejercicio 3
  let acc = 0;

  for (let x = 0; x < 10; x++) {
      console.log('El resultado es: ' + (acc +=2)); 

  }

  //Ejercicio 5
    const numbers = [7, 2, 20, 17, 4];
    let sumNumbers = 0;
    for (let acc = 0; acc < numbers.length; acc++ ) {
        sumNumbers += numbers[acc];
    }
    console.log(sumNumbers/numbers.length); 