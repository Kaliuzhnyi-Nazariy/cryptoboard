"use client";

import React, { useState } from "react";
import { tokenContext } from "../context";
import { Coin } from "../cryptoboard/dashboard/trendingMarket/type";

const ContextLayout = ({ children }: { children: React.ReactNode }) => {
  const [tokens, setTokens] = useState<Coin[]>([] as Coin[]);
  return (
    <tokenContext.Provider value={{ tokens, setTokens }}>
      {children}
    </tokenContext.Provider>
  );
};

export default ContextLayout;
