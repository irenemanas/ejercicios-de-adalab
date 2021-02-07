'use strict';

let counter = 0;
let grapes = [];


const incrementAndShowCounter = () => {
  counter++;
  if (counter<13) {
    const time = document.querySelector('.js-time');
    time.innerHTML = counter;    
  }
 
};

setInterval(incrementAndShowCounter, 1000);


function paintGrapes() {
    console.log('Pintando......');
    let htmlCode = '';
    for (const grape of grapes) {
        
        }
        
    }
    
    
paintGrapes();