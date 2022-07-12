class Dog {
    private nome: string
    private peso: number
    private idade: number


    constructor(nome: string, peso: number, idade: number){
        this.nome = nome, 
        this.peso = peso, 
        this.idade = idade
    }

    public latir = () :void => {
        console.log(`Au Au, meu nome é ${this.nome}, au au!`)
    }

    public pegarNome = () :string => {
        return this.nome
    }

    public pegarIdade = () :number => {
        return this.idade
    }

    public mudarNome = (novoNome:string) => {
        this.nome = novoNome
    }

    public comer = (quantidade: number) :void => {
        const novoPeso = this.peso + quantidade
        console.log(`Estou comendo, au au! E meu peso agora é ${novoPeso}`)
    }
}

const cachorroDoPh = new Dog("Cacau", 7, 8)
const cachorroDaPatricia = new Dog("Zeus", 10, 8)
cachorroDoPh.mudarNome("Vasco")



console.log(cachorroDoPh.pegarNome())




