'use strict'


// El precio es 10

function price(x) {
    return x;
}
const priceResult = 10;
const taxResult = priceResult*0.21;
const totalResult = priceResult + priceResult*0.21;

console.log('Precio sin IVA: ' + priceResult + '  IVA: ' + taxResult +  '  Total: ' + totalResult);

