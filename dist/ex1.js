"use strict";
// Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.
function calculoMedia(nota1, nota2) {
    const mediaFinal = (nota1 + nota2) / 2;
    const resultado = mediaFinal >= 6;
    return {
        media: mediaFinal,
        aprovado: resultado,
    };
}
console.log(calculoMedia(5, 4));
