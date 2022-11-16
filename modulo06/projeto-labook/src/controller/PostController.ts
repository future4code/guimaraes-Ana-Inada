import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { post } from "../types/post";

const postBusiness = new PostBusiness();
export class PostController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      let message = "Success!";

      const { photo, description, type, authorId } = req.body;

      await postBusiness.create({ photo, description, type, authorId });
      res.status(201).send({ message });
    } catch (error: any) {
      let message = error.sqlMessage || error.message;
      res.statusCode = 400;
      res.send({ message });
    }
  }

  async findOne(req: Request, res: Response): Promise<void> {
    try {
      let message = "Success!";

      const { id } = req.params;

      const [result]: post[] = await postBusiness.findOne(id);
      res.status(200).send({ message, result });
    } catch (error: any) {
      let message = error.sqlMessage || error.message;
      res.statusCode = 400;
      res.send({ message });
    }
  }

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      let message = "Success!";

      const { id } = req.params;
      const [result]: post[] = await postBusiness.findAll(id);
      console.log(result);
      res.status(200).send({ message, result });
    } catch (error: any) {
      let message = error.sqlMessage || error.message;
      res.statusCode = 400;
      res.send({ message });
    }
  }
}
