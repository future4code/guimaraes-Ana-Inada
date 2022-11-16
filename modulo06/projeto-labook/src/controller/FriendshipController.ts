import { Request, Response } from "express";
import { FriendshipBusiness } from "../business/FriendshipBusiness";

export class FriendshipController {
  async createFriend(req: Request, res: Response): Promise<void> {
    try {
      const { idFriend } = req.body;
      const { idUser } = req.params;
      let message = "Sucess!";

      const friendshipBusiness = new FriendshipBusiness();
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

      const friendshipBusiness = new FriendshipBusiness();
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
