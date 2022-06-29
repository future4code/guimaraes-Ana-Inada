import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

// Esse arquivo seria o index.ts

// const getActorById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `);

//   return result[0][0];
// };

// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001"));
// })();

// // Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id;

//     console.log(await getActorById(id));

//     res.end();
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("Unexpected error");
//   }
// }); // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

/* EXERCÍCIO 1 

A. Explique como é a resposta que temos quando usamos o raw.

O row devolve pra gente o resultado da query e outras informações do MySql, por tanto é necessário pegar a informação da primeiro posição do array 

*/

// B.Faça uma função que busque um ator pelo nome;
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `);
  return result[0];
};

// searchActor(name)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.get("/actor/name", async (req, res) => {
  const { name } = req.body;
  try {
    console.log(await searchActor(name));

    res.end();
  } catch (e) {
    console.error({ e });
    return res.send("Algo deu errado.");
  }
});

// C.  Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
  const count = result[0][0].count;
  console.log(count);
  return count;
};

app.get("/actor/gender", async (req, res) => {
  const { gender } = req.body;
  try {
    console.log(await countActors(gender));
    res.send();
  } catch (e) {
    console.error({ e });
    return res.send("Algo deu errado.");
  }
});

/*
EXERCÍCIO 2
*/

//A.Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão

app.put("/actor/salary/:id", async (req, res) => {
  const id = req.params.id;
  const { salary } = req.body;
  try {
    const upActor = await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
    console.log(upActor);
    res.send("OK");
  } catch (e) {
    console.error({ e });
    return res.send("Algo deu errado.");
  }
});

// B.Uma função que receba um id e delete um ator da tabela

app.delete("/actor/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await connection("Actor").delete().where("id", id);
    res.send("deletado");
  } catch (e) {
    console.error({ e });
    return res.send("Algo deu errado.");
  }
});

// C. Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

app.get("/actor/average-salary", async (req, res) => {
  const { gender } = req.body;
  try {
    const salaryAverage = await connection("Actor")
      .avg("salary")
      .where("gender", gender);
    console.log(res.send(salaryAverage));
  } catch (e) {
    console.error({ e });
    return res.send("Algo deu errado.");
  }
});

/*
EXERCÍCIO 3 

*/

//A. Crie um endpoint com as especificações acima
const getActorById = async (id: string): Promise<void> => {
  const actorById = await connection("Actor").select().where("id", id);
  console.log(actorById);
};

app.get("/actor/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const actor = await getActorById(id);
    res.send(actor);
  } catch (err) {
    res.send({
      message: err,
    });
  }
});

// B. Crie um endpoint agora com as seguintes especificações:

// - Deve ser um GET (`/actor`)
// - Receber o gênero como um *query param* (`/actor?gender=`)
// - Devolver a quantidade de atores/atrizes desse gênero

const getActor = async (gender: string): Promise<void> => {
  const actorGender = await connection("Actor")
    .count()
    .where({ gender: gender });
  console.log(actorGender);
};

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await getActor(req.query.gender as string);
    res.send({
      quantity: count,
    });
  } catch (err) {
    res.send({
      message: err,
    });
  }
});

/*
EXERCÍCIO 4
*/

// A.

const putSalary = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
app.put("/actor/:id", async (req: Request, res: Response) => {
  try {
    await putSalary(req.params.id, req.body.salary);
    res.send("OK");
  } catch (err) {
    console.log(err);
  }
});

// B.
const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor").delete().where("id", id);
};
app.delete("actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
    res.send("deletado com sucesso");
  } catch (err) {
    console.log(err);
  }
});
