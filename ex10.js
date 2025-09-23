/*
 Autores: Glauber Almeida B. - Luis Henrique N. C. Pozenato
    Turma: 2ºA DS               Data: 10/09/2025

    Exercício 10
    - Faça uma função que receba 3 notas e retorne a média do aluno
*/

let nota1 = 5
let nota2 = 9
let nota3 = 8

function medias(n1, n2, n3){
    let media = (n1 + n2 + n3)/3
    return media
}

console.log(`A média das notas é ${medias(nota1, nota2, nota3).toFixed(2)}`)