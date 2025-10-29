import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction, transactionState } from "./transactionType";
import {
  buyTransaction,
  getTransaction,
  sellTransaction,
  // transaction,
} from "../requests/transactions";

const initialState: transactionState = {
  transactions: [],
  error: null,
  loading: false,
};

const handlePending = (state: transactionState) => {
  state.error = null;
  state.loading = true;
};

const handleReject = (
  state: transactionState,
  action: PayloadAction<{ message: string } | undefined>
) => {
  state.error = action.payload?.message || "Sth went wrong with transaction!";
  state.loading = false;
};

const TransactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getTransaction.pending, handlePending)
      .addCase(
        getTransaction.fulfilled,
        (state: transactionState, action: PayloadAction<Transaction[]>) => {
          state.loading = false;
          state.transactions = action.payload;
        }
      )
      .addCase(getTransaction.rejected, handleReject)
      // .addCase(transaction.pending, handlePending)
      // .addCase(
      //   transaction.fulfilled,
      //   (state: transactionState, action: PayloadAction<Transaction>) => {
      //     state.loading = false;
      //     state.transactions.push(action.payload);
      //   }
      // )
      // .addCase(transaction.rejected, handleReject);
      .addCase(buyTransaction.pending, handlePending)
      .addCase(
        buyTransaction.fulfilled,
        (state: transactionState, action: PayloadAction<Transaction>) => {
          state.loading = false;
          state.transactions.push(action.payload);
        }
      )
      .addCase(buyTransaction.rejected, handleReject)
      .addCase(sellTransaction.pending, handlePending)
      .addCase(
        sellTransaction.fulfilled,
        (state: transactionState, action: PayloadAction<Transaction>) => {
          state.loading = false;
          state.transactions.push(action.payload);
        }
      )
      .addCase(sellTransaction.rejected, handleReject);
  },
});

const transactionReducer = TransactionSlice.reducer;

export default transactionReducer;
