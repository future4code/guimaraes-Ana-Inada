import { Request, Response } from "express";
import { connection } from "../data/connection";
import { uuid } from "uuidv4";
import { products } from "../types";

export async function postProduct(req: Request, res: Response): Promise<any> {
  let statusCode;
  const { name, price, image_url } = req.body;
  const id = uuid();
  try {
    const insertProduct = await connection("labecommerce_products")
      .insert({
        name,
        price,
        image_url,
        id,
      })
      .into("labecommerce_products");
    res.status(200).send(insertProduct);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
}
