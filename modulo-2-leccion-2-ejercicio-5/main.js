'use strict'

// ejercicio 5
const yearsLived = 60;
const hoursLived = yearsLived * 365 * 24;
console.log(hoursLived);

// ejercicio 10

const years10Lived = document.querySelector('.years').innerHTML;
const hours10Lived = parseInt(years10Lived) * 365 * 24;
console.log(hoursLived);
const result = document.querySelector('.result');
result.innerHTML = `El número de horas es: ${hours10Lived}`;