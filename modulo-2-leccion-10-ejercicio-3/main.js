'use strict'

let userData = {};

function getGitData() {
  console.log(1)
    fetch("https://api.github.com/users/{username}") // empieza pause
      .then(response => response.json()) // se reanuda
      .then(data => {
        cleanApiData(data);
        paintData();
        
        //console.log(2)
      });
      //console.log(3)
  }
  const btn = document.querySelector(".js-gitData");
  btn.addEventListener("click", getGitData);

  function cleanApiData (data) {
    userData = {

      name: data.login,
      avatarUrl: data.avatar_url,
      repoElement:data.public_repos,
      repoDate: data.created_at,
      

    }
  }

  function paintData () {

        // pintar
        
        const name = document.querySelector(".js-name");
        name.innerHTML = userData.name;
        const img = document.querySelector(".js-image");
        img.src = userData.avatarUrl;
        img.alt = "Foto usuario";
        const repoElement= document.querySelector(".js-repo");
        repoElement.innerHTML = userData.repoElement
        const repoDate = document.querySelector(".js-repoDate");
        repoDate.innerHTML = userData.repoDate;
             
        
  }

  function logUserData() {
    //console.log(userData)
  }
  