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
  // EXERCÍCIO 2
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

// EXERCÍCIO 3

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
}
