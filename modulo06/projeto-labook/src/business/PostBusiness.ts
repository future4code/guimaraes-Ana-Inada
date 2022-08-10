import { PostDataBase } from "../data/PostDataBase";
import { v4 as generateId } from "uuid";
import { post } from "../types/post";
const postDataBase = new PostDataBase();

export class PostBusiness {
  async create({ photo, description, type, authorId }: any): Promise<void> {
    const postId: string = generateId();
    await postDataBase.create({
      postId,
      photo,
      description,
      type,
      authorId,
    });
  }
  async findOne(id: string): Promise<post[]> {
    const result = await postDataBase.findOne(id);
    return result;
  }
}
