import { v4 } from "uuid";

export class IdGenerator {
  generateID = () => {
    return v4();
  };
}
