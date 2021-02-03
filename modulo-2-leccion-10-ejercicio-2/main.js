'use strict'


function getLabradorImage() {
    fetch("https://dog.ceo/api/breed/labrador/images/random")
      .then(response => response.json())
      .then(dataImage => {
        const img = document.querySelector(".js-image");
        img.src = dataImage.message;
        img.alt = "Un Labrador";
      });
}
  
  const btn = document.querySelector(".js-labrador");
  btn.addEventListener("click", getLabradorImage);