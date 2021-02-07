/* eslint-disable no-console */
'use strict';

// eslint-disable-next-line no-unused-vars
const palettesContainer = document.querySelector('.js-palettes-container');
const formElement = document.querySelector('.js-form');
const filterInput = document.querySelector('.js-filter');


let palettes = [];

// API

function getDataFromApi() {
  fetch('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
    .then(response => response.json())
    .then(data => {
      palettes = data.palettes;
      paintPalettes();
      setInLocalStorage();
    });
}


// LOCAL STORAGE

function setInLocalStorage() {
  const stringPalettes = JSON.stringify(palettes);
  localStorage.setItem('palettes', stringPalettes);
}

function getFromLocalStorage() {
  const localStoragePalette = localStorage.getItem('palettes');
  if (localStoragePalette === null) {
    getDataFromApi();
  } else {
    const arrayPalettes = JSON.parse(localStoragePalette);
    palettes = arrayPalettes;
    paintPalettes();
  }

}

//FILTER

function handleFilter() {
  console.log('filtrando....');
  paintPalettes();
}

filterInput.addEventListener('keyup', handleFilter);

//Submit FORM
function handleForm(ev) {
  ev.preventDefault();
}
formElement.addEventListener('submit', handleForm);


//PAINT

function paintPalettes() {
  //console.log('pintando....', palettes);
  let htmlCode = '';
  for (const palette of palettes) {
    if (palette.name.includes(filterInput.value)) {
      htmlCode += `<li class="palette">`;
    }else {
      htmlCode += `<li class="palette palette--hidden">`;
    }

    //console.log(palette.colors);
    htmlCode += `<h2 class="palette__title">${palette.name}</h2>`;
    htmlCode += `<div class="palette__colors">`;
    for (const paletteColor of palette.colors) {
      htmlCode +=  `<div class="palette__color" style="background-color: #${paletteColor}"></div>`;
    }
    htmlCode += `</div>`;
    htmlCode += `</li>`;
  }
  palettesContainer.innerHTML = htmlCode;
}




//START APP
getFromLocalStorage();