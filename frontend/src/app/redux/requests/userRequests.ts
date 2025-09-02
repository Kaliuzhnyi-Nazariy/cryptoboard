import { IUser, UpdUser } from "@/app/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";
import axios from "axios";

export const getMe = createAsyncThunk<
  IUser,
  void,
  { rejectValue: { message: string } }
>("/user/getme", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get<IUser>("/user/me");
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      return rejectWithValue({
        message: error.response?.data?.message || "Signup failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

export const updateUser = createAsyncThunk<
  IUser,
  UpdUser,
  { rejectValue: { message: string } }
>("/user/update", async (userData, { rejectWithValue }) => {
  try {
    const { data } = await api.put<IUser>("/user/update", userData);
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      return rejectWithValue({
        message: error.response?.data?.message || "Signup failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

export const deleteUser = createAsyncThunk<
  IUser,
  void,
  { rejectValue: { message: string } }
>("/user/delete", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.delete<IUser>("/user/delete");
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      return rejectWithValue({
        message: error.response?.data?.message || "Signup failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});
