// EXERCÍCIO DE INTERPRETAÇÃO/
//1. valor = 10
// valor = 0 + 1 = 1 [1]
// valor = 1 + 2 = 3 [2]
//valor = 3 + 3 = 6 [3]
// valor = 6 +4 = 10 [4]
// termina i=5


//2. 
//a. o que é impresso no console?
// 19,21,23,25,27,30
//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

/* for(let i=0; i < lista.length; i++){
   const valor = lista[i]
        console.log(valor)
    }
 */


//3. 
/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
// 0 < 4 
  let linha = "" 
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 
    1; asteriscos++){
// asteriscos inicia no 0, 
//condição: asteriscos tem uma quntidade menor que quatidadeAtual+1
//ex. se a quantidadeAtual = 0+1, asterisco = 
//ex. se a quantidadeAtual = 1+1, asterisco = *
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}  */
// 
//linha = linha + * 
// [0] = 0 
// [1] = 1
// [2] = 2
// [3] = 3 
// termina quantidadeAtual < quantidadeTotal = 4 

// EXERCÍCIO DE ESCRITA DE CÓDIGO 

/* //1. 
 const quantidadeDeBichos= Number(prompt("Quantos bichos você tem?"))

if (quantidadeDeBichos === 0 ){
    console.log ("Que pena! Você pode adotar um pet!")
}else {
    for ( let i = 0; i < quantidadeDeBichos; i++ ){
        const nomesDosBichos = prompt("Escrva o nome do bicho")
        const retornarUmaArray = nomesDosBichos.split(" ")
        console.log(retornarUmaArray)
    }
    
} 


//2. 
const arrayOriginal= [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a. // programa que imprima cada um elemento 
for(let i=0; i< arrayOriginal.length; i++){
    console.log (arrayOriginal[i])
}
// i< a quantidade de índices = 12
// [0] < 12 = imprime 80
// [1] < 12 = imprime 30
// [2] < 12 = imprime 130 
// .... [11] < 12 = imprime 55
// [12] < 12 = false, termina e para de imprimir 

//b.Escreva um programa que imprime cada um dos valores do array original divididos por 10
for(let i=0; i< arrayOriginal.length; i++){
    console.log (arrayOriginal[i]/2)
}

//c. Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima esse novo array
const arrayDeNumPar = []
 for(let i=0; i < arrayOriginal.length; i++){
    const resto = arrayOriginal[i]%2
    const numerosPares= resto === 0
   if (numerosPares){
       arrayDeNumPar.push(arrayOriginal[i])
   }
} console.log (arrayDeNumPar)

// d. Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". Depois, imprima este novo array.

for (let i=0; i< arrayOriginal.length; i++){
    const numero = arrayOriginal[i]
    const indice = i 
    console.log ("O elemento do índex ", indice, "é: ", numero)
}
 */
const arrayOriginal= [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// e.  Escreva um programa que imprima no console o maior e o menor números contidos no array original
let minimo = arrayOriginal[0] // let pq o valor irá mudar 
let maximo = arrayOriginal[0]

for (let i=0; i<arrayOriginal.length; i++){
    const valorParaTestar = arrayOriginal[i]
    if (minimo>valorParaTestar){ // aqui procura o valor menor em cada índice
    //por isso o minimo é o que inicia[0] e o valorParaTestar é o que segue a lista do array
    //em busca do menor valor, dito isso, faz sentido o valorParaTestar é menor que o minimo
        minimo=valorParaTestar // salvar o valorParaTestar em uma variável
    }
    if (maximo<valorParaTestar){
        maximo=valorParaTestar
    }
}

console.log ("O Valor mínimo é :",minimo," O valor máximo é: ",maximo) 
// o console.log tem que estar fora do "for" para executar um resultado,
// quando dentro do for ele executa todo o loop 