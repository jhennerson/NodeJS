/*20. Escreva um programa que leia um valor real correspondente a uma medida em metros, convertendo o valor dado em pés
(1 metro = 3.315 pés), exibindo os valores dado e convertido. Caso o usuário forneça um valor negativo, deve ser exibida
uma mensagem e a operação de conversão não deve ser efetuada. */

const prompt = require('prompt-sync')({sigint: true});

var metros = parseFloat(prompt("Insira um valor real em metros: "));

if(metros > 0) {
    let pes = metros * 3.315;
    console.log(metros + " metros equivalem a " + pes + " pés");
} else {
    console.log("Insira um valor positivo!");
}