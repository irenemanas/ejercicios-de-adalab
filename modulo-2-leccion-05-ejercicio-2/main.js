'use strict'

const button = document.querySelector('.alert');
const inputName = document.querySelector('.name');
function showName() {
    console.log(`Hola  ${inputName.value}`);
}
button.addEventListener('click', showName);