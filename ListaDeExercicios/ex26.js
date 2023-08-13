/*26. Escreva um programa que calcule a soma de N números quaisquer fornecidos pelo usuário. O programa deve parar de ler
e, portanto somar os valores quando for introduzido o número 0 (zero). */

const prompt = require('prompt-sync')({sigint: true});

console.log("SOMA DE NÚMEROS");
console.log("Insira o valor 0 para parar");

let numero = 0;
let soma = 0;
let contador = 0;

do {
  contador++;
  numero = parseFloat(prompt("Insira o valor do número " + contador + ": "));
  soma += numero;
} while(numero !== 0);

console.log("A soma dos elementos é: " + soma);