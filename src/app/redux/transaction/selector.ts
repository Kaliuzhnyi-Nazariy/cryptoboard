import { RootState } from "../store";

export const transactions = (state: RootState) =>
  state.transaction.transactions;
export const transactionLoading = (state: RootState) =>
  state.transaction.loading;
export const transactionError = (state: RootState) => state.transaction.error;
