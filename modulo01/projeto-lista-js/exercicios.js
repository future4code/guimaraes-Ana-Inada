// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  let altura = Number (prompt("coloque a altura do retângulo"))
  let largura = Number(prompt("coloque a largura do retângulo"))
  console.log (altura*largura) 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("digite o ano atual"))
  const anoDeNascimento = Number (prompt("digite o seu ano de nascimento"))
  console.log (anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (peso/ (altura * altura))
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt("Qual o seu nome?")
const idade = Number (prompt("Qual a sua idade?"))
const email = prompt ("Qual é o seu email?")
console.log ("Meu nome é "+ nome+ ", tenho "+ idade+ " anos, e o meu email é "+ email+".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Qual é a sua primeira cor favorita?")
const cor2 = prompt ("Qual a sua segunda cor favorita?")
const cor3 = prompt ("Qual é sua terceira cor favorita?")
console.log ([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return (custo/valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array.shift()
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiro = array.shift()
  let ultimo = array.pop()
  array.push(primeiro)
  array.unshift(ultimo)
  return array   
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const atualAno = Number(prompt("Qual o ano atual?"))
const nascimentoAno = Number(prompt("Qual o seu ano de nascimento?"))
const carteira = Number(prompt("Qual o ano que foi emetido sua carteira de identidade?"))
const idade = atualAno-nascimentoAno
const idadeRg = atualAno-carteira
let renovacao1 = idade <= 20 && idadeRg >= 5  
let renovacao2 = idade > 20 && idade <= 50 && idadeRg >=10
let renovacao3 = 50 < idade && idadeRg>= 15 
console.log (renovacao1 || renovacao2 || renovacao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui 
const multiplo1 = ano % 100
const multiplo2 = ano % 400
const resto1 = multiplo1 ==0 //f
const resto2= multiplo2 ==0 //v
const excessao = resto1 
}


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?")
  const ensinoMédio = prompt("Você tem ensino médio completo?")
  const disponibilidade = prompt("Você tem disponibilidade exclusiva durante os horários do curso?")
  let idadeUp = idade.toUpperCase()
  let ensinoUp = ensinoMédio.toUpperCase()
  let disponibilidadeUp= disponibilidade.toUpperCase()
  const sim = "SIM"
  const idadePositiva = idadeUp === sim
  const ensinoPositivo = ensinoUp === sim
  const disponibilidadePositiva = disponibilidadeUp === sim
  console.log (idadePositiva&&ensinoPositivo&&disponibilidadePositiva)
  
}