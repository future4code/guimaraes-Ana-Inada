export type user = {
  id: string;
  email: string;
  password: string;
  name: string;
};

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Profile {
  id: string;
  email: string;
}

// export interface EditUserInputDTO {
//    name: string,
//    nickname: string,
//    id: string
// }

// export interface EditUserInput {
//    name: string,
//    nickname: string,
//    id: string
// }
