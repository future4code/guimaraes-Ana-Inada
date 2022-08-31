import * as jwt from "jsonwebtoken";
import { Unauthorizded } from "../error/customError";

const expiresIn = "60min";

export type AuthenticationData = {
  id: string;
  email: string;
};
export class Authenticator {
  generateToken = ({ id, email }: AuthenticationData) => {
    const token = jwt.sign({ id, email }, process.env.JWT_KEY as string, {
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
