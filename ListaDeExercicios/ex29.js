/*29. Faça um programa que exiba a tabela verdade da operação OU-Lógico para todas as combinações de três variáveis
lógicas A, B e C. Os resultados da tabela devem ser exibidos como F ou V.
*/

console.log("TABELA DA VERDADE OR");

imprimeTabelaOr(true, true, true);
imprimeTabelaOr(true, true, false);
imprimeTabelaOr(true, false, true);
imprimeTabelaOr(true, false, false);
imprimeTabelaOr(false, true, true);
imprimeTabelaOr(false, true, false);
imprimeTabelaOr(false, false, true);
imprimeTabelaOr(false, false, false);


function imprimeTabelaOr(a, b, c) {
    const varA = a ? "V" : "F";
    const varB = b ? "V" : "F";
    const varC = c ? "V" : "F";
    console.log("-----------------");
    console.log("| " + varA + " | " + varB + " | " + varC + " = " + ((a || b || c) ? "V |" : "F |"));
}