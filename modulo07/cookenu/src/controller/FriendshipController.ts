import { Request, Response } from "express";
import { FriendshipBusiness } from "../business/FriendshipBusiness";

const friendshipBusiness = new FriendshipBusiness();

export class FriendshipController {
  public insertFriend = async (req: Request, res: Response) => {
    try {
      // const test = req.headers.get("authorization");
      // console.log(test)
      const input = {
        id_followed_user: req.body,
        token: req.headers.authorization as string,
      };
      await friendshipBusiness.insertFriend(input);
      res.status(201).send({ message: "Usuário com um novo amigo" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
