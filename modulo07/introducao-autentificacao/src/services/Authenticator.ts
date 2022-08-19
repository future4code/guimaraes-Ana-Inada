import * as jwt from "jsonwebtoken";
import { Unauthorizded } from "../error/customError";

const expiresIn = "1min";

export type AuthenticationData = {
  id: string;
};
export class Authenticator {
  generateToken = ({ id }: AuthenticationData) => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn,
    });
    return token;
  };

  getTokenData = (token: string): AuthenticationData => {
    try {
      const payloand = jwt.verify(
        token,
        process.env.JWT_KEY as string
      ) as AuthenticationData;
      return payloand;
    } catch (error: any) {
      console.log(error.message);
      throw new Unauthorizded();
    }
  };
}
