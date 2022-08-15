import { Request } from "express";
import { post } from "../types/post";
import { BaseDataBase } from "./BaseDataBase";
import { FriendshipDataBase } from "./FriendshipDataBase";

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

  friendshipDataBase = new FriendshipDataBase();

  async findAll(id: string): Promise<post[]> {
    const postsFriend = await PostDataBase.connection(PostDataBase.TABLE_POST)
      .select(
        "PostDataBase.TABLE_POST.photo",
        "PostDataBase.TABLE_POST.description",
        "PostDataBase.TABLE_POST.type",
        "PostDataBase.TABLE_POST.createdAt",
        "PostDataBase.TABLE_POST.authorId"
      )
      .join(
        "friendshipDataBase.TABLE_FRIENDSHIP",
        "PostDataBase.TABLE_POST.authorId",
        "=",
        "TABLE_FRIENDSHIP.idFriend"
      )
      .where({ "friendshipDataBase.TABLE_FRIENDSHIP.idUser": id });
    return postsFriend;
  }
}
