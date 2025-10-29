import { RootState } from "../store";

export const wallet = (state: RootState) => state.wallet.wallet;

export const walletLoading = (state: RootState) => state.wallet.loading;

export const walletError = (state: RootState) => state.wallet.error;
