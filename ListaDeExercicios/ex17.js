/*17. Escreva um programa que leia um valor inteiro correspondente a uma quantidade de segundos, convertendo o valor dado
em horas corridas sabendo que 3600 segundos equivalem a 1 hora, exibindo os valores dado e convertido. Caso o
usuário forneça um valor negativo, deve ser exibida uma mensagem e a operação de conversão não deve ser efetuada.  
 */

const prompt = require('prompt-sync')({sigint: true});

let segundos = parseInt(prompt("Insira os segundos decorridos: "));

if(segundos > 0) {
    console.log("Valor inserido em segundos: " + segundos + " s");
    console.log("Valor convertido em horas: " + (segundos / 3600).toFixed(2) + " h");
} else { 
    console.log("Insira um valor positivo!");
}