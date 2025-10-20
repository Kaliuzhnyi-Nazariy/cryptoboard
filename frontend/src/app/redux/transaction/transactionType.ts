export type TransactionReq = {
  author?: string;
  transaction?: "buy" | "sell" | "topup" | "withdraw";
  moneyAmount: number;
  tokenSymbol?: string;
  price?: number;
  tokenAmount?: number | null;
};

export interface Transaction extends TransactionReq {
  id: string;
  [x: string]: any;
}

export interface transactionState {
  transactions: Transaction[];
  error: null | string;
  loading: boolean;
}
