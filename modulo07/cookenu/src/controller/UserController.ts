import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO, UserLogin } from "../model/user";

const userBusiness = new UserBusiness();

export class UserController {
  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password,
      };

      const token = await userBusiness.createUser(input);
      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: UserLogin = {
        email,
        password,
      };
      const token = await userBusiness.login(input);
      res.status(201).send({ message: "Usuário Logado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const user = await userBusiness.getProfile(token);

      res.status(200).send(user);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
