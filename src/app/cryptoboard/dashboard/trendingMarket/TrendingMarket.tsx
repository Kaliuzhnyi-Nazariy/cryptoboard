"use client";

import Image from "next/image";
import CoinListItem from "./CoinListItem";
import { Coin } from "./type";
import Link from "next/link";
import { useContext } from "react";
import { tokenContext } from "@/app/context";

const TrendingMarket = () => {
  const tokensList = useContext(tokenContext);

  if (!tokensList) {
    throw new Error("SomeComponent must be used within MyProvider");
  }

  const { tokens } = tokensList;

  const topFour = tokens.slice(0, 4);

  const formatCompact = (num: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(num);

  return (
    <div className="p-6 bg-[var(--black0)] w-full min-[768px]:col-span-2 min-[768px]:row-start-4  min-[1440px]:col-start-1  min-[1440px]:col-end-2 min-[1440px]:w-full min-[1440px]:row-start-10 min-[1440px]:row-end-16  ">
      {/* min-[1440px]:w-[729px] */}
      <div className="flex justify-between items-center">
        <h3 className="lts font-semibold">Trending Market</h3>
        <Link
          href={"/cryptoboard/coins"}
          className="text-[var(--primary100)] mts font-semibold"
        >
          View all
        </Link>
      </div>
      <>
        <ul className="mt-6 flex flex-col gap-4 min-[768px]:hidden">
          {Array.isArray(topFour) &&
            topFour.length != 0 &&
            topFour.map((coin: Coin) => {
              return <CoinListItem key={coin.id} coin={coin} />;
            })}
        </ul>
        {/* Tablet+ size trending */}
        <table className="w-full table-fixed hidden min-[768px]:table">
          <thead className="">
            {/* <tr className="text-[var(--black60)] border-b border-b-[var(--black20)]"> */}
            <tr className="text-[var(--black60)] border-b border-b-[var(--black100)]">
              <th className="w-1/4 text-left">Token</th>
              <th className="w-1/4 text-left">Last price</th>
              <th className="w-1/4 text-left">24H Change</th>
              <th className="w-1/4 text-left">Market Cap</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {Array.isArray(topFour) &&
              topFour.map((coin: Coin) => {
                return (
                  <tr key={coin.id} className="w-full">
                    <td className="w-1/4 text-left">
                      <div className="flex gap-3 justify-self-start">
                        <div className="relative size-10 min-[768px]:size-6">
                          <Image
                            src={coin.image}
                            alt={`${coin.name} logo`}
                            fill
                            className="object-center"
                          />
                        </div>
                        <p className="mts font-semibold">{coin.name}</p>
                      </div>
                    </td>
                    <td className="ests w-1/4 text-left">
                      <p>${coin.current_price}</p>
                    </td>
                    <td className="ests w-1/4 text-left">
                      {coin.price_change_percentage_24h}
                    </td>
                    <td className="ests w-1/4 text-left">
                      {formatCompact(coin.market_cap)}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    </div>
  );
};

export default TrendingMarket;
