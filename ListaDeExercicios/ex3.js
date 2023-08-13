/*3. Leia um número qualquer fornecido pelo usuário. Determine se o número é maior do que 50, imprimindo uma mensagem
indicando tal fato.*/

const prompt = require('prompt-sync')({sigint: true});

let numero = prompt("Digite um número: ");

console.log((numero > 50) ? "O número " + numero + " é maior que 50!" : "O número " + numero + " não é maior que 50!");