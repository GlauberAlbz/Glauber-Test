/*
 Autores: Glauber Almeida B. - Luis Henrique N. C. Pozenato
    Turma: 2ºA DS               Data: 15/09/2025

    Exercício 15
    - (Bônus) Receba um número e verifique se é primo
*/

num = 10
ehPrimo = true

if (num <= 1){
    ehPrimo = false
} else {
    for (let i = 2; i < num; i++){
        if (num % i === 0 ){
            ehPrimo = false
            break
        }
    }
}

if (ehPrimo == true) {
    console.log(`O número ${num} é primo`)
} else{
    console.log(`O número ${num} não é primo`)
}