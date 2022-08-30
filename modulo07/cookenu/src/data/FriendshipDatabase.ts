import { triggerAsyncId } from "async_hooks";
import { CustomError } from "../error/customError";
import { friendship } from "../model/friendship";
import { BaseDatabase } from "./BaseDatabase";
import { RecipeDatabase } from "./RecipeDatabase";

// const recipeDatabase = new RecipeDatabase()
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

  public getFriendsPost = async (id: string) => {
    try {
      const result = await FriendshipDatabase.connection
        .select([
          "Cookenu_recipe.title",
          "Cookenu_recipe.description",
          "Cookenu_users.name",
        ])
        .from("Cookenu_recipe")
        .innerJoin(
          "Cookenu_users",
          "Cookenu_users.id",
          "Cookenu_recipe.author_id"
        )
        .innerJoin(
          "Cookenu_friendship",
          "Cookenu_recipe.author_id",
          "Cookenu_friendship.id_followed_user"
        )
        .where("Cookenu_friendship.id_user_follows", id);
      console.log(result);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
// SELECT
// 	title,
//     description,
//     Cookenu_users.name as name
// FROM Cookenu_recipe
// JOIN Cookenu_users
// ON Cookenu_users.id = Cookenu_recipe.author_id
// JOIN Cookenu_friendship
// ON Cookenu_recipe.author_id = Cookenu_friendship.id_followed_user
// WHERE  Cookenu_friendship.id_user_follows = "06567cae-2ca6-4ae2-a3dd-ec191ab230aa";
