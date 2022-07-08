import { Request, Response } from "express";
import { connection } from "../data/connection";
import { uuid } from "uuidv4";
import { products } from "../types";

export async function getProductPrice(id: string): Promise<any> {
  const [{ price }] = await connection("labecommerce_products")
    .select(`price`)
    .where(`id`, id);
  return price;
}

export async function postOrder(req: Request, res: Response): Promise<any> {
  let statusCode;
  const { user_id, product_id, quantity } = req.body;
  const id = uuid();
  console.log(req.body);
  try {
    const price = await getProductPrice(product_id);
    const totatl_price = Number(price) * Number(quantity);
    const insertOrder = await connection("labecommerce_purchases")
      .insert({
        user_id,
        product_id,
        quantity,
        id,
        totatl_price,
      })
      .into("labecommerce_purchases");
    res.status(200).send("Compra feita com sucesso");
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
  res.status(200).send();
}
