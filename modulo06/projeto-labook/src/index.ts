import { app } from "./app";
import { postRouter } from "./router/pospRouter";
import { usersRouter } from "./router/usersRouter";
import { post } from "./types/post";

app.use("/users", usersRouter);
app.use("/posts", postRouter);
