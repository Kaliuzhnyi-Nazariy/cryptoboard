import mongoose from "mongoose";

export interface IUser {
  id: mongoose.ObjectId;
  email: string;
  name: string;
  token: string | null;
  listOfFav?: number[];
  password: string;
}

export interface SignUpUser extends IUser {
  password: string;
  confirmPassword: string;
}

export interface SignInUser {
  email: string;
  password: string;
}

export interface UserRequest extends Request {
  user: IUser | null;
}

export type UpdUser = Pick<IUser, "email" | "name" | "password">;
