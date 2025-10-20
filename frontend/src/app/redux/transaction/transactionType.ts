import mongoose from "mongoose";

export type TransactionReq = {
  author?: string | mongoose.Types.ObjectId;
  transaction?: "buy" | "sell" | "topup" | "withdraw";
  moneyAmount: number;
  tokenSymbol?: string;
  price?: number;
  tokenAmount?: number | null;
};

export interface Transaction extends TransactionReq {
  id: mongoose.Types.ObjectId;
  [x: string]: any;
}

export interface transactionState {
  transactions: Transaction[];
  error: null | string;
  loading: boolean;
}
