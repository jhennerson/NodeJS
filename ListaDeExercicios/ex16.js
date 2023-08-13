/*16. Preparar um programa para ler as medidas da base e da altura de um triângulo, calculando e imprimindo sua área,
sabendo que o cálculo da área é dado por:
area = (base*altura)/2. 
 */

const prompt = require('prompt-sync')({sigint: true});

var base, altura, area;

base = parseFloat(prompt("Insira o valor da base: "));
altura = parseFloat(prompt("Insira o valor da altura: "));

area = (base * altura) / 2;

console.log("Área = " + area);