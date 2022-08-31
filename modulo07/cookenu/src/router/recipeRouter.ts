import express from "express";
import { RicipeController } from "../controller/RecipeController";

export const recipeRouter = express.Router();

const recipeController = new RicipeController();

recipeRouter.post("/create", recipeController.postRecipe);
