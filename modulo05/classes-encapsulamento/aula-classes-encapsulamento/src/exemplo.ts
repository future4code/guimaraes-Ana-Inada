// EXERCÍCIO 1

// A. O construtuctor permite para parâmetros a uma classe quando instanciada.

// B. Nunhuma vez foi impressa no terminal, não tem o type transsaction e não foi passado parâmetros
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
  public getNome = (): string => {
    return this.name;
  };
  public getcpf = (): string => {
    return this.cpf;
  };
  public getidade = (): number => {
    return this.age;
  };
}

// C. Criando métodos públicos
const cadastroCliente = new UserAccount("876980860", "Fulana", 45);
console.log(
  cadastroCliente.getNome(),
  cadastroCliente.getcpf(),
  cadastroCliente.getidade()
);

// EXERCÍCIO 2

type Transaction = {
  description: string;
  value: number;
  date: string;
};

// class Dog {
//     private nome: string
//     private peso: number
//     private idade: number

//     constructor(nome: string, peso: number, idade: number){
//         this.nome = nome,
//         this.peso = peso,
//         this.idade = idade
//     }

// public latir = () :void => {
//     console.log(`Au Au, meu nome é ${this.nome}, au au!`)
// }

//     public pegarNome = () :string => {
//         return this.nome
//     }

//     public pegarIdade = () :number => {
//         return this.idade
//     }

//     public mudarNome = (novoNome:string) => {
//         this.nome = novoNome
//     }

//     public comer = (quantidade: number) :void => {
//         const novoPeso = this.peso + quantidade
//         console.log(`Estou comendo, au au! E meu peso agora é ${novoPeso}`)
//     }
// }

// const cachorroDoPh = new Dog("Cacau", 7, 8)
// const cachorroDaPatricia = new Dog("Zeus", 10, 8)
// cachorroDoPh.mudarNome("Vasco")

// console.log(cachorroDoPh.pegarNome())
