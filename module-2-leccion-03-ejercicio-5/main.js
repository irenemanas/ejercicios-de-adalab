'use strict'


const contentElement = document.querySelector('.js-content');
const titleElement = document.querySelector('.js-title');
const subtitleElement = document.querySelector('.js-subtitle');

if (contentElement.classList.contains('success')) {
    titleElement.innerHTML = 'CORRECTO';
    subtitleElement.innerHTML = 'Los datos son correctos';  
}else if (contentElement.classList.contains('warning')) {
    titleElement.innerHTML = 'AVISO';
    subtitleElement.innerHTML = 'Tenga cuidado';
}else if (contentElement.classList.contains('error')) {
    titleElement.innerHTML = 'ERROR';
    subtitleElement.innerHTML = 'Ha surgido un error'
}