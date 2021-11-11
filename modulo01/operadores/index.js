// interpretação 
//1. 
const bool1 = true
const bool2 = false
const bool3 = !bool2 
let resultado = bool1 && bool2 
console.log("a. ", resultado)
// a. é false, irá retornar false porque && retorna se todos os booleanos forem verdadeiros

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
// b. é false porque todos os booleanos não são true
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// bool1 || bool2 = false
// Não entendi, !resultado ele é referente ao qual resultado?
console.log("d. ", typeof resultado)
// d. booleanos

// 2. 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
// Será impresso os dois números um do lado do outro, não a soma deles. 

//3. 
// O colega deveria declara que os dois prompt só podem receber números
// let primeiroNumero = Nuber(prompt("Digite um número"))

// Exercídios de escrita de código
//1.
let idade = Number (prompt("Qual a sua idade?"))
let IdadeDoAmigo = Number (prompt("Qual a idade do seu melhor amigue?"))
console.log ("Sua idade é maior do que seu amigue?", idade > IdadeDoAmigo)
//2.
//a.
let numeroPar = Number (prompt("Insira um número par"))
//b.
restodoNumeroPar = numeroPar % 2 
console.log (restodoNumeroPar)
//c. o resto do número par sempre vai ser 0 
//d. Sempre irá imprimir no console o 1 

//3 
let idadeEmAnos = Number (prompt("Qual a sua idade em anos?"))
idadeEmMeses = idadeEmAnos * 12
console.log ("sua idade em meses é", idadeEmMeses)
idadeEmDias = idadeEmMeses * 365
console.log ("sua idade em dias é", idadeEmDias)
idadeEmHoras = idadeEmDias * 24
console.log ("sua idade em horas é", idadeEmHoras)

//4
let numero1 = Number (prompt("Digite um número"))
let numero2 = Number (prompt("Digite mais um número"))
resultado1 = numero1 > numero2
resultado2 = numero1 === numero2
resultado3 = numero1 % numero2
resultado31 = resultado3 === 0 
resultado4 = numero2 % numero1 
resultado41 = resultado4 === 0 
console.log ("O primeiro numero é maior que segundo?", resultado1)
console.log ("O primeiro numero é igual ao segundo?", resultado2)
console.log ("O primeiro numero é divisível pelo segundo?", resultado31)
console.log ("O segundo numero é divisível pelo primeiro?", resultado41)
