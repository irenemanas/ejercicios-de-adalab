'use strict';

const charactersElement = document.querySelector('.js-characters');
const searchElement = document.querySelector('.js-search');

// API  *searchValue = searchElement (Es igual como se llame el parámetro)
function callToApi(searchValue) {
fetch('https://swapi.dev/api/people/?search=' + searchValue)
.then(response => response.json())
.then(data => {
    paintCharacters(data.results);
        //let htmlCode = "";
        //for (const character of data.results) {
        //htmlCode += `<li>`;
        //htmlCode += `<p>Nombre: ${character.name}</p>`;
        //htmlCode += `<p>Género: ${character.gender}</p>`;
        //htmlCode += `</li>`;
        //console.log(character.name);
        //console.log(character.gender); 
    });     
}
//PAINT
function paintCharacters(characters) {
    let htmlCode = "";
    for (const character of characters) {
        htmlCode += `<li>`;
        htmlCode += `<p>Nombre: ${character.name}</p>`;
        htmlCode += `<p>Género: ${character.gender}</p>`;
        htmlCode += `</li>`;
        //console.log(character.name);
        //console.log(character.gender); 
    }
    charactersElement.innerHTML = htmlCode;
}

// SEARCH

function handleSearch() {
    console.log('ha pasado algo', searchElement.value);
    callToApi(searchElement.value);
}

searchElement.addEventListener('blur', handleSearch);