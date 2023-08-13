/*23. Escreva um programa que receba as seguintes informações: um valor real indicando capital inicial PV, um valor real que
corresponde a taxa de juros da aplicação J e um número inteiro de períodos da aplicação N. O programa deve retornar o
capital futuro FV dado pela relação abaixo:
FV = PV * ( 1 + J )N*/

const prompt = require('prompt-sync')({sigint: true});


console.log("CAPITAL FUTURO - APLICAÇÃO");

const pv = parseFloat(prompt("Insira o valor do capital inicial PV: "));
const j = parseFloat(prompt("Insira o valor da taxa de juros J: "));
const n = parseInt(prompt("Insira o período da aplicação N: "));

const fv = capitalFuturo(pv, j, n);
console.log("O capital futuro será: " + fv.toFixed(2) + " R$");

function capitalFuturo(pv, j, n) {
    return pv * Math.pow((1 + j), n);
}