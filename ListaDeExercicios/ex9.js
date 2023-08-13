/*9. Leia três números inteiros fornecidos pelo usuário. Descubra qual deles é o menor de todos, imprimindo seu valor. */

const prompt = require('prompt-sync')({sigint: true});

var numeros = [];

for(let i = 0; i < 3; i++) {
    numeros[i] = parseInt(prompt("Digite o número " + (i+1) + ": "));
}

numeros.sort((a,b) => a - b);

console.log("O menor valor é: " + numeros[0]);