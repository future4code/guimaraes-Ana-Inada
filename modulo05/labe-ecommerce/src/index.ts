import { app } from "./app";
import { getAllOrdersByUserId } from "./endpoints/getAllOrdersByUserId";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postOrder } from "./endpoints/postOrder";
import { postProduct } from "./endpoints/postProduct";
import { postUser } from "./endpoints/postUser";

app.get("/users", getAllUsers);
app.post("/users", postUser);
app.post("/products", postProduct);
app.get("/products", getAllProducts);
app.post("/purchases", postOrder);
app.get("/users/:user_id/purchases", getAllOrdersByUserId);
