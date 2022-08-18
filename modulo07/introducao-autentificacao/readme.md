## Exercício 1

Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso.

O uso dele é simples, veja abaixo:

    ```tsx
    import { v4 } from "uuid"

    const id = v4();

    console.log("Generated Id: ", id);
    ```

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

resposta: Usar strings é mais seguro, é melhor que usar número porque cria mais variedades de id.

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.

- Dicas

b. _Na pasta: `services/`_

    import { v4 } from "uuid";

    export function generateId(): string {
    return v4();
    }
