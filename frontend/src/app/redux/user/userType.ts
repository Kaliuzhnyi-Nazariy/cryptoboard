import mongoose from "mongoose";

export type UserState = {
  user: {
    name: string;
    email: string;
    createdAt?: string;
    tokens: token[];
    // avatar: string;
    avatar: {
      link: string;
      name: string;
    };
  };
  isLoggedIn: boolean;
  error: null | string;
  isLoading: boolean;
};

export type token = {
  _id: mongoose.Types.ObjectId | string;
  name: string;
  purchases: { price: number; amount: number }[];
};
