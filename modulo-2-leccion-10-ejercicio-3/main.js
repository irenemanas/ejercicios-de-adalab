'use strict'

let userData = {};

function getGitData() {
  console.log(1)
    fetch("https://api.github.com/users/gootyfer") // empieza pause
      .then(response => response.json()) // se reanuda
      .then(data => {
        cleanApiData(data);
        paintData()
        console.log(2)
      });
      console.log(3)
  }
  const btn = document.querySelector(".js-gitData");
  btn.addEventListener("click", getGitData);

  function cleanApiData (data) {
    userData = {

      name: data.login,
      avatarUrl: data.avatar_url,
      createdAt: data.created_at,
      

    }
  }

  function paintData () {

        // pintar
        
        const name = document.querySelector(".js-name");
        name.innerHTML = userData.name;
        const img = document.querySelector(".js-image");
        img.src = userData.avatarUrl;
        img.alt = "Foto usuario";
        const createdDate = document.querySelector(".js-repoDate");
        createdDate.innerHTML = userData.createdAt;
        
       
        
        
  }

  function logUserData() {
    console.log(userData)
  }
  const body = document.querySelector("body");
  body.addEventListener("click", logUserData);