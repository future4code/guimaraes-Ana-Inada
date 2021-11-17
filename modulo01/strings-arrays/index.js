// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
let array
console.log('a. ', array)
// lista não definida
array = null
console.log('b. ', array)
// null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// 11
let i = 0
console.log('d. ', array[i])
// 3
array[i+1] = 19
console.log('e. ', array)
// substitui o 4 por 19
const valor = array[i+6]
console.log('f. ', valor)
// 9

// 2. Leia o código abaixo com atenção 
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NO ÔNIBUS DE MIRROCOS, 26

//Exercícios de escrita de código
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
const nome = prompt ("Qual o seu nome?")
const email = prompt ("Qual o seu email?")
console.log (`O email ${email} foi cadastrado com sucesso. Seja bem-vinda(o) ${nome}`)

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

const comidasFavoritas = ["Lámen", "Batata frita", "Bolo de banana", "Karê", "Mexerica"]
//a) Imprima no console o array completo
console.log (comidasFavoritas)

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, uma embaixo da outra.
console.log (`Essas são as minhas comidas preferidas`, comidasFavoritas)

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista
const novaComida = prompt ("Me diga uma comida")
comidasFavoritas[1] = novaComida 
console.log (comidasFavoritas)

// 3. Faça um programa, seguindo os passos:
//a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
let listaDeTarefas=[]

//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const primeiraTarefa= prompt ("Qual tarefa precisa realizar?")
const segundaTarefa= prompt ("Qual a segunda tarefa?")
const terceitaTarefa= prompt ("E a terceira?")
listaDeTarefas = [primeiraTarefa, segundaTarefa, terceitaTarefa]

//c) Imprima o array no console
console.log (listaDeTarefas)

// d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
const tarefaRealizada= Number (prompt ("Digite uma tarefa que já tenha feito seguindo o índice, 0, 1 ou 3."))

//d) e) Remova da lista o item de índice que o usuário escolheu. 
listaDeTarefas.splice (tarefaRealizada, 1)

//f)Imprima o array no consoleImprima no console
console.log (listaDeTarefas)

// Desafio
//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
const frase = ("Eu amo comer, primcipalmente fritura")
let resultado = frase.split(" ")
console.log(resultado)

//2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(frutas.indexOf("Abacaxi"), "Abacaxi".length)
