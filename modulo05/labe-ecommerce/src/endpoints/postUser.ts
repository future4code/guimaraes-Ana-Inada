import { Request, Response } from "express";
import { connection } from "../data/connection";
import { users } from "../types";
import { uuid } from "uuidv4";

const toUsers = (input: any): users => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    password: input.type,
  };
};
export async function postUser(req: Request, res: Response): Promise<any> {
  let statusCode;
  const { name, email, password } = req.body;
  const id = uuid();
  try {
    const insertUser = await connection("labecommerce_users")
      .insert({
        name,
        email,
        password,
        id,
      })
      .into("labecommerce_users");
    res.status(200).send("Usuário cadastrado com sucesso!");
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
}
