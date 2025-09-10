/*
 Autores: Glauber Almeida B. - Luis Henrique N. C. Pozenato
    Turma: 2ºA DS               Data: 10/09/2025

    Exercício 08
    - Encontre o maior número dentro de um array (ex: [5,8,2,10,3] -> 10)
*/

let nums = [1,8,2,10,3]
let maior = nums[0]

for(let i = 1; i < 5; i++ ){
    if(nums[i] > maior){
        maior = nums[i]
    }
}

console.log(maior)