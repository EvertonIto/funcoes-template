// Resolva o Exercício de Fixação!

// const recebaMaioridade = (nome, nascimento) => {
//     const maioridade = 2023 - nascimento >= 18
//     return `${nome} é maior de idade? ${maioridade}`
// }

// console.log(recebaMaioridade("Everton", 1994))
// console.log(recebaMaioridade("Bilu", 2009))
//.............................

function recebaMaioridade(nome, nascimento) {
    const maioridade = 2023 - nascimento >= 18
    return `${nome} é maior de idade? ${maioridade}`
}

console.log(recebaMaioridade("Everton", 1994))
console.log(recebaMaioridade("Bilu", 2009))