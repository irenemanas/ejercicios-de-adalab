'use strict'

//Prevent FORM SUBMIT

const form = document.querySelector('.js-form');

function handleForm (ev) {
    ev.preventDefault();
}

form.addEventListener('submit', handleForm);

//Handle submit button click
//Const & Array creation(with objects)
//Los datos permanentes en constantes glabales - Fuera de la función
const userMovies = [];

const submit = document.querySelector('.js-submit');
const user = document.querySelector('.js-user');
const movie1 = document.querySelector('.js-movie1');
const movie2 = document.querySelector('.js-movie2');

function handleSubmitButton () {
    console.log('user:', user.value);
    console.log('movie1:', movie1.value);
    console.log('movie2:', movie1.value);

    //Create object
    //Los datos efímeros - Dentro de la función
    const data = {
        user: user.value,
        movie1: movie1.value,
        movie2: movie2.value
    };
    //Push to ARRAY
    userMovies.push(data);
    console.log(userMovies);
}

submit.addEventListener('click', handleSubmitButton);

console.log(submit);