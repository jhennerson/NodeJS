/*2. Escreva um programa que leia um número real fornecido pelo usuário, armazenando-o numa variável apropriada. Imprima o valor lido.*/

const prompt = require('prompt-sync')({sigint: true});

let numero = parseFloat(prompt("Digite um número real: "));

console.log("Número digitado: " + numero);