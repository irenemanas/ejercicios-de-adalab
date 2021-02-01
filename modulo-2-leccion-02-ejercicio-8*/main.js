'use strict'

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dog1Element = document.querySelector('.js-dog1');
dog1Element.innerHTML = `<img clas="dog1image" src="${firstDogImage}"/><p>${ firstDogName}</p> `;

const dog2Element = document.querySelector('.js-dog2');
dog2Element.innerHTML = `<img clas="dog2image" src="${secondDogImage}"/><p>${ secondDogName}</p> `;

const dog3Element = document.querySelector('.js-dog3');
dog3Element.innerHTML = `<img clas="dog3image" src="${thirdDogImage}"/><p>${ thirdDogName}</p> `;


// Toda la ul

const dogList = document.querySelector('.js-dogList');

dogList.innerHTML += `<li><img clas="dog1image" src="${firstDogImage}"/><p>${ firstDogName}</p></li><li><img clas="dog2image" src="${secondDogImage}"/><p>${ secondDogName}</p></li><li><img clas="dog3image" src="${thirdDogImage}"/><p>${ thirdDogName}</p></li>`;