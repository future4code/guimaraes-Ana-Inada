import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllOrdersByUserId(
  req: Request,
  res: Response
): Promise<any> {
  let statusCode;
  try {
    const showProducts = await connection("labecommerce_purchases")
      .join(
        "labecommerce_products",
        "labecommerce_products.id",
        "labecommerce_products.name",
        "labecommerce_purchases.user_id"
      )
      .select("");
    res.status(200).send(showProducts);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
}
