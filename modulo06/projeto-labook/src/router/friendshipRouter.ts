import express from "express";
import { FriendshipController } from "../controller/FriendshipController";

export const friendShipRouter = express.Router();

const friendshipController = new FriendshipController();

friendShipRouter.post("/:idUser", friendshipController.createFriend);
friendShipRouter.delete("/:id", friendshipController.delete);
