'use strict'



function getCharacterData () {
fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => {
    const name = document.querySelector('.js-name');
    name.value = data.message;
    console.log(data.message);
    console.log(data); 
  });
}
getCharacterData();