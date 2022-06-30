import { Request, Response } from "express";
import { connection } from "../data/connection";
import { users } from "../types";

const toUsers = (input: any): users => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    type: input.type,
  };
};
// - **Exercício 1**

//a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por **nome**. Este nome deve ser enviado por **query params**.

// export async function getAllUsers(req: Request, res: Response): Promise<void> {
//   let statusCode;
//   try {
//     let name = req.query.name;
//     const result = await connection("aula48_exercicio").where(
//       `name`,
//       `like`,
//       `%${name}%`
//     );
//     if (result.length < 1) {
//       statusCode = 404;
//       throw new Error("Nenhuma nome");
//     }

//     const users = result.map(toUsers);

//     res.status(200).send(users);
//   } catch (error: any) {
//     res.status(statusCode || 400).send(error.message);
//   }
// }
//
//
// - **Exercício 1**
// b) Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por tipo de user. O tipo de user deve ser passado por path params.

// export async function getAllUsers(req: Request, res: Response): Promise<void> {
//   let statusCode;
//   try {
//     let type = req.query.type;
//     const result = await connection("aula48_exercicio").where(
//       `type`,
//       `like`,
//       `%${type}%`
//     );
//     if (result.length < 1) {
//       statusCode = 404;
//       throw new Error("Nenhum Tipo");
//     }

//     const users = result.map(toUsers);

//     res.status(200).send(users);
//   } catch (error: any) {
//     res.status(statusCode || 400).send(error.message);
//   }
// }
// //
//
//
// - **Exercício 2**
// Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação
//que possa receber nome ou tipo de user.
// A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro,
//a ordenação deve ser por email.

// export async function getAllUsers(req: Request, res: Response): Promise<void> {
//   let statusCode;
//   try {
//     let sort = req.query.sort;
//     let order = req.query.order;

//     if (!sort) {
//       sort = "email";
//     }
//     if (order !== "ASC" && order !== "DESC") {
//       order = "ASC";
//     }
//     const result = await connection("aula48_exercicio").orderBy(sort, order);

//     if (result.length < 1) {
//       statusCode = 404;
//       throw new Error("Nenhum Tipo");
//     }

//     const users = result.map(toUsers);

//     res.status(200).send(users);
//   } catch (error: any) {
//     res.status(statusCode || 400).send(error.message);
//   }
// }

// - **Exercício 3**

//Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez,
//e permita que o usuário possa passar a página que deseja ver.
//O número da página deve ser passado por **query params**.

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  let statusCode;
  // let limit = Number(req.query.limit)
  let page = Number(req.query.page);
  let limit = 5;
  let offset = limit * (page - 1);
  try {
    const result = await connection("aula48_exercicio")
      .limit(limit)
      .offset(offset);

    if (result.length < 1) {
      statusCode = 404;
      throw new Error("Nenhum Tipo");
    }

    const users = result.map(toUsers);

    res.status(200).send(users);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
}
