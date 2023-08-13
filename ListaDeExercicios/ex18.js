/*18. Escreva um programa que leia um número inteiro entre 0 e 100 e o exiba por extenso, por exemplos: 16 -> "dezesseis",
34 -> "trinta e quatro", etc.. */

const prompt = require('prompt-sync')({sigint: true});

var numero = parseInt(prompt("Insira um número entre 0 a 100: "));

if(numero <= 10) {
    imprimeUnidades(numero);
} else if(numero > 10 && numero < 20) {
    imprimeDezenasPreVigesimos(numero);    
} else if(numero >= 20 && numero <= 100) {
    imprimeDezenasPosVigesimos(numero);
    if(numero % 10 > 0) {
        process.stdout.write(" e ");
        imprimeUnidades(numero);
    }    
} else {
    process.stdout.write("Número inválido!");
}

function imprimeUnidades(numero) {
    const unidade = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
    if(numero == 0) process.stdout.write(unidade[0]);
    if(numero % 10 == 1) process.stdout.write(unidade[1]);
    if(numero % 10 == 2) process.stdout.write(unidade[2]);
    if(numero % 10 == 3) process.stdout.write(unidade[3]);
    if(numero % 10 == 4) process.stdout.write(unidade[4]);
    if(numero % 10 == 5) process.stdout.write(unidade[5]);
    if(numero % 10 == 6) process.stdout.write(unidade[6]);
    if(numero % 10 == 7) process.stdout.write(unidade[7]);
    if(numero % 10 == 8) process.stdout.write(unidade[8]);
    if(numero % 10 == 9) process.stdout.write(unidade[9]);
    if(numero == 10) process.stdout.write(unidade[10]);
}

function imprimeDezenasPreVigesimos(numero) {
    const dezenasPreVigesimos = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezesete", "dezoito", "dezenove"];   
    if(numero % 10 == 1) process.stdout.write(dezenasPreVigesimos[0]);
    if(numero % 10 == 2) process.stdout.write(dezenasPreVigesimos[1]);
    if(numero % 10 == 3) process.stdout.write(dezenasPreVigesimos[2]);
    if(numero % 10 == 4) process.stdout.write(dezenasPreVigesimos[3]);
    if(numero % 10 == 5) process.stdout.write(dezenasPreVigesimos[4]);
    if(numero % 10 == 6) process.stdout.write(dezenasPreVigesimos[5]);
    if(numero % 10 == 7) process.stdout.write(dezenasPreVigesimos[6]);
    if(numero % 10 == 8) process.stdout.write(dezenasPreVigesimos[7]);
    if(numero % 10 == 9) process.stdout.write(dezenasPreVigesimos[8]);
}

function imprimeDezenasPosVigesimos(numero) {
    const dezenaPosVigesimos = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa", "cem"];
    if(numero == 100) process.stdout.write(dezenaPosVigesimos[8]);
    if(Math.floor(numero / 10) == 2) process.stdout.write(dezenaPosVigesimos[0]);
    if(Math.floor(numero / 10) == 3) process.stdout.write(dezenaPosVigesimos[1]);
    if(Math.floor(numero / 10) == 4) process.stdout.write(dezenaPosVigesimos[2]);
    if(Math.floor(numero / 10) == 5) process.stdout.write(dezenaPosVigesimos[3]);
    if(Math.floor(numero / 10) == 6) process.stdout.write(dezenaPosVigesimos[4]);
    if(Math.floor(numero / 10) == 7) process.stdout.write(dezenaPosVigesimos[5]);
    if(Math.floor(numero / 10) == 8) process.stdout.write(dezenaPosVigesimos[6]);
    if(Math.floor(numero / 10) == 9) process.stdout.write(dezenaPosVigesimos[7]);
}