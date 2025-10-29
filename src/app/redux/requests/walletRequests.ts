import { createAsyncThunk } from "@reduxjs/toolkit";
import { IWallet } from "../wallet/walletType";
import { api } from "./api";

export const createWallet = createAsyncThunk<
  IWallet,
  void,
  { rejectValue: { message: string } }
>("/wallet/create", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.post("/wallet/create", { currency: "USD" });

    return await data;
  } catch (error: any) {
    return rejectWithValue({
      message: error.message || "Unexpected error occurred",
    });
  }
});

export const getWallet = createAsyncThunk<
  IWallet,
  void,
  { rejectValue: { message: string } }
>("/wallet", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get("/wallet");
    return await data;
  } catch (error: any) {
    return rejectWithValue({
      message: error.message || "Unexpected error occurred",
    });
  }
});

// export const deposit = createAsyncThunk<
//   IWallet,
//   number,
//   { rejectValue: { message: string } }
// >("/wallet/deposit", async (deposit, { rejectWithValue }) => {
//   try {
//     const { data } = await api.put("/wallet/deposit", { deposit });
//     return await data;
//   } catch (error: any) {
//     return rejectWithValue({
//       message: error.message || "Unexpected error occurred",
//     });
//   }
// });

// export const withdraw = createAsyncThunk<
//   IWallet,
//   number,
//   { rejectValue: { message: string } }
// >("/wallet/withdraw", async (withdraw, { rejectWithValue }) => {
//   try {
//     const { data } = await api.put("/wallet/withdraw", { withdraw });
//     return await data;
//   } catch (error: any) {
//     return rejectWithValue({
//       message: error.message || "Unexpected error occurred",
//     });
//   }
// });

export const deleteWallet = createAsyncThunk<
  IWallet,
  string,
  { rejectValue: { message: string } }
>("/wallet/delete", async (walletId, { rejectWithValue }) => {
  try {
    const { data } = await api.delete(`/wallet/${walletId}`);
    return await data;
  } catch (error: any) {
    return rejectWithValue({
      message: error.message || "Unexpected error occurred",
    });
  }
});
