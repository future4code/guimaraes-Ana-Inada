import { BaseDataBase } from "./BaseDataBase";

export class UsersDataBase extends BaseDataBase {
  private static TABLE_USER = "labook_users";

  async create({ id, name, email, password }: any): Promise<void> {
    await UsersDataBase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UsersDataBase.TABLE_USER);
  }
}
