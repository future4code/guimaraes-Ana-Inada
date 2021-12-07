// Exercícios de interpretação
//1. a. o nome, índice e a array 

//2. a. somente os nomes 

//
 // EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1. a.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const arrayNomePets = pets.map ((item) => {
     return item.nome;
 } ) 
//console.log (arrayNomePets)

//b. 
const arrayCachorroSalcicha = pets.filter ((pet) => {
        return pet.raca === "Salsicha"; //CARALHO! NÃO ESQUEÇA NO PONTO VINGULA ; 
})
    console.log (arrayCachorroSalcicha)

//c. 
const arrayCachorroPoodle = pets.filter ((pet) => {
    return pet.raca === "Poodle"; //CARALHO! NÃO ESQUEÇA NO PONTO VINGULA ; 
})

const arrayNomeDoPoodle = arrayCachorroPoodle.map ((item)=> {
    return "Você ganhou um cupom de desconto de 10% para tosar o/a " + item.nome;
})
console.log (arrayNomeDoPoodle)
 
// 2. 
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//a.
const nomeDosItensDeMercado = produtos.map ((item)=>{
     return item.nome;
 })
 console.log (nomeDosItensDeMercado)

//b.Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
const novaArrayDesconto = produtos.map ((item)=>{
    const produtosNome = item.nome 
    const produtosPrecos = item.preco * 0.95
    const nomePreco ={
        produtosNome,
        produtosPrecos
    }
    return nomePreco 
})
console.log (novaArrayDesconto)

//c. 
const novaArrayBebidas = produtos.filter ((item)=>{ // se for MAP vai retornar false ou true
    const produtosDeBebida = item.categoria === "Bebidas"
    return produtosDeBebida
})
console.log (novaArrayBebidas)

//d.  Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const produtosYpe = produtos.filter((item)=>{
    const produtosComYpe = item.nome.includes("Ypê")
    return produtosComYpe
})
console.log (produtosYpe)

//e. Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
const nomeYpe = produtosYpe.map ((item)=>{
    const nomeYpe= item.nome
    const precoYpe= item.preco
    const nomePrecoYpe= {
        nomeYpe,
        precoYpe
    }
    return "Compre " + nomePrecoYpe.nomeYpe + " por " +nomePrecoYpe.precoYpe
})
console.log (nomeYpe)
