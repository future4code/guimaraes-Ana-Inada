import { Request, Response } from "express";
import { UsersBusiness } from "../business/UsersBusiness";

export class UserConstroller {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      let message = "Success!";

      const usersBusiness = new UsersBusiness();
      await usersBusiness.create({
        name,
        email,
        password,
      });

      res.status(201).send({ message });
    } catch (error: any) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;
      res.send({ message });
    }
  }

  async createFriend(req: Request, res: Response): Promise<void> {
    try {
      const { idFriend } = req.body;
      const { idUser } = req.params;
      let message = "Sucess!";

      const friendshipBusiness = new UsersBusiness();
      await friendshipBusiness.createFriend({
        idUser,
        idFriend,
      });
      res.status(201).send({ message });
    } catch (error: any) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;
      res.send({ message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      let message = "Sucess!";

      const friendshipBusiness = new UsersBusiness();
      await friendshipBusiness.delete({
        id,
      });
      res.status(201).send({ message });
    } catch (error: any) {
      res.statusCode = 400;
      let message = error.sqlMessage || error.message;
      res.send({ message });
    }
  }
}
