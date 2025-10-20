import { api } from "./api";
import { IUser, SigninUser, SignupUser } from "@/app/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk<
  IUser,
  SignupUser,
  { rejectValue: { message: string } }
>("user/signup", async (userData, { rejectWithValue }) => {
  try {
    const response = await api.post<IUser>("/auth/signup", userData);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({
        message: error.response?.data?.message || "Signup failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

// export const signup = async (
//   req: Request<object, object, SignupUser>,
//   res: Response<{ result: IUser }>
// ) => {
//   const { data } = await api.post<IUser>("/auth/signup", req.body);
//   return res.status(201).json({ result: data });
// };

export const signin = createAsyncThunk<
  IUser,
  SigninUser,
  { rejectValue: { message: string } }
>("/auth/signin", async (userData, { rejectWithValue }) => {
  try {
    const { data } = await api.post<IUser>("/auth/signin", userData);
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // console.log(error);
      return rejectWithValue({
        message: error.response?.data?.message || "Signup failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

// export const signin = async (
//   req: Request<object, object, SigninUser>,
//   res: Response<{ result: IUser }>
// ) => {
// const { data } = await api.post<IUser>("/auth/signin", req.body);
// return res.status(200).json({ result: data });
// };

export const signout = createAsyncThunk<
  IUser,
  void,
  { rejectValue: { message: string } }
>("/auth/signout", async (_: void, { rejectWithValue }) => {
  try {
    const { data } = await api.post<IUser>("/auth/signout");
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // console.log(error);
      return rejectWithValue({
        message: error.response?.data?.message || "Signup failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

// export const signout = async (
//   req: Request,
//   res: Response<{ result: IUser }>
// ) => {
//   const { data } = await api.post<IUser>("/auth/signout");
//   return res.status(200).json({ result: data });
// };
