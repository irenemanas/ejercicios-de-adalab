'use strict'

const updateElement = document.querySelector('.js-update');
const selectElement = document.querySelector('.js-select');
const faceElement = document.querySelector('.js-face');
const containerElement = document.querySelector('.js-container');

function handleUpdateBtn() {
    updateBackground();
    updateFace();
  }
    

function updateBackground() {
    //random Number
    //const randomNumber = Math.random();
    //const randomNumberFinal = randomNumber * 100;
    //const randomNumberInteger = Math.ceil(randomNumberFinal);
    const randomNumber = Math.ceil(Math.random() * 100);
    //console.log(randomNumber);
    const remainNumber = randomNumber % 2;
    if (remainNumber === 0) {
        containerElement.classList.add('background-color-alt');
        //console.log('soy par', randomNumber);
    } else {
        containerElement.classList.remove('background-color-alt');
        //console.log('soy impar', randomNumber);
    }  
    
}

function updateFace() {
  const selectValue = selectElement.value;
  faceElement.innerHTML = selectValue;
}


updateElement.addEventListener('click', handleUpdateBtn);