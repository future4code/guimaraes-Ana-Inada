import { Request, Response } from "express";
import { FriendshipBusiness } from "../business/FriendshipBusiness";
import { post } from "../model/recipe";

const friendshipBusiness = new FriendshipBusiness();

export class FriendshipController {
  public insertFriend = async (req: Request, res: Response) => {
    try {
      const { id_followed_user } = req.body;
      const input = {
        id_followed_user,
        token: req.headers.authorization as string,
      };
      await friendshipBusiness.insertFriend(input);
      res.status(201).send({ message: "Usuário com um novo amigo" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getFriendsPost = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const result = await friendshipBusiness.getFriendsPost(id);

      res.status(200).send({ result });
    } catch (error: any) {
      res.statusCode = 400;
    }
  };
}
