import { CustomError } from "../error/customError";
import { recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  private static TABLE_RECIPE = "Cookenu_recipe";
  public postRecipe = async (recipe: recipe) => {
    try {
      await RecipeDatabase.connection
        .insert({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          deadline: recipe.deadline,
          author_id: recipe.author_id,
        })
        .into(RecipeDatabase.TABLE_RECIPE);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
