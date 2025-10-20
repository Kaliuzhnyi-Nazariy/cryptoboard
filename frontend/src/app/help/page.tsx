import React from "react";
import DashboardHelp from "./HelpData/DashboardHelp";
import AnalyticsHelp from "./HelpData/AnalyticsHelp";
import PortfolioHelp from "./HelpData/PortfolioHelp";
import MyWalletHelp from "./HelpData/MyWalletHelp";
import TipsHelp from "./HelpData/TipsHelp";
import NeedHelp from "./HelpData/NeedHelp";

const page = () => {
  return (
    <div className="bg-[var(--black0)] p-6 w-full h-full min-[768px]:h-[81vh] min-[1440px]:h-[85vh] overflow-y-auto">
      <h1 className="delts font-bold">urCryptoboard Help Guide</h1>
      <div className="text-start mt-4 mts flex flex-col gap-4">
        <p className="">
          Welcome to urCryptoboard — a simulated cryptocurrency trading
          platform. Here you can buy and sell tokens, track your transactions,
          and analyze price changes in a safe, virtual environment.
        </p>
        <article className="bg-[var(--error20)] p-2 border border-[var(--error100)] rounded-[10px]">
          <p>⚠️ Note:</p>
          <ul className="sts">
            <li>All transactions on urCryptoboard are simulated.</li>
            <li>No real money or real trading takes place.</li>
            <li>
              Please do not enter your real credit card or banking details.
            </li>
          </ul>
        </article>
      </div>
      <div className="text-start mt-4 mts flex flex-col gap-4">
        <DashboardHelp />
        <AnalyticsHelp />
        <PortfolioHelp />
        <MyWalletHelp />
        <TipsHelp />
        <NeedHelp />
      </div>
    </div>
  );
};

export default page;
