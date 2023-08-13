/*30. Escreva um programa que calcule o valor de y = f(x) = a*x + b num intervalo de valores de x, sendo dados pelo usuário
os coeficientes a e b, bem como os valores do limite inferior e superior do intervalo de x bem como o valor do incremento
de x. O programa deve exibir resultados como um tabela onde constam os valores de x e y=f(x) lado a lado. */

const prompt = require('prompt-sync')({sigint: true});

console.log("TABELA DA FUNÇÃO f(x) = a * x + b");

let a, b, x, y, limI, limS;
let incremento;

a = parseFloat(prompt("Insira o valor de a: "));
b = parseFloat(prompt("Insira o valor de b: "));
x = parseFloat(prompt("Insira o valor de x: "));
limI = parseFloat(prompt("Insira o valor do limite inferior: "));
limS = parseFloat(prompt("Insira o valor do limite superior: "));
incremento = parseInt(prompt("Insira o valor do incremento de x: "));

console.log("----------------------------------");
console.log("|\tx\t|\ty=f(x)\t|");
console.log("----------------------------------");
for (let i = limI; i <= limS; i += incremento) {
  x += incremento;
  console.log("|\t" + x + "\t|\t" + fX(a, b, x) + "\t|");
}

function fX(a, b, x) {
  return a * x + b;
}
