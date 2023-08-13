/*1. Escreva um programa que leia um número inteiro fornecido pelo usuário, armazenando-o numa variável apropriada. Imprima o valor lido.*/

const prompt = require('prompt-sync')({sigint: true});

let numero = parseInt(prompt("Digite um número inteiro: "));

console.log("Número digitado: " + numero);