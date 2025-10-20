import mongoose from "mongoose";

export interface IWallet {
  owenr: mongoose.Types.ObjectId;
  balance: number;
  currency: string;
  [x: string]: any;
}

export type WalletInitialState = {
  wallet: IWallet | null;
  loading: boolean;
  error: null | string;
};
