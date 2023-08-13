/*11. Escreva um programa que leia dois números inteiros A e B quaisquer indicando se A é múltiplo de B ou se B é múltiplo
de A.*/

const prompt = require('prompt-sync')({sigint: true});

let numeroA = parseInt(prompt("Digite o número A: "));
let numeroB = parseInt(prompt("Digite o número B: "));

if(numeroA % numeroB == 0) console.log("A é múltiplo de B");
if(numeroB % numeroA == 0) console.log("B é múltiplo de A");
if(numeroA % numeroB != 0 && numeroB % numeroA != 0) console.log("A não é múltiplo de B e B não é múltiplo de A");
