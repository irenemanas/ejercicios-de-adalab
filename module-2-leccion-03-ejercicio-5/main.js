'use strict'

const warningElement = document.querySelector ('.warning');
const errorElement = document.querySelector ('.error');
const successElement = document.querySelector ('.success');

const resultElement = errorElement;


if (resultElement === warningElement) {
    warningElement.innerHTML = 'AVISO ' + ' Tenga cuidado';
    console.log (warningElement.innerHTML);
} else if (resultElement === errorElement) {
    errorElement.innerHTML = 'ERROR ' + ' Ha surgido un error';
    console.log (errorElement.innerHTML)
} else {
    successElement.innerHTML = 'CORRECTO ' + 'Los datos son correctos';
    console.log (successElement.innerHTML)
}
