/*25. Faça um programa que calcule a soma de N números quaisquer fornecidos pelo usuário. */

const prompt = require('prompt-sync')({sigint: true});

console.log("SOMA DE NÚMEROS");

const quantidade = parseFloat(prompt("Insira a quantidade de números que deseja somar: "));
let soma = 0;

for(let i = 1; i <= quantidade; i++) {
  const numero = parseFloat(prompt("Insira o valor do número " + i + ": "));
  soma += numero;
}

console.log("A soma dos elementos é: " + soma);