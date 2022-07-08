import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getAllOrdersByUserId(
  req: Request,
  res: Response
): Promise<any> {
  let statusCode;
  try {
    const { user_id } = req.params;
    const showOrder = await connection(`labecommerce_purchases`)
      .select(
        `labecommerce_products.name`,
        `labecommerce_purchases.quantity`,
        `labecommerce_products.price`,
        `labecommerce_purchases.totatl_price`
      )
      .from("labecommerce_products")
      .innerJoin(
        `labecommerce_purchases`,
        `labecommerce_products.id`,
        `=`,
        `labecommerce_purchases.product_id`
      )
      .innerJoin(
        `labecommerce_users`,
        `labecommerce_purchases.user_id`,
        `=`,
        `labecommerce_users.id`
      )
      .where(`labecommerce_purchases.user_id`, `=`, user_id);
    res.status(200).send(showOrder);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
}
