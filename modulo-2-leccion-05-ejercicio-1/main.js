'use strict'


//CALLBACK

// elemento de HTML
const button1 = document.querySelector('.alert1');

// handler
function showAlert() {
  console.log('Es una Callback');
}

// listener sobre el elemento, con tipo de evento y handler
button1.addEventListener('click', showAlert);




//PASAR CALLBACK COMO ARGUMENTO

const button2 = document.querySelector('.alert2');
button2.addEventListener('click', function showAlert() {
    console.log('Mi primer click ¡ole yo y la mujer que me parió!');
});


//ARROW FUNCTION

const button3 = document.querySelector('.alert3');
button3.addEventListener('click', () => console.log('Es una arrow function'));

