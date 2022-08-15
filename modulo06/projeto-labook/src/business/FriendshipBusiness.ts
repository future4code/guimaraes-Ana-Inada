import { v4 as generateId } from "uuid";
import { FriendshipDataBase } from "../data/FriendshipDataBase";

export class FriendshipBusiness {
  async createFriend({ idUser, idFriend }: any): Promise<void> {
    if (!idUser || !idFriend) {
      const message = '"id", "idUser" and "idFriend" must be provided';
      throw new Error(message);
    }
    const id = generateId();

    const friendshipDataBase = new FriendshipDataBase();
    await friendshipDataBase.createFriend({
      id,
      idUser,
      idFriend,
    });
  }

  async delete({ id }: any): Promise<void> {
    if (!id) {
      const message = '"id" must be provided';
      throw new Error(message);
    }

    const friendshipDataBase = new FriendshipDataBase();
    await friendshipDataBase.delete({
      id,
    });
  }
}
