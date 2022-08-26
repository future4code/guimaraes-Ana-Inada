import app from "./app";
import { friendRouter } from "./router/friendshipRouter";
import { recipeRouter } from "./router/recipeRouter";
import { userRouter } from "./router/userRouter";

app.use("/user/", userRouter);
app.use("/recipe/", recipeRouter);
app.use("/friendship/", friendRouter);
