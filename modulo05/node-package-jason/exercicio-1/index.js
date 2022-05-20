const nome= process.argv [2]
const idade= Number(process.argv [3])

// a -- 
// no packege.json passamos no objeto scripts, na variável test o node ./index.js, tudo que for
// gerado no index irá exibir quando chamado no console do index. No arquivo index, propriamente
// dito, vamos criar a variáveis que terão os parâmetros que passaraemos quando rodar o console.log
// que sempre serão string

// b -- 
console.log(`Olá ${nome}! Você tem ${idade} anos`)

//c 
console.log (`Olá ${nome}! Você tem ${idade} anos, daqui 7 anos você terá ${idade + 7}`)


