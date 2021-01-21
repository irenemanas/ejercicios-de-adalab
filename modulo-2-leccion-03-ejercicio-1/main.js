'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';

// avatar que eligió el usuario al registrarse
//let userAvatar = 'http://www.fillmurray.com/300/300';//

// quitamos url de userAvatar para cambiar la img posteriormente
let userAvatar = '';

// añadimos la imagen userAvatar a la etiqueta img
const imageAvatar = document.querySelector ('.user__avatar');

// operamos
imageAvatar.src = userAvatar;

// metemos una u otra imagen
imageAvatar.src = userAvatar || DEFAULT_AVATAR;

