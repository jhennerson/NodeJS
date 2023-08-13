/*10. Leia três números quaisquer, imprimindo-os em ordem crescente. */

const prompt = require('prompt-sync')({sigint: true});

var numeros = [];

for(let i = 0; i < 3; i++) {
    numeros[i] = prompt("Digite o número " + (i+1) + ": ");
}

numeros.sort((a,b) => a - b);

for(let i = 0; i < 3; i++) {
    console.log(numeros[i]);
}