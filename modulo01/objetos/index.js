// Exercício de interpretação 
// 1. a. 
// Matheus Nachtergaele,"Virginia Cavendish", canal: "Globo", horario: "14h"

//2. a. 
//  nome: "Juca",idade: 3,raca: "SRD"
// nome: "Juba",idade: 3,raca: "SRD"
// nome: "Jubo",idade: 3,raca: "SRD"
//b.
// chama as informações do objeto anterior para a nova variável. 

//3. a. 
//false
//não definido
// b. imprimir a propriedade backender do objeto pessoa, false. 
// imprimir a propriedade altura do objeto pessoa, não foi atribuído valor

//1.
//a. 
const pessoa ={
    nome: "Ana Carolina",
    apelidos:["carol", "kazu", "aninha"]
}
function imprimirNome (pessoa){
    return pessoa
}
console.log(`Oi eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]} `)


//b. 
const novoObjeto ={
    ...pessoa.nome,
    apelidos:["carolinda", "kazueira","carola"]
}
imprimirNome(novoObjeto)

//2. 
//a. 
const pessoa1 ={
    nome:"Ofélia",
    idade: "18 anos",
    profissao: "estudante"
}

const pessoa2={
    nome: "Jacinta",
    idade: "65 anos",
    profissao: "Aposentada"

}

function retornarUmaArray (pessoa1){
   const pessoa1retorna = [pessoa1.nome,
    pessoa1.nome.length(),
    pessoa1.idade, 
    pessoa1.profissao, 
    pessoa1.profissao.length()]
    return pessoa1retorna
    
}

console.log (retornarUmaArray())