"use strict";
// Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
const listaNotasPesos = [];
const calculoMediaNotas = (listaNotasPesos) => {
    let calculoNotas = 0;
    let qtdNotas = 0;
    listaNotasPesos.forEach(notaPeso => {
        calculoNotas += notaPeso.nota * notaPeso.peso;
        qtdNotas++;
    });
    const mediaFinal = parseFloat((calculoNotas / qtdNotas).toFixed(2));
    return mediaFinal;
};
listaNotasPesos.push({ nota: 6, peso: 2 });
listaNotasPesos.push({ nota: 7, peso: 3 });
listaNotasPesos.push({ nota: 4, peso: 1 });
console.log(calculoMediaNotas(listaNotasPesos));
