import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  invalidAuthenticatorData,
  InvalidEmail,
  InvalidPassword,
  invalidToken,
  UserNotFound,
} from "../error/customError";
import { Profile, user, UserInputDTO, UserLogin } from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const userDatabase = new UserDatabase();
const authenticator = new Authenticator();
const hashManager = new HashManager();
const idGenerator = new IdGenerator();

export class UserBusiness {
  public createUser = async (input: UserInputDTO) => {
    try {
      const { name, email, password } = input;
      if (!name || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name", "email" e "password"'
        );
      }
      if (password.length < 6) {
        throw new InvalidPassword();
      }
      if (!email.includes("@")) {
        throw new InvalidEmail();
      }
      const id = idGenerator.generateID();

      const hashPassword = await hashManager.generateHash(password);
      const user: user = {
        id,
        name,
        email,
        password: hashPassword,
      };
      await userDatabase.insertUser(user);
      const token = authenticator.generateToken({ id, email });
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: UserLogin): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const user = await userDatabase.findUserByEmail(email);
      if (!user) {
        throw new UserNotFound();
      }

      const hashCompare = await hashManager.compareHash(
        password,
        user.password
      );
      if (!hashCompare) {
        throw new InvalidPassword();
      }

      const token = authenticator.generateToken({ id: user.id, email });
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getProfile = async (token: string): Promise<Profile> => {
    if (!token) {
      throw new invalidToken();
    }

    const authenticatorData = new Authenticator().getTokenData(token);

    if (!authenticatorData.id) {
      throw new invalidAuthenticatorData();
    }

    const user = await userDatabase.getProfile(authenticatorData.id);

    return user;
  };
}
// async findOne(id: string): Promise<post[]> {
//   const result = await postDataBase.findOne(id);
//   return result;
// }
