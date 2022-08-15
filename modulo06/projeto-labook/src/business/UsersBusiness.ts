import { v4 as generateId } from "uuid";
import { UsersDataBase } from "../data/UsersDataBase";

export class UsersBusiness {
  async create({ name, email, password }: any): Promise<void> {
    if (!name || !email || !password) {
      const message = '"name", "email" and "password" must be provided';
      throw new Error(message);
    }
    const id = generateId();

    const usersDataBase = new UsersDataBase();
    await usersDataBase.create({
      id,
      name,
      email,
      password,
    });
  }
}
