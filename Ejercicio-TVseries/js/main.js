'use strict';

const seriesElement = document.querySelector('.js-series');

fetch("http://api.tvmaze.com/search/shows?q=girls")
.then(response => response.json())
.then(data => {
    console.log(data);
    let htmlCode = ''; 
    for (const serie of data) {
        htmlCode += `<li>`;
        htmlCode += `<p>Título: ${serie.show.name}</p>`;
        htmlCode += `<img src="${serie.show.image}"/>`;
        htmlCode += `</li>`;
       
        //console.log(serie.show.name);
        console.log(serie.show.image);
    }
    seriesElement.innerHTML = htmlCode; 
})