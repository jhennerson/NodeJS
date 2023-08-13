/*27. Calcule a média de Notas de alunos. O programa deve parar de ler valores quando for fornecido um valor negativo como
nota. */

const prompt = require('prompt-sync')({sigint: true});

console.log("MÉDIA DE NOTAS");

let nota = 0;
let soma = 0;
let media = 0;
let contador = 1;

do {
  nota = parseFloat(prompt("Insira o valor da nota nº " + contador + ": "));
  if (nota > 0) {
    soma += nota;
    media = soma / contador;
  }
  contador++;
} while(nota > 0);

console.log("Média = " + media.toFixed(2));
