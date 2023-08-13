/*22. Considerando um objeto móvel em movimento uniformemente variado, escreva um programa que receba as seguintes
informações: um valor real indicando posição inicial do móvel P0, um valor real que corresponde a velocidade do móvel
V, um outro valor real A correspondente a aceleração do móvel e um número inteiro correspondente ao tempo decorrido
T. O programa deve calcular a posição final PF do móvel, dado pela relação abaixo:
PF = P0 + V * T + (A * T2
) / 2*/

const prompt = require('prompt-sync')({sigint: true});

console.log("MOVIMENTO UNIFORMEMENTE VARIADO");

const p0 = parseFloat(prompt("Insira o valor da posição inicial P0: "));
const v = parseFloat(prompt("Insira a velocidade V: "));
const a = parseFloat(prompt("Insira aceleração A: "));
const t = parseInt(prompt("Insira o tempo decorrido T: "));

const pf = movimentoUniVariado(p0, v, a, t);
console.log("A posição final do móvel é: " + pf.toFixed(2) + " metros");

function movimentoUniVariado(p0, v, a, t) {
    return p0 + v * t + (a * Math.pow(t, 2)) / 2;
} 
