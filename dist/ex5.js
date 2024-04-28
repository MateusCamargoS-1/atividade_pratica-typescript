"use strict";
// Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”
const listUsers = [];
const cadastrarUsuario = (nome, idade, ocupacao, salario) => {
    const novoUsuario = {
        nome,
        idade,
        ocupacao: ocupacao ? ocupacao : 'Ocupação não informada.',
        salario: salario ? `R$${salario}` : 'N/A',
    };
    listUsers.push(novoUsuario);
};
const exibirInfoUser = () => {
    listUsers.forEach(user => {
        console.log(`${user.nome}, ${user.idade} Anos, ${user.ocupacao}, Salario: ${user.salario}`);
    });
};
cadastrarUsuario('Daphne', 23, 'analista de TI', 1000);
cadastrarUsuario('Daphne', 23, 'analista de TI');
exibirInfoUser();
