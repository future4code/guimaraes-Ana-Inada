const nomeProprio = prompt("Qual é o seu nome?")
let idadePedida = prompt("Qual a sua idade?")
console.log(typeof nomeProprio, idadePedida)

/* as duas variáveis são tipos de string, porque é atribuição de valor inicial. */

console.log("Olá", nomeProprio, "você tem", idadePedida, "anos")

const perguntaUm = "Você gosta de café?"
const perguntaDois = "Você usa açucar no café?"
const perguntaTrês = "Você toma café todos os dias?"
let respostaUm = prompt (perguntaUm)
let respostaDois= prompt(perguntaDois)
let respostaTrês= prompt(perguntaTrês)
console.log(perguntaUm, respostaUm)
console.log(perguntaDois, respostaDois)
console.log(perguntaTrês, respostaTrês)


let a = 10
let b = 25
let c = a+b
// Aqui faremos uma lógica para trocar os valores

c = a
a = b
b = c  

 
// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10*/

/* Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:
    
    ```
    1. O primeiro número somado ao segundo número resulta em: x.
    2. O primeiro número multiplicado pelo segundo número resulta em: y. */
    
// DESAFIO ABAIXO 

const primeiroNumero = Number (prompt ("Qual é sua idade?"))
const segundoNumero = Number (prompt ("Com quantos anos entrou pra escola?"))
const resultadoNumeros = primeiroNumero + segundoNumero
const resultadoNumeros2 = primeiroNumero * segundoNumero

console.log("O número", primeiroNumero, "somado ao", segundoNumero, "resulta em:", resultadoNumeros)
console.log("O número", primeiroNumero, "multiplicado ao", segundoNumero, "resulta em:", resultadoNumeros2)
25