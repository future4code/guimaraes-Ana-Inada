- **Exercício 1**

Para começar, você deve criar um programa que verifique se um usuário pode fazer uma compra ou não. Ele deve receber um objeto `user` (com nome e saldo) e um valor de compra. Caso o saldo seja maior ou igual ao valor de compra você deve retornar um novo usuário (com o mesmo nome e o saldo atualizado depois da compra). Caso contrário, retorne `undefined`

```tsx
function performPurchase(user: User, value: number): User | undefined;
```

a) _Crie uma interface para representar o usuário_

       export interface User {
            name: string;
            balance: number;
        }

b) _Implemente a função_

            describe("Teste", () => {
                test("Consigo pagar?", () => {
                const result = performPurchase({ name: "Ofelia", balance: 200 }, 300);
                expect(result).toBe(undefined);
                });
            });

- **Exercício 2**

Agora vamos criar testes para essa função. Lembre-se de criar o arquivo com o padrão `<nome>.test.ts` na pasta `tests`

a) _Faça um teste com um usuário com o saldo maior do que o valor de compra_

import { performPurchase } from "../src";
import { User } from "../src/model/types";

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
    });

    //.toEqual pode ser usado com arrays e objetos

b) _Faça um teste com um usuário com o saldo igual ao valor de compra_

        test("Consigo pagar? saldo igual o valor de compra", () => {
        const result = performPurchase(user, 300);
        expect(result).toEqual({
        ...user,
        balance: 0,
        });
        });

c) _Faça um teste com um usuário com o saldo menor do que o valor de compra_

         test("Consigo pagar? saldo menor que o valor de compra", () => {
            const result = performPurchase(user, 500);
            expect(result).toEqual(undefined);
            });
