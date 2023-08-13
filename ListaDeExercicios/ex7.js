/*7. Escreva um programa que leia dois valores, os quais denominaremos A e B, fornecidos pelo usuário, exibindo respostas
	 F ou V para as seguintes questões:
	 (a) A é igual a zero?
	 (b) B é menor que zero? e
	 (c) A OU B é maior do que zero?
  Use operadores lógicos para formular as expressões necessárias a avaliação dos valores. */

const prompt = require('prompt-sync')({sigint: true});

let valorA = prompt("Digite o primeiro valor: ");
let valorB = prompt("Digite o segundo valor: ");

console.log((valorA == 0) ? "(a) A é igual a zero? " + "V" : "(a) A é igual a zero? " + "F");
console.log((valorB < 0) ? "(b) B é menor que zero? " + "V" : "(b) B é menor que zero? " + "F");
console.log((valorA || valorB > 0) ? "(c) A OU B é maior do que zero? " + "V" : "(c) A E B é maior do que zero? " + "F");