// Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

// Comando para executar o exercicio: npm run ex4.

interface Produto {
    id: number,
    nome: string,
    preco: number,
    descricao?: string,
}

const listaProdutos: Produto[] = [];
let id = 1;

const cadastrar = (nome: string, preco: number, descricao?: string): void => {
    const novoProduto: Produto = {
        id: id,
        nome,
        preco,
        descricao,
    }

    id++;

    listaProdutos.push(novoProduto);
}

const listar = () => {
    console.log('Lista de Produtos:');
    listaProdutos.forEach(produto => {
        console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Descrição: ${produto.descricao ? produto.descricao : 'Sem descrição'}`);
    });
}

const excluir = (id: number) => {
    const produtoId = listaProdutos.findIndex(produto => id === produto.id);

    listaProdutos.splice(1, produtoId);
}


cadastrar('Notebook', 2000, 'Otimo');
cadastrar('Monitor', 4000,);
cadastrar('Pc Gamer', 3000,);

listar();
console.log('');
excluir(2);
listar();