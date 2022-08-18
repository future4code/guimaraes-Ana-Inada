import * as jwt from "jsonwebtoken";

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
}
