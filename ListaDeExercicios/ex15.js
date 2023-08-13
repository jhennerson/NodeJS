/*15. Escreva um programa que realize as seguintes tarefas:
a) Efetue a leitura de dois valores inteiros, os quais serão denominados x e y; 
b) Realize a soma dos valores x e y, exibindo seu resultado; 
c) Realize o produto dos valores x e y exibindo seu resultado; 
d) Compare os valores x e y, indicando se "X > Y", "X = Y" e "X < Y" para os casos correspondentes. 
*/

const prompt = require("prompt-sync")({sigint: true});

var valorX, valorY, soma, produto;

valorX = parseInt(prompt("Insira o valor de X: "));
valorY = parseInt(prompt("Insira o valor de Y: "));

soma = valorX + valorY;
produto = valorX * valorY;

console.log("A soma de X e Y é: " + soma);

console.log("O produto de X e Y é: " + produto);

if(valorX > valorY) {
    console.log("X > Y");
} else if(valorX < valorY) {
    console.log("X < Y");
} else {
    console.log("X = Y");
}