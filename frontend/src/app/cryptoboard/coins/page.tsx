"use client";

import { useQuery } from "@tanstack/react-query";
import { getHundredCrypto } from "../dashboard/request";
import { useState } from "react";
import CoinListItem from "../dashboard/trendingMarket/CoinListItem";
import { Coin } from "../dashboard/trendingMarket/type";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const Page = () => {
  const [page, setPage] = useState(1);

  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: ["getHundredCryptocurency", page],
    queryFn: () => getHundredCrypto(page),
    retryOnMount: false,
    retry: false,
  });

  return (
    <div className="p-6 bg-[var(--black0)] w-full ">
      <h3>Coin List</h3>
      {isPending && <p>Loading...</p>}
      {Array.isArray(data) && data.length != 0 && !isError ? (
        <ul>
          {data.map((coin: Coin) => {
            return <CoinListItem key={coin.id} coin={coin} />;
          })}
        </ul>
      ) : (
        ""
      )}
      <div className="flex gap-3 mx-auto justify-center">
        <button
          type="button"
          disabled={page == 1}
          className="disabled:opacity-50"
          onClick={() => {
            if (page == 1) {
              return;
            } else {
              setPage((page) => page - 1);
            }
          }}
        >
          <ArrowBigLeft />
        </button>
        <button
          type="button"
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          <ArrowBigRight />
        </button>
      </div>
    </div>
  );
};

export default Page;
