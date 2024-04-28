"use strict";
// Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.
const listaProdutos = [];
let id = 1;
const cadastrar = (nome, preco, descricao) => {
    const novoProduto = {
        id: id,
        nome: nome,
        preco: preco,
        descricao: descricao,
    };
    id++;
    listaProdutos.push(novoProduto);
};
const listar = () => {
    console.log('Lista de Produtos:');
    listaProdutos.forEach(produto => {
        console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Descrição: ${produto.descricao ? produto.descricao : 'Sem descrição'}`);
    });
};
const excluir = (id) => {
    const produtoId = listaProdutos.findIndex(produto => id === produto.id);
    listaProdutos.splice(1, produtoId);
};
cadastrar('Notebook', 2000, 'Otimo');
cadastrar('Monitor', 4000);
cadastrar('Pc Gamer', 3000);
listar();
console.log('');
excluir(2);
listar();
