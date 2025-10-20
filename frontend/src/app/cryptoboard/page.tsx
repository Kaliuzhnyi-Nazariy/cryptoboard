import React from "react";
import TrendingMarket from "./dashboard/trendingMarket/TrendingMarket";
import WalletStat from "./wallets/WalletStat";
import Stats from "./dashboard/statistics/Stats";
import Trade from "./dashboard/Trade/Trade";
import QTransfers from "./dashboard/quickTransfers/QTransfers";
import NewTokens from "./dashboard/newTokens/newTokens";

const Page = () => {
  return (
    <div className="w-full  bg-[var(--black20)] text-[var(--black100)] flex items-center justify-center flex-col gap-2 min-[768px]:grid  min-[768px]:grid-cols-2 min-[768px]:grid-rows-auto min-[1440px]:grid-rows-[repeat(7,auto)] min-[1440px]:grid-cols-[2fr_1fr]  min-[1440px]:w-full min-[1440px]:gap-6 ">
      <WalletStat />
      <Stats />
      <TrendingMarket />
      <Trade />
      <QTransfers />
      <NewTokens />
    </div>
  );
};

export default Page;
