/*4. Leia um número qualquer fornecido pelo usuário. Determine se o número é maior do que 100, imprimindo uma
mensagem indicando que o "valor é maior que 100" ou uma mensagem indicando que o "valor é menor ou igual a 100"*/

const prompt = require('prompt-sync')({sigint: true});

let numero = prompt("Digite um número qualquer: ");

console.log((numero > 100) ? "O valor é maior que 100" : "O valor é menor ou igual a 100");