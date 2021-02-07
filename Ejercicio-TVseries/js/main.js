'use strict';

const seriesList = document.querySelector('.js-series');
const url = "http://api.tvmaze.com/search/shows?q=girls";


function getAllSeries(){
    fetch(url)
    .then(response =>{return response.json() })
    .then(data =>{
        console.log(data);
        const allSeriesList = [];
        for (const data of allSeriesList) {
            //console.log(data.allSeriesList);
            
        }
    
    })
   
}


//paintSeries();


function paintSeries() {
    let htmlCode = "";
    for (const serie of allSeriesList) { 
        htmlCode += `<li>`;
        htmlCode += `<p>Nombre: ${serie.show.name}</p>`;
        htmlCode += `<p>Imagen:</p>`;
        htmlCode += `<img class="js-serie__image" alt="Cartel Serie TV" src="${serie.show.image}">`;
        htmlCode += `</li>`;
        //console.log(serie.show.name);
        //console.log(serie.show.image);
}
allSeries.innerHTML = htmlCode;
}  
getAllSeries();
