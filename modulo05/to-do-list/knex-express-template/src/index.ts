import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";
import { v4 as uuidv4 } from "uuid";

const postUsuario = async (
  nome: string,
  id: string,
  email: string,
  apelido: string
): Promise<any> => {
  await connection("Usuarios")
    .insert({
      nome: nome,
      id: id,
      email: email,
      apelido: apelido,
    })
    .into("name");
};

app.post("/usuario", async (req: Request, res: Response) => {
  const { nome, email, apelido } = req.body;
  const id = uuidv4();
  try {
    const usuario = await postUsuario(nome, id, email, apelido);
    console.log(usuario);
    res.send("OK");
  } catch (err) {
    console.log(err);
  }
});
// const putSalary = async (id: string, salary: number): Promise<any> => {
//   await connection("Actor")
//     .update({
//       salary: salary,
//     })
//     .where("id", id);
// };
// app.put("/actor/:id", async (req: Request, res: Response) => {
//   try {
//     await putSalary(req.params.id, req.body.salary);
//     res.send("OK");
//   } catch (err) {
//     console.log(err);
//   }
// });
