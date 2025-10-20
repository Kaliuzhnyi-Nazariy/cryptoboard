import { createContext } from "react";
import { Coin } from "./cryptoboard/dashboard/trendingMarket/type";

interface coinContext {
  tokens: Coin[];
  setTokens: React.Dispatch<React.SetStateAction<Coin[]>>;
}

export const tokenContext = createContext<coinContext | undefined>(undefined);
