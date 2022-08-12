import express from "express";
import { UserConstroller } from "../controller/UsersControler";

export const usersRouter = express.Router();

const usersController = new UserConstroller();

usersRouter.post("/create", usersController.create);
usersRouter.post("/friendship/:idUser", usersController.createFriend);
usersRouter.delete("/friendship/:id", usersController.delete);
