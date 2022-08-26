import { FriendshipDatabase } from "../data/friendshipDatabase";
import { CustomError } from "../error/customError";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const authenticator = new Authenticator();
const idGenerator = new IdGenerator();
const friendshipDatabase = new FriendshipDatabase();

export class FriendshipBusiness {
  public insertFriend = async ({
    id_followed_user,
    token,
  }: any): Promise<void> => {
    try {
      if (!id_followed_user) {
        throw new CustomError(400, "Preencha o campo");
      }

      const { id: id_user_follows } = authenticator.getTokenData(token);
      const id = idGenerator.generateID();
      const inserirFriend = {
        id,
        id_user_follows,
        id_followed_user,
      };

      await friendshipDatabase.insertFriend(inserirFriend);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
