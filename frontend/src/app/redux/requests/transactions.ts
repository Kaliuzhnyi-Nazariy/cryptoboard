import { createAsyncThunk } from "@reduxjs/toolkit";
import { Transaction, TransactionReq } from "../transaction/transactionType";
import axios from "axios";
import { api } from "./api";

// export const transaction = createAsyncThunk<
//   Transaction,
//   TransactionReq,
//   { rejectValue: { message: string } }
// >("/transaction/post", async (transactionData, { rejectWithValue }) => {
// try {
//   const { data } = await api.post("/transaction", transactionData);
//   return data;
// } catch (error: any) {
//   if (axios.isAxiosError(error)) {
//     return rejectWithValue({
//       message: error.response?.data?.message || "Signup failed",
//     });
//   }
//   return rejectWithValue({ message: "Unexpected error occurred" });
// }
// });

export const buyTransaction = createAsyncThunk<
  Transaction,
  TransactionReq,
  { rejectValue: { message: string } }
>("/transaction/buy", async (transactionData, { rejectWithValue }) => {
  try {
    const { data } = await api.post("/transaction/buy", transactionData);
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

export const sellTransaction = createAsyncThunk<
  Transaction,
  TransactionReq,
  { rejectValue: { message: string } }
>("/transaction/sell", async (transactionData, { rejectWithValue }) => {
  try {
    const { data } = await api.post("/transaction/sell", transactionData);
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

export const topupTransaction = createAsyncThunk<
  Transaction,
  TransactionReq,
  { rejectValue: { message: string } }
>("/transaction/topup", async (transactionData, { rejectWithValue }) => {
  try {
    const { data } = await api.post("/transaction/topup", transactionData);
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({
        message: error.response?.data?.message || "Transaction failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

export const withdrawTransaction = createAsyncThunk<
  Transaction,
  TransactionReq,
  { rejectValue: { message: string } }
>("/transaction/withdraw", async (transactionData, { rejectWithValue }) => {
  try {
    const { data } = await api.post("/transaction/withdraw", transactionData);
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("error", { error });

      return rejectWithValue({
        message: error.response?.data?.message || "Transaction failed",
      });
    }
    return rejectWithValue({ message: "Unexpected error occurred" });
  }
});

export const getTransaction = createAsyncThunk<
  Transaction[],
  void,
  { rejectValue: { message: string } }
>("/transaction/get", async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get("/transaction");
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
