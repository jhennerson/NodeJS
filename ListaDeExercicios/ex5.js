/*5. Dado um número inteiro qualquer, fornecido pelo usuário, descobrir se o mesmo é par ou ímpar*/

const prompt = require('prompt-sync')({sigint: true});

let numero = parseInt(prompt("Digite um número inteiro: "));

console.log((numero % 2 == 0) ? "O número " + numero + " é par!" : "O número " + numero + " não é par!");