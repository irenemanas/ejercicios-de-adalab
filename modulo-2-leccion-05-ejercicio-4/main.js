'use strict'

const paragraph = document.querySelector (".bgcolor1");


function handleScroll() {
/*   console.log(window.scrollY);*/
   if( window.scrollY < 250 ) {
    paragraph.classList.add('bgcolor1');
    
  }
  else {
    paragraph.classList.remove('bgcolor1');
    
  }
}




window.addEventListener("scroll", handleScroll);