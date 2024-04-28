// Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

interface User {
    nome: string,
    idade: number,
    ocupacao?: string,
    salario?: number | string
}

interface Diretor {
    nome: string,
    idade: number,
    salario?: number | string
    comissao?: number,
}

type AllUser = User | Diretor;

const listAllUsers: AllUser[] = [];

const cadastrarUsuarios = (nome: string, idade: number, ocupacao?: string, salario?: number) => {
    const novoUsuario: User = {
        nome,
        idade,
        ocupacao: ocupacao ? ocupacao : 'Ocupação não informada.',
        salario: salario ? `R$${salario}` : 'N/A',
    }

    listAllUsers.push(novoUsuario);
}

const cadastrarUsuarioDiretors = (nome: string, idade: number, comissao: number, salario?: number) => {
    const novoUsuario: Diretor = {
        nome,
        idade,
        comissao,
        salario: salario ? `R$ ${salario}` : 'N/A',
    }

    listAllUsers.push(novoUsuario);
}

const exibirInfoUsers = () => {
    listAllUsers.forEach(user => {
        if ('comissao' in user) {
            console.log(`${user.nome}, ${user.idade} Anos, Comissão Nível: ${user.comissao}, Salario: ${user.salario}`);
        }

        if ('ocupacao' in user) {
            console.log(`${user.nome}, ${user.idade} Anos, ${user.ocupacao}, Salario: ${user.salario}`);
        }
    })
}

cadastrarUsuarioDiretors('Daphne', 23, 5, 1000);
cadastrarUsuarios('Daphne', 23, 'analista de TI', 1000);

exibirInfoUsers();
