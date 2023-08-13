/*14. Escreva um programa que leia 3 notas (valores reais), calculando e exibindo sua média aritmética. Imprima também
"Aprovado" se a média for maior que 7, "Reprovado" se for menor que 3 e "Exame" se estiver entre 3 e 7. . 
 */

const prompt = require('prompt-sync')({sigint: true});

var nota1, nota2, nota3, media, resultado;

console.log("MÉDIA ARITMÉTICA")

nota1 = parseFloat(prompt("Insira o valor da primeira nota: "));
nota2 = parseFloat(prompt("Insira o valor da segunda nota: "));
nota3 = parseFloat(prompt("Insira o valor da terceira nota: "));

media = (nota1 + nota2 + nota3) / 3;

if(media < 3) {
    resultado = "Reprovado";
} else if(media >= 3 && media < 7) {
    resultado = "Exame";
} else {
    resultado = "Aprovado";
}

console.log("Resultado: " + resultado);