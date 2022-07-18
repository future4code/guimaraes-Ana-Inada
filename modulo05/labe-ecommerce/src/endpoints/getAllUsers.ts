import { Request, Response } from "express";
import { connection } from "../data/connection";
import { users } from "../types";

const toUsers = (input: any): users => {
  return {
    id: input.id,
    name: input.name,
    email: input.email,
    password: input.type,
  };
};
export async function getAllUsers(req: Request, res: Response): Promise<any> {
  let statusCode;
  try {
    const showUsers = await connection("labecommerce_users").select();
    res.status(200).send(showUsers);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
}
