import { validateCharacter } from "../src";
import { Personagem } from "../src/model/types";

// describe.skip pra pular o teste
// exercício 1.b
describe.skip("Personagem", () => {
  test("vida, defesa e força > 0", () => {
    const input: Personagem = {
      nome: "Ofélia",
      vida: 7,
      defesa: 8,
      força: 12,
    };
    const output = validateCharacter(input);
    expect(output).toBe(true);
  });
  // exercício 2.a
  test("nome vazio", () => {
    const input: Personagem = {
      nome: "",
      vida: 7,
      defesa: 8,
      força: 12,
    };
    const output = validateCharacter(input);
    expect(output).toBe(true);
  });
  //exercício 2.b
  test("vida = 0", () => {
    const input: Personagem = {
      nome: "Ofélia",
      vida: 0,
      defesa: 8,
      força: 12,
    };
    const output = validateCharacter(input);
    expect(output).toBe(false);
  });
  // exercício 2.c
  test("força = 0", () => {
    const input: Personagem = {
      nome: "Ofélia",
      vida: 7,
      defesa: 8,
      força: 0,
    };
    const output = validateCharacter(input);
    expect(output).toBe(false);
  });
  // exercício 2.d
  test("defesa = 0", () => {
    const input: Personagem = {
      nome: "Ofélia",
      vida: 7,
      defesa: 0,
      força: 12,
    };
    const output = validateCharacter(input);
    expect(output).toBe(false);
  });
  // exercício 2.e
  test("vida ou a força ou a defesa com um valor negativo", () => {
    const input: Personagem = {
      nome: "Ofélia",
      vida: -7,
      defesa: -8,
      força: -12,
    };
    const output = validateCharacter(input);
    expect(output).toBe(false);
  });
  // exercício 2.f
  test("personagem com as informações validas", () => {
    const input: Personagem = {
      nome: "Ofélia",
      vida: 7,
      defesa: 8,
      força: 12,
    };
    const output = validateCharacter(input);
    expect(output).toBe(true);
  });
});

describe("luta", () => {
  test("ataque > defesa = perda de vida", (ataque: Personagem, defesa: Personagem) => {
    const input;
  });
});

//.toEqual pode ser usado com arrays e objetos
// test("Consigo pagar? saldo igual o valor de compra", () => {
//   const result = performPurchase(user, 300);
//   expect(result).toEqual({
//     ...user,
//     balance: 0,
//   });
// });

// test("Consigo pagar? saldo menor que o valor de compra", () => {
//   const result = performPurchase(user, 500);
//   expect(result).toEqual(undefined);
// });
