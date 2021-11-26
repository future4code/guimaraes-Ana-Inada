// exercícios de interpretação de código
//1
//a. o código testa de ele é par 
//b. se o número que o usuário quer testar dividido por dois resultar em um resto igual a 0
// serpa impresso no console a mensagem "Passou no teste"
//c. se for ímpar
//2
//a.imprimir o preço da fruta escolhida
//b. 2.25
//c. seria 5.0 
//3 a. Está criando um prompt para o usuário digitar um número. 
// b. 

// exercício de escrita de código
//1. 
const idadeDoUsuario = Number(prompt("Qual é a sua idade?"))
let idadeAptaParaDirigir = idadeDoUsuario >= 18 
//let idadeNaoAptar = idadeDoUsuario < 18

if (idadeAptaParaDirigir){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

//2. 
const matutino = "M"
const vespetino = "V"
const noturno = "N"
const periodoDeAula = prompt("Qual o período da sua aula? M,V ou N?")
if (periodoDeAula.toUpperCase() == matutino){
    console.log ("Bom dia!")
} else if (periodoDeAula.toUpperCase() == vespetino){
    console.log("Boa tarde!")
} else{
    console.log("Boa Noite!")
}


//3. 

const periodoDeAula = prompt("Qual o período da sua aula? M,V ou N?")
switch (periodoDeAula.toUpperCase()){
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa Noite")
        break
    default:
        console.log("Período inválido")
}


//4. 
const generoDoFilme= prompt ("Qual é o gênero do filme?")
const precoDoFilme = Number(prompt("Qual o preço do filme?"))
let generoFantasia = generoDoFilme.toLowerCase() === "fantasia"
let preco15Reais = precoDoFilme < 15
if (generoFantasia && preco15Reais){
    console.log ("Bom filme!")
}

if (precoDoFilme >= 15){
    console.log ("Escolha outro filme :/")
}

// Desafio
//1.
const generoDoFilme= prompt ("Qual é o gênero do filme?")
const precoDoFilme = Number(prompt("Qual o preço do filme?"))
let generoFantasia = generoDoFilme.toLowerCase() === "fantasia"
let preco15Reais = precoDoFilme < 15
const lanchinho = prompt("Qual lanchinho você irá comprar?")
if (generoFantasia && preco15Reais){
    console.log (`Bom Filme`)
    console.log (`Aproveite o seu ${lanchinho}`)
}

if (precoDoFilme >= 15){
    console.log ("Escolha outro filme :/")
}

*/




//2. 

const nomeDoUsuario = prompt("Qual o seu nome e sobrenome?")
const tipoDeJogo = prompt("Qual o tipo de jogo? Escolha -> Internacional ou Nacional?")
const etapaDoJogo = prompt("Qual a etapa do jogo? SF: -> Semi-Final, Decisão de terceiro lugar ou Final?")
const categoria = prompt ("Qual é a categoria? Escolha 1, 2, 3 ou 4")
const quantidadeDeIngresso = Number(prompt("Quantos ingressos?"))

let jogoNacional = tipoDeJogo.toUpperCase() === "NACIONAL" 
let jogoInternacional = tipoDeJogo.toUpperCase() === "INTERNACIONAL"
let etapaSemiFinal = etapaDoJogo.toLowerCase() === "semi-final"
let etapaTerceiroLugar = tipoDeJogo.toLowerCase() === "decisão de terceiro lugar"
let categoria1 = 1 
let categira2 = 2 
let 

if (jogoNacional && etapaSemiFinal && categoria1){
    console.log ("---Dados da compra----")
    console.log (`Nome do cliente: ${nomeDoUsuario}`)
    console.log (`Tipo de jogo:${tipoDeJogo} `)
    console.log (`Etapa do jogo: ${etapaDoJogo}`)
    console.log ("Categoria: ", categoria)
    console.log ("Quantidade de ingresso: ", quantidadeDeIngresso)
    let valorFinal = quantidadeDeIngresso * 1320
    console.log ("---Valores---")
    console.log (`Valor do ingresso: R$ 1320`)
    console.log (`Valor total: R$${valorFinal}`)

}

// interação com o usuário
const nomeDoUsuario = prompt("Qual o seu nome e sobrenome?")
const tipoDeJogo = prompt("Qual o tipo de jogo? Escolha -> Internacional ou Nacional?")
const etapaDoJogo = prompt("Qual a etapa do jogo? SF: -> Semi-Final, Decisão de terceiro lugar ou Final?")
const categoria = prompt ("Qual é a categoria? Escolha 1, 2, 3 ou 4")
const quantidadeDeIngresso = Number(prompt("Quantos ingressos?"))
//variáveis (nacional ou internacional)
//let jogoNacional = tipoDeJogo.toUpperCase() === "NACIONAL" 
let jogoInternacional = tipoDeJogo.toUpperCase() === "INTERNACIONAL"
//Variáveis de etapa do jogo
let etapaSemiFinal = etapaDoJogo.toLowerCase() === "semi-final"
let etapaTerceiroLugar = etapaDoJogo.toLowerCase() === "decisão de terceiro lugar"
let etapaFinal = etapaDoJogo.toLowerCase()=== "final"
// Variáveis da categoria 
const categoria1 = 1 
const categira2 = 2 
const categoria3 = 3
const categoria4 = 4 

if (tipoDeJogo.toLowerCase() == "nacional"){
    function caucularCatgoriaEtapaSF(categoria){
        const categoria1 = 1320
        const categoria2 = 880
        const categoria3 = 550
        const categoria4 = 220
    } return 


    }




/*let jogoNacional = tipoDeJogo.toUpperCase() === "NACIONAL" 
let jogoInternacional = tipoDeJogo.toUpperCase() === "INTERNACIONAL"
l

*/
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)