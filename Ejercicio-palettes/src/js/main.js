/* eslint-disable no-console */
'use strict';

// eslint-disable-next-line no-unused-vars
const filterInput = document.querySelector('.js-filter');
const formElement = document.querySelector('.js-form');


let palettes = [];
let favourites = [
  {
    'id': '2-54-ha',
    'name': 'Millenium Falcon',
    'from': 'Star Wars',
    'colors': ['B6B6BE','D8D7D4','413A31','746C66','A32D2C']
  }
];

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
    let isValidClass;
    if (isValidPalette(palette)) {
      isValidClass = '';
    }else {
      isValidClass = 'palette--hidden';
    }
    let isFavouriteClass;
    if (isFavouritePalette(palette)) {
      isFavouriteClass = 'palette--favourite';
    }else {
      isFavouriteClass = '';
    }
    htmlCode += `<li class="palette js-palette ${isValidClass} ${isFavouriteClass}" id="${palette.id}">`;
    htmlCode += `<h2 class="palette__title">${palette.name}</h2>`;
    htmlCode += `<div class="palette__colors">`;
    for (const paletteColor of palette.colors) {
      htmlCode +=  `<div class="palette__color" style="background-color: #${paletteColor}"></div>`;
    }
    htmlCode += `</div>`;
    htmlCode += `</li>`;
  }

  const palettesContainer = document.querySelector('.js-palettes-container');
  palettesContainer.innerHTML = htmlCode;
  listenPaletteEvents();
}

function isValidPalette(palette) {
  const filterValue = filterInput.value.toLowerCase();
  return palette.name.toLowerCase().includes(filterValue);
}

function isFavouritePalette(palette) {
  return true;
}

//LISTEN PALETTE EVENTS

function listenPaletteEvents() {
  const paletteElements = document.querySelectorAll('.js-palette');
  for (const paletteElement of paletteElements) {
    paletteElement.addEventListener('click',handlePalette);

  }
}

function handlePalette(ev) {
  console.log('Me han clickado.....', ev.currentTarget);
}
//START APP
getFromLocalStorage();