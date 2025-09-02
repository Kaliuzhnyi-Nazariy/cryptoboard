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
  [x: string]: unknown;
}

export type UpdUser = Pick<IUser, "email" | "name" | "password">;
