/*13. Dados 3 valores reais representando os lados de um possível triângulo, verifique se os mesmos formam um triângulo (a
medida de qualquer um de seus lados deve ser menor que a soma das medidas dos lados restantes). Caso seja formado um
triângulo, descubra também se este triângulo é escaleno (três lados diferentes), isósceles (dois lados iguais) ou eqüilátero
(três lados iguais). 
 */

const prompt = require('prompt-sync')({sigint: true});

var ladoA, ladoB, ladoC;

ladoA = parseFloat(prompt("Insira o valor do lado A: "));
ladoB = parseFloat(prompt("Insira o valor do lado B: "));
ladoC = parseFloat(prompt("Insira o valor do lado C: "));

if(ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
    console.log("Os valores inseridos formam um triângulo");
    if(ladoA === ladoB && ladoA === ladoC) {
        console.log("Este é um triângulo equilátero");
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Este é um triângulo isósceles");
    } else {
        console.log("Este é um triângulo escaleno");
    }
} else {
    console.log("Os valores inseridos não formam um triângulo");
}
