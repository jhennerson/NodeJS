/*24. Implementar três programas para exibir a tabuada de um número inteiro entre 1 e 20 dado pelo usuário.
a) Usando enquanto (while) 
b) Usando faça-enquanto (do-while) 
c) Usando para (for)
 Obs. Caso o valor dado seja inválido o programa deve apenas exibir uma mensagem de aviso. */

const prompt = require('prompt-sync')({sigint: true});

class Multiplica {
  constructor(numero, multiplicador) {
    if (numero < 1 || numero > 20) {
      throw new Error("Valor inválido, somente são aceitos valores entre 1 e 20!");
    } else {
      this.resultado = numero * multiplicador;
    }
  }

  getResultado() {
    return this.resultado;
  }
}

console.log("TABUADA DE 1 A 20");

do {
  let numero = 0;
  let i = 0;
  let resultado;

  try {
    console.log("Insira um valor de 1 a 20: ");
    numero = parseInt(prompt());

    console.log("USANDO WHILE: ");
    while(i <= 10) {
      resultado = new Multiplica(numero, i);
      console.log(numero + " * " + i + " = " + resultado.getResultado());
      i++;
    }

    i = 0;

    console.log("USANDO DO-WHILE: ");
    do {
      resultado = new Multiplica(numero, i);
      console.log(numero + " * " + i + " = " + resultado.getResultado());
      i++;
    } while(i <= 10);

    console.log("USANDO FOR: ");
    for(i = 0; i <= 10; i++) {
      resultado = new Multiplica(numero, i);
      console.log(numero + " * " + i + " = " + resultado.getResultado());
    }

  } catch(error) {
    console.log(error.message);
  }
} while(true);