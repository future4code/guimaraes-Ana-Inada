import { CustomError } from "../error/customError";
import { friendship } from "../model/friendship";
import { BaseDatabase } from "./BaseDatabase";

export class FriendshipDatabase extends BaseDatabase {
  private static TABLE_FRIENDSHIP = "Cookenu_friendship";
  public insertFriend = async (friendship: friendship) => {
    try {
      await FriendshipDatabase.connection
        .insert({
          id: friendship.id,
          id_user_follows: friendship.id_user_follows,
          id_followed_user: friendship.id_followed_user,
        })
        .into(FriendshipDatabase.TABLE_FRIENDSHIP);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
