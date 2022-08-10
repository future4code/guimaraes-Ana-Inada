import { Request } from "express";
import { post } from "../types/post";
import { BaseDataBase } from "./BaseDataBase";

export class PostDataBase extends BaseDataBase {
  private static TABLE_POST = "labook_posts";

  async create({
    postId,
    photo,
    description,
    type,
    authorId,
  }: any): Promise<void> {
    await PostDataBase.connection
      .insert({
        id: postId,
        photo,
        description,
        type,
        author_id: authorId,
      })
      .into(PostDataBase.TABLE_POST);
  }

  async findOne(id: string): Promise<post[]> {
    const post = await PostDataBase.connection(PostDataBase.TABLE_POST)
      .select("*")
      .where({ id });
    return post;
  }
}
