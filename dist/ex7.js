"use strict";
const listAllUsers = [];
const cadastrarUsuarios = (nome, idade, ocupacao, salario) => {
    const novoUsuario = {
        nome,
        idade,
        ocupacao: ocupacao ? ocupacao : 'Ocupação não informada.',
        salario: salario ? `R$${salario}` : 'N/A',
    };
    listAllUsers.push(novoUsuario);
};
const cadastrarUsuarioDiretors = (nome, idade, comissao, salario) => {
    const novoUsuario = {
        nome,
        idade,
        comissao,
        salario: salario ? `R$ ${salario}` : 'N/A',
    };
    listAllUsers.push(novoUsuario);
};
const exibirInfoUsers = () => {
    listAllUsers.forEach(user => {
        if ('comissao' in user) {
            console.log(`${user.nome}, ${user.idade} Anos, Comissão Nível: ${user.comissao}, Salario: ${user.salario}`);
        }
        if ('ocupacao' in user) {
            console.log(`${user.nome}, ${user.idade} Anos, ${user.ocupacao}, Salario: ${user.salario}`);
        }
    });
};
cadastrarUsuarioDiretors('Daphne', 23, 5, 1000);
cadastrarUsuarios('Daphne', 23, 'analista de TI', 1000);
exibirInfoUsers();
