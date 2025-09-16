/*
 Autores: Glauber Almeida B. - Luis Henrique N. C. Pozenato
    Turma: 2ºA DS               Data: 15/09/2025

    Exercício 12
    - Crie um array de objetos representando produtos (nome, preço) e mostre o nome do produto mais caro
*/

let produtos = [
    {
        nome: "bolacha",
        preco: 3.99
    },
    {
        nome: "leite",
        preco: 6.99
    },
    {
        nome: "arroz",
        preco: 29.99
    }
]

let produtoMaisCaro = produtos[0]

for(let i = 1; i < 3; i++ ){
    if (produtos[i].preco > produtoMaisCaro.preco) {
        produtoMaisCaro = produtos[i]
    }
}
    
console.log(`O produto mais caro é ${produtoMaisCaro.nome}`)


