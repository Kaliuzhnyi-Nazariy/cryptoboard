import { IUser, UpdUser } from "@/app/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";
import axios from "axios";
import { token } from "../user/userType";

axios.defaults.baseURL = "http://localhost:3001/api";

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
      localStorage.removeItem("page");
      return rejectWithValue({
        message: error.response?.data?.message || "Signup failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

export const updateUser = createAsyncThunk<
  IUser,
  UpdUser | FormData,
  { rejectValue: { message: string } }
>("/user/update", async (userData, { rejectWithValue }) => {
  try {
    // console.log({ userData });
    // console.log(userData?.avatar);
    const { data } = await axios.put<IUser>("/user/update", userData, {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });
    // console.log(data);
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
      return rejectWithValue({
        message: error.response?.data?.message || "Signup failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

export const getTokens = createAsyncThunk<
  { tokens: token[] },
  void,
  { rejectValue: { message: string } }
>("/user/tokens", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get("/user/tokens");
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({
        message: error.response?.data?.message || "Signup failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});
