import { User } from "./model/types";

export const performPurchase = (
  user: User,
  value: number
): User | undefined => {
  if (user.balance >= value) {
    return {
      ...user,
      balance: user.balance - value,
    };
  }
  if (user.balance < value) {
    return undefined;
  }
};
