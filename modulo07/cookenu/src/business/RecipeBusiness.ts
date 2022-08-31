import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError } from "../error/customError";
import { recipe, recipeInput } from "../model/recipe";
import { IdGenerator } from "../services/IdGenerator";

const recipeDatabase = new RecipeDatabase();

export class RecipeBusiness {
  public postRecipe = async (input: recipeInput) => {
    try {
      const { title, description, deadline, author_id } = input;
      if (!title || !description || !deadline || !author_id) {
        throw new CustomError(400, "Preencha todos os campos");
      }
      const id: string = Date.now().toString();
      //   const generateID = new IdGenerator();
      const recipe: recipe = {
        id,
        title,
        description,
        deadline,
        author_id,
      };
      await recipeDatabase.postRecipe(recipe);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
