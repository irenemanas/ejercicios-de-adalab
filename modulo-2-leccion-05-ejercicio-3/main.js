'use strict'

const main = document.querySelector('.main');
const paragraph1 = document.querySelector('.paragraph');
const paragraph1Value = document.querySelector('.paragraph').innerHTML;
function handlerParagraph() {
    main.innerHTML += paragraph1Value;  
}
paragraph1.addEventListener('mouseover', handlerParagraph);

