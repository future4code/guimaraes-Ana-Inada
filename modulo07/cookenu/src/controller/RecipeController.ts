import { Request, Response } from "express";
import { recipeInput } from "../model/recipe";
import { RecipeBusiness } from "../business/RecipeBusiness";

const recipeBusiness = new RecipeBusiness();
export class RicipeController {
  public postRecipe = async (req: Request, res: Response) => {
    try {
      const { title, description, deadline, author_id } = req.body;

      const input: recipeInput = {
        title,
        description,
        deadline,
        author_id,
      };
      await recipeBusiness.postRecipe(input);
      res.status(201).send({ message: "Receita criada!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
