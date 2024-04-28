// Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”


interface UserDirector {
    nome: string,
    idade: number,
    salario?: number | string
    comissao?: number,
}

const listUsersDiretor: UserDirector[] = [];

const cadastrarUsuarioDiretor = (nome: string, idade: number, comissao: number, salario?: number) => {
    const novoUsuario = {
        nome,
        idade,
        comissao,
        salario: salario ? `R$ ${salario}` : 'N/A',
    }

    listUsersDiretor.push(novoUsuario);
}

const exibirInfoUserDiretor = () => {
    listUsersDiretor.forEach(user => {
        console.log(`${user.nome}, ${user.idade} Anos, Comissão Nível: ${user.comissao}, Salario: ${user.salario}`);
    })
}

cadastrarUsuarioDiretor('Daphne', 23, 5, 1000);
cadastrarUsuarioDiretor('Daphne', 23, 5);

exibirInfoUserDiretor();
