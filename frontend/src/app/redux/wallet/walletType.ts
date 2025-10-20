export interface IWallet {
  owenr: string;
  balance: number;
  currency: string;
  [x: string]: any;
}

export type WalletInitialState = {
  wallet: IWallet | null;
  loading: boolean;
  error: null | string;
};
