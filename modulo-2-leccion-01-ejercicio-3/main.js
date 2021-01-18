'use strict';

const titleElement = document.querySelector('.subtitle')
titleElement.innerHTML = titleElement.innerHTML + ' JavaScript'

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const textElement = document.querySelector('.text');

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
textElement.innerHTML = textElement.innerHTML + ' Mundo';