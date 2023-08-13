/*19. Escreva um programa que leia um número real entre 0.00 e 100.00 e o exiba por extenso como se fosse uma quantia em
dinheiro, por exemplo: 1.00 -> "um real", .12.73 -> "doze reais e setenta e três centavos". */

const prompt = require('prompt-sync')({sigint: true});

var numero = parseFloat(prompt("Insira um valor real entre 0.00 a 100.00: "));
var reais = numero.toFixed(2).split('.')[0];
var centavos = numero.toFixed(2).split('.')[1];


if(reais) {
    if(reais >= 0 && reais <= 10) {
        imprimeUnidades(reais);    
    } else if(reais > 10 && reais <= 19) {
        imprimeDezenasPreVigesimos(reais);
    } else if(reais > 19 && reais <= 100) {
        imprimeDezenasPosVigesimos(reais);
        if(reais % 10 > 0) {
            process.stdout.write(" e ");
            imprimeUnidades(reais);
        }
    } else {
        console.log("valor inválido!");
    }

    process.stdout.write((reais > 1) ? " reais" : " real");
}

if(centavos) {
    process.stdout.write( " e ");

    if(centavos >= 0 && centavos <= 10) {
        imprimeUnidades(centavos);
    } else if(centavos > 10 && centavos <= 19) {
        imprimeDezenasPreVigesimos(centavos);
    } else if(centavos > 19 && centavos <= 100) {
        imprimeDezenasPosVigesimos(centavos);
        if(centavos % 10 > 0) {
            process.stdout.write(" e ");
            imprimeUnidades(centavos);
        }
    } else {
        console.log("valor inválido!");
    }

    process.stdout.write((centavos > 1) ? " centavos" : " centavo");
}

function imprimeUnidades(valor) {
    const unidade = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
    if(valor == 0) process.stdout.write(unidade[0]);
    if(valor % 10 == 1) process.stdout.write(unidade[1]);
    if(valor % 10 == 2) process.stdout.write(unidade[2]);
    if(valor % 10 == 3) process.stdout.write(unidade[3]);
    if(valor % 10 == 4) process.stdout.write(unidade[4]);
    if(valor % 10 == 5) process.stdout.write(unidade[5]);
    if(valor % 10 == 6) process.stdout.write(unidade[6]);
    if(valor % 10 == 7) process.stdout.write(unidade[7]);
    if(valor % 10 == 8) process.stdout.write(unidade[8]);
    if(valor % 10 == 9) process.stdout.write(unidade[9]);
    if(valor == 10) process.stdout.write(unidade[10]);
}

function imprimeDezenasPreVigesimos(valor) {
    const dezenasPreVigesimos = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezesete", "dezoito", "dezenove"];   
    if(valor % 10 == 1) process.stdout.write(dezenasPreVigesimos[0]);
    if(valor % 10 == 2) process.stdout.write(dezenasPreVigesimos[1]);
    if(valor % 10 == 3) process.stdout.write(dezenasPreVigesimos[2]);
    if(valor % 10 == 4) process.stdout.write(dezenasPreVigesimos[3]);
    if(valor % 10 == 5) process.stdout.write(dezenasPreVigesimos[4]);
    if(valor % 10 == 6) process.stdout.write(dezenasPreVigesimos[5]);
    if(valor % 10 == 7) process.stdout.write(dezenasPreVigesimos[6]);
    if(valor % 10 == 8) process.stdout.write(dezenasPreVigesimos[7]);
    if(valor % 10 == 9) process.stdout.write(dezenasPreVigesimos[8]);
}

function imprimeDezenasPosVigesimos(valor) {
    const dezenaPosVigesimos = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa", "cem"];
    if(valor == 100) process.stdout.write(dezenaPosVigesimos[8]);
    if(Math.floor(valor / 10) == 2) process.stdout.write(dezenaPosVigesimos[0]);
    if(Math.floor(valor / 10) == 3) process.stdout.write(dezenaPosVigesimos[1]);
    if(Math.floor(valor / 10) == 4) process.stdout.write(dezenaPosVigesimos[2]);
    if(Math.floor(valor / 10) == 5) process.stdout.write(dezenaPosVigesimos[3]);
    if(Math.floor(valor / 10) == 6) process.stdout.write(dezenaPosVigesimos[4]);
    if(Math.floor(valor / 10) == 7) process.stdout.write(dezenaPosVigesimos[5]);
    if(Math.floor(valor / 10) == 8) process.stdout.write(dezenaPosVigesimos[6]);
    if(Math.floor(valor / 10) == 9) process.stdout.write(dezenaPosVigesimos[7]);
}
