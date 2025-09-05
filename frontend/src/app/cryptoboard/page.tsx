import React from "react";
import TrendingMarket from "./dashboard/trendingMarket/TrendingMarket";

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--black20)] text-[var(--black100)] flex items-center justify-center flex-col">
      <p>Cryptoboard</p>
      <TrendingMarket />
    </div>
  );
};

export default Page;
