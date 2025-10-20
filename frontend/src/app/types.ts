import { token } from "./redux/user/userType";

export interface SigninUser {
  email: string;
  password: string;
}

export interface SignupUser extends SigninUser {
  name: string;
  confirmPassword: string;
}

export interface IUser {
  name: string;
  email: string;
  token?: string;
  tokens: token[];
  // tokens: token[] | undefined;
  // avatar: string;
  avatar: {
    link: string;
    name: string;
  };
  createdAt?: Date | string | number;
  [x: string]: unknown;
}

// export type UpdUser = Pick<IUser, "email" | "name" | "password">;
export type UpdUser = {
  email: string;
  name: string;
  password: string;
  avatar: string | File;
};
