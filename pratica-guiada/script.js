
//function imprimirNome(nome){
// console.log(`Olá, ${nome}`)
// } 
  
 const imprimirNome = function(nome) => {
    console.log(`Olá, ${nome}`)
}

imprimirNome("Xampson")
imprimirNome("Tirulipa")
imprimirNome("Loki")


const fazerOperacoes = (numero) => {
    const verifica = numero % 2 === 0;
    const soma = numero + 10;
    const multiplica = numero * numero;

    return `O número ${numero} é par? ${verifica}. 
    Somado com 10 o resultado é ${soma}. Multiplicado por ele mesmo, o resultado é ${multiplica}`;
}

console.log(fazerOperacoes(10))

// ...................................

function fazerOperacoes(numero) {
    const verifica = numero % 2 === 0;
    const soma = numero + 10;
    const multiplica = numero * numero;

    return `O número ${numero} é par? ${verifica}. 
    Somado com 10 o resultado é ${soma}. Multiplicado por ele mesmo, o resultado é ${multiplica}`;
}

console.log(fazerOperacoes(12))

// ..................................

const verificaDados = (login, senha) => {
    const loginArmazenado = "everton@email.com";
    const senhaArmazenada = "123456";

    return loginArmazenado === login && senhaArmazenada === senha
}

console.log(verificaDados("everton@email.com", "123456"))
