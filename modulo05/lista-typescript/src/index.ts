// exercício 1

function recebeString (nome:string, nascimento:string){
    const data= nascimento.split("/")
    return console.log(` Olá me chamo ${nome}, nasci no dia ${data[0]}, no mês ${data[1]} e no ano de ${data[2]}`)
}
recebeString("Ana","30/11/1995")
//
// exercício 2
//
function recebeVariavel(a:any){
    return typeof a
}
console.log(recebeVariavel(77))

// exercício 3
type Filme ={
nomeFilme: string,
anoLancamento:number,
genero: GENERO,
pontuacao?: number
}
enum GENERO{
    ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
const Duna:Filme ={
    nomeFilme: "Duna",
    anoLancamento: 2021,
    genero: GENERO.ACAO,
    pontuacao: 74
}
console.log(Duna)




//
// exercício 4
//
enum SETOR{
MARKETING="marketing",
VENDAS= "vendas",
FINANCEIRO="financeiro",
}
type PessoaColaboradora ={
    nome:string;
    salário:number;
    setor:SETOR;
    presencial: boolean;
}

const funcionarios: Array<PessoaColaboradora>= [
	{ nome: "Marcos", salário: 2500, setor:SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor:SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor:SETOR.FINANCEIRO , presencial: true},
	{ nome: "João" ,salário: 2800, setor:SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor:SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor:SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor:SETOR.MARKETING, presencial: true }
] 


function retornaMarketingPresencial (funcionarios: Array<PessoaColaboradora>):Array<PessoaColaboradora> {
    
    return funcionarios.filter((funcionario)=>{
        return funcionario.setor === SETOR.MARKETING && funcionario.presencial 
    })
}
console.log(retornaMarketingPresencial(funcionarios))



//
//Exercício 5
//
//
enum ROLE{
    USER="user",
    ADMIN="admin"
}
type Pessoas ={
    name: string;
    email: string;
    role: ROLE;
}
const Usuarios:Array<Pessoas>= [
	{name: "Rogério", email: "roger@email.com", role:ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 



function retornaAdmin (Usuarios:Array<Pessoas>):Array<string>{
    return Usuarios.filter((usuario)=>{
        return usuario.role === ROLE.ADMIN
    })
    .map((item)=>{
        return item.email
    })

}
console.log (retornaAdmin(Usuarios))


//
// Exercício 6 
//
//
type Dados={
    cliente: string;
    saldoTotal: number;
    debitos: number[];
}
const clientes: Array<Dados>=[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
function retornaClienetesNegativados(clientes:Array<Dados>){
    
    const saldos= clientes.map((cliente)=>{
        const somaDebitos = cliente.debitos.reduce((anteior,corrente)=>{
            return anteior+corrente
        },0)
        const saldoCliente= cliente.saldoTotal
        cliente.saldoTotal = saldoCliente - somaDebitos
        cliente.debitos= []
        return cliente 
    }).filter((item)=>{
        return item.saldoTotal < 0 
    })
    return saldos
}
console.log(retornaClienetesNegativados(clientes))
