/*6. Escreva um programa que leia dois valores, os quais denominaremos A e B, fornecidos pelo usuário, exibindo respostas
	 F ou V para as seguintes questões:
	 (a) A é maior que zero?
	 (b) B é maior que zero?;
	 (c) A E B são maiores do que zero?
  Use operadores lógicos para formular as expressões necessárias a avaliação dos valores.*/

const prompt = require('prompt-sync')({sigint: true});

let valorA = prompt("Digite o primeiro valor: ");
let valorB = prompt("Digite o segundo valor: ");

console.log((valorA > 0) ? "(a) A é maior que zero? " + "V" : "(a) A é maior que zero? " + "F");
console.log((valorB > 0) ? "(b) B é maior que zero? " + "V" : "(b) B é maior que zero? " + "F");
console.log((valorA && valorB > 0) ? "(c) A E B são maiores do que zero? " + "V" : "(c) A E B são maiores do que zero? " + "F");