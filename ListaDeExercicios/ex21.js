/*21. Faça um algoritmo que, lendo 3 números correspondentes aos coeficientes a, b, e c de uma equação do 2º grau, calcule
seu DELTA e também as raízes desta equação, imprimindo seus valores. */

const prompt = require('prompt-sync')({sigint: true});

console.log("Equação de 2º grau");

var a = parseFloat(prompt("Insira o valor de a: "));
var b = parseFloat(prompt("Insira o valor de b: "));
var c = parseFloat(prompt("Insira o valor de c: "));

var delta, raiz1, raiz2;

delta = (Math.pow(b, 2)) - (4 * a * c);

if (delta > 0) {
    raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
} else if (delta === 0) {
    raiz1 = raiz2 = -b / (2 * a);
}
if (delta > 0) {
    console.log("Delta = " + delta);
    console.log("Raiz 1 = " + raiz1);
    console.log("Raiz 2 = " + raiz2);
} else {
    console.log("Não existem raizes reais!");
}