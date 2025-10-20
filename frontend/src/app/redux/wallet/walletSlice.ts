import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createWallet,
  deleteWallet,
  // deposit,
  getWallet,
  // withdraw,
} from "../requests/walletRequests";
import { IWallet, WalletInitialState } from "./walletType";
import {
  topupTransaction,
  withdrawTransaction,
} from "../requests/transactions";
import { Transaction } from "../transaction/transactionType";

const initialState: WalletInitialState = {
  wallet: null,
  loading: false,
  error: null,
};

const handlePending = (state: WalletInitialState) => {
  state.error = null;
  state.loading = true;
};

const handleReject = (
  state: WalletInitialState,
  action: PayloadAction<{ message: string } | undefined>
) => {
  console.log({ action });
  console.log(action.payload?.message);
  state.error =
    action.payload?.message || "Something went wrong with wallet operation!";
  state.loading = false;
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(createWallet.pending, handlePending)
      .addCase(
        createWallet.fulfilled,
        (state: WalletInitialState, action: PayloadAction<IWallet>) => {
          state.loading = false;
          state.wallet = action.payload;
        }
      )
      .addCase(createWallet.rejected, handleReject)
      .addCase(getWallet.pending, handlePending)
      .addCase(
        getWallet.fulfilled,
        (state: WalletInitialState, action: PayloadAction<IWallet>) => {
          state.loading = false;
          state.wallet = action.payload;
        }
      )
      .addCase(getWallet.rejected, handleReject)
      .addCase(topupTransaction.pending, handlePending)
      .addCase(
        topupTransaction.fulfilled,
        (state: WalletInitialState, action: PayloadAction<Transaction>) => {
          state.loading = false;
          console.log("action in fulfilled: ", action);
          if (state.wallet)
            state.wallet.balance += Number(action.payload.amount);
        }
      )
      .addCase(topupTransaction.rejected, handleReject)
      .addCase(withdrawTransaction.pending, handlePending)
      .addCase(
        withdrawTransaction.fulfilled,
        (state: WalletInitialState, action: PayloadAction<Transaction>) => {
          state.loading = false;
          if (state.wallet)
            state.wallet.balance -= Number(action.payload.amount);
        }
      )
      .addCase(withdrawTransaction.rejected, handleReject)

      // .addCase(deposit.pending, handlePending)
      // .addCase(
      //   deposit.fulfilled,
      //   (state: WalletInitialState, action: PayloadAction<IWallet>) => {
      //     state.loading = false;
      //     state.wallet = action.payload;
      //   }
      // )
      // .addCase(deposit.rejected, handleReject)
      // .addCase(withdraw.pending, handlePending)
      // .addCase(
      //   withdraw.fulfilled,
      //   (state: WalletInitialState, action: PayloadAction<IWallet>) => {
      //     state.loading = false;
      //     state.wallet = action.payload;
      //   }
      // )
      // .addCase(withdraw.rejected, handleReject)
      .addCase(deleteWallet.pending, handlePending)
      .addCase(deleteWallet.fulfilled, (state: WalletInitialState) => {
        state.loading = false;
        state.wallet = null;
      })
      .addCase(deleteWallet.rejected, handleReject),
});

export const walletReducer = walletSlice.reducer;
