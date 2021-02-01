'use strict'


// El precio es 10

function price(x) {

const priceResult = x;
const taxResult = priceResult*0.21;
const totalResult = priceResult + priceResult*0.21;

console.log('Precio sin IVA: ' + priceResult + ',  IVA: ' + taxResult +  ' y  Total: ' + totalResult);
}
price(10);
