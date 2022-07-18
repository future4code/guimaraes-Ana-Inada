console.log("Hello, world!");

//EXERCÍCIO 1
//A. Não, pq o password está privado e não foi feito um método que o deixe público
//B. Uma vez.
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }
}
const client = new User(
  "iuuiubu98gub",
  "meuemail@email.com",
  "fulana",
  "ojn9in8n9unb"
);
// console.log(client.getId(), client.getEmail(), client.getName());

// EXERCÍCIO 2
// A. Uma vez a class Customer foi chamada
// B. Duas vezes a class User foi chamada pq Customer é filha da User.
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}
const customerCred = new Customer(
  "iuuiubu98gub",
  "meuemail@email.com",
  "fulana",
  "ojn9in8n9unb",
  "jbkjblkjbljk"
);
// console.log(customerCred.getCreditCard());

// EXERCÍCIO 3
console.log(
  customerCred.getId(),
  customerCred.getName(),
  customerCred.getEmail(),
  customerCred.getCreditCard()
);
