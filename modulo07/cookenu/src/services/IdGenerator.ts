import { v4 } from "uuid";

export class IdGenerator {
  generateID = (): string => {
    return v4();
  };
}
