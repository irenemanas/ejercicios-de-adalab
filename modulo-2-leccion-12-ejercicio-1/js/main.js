'use strict'

// Creamos un listado con tres elementos de un array

const numbers = [1,2,3];
const list = document.querySelector('.js-list');

console.log(numbers);

function addNumbers() {
    for (let index = 0; index < numbers.length; index++) {
        const newItem = document.createElement('li');
        const newContent = document.createTextNode(`${numbers[index]}`);
        newItem.appendChild(newContent);
        list.appendChild(newItem);
        
    }
}

addNumbers();

// Creamos algo de contenido (un nuevo li)
// Y se lo añadimos a nuestro <li>

const newNumber =  '4';
 
function addOtherNumber() {
        const newList = document.createElement(`li`);
        const newListContent = document.createTextNode(`${newNumber}`);
        newList.appendChild(newListContent);
        list.appendChild(newList); 
}

addOtherNumber();

