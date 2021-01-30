'use strict'

const amandaName = 'Amanda';
const ireneName = 'Irene';
const passWordName = 'Amanda';

if (passWordName === amandaName || passWordName === ireneName) {
    console.log('Bienvenida: ' + amandaName);
} else {
    console.log('Lo siento pero el usuario que has introducido no está registrado');
}