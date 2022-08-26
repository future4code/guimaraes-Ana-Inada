import express from "express";
import { FriendshipController } from "../controller/FriendshipController";

export const friendRouter = express.Router();

const friendshipController = new FriendshipController();

friendRouter.post("/:id", friendshipController.insertFriend);
