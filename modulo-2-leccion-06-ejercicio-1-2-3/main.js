'use strict'

const adalaber1 = {};
    adalaber1.name = 'Susana';
    adalaber1.age = 34;
    adalaber1.job = 'periodista';
    adalaber1.run = phrase => `Estoy ${phrase}`;
    adalaber1.runAMarathon = distance => `Estoy corriendo un maratón de ${distance} kilómetros`;
    adalaber1.showBio = function (newName) {

        console.log(`Mi nombre es ${newName}, tengo ${this.age} años y soy ${this.job}`);
    };
//console.log(`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}`);
console.log(adalaber1.run('corriendo'));
console.log(adalaber1.runAMarathon(50));
adalaber1.name += "Maria";
adalaber1.showBio("MariCarmen");
console.log(adalaber1.name);





const adalaber2 = {};
    adalaber2.name = 'Rocío';
    adalaber2.age = 25;
    adalaber2.job = 'actriz';

console.log(`Soy ${adalaber2.name}, tengo ${adalaber2.age} años y me gustaría ser ${adalaber2.job}`);
