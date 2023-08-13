/*28. Faça um programa que exiba a tabela verdade da operação E-Lógico para todas as combinações de três variáveis lógicas
A, B e C. Os resultados da tabela devem ser exibidos como F ou V.*/

console.log("TABELA DA VERDADE AND");

imprimeTabelaAnd(true, true, true);
imprimeTabelaAnd(true, true, false);
imprimeTabelaAnd(true, false, true);
imprimeTabelaAnd(true, false, false);
imprimeTabelaAnd(false, true, true);
imprimeTabelaAnd(false, true, false);
imprimeTabelaAnd(false, false, true);
imprimeTabelaAnd(false, false, false);

function imprimeTabelaAnd(a, b, c) {
    const varA = a ? "V" : "F";
    const varB = b ? "V" : "F";
    const varC = c ? "V" : "F";
    console.log("-----------------");
    console.log("| " + varA + " | " + varB + " | " + varC + " = " + ((a && b && c) ? "V |" : "F |"));
}