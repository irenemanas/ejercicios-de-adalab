'use strict'
const number3 = 3;
const number7 = 7;
const age = 51;
console.log(age);

const welcomeParagraph = document.querySelector('.welcomeText');

// Logueo el contenido de la constante welcomeParagraph en la consola y compruebo que tiene asignado el elemento de HTML que espero antes de cambiar su contenido
console.log('welcomeParagraph');

welcomeParagraph.innerHTML = 'Bienvenida Adalaber';