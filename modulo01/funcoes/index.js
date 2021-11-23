// EXERCÍCIO DE INTERPRETAÇÃO 
// 1. a. 
// 10 
// 50 
// b. 
// não apareceria nada 
// 2. a. o texto que o usuário coloca no prompt retornaria em caixa alta e se existe a palavra cenoura no texto.
// b. i. NÃO ENTENDI MUITO BEM

// EXERCÍCIO DE ESCRITA DE CÓDIGO

//a. 
function informacoesPessoais () {
    console.log ("Eu sou Ana, tenho 25 anos, moro em Campinas e sou estudante.")
}

//b.
function informacoesDeOutros (nome,idade,cidade,profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
    
}
// 2. a. 
function somaNumeros (n1,n2){
    const soma = n1 + n2
    return soma 
}
const resultado = somaNumeros (2,4)
console.log (resultado)


//b. 
function maiorOuIgualNumeres (n1,n2){
    return n1 >= n2
}


// c. 
function parOuImpar (n1) {
    return n1%2 === 0 
} 


//d. 
function mensagemTamanhoUpper (mensagem){
    console.log (mensagem.length, mensagem.toUpperCase())
}


//3. 
function somadorDeNumeros(n1, n2){
    const numerosSomados = n1+n2
    return numerosSomados
}
function subtracao(n1,n2){
    const numerosSubtraidos = n1 - n2 
    return numerosSubtraidos
}
function multiplicacao(n1,n2){
    const multiplicadorDeNumeros = n1*n2
    return multiplicadorDeNumeros
}
function divisao(n1,n2){
    const divisorDeNumeros = n1/n2
    return divisorDeNumeros
}
const usuario = Number(prompt("Digite um número"))
const usuario2 = Number(prompt("Digite outro número"))
const resultadoSoma = somadorDeNumeros (usuario,usuario2)
const resultadoSubtracao = subtracao (usuario,usuario2)
const resultadoMultiplicacao = multiplicacao (usuario,usuario2)
const resultadodivisao = divisao (usuario, usuario2)
console.log (resultadoSoma,resultadoSubtracao,resultadoMultiplicacao,resultadodivisao)

// desafio
//1. a) 
const imprimirNome = nome =>{
    console.log (nome)
}


//b. 
const imprimirValor = (v1,v2) =>{
    const soma = v1+v2 
    imprimirNome(soma)

}

//2. 
function teoremaDePitagoras (c1,c2){
    const hipotenusa = (c1*c1) + (c2*c2)
    const resultadoTriangulo = Math.sqrt(hipotenusa)
    return resultadoTriangulo
}
console.log (teoremaDePitagoras(3,4))
