"use client";

import { useQuery } from "@tanstack/react-query";
import { getPreviewCrypto, getHundredCrypto, getCrypto } from "../request";
import Image from "next/image";
import CoinListItem from "./CoinListItem";
import { Coin } from "./type";
import Link from "next/link";

const TrendingMarket = () => {
  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: ["getCryptocurency"],
    // queryFn: getCrypto,
    queryFn: getPreviewCrypto,
    retryOnMount: false,
    retry: false,
  });

  // console.log(
  //   !isPending &&
  //     Array.isArray(data) &&
  //     data.filter((coin: { id: string }) => coin.id.includes("xe"))
  // );

  return (
    <div className="p-6 bg-[var(--black0)] w-full">
      <div className="flex justify-between items-center">
        <h3 className="lts font-semibold">Trending Market</h3>
        <Link
          href={"/cryptoboard/coins"}
          className="text-[var(--primary100)] mts font-semibold"
        >
          View all
        </Link>
      </div>
      {isPending ? (
        <p>Loading...</p>
      ) : (
        <ul className="mt-6 flex flex-col gap-4">
          {Array.isArray(data) &&
            data.length != 0 &&
            data.map((coin: Coin) => {
              return <CoinListItem key={coin.id} coin={coin} />;
            })}
        </ul>
      )}
    </div>
  );
};

export default TrendingMarket;
