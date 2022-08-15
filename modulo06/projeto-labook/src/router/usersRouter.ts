import express from "express";
import { UserConstroller } from "../controller/UsersControler";

export const usersRouter = express.Router();

const usersController = new UserConstroller();

usersRouter.post("/create", usersController.create);
