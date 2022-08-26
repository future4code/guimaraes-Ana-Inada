import { TokenExpiredError } from "jsonwebtoken";
import { userInfo } from "os";
import { CustomError } from "../error/customError";
import { Profile, user, UserLogin } from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "./BaseDatabase";

const authenticator = new Authenticator();
export class UserDatabase extends BaseDatabase {
  private static TABLE_USER = "Cookenu_users";
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into(UserDatabase.TABLE_USER);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (user: UserLogin) => {
    try {
      await UserDatabase.connection
        .insert({
          email: user.email,
          password: user.password,
        })
        .into("Cookenu_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string): Promise<user> => {
    try {
      const result = await UserDatabase.connection("Cookenu_users")
        .select()
        .where({ email });
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getProfile = async (token: string): Promise<Profile> => {
    try {
      const { id, email } = authenticator.getTokenData(token);
      return { id, email };
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  // public editUser = async (user: EditUserInput) => {
  //   try {
  //     await UserDatabase.connection
  //       .update({ name: user.name, nickname: user.nickname })
  //       .where({ id: user.id })
  //       .into("Auth_users");
  //   } catch (error: any) {
  //     throw new CustomError(400, error.message);
  //   }
  // };
}
