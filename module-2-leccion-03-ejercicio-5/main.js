'use strict'

const warningElement = document.querySelector ('.warning');
warningElement.innerHTML = 'AVISO ' + ' Tenga cuidado';
const errorElement = document.querySelector ('.error');
errorElement.innerHTML = 'ERROR ' + ' Ha surgido un error';
const successElement = document.querySelector ('.success');
successElement.innerHTML = 'CORRECTO ' + 'Los datos son correctos';

const resultElement = successElement;


if (resultElement === warningElement) {
    console.log (warningElement.innerHTML)
} else if (resultElement === errorElement) {
    console.log (errorElement.innerHTML)
} else {
    console.log (successElement.innerHTML)
}
