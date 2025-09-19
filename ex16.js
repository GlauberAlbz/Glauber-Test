/*
 Autores: Glauber Almeida B. - Luis Henrique N. C. Pozenato
    Turma: 2ºA DS               Data: 19/09/2025

    Exercício 16
    - (Bônus desafio ++) Verifique se uma palavra é um palíndromo (lida igual de trás para frente) (ex: “arara”, “radar”)
*/

console.clear()

let palavra = "arara"

console.log("=".repeat(50)+ "\n");

const inversa = palavra.split("").reverse().join("");

console.log(`A palavara escolhida ${palavra}, ao contrário fica ${inversa}\n`)

console.log("=" .repeat(50) + "\n");

if (palavra === inversa) {
    console.log("Sua Palavra é um palíndromo!\n")
}
else{
    console.log("Sua palavra não é um palíndromo.\n")
}

console.log("=".repeat(50)+ "\n");

console.log("Obrigado pela preferência!")