import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getProductById(
  req: Request,
  res: Response
): Promise<any> {
  let statusCode;
  try {
    const showProducts = await connection("labecommerce_products").select();
    res.status(200).send(showProducts);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
}
