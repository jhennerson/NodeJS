/*12. Escreva um programa capaz de calcular o preço total a ser pago por uma compra de copos plásticos. O usuário deve
fornecer o número de copos a serem comprados e o programa deve calcular o preço total a ser cobrado, exibindo-o.
Observe que: se o número de copo é inferior ou igual a 100, o preço por copo é R$0.05; se o número de copos está entre
101 e 500, o preço por copo é R$0.04; finalmente se o número de copos é superior a 500 o preço por copo é R$0.035. .
 */

const prompt = require('prompt-sync')({sigint: true});

console.log("COMPRA DE COPOS PLÁSTICOS");

let quantidade = parseInt(prompt("Insira a quantidade de copos que deseja comprar: "));
let valorDaCompra = 0.0;

if(quantidade <= 100 && quantidade > 0 ) {
    valorDaCompra = quantidade * 0.05;
} else if(quantidade > 100 && quantidade <= 500) {
    valorDaCompra = quantidade * 0.04;
} else if(quantidade > 500) {
    valorDaCompra = quantidade * 0.035;
} else {
    console.log("Insira um valor maior que 0!");
}

if(quantidade > 0) console.log("O valor da sua compra é: R$ " + valorDaCompra);