// Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.

// comando para executar o projeto: npm run ex3

interface carteira {
    saldo: number,
    transacao: string,
}

let saldoAtual: number = 0;
let tipoTransacao: boolean = false;

const entrada = (valor: number): carteira => {
    saldoAtual += valor;
    tipoTransacao = true;
    const deposito = tipoTransacao ? 'Deposito' : 'Reprovado';
    return {
        saldo: saldoAtual,
        transacao: deposito
    }
}

const saida = (valor: number) => {
    if(saldoAtual < valor) {
        return 'Saldo insuficiente!';
    };

    saldoAtual -= valor;
    tipoTransacao = false;
    const saque = tipoTransacao ? 'Deposito' : 'Saque';

    return {
        saldo: saldoAtual,
        transacao: saque
    }
}

console.log(`Saldo Atual: ${saldoAtual}`);
console.log(entrada(1000));
console.log(`Saldo Atual: ${saldoAtual}`);
console.log(saida(500));
console.log(`Saldo Atual: ${saldoAtual}`);