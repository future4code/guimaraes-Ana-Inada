import { performPurchase } from "../src";
import { User } from "../src/model/types";

// describe.skip pra pular o teste
describe("Teste", () => {
  const user: User = {
    name: "Ofélia",
    balance: 300,
  };
  test("Consigo pagar? saldo maior que o valor de compra", () => {
    const result = performPurchase(user, 200);
    expect(result).toEqual({
      name: "Ofélia",
      balance: 100,
    });
  });

  test("Consigo pagar? saldo igual o valor de compra", () => {
    const result = performPurchase(user, 300);
    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });

  test("Consigo pagar? saldo menor que o valor de compra", () => {
    const result = performPurchase(user, 500);
    expect(result).toEqual(undefined);
  });
});

//.toEqual pode ser usado com arrays e objetos
