import { BaseDataBase } from "./BaseDataBase";

export class FriendshipDataBase extends BaseDataBase {
  private static TABLE_FRIENDSHIP = "labook_friendship";

  async createFriend({ id, idUser, idFriend }: any): Promise<void> {
    await FriendshipDataBase.connection
      .insert({
        id,
        id_user: idUser,
        id_friend: idFriend,
      })
      .into(FriendshipDataBase.TABLE_FRIENDSHIP);
  }

  async delete({ id }: any): Promise<void> {
    const query = await FriendshipDataBase.connection
      .where({ id })
      .del()
      .from(FriendshipDataBase.TABLE_FRIENDSHIP);
    console.log(query);
  }
}
