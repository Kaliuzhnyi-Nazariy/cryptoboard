"use client";

import React, { useState } from "react";
import Buttons from "./Buttons";
import ButtonsTabletAndPC from "./ButtonsTabletAndPC";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getCrypto } from "../request";
import TradeForm from "./TradeForm";

const Trade = () => {
  const [action, setAction] = useState<"buy" | "sell">("buy");

  const { data, isPending } = useQuery({
    queryKey: ["getCryptocurencySearch"],
    queryFn: getCrypto,
    retryOnMount: false,
    retry: true,
    gcTime: 24 * 60 * 1000,
    //TO_DO:make react context to save data tokens, for reducing rerenders
  });

  const [token, setToken] = useState<number | null>(null);

  const [money, setMoney] = useState<number | null>(null);

  const [tokenMarket, setTokenMarket] = useState(0);

  const nextToken = () => {
    if (tokenMarket == data.length) return;
    setTokenMarket((prev) => prev + 1);
  };

  const prevToken = () => {
    if (tokenMarket == 0) return;
    setTokenMarket((prev) => prev - 1);
  };

  const tokenPrice = (val: number) => {
    return val.toLocaleString("en-US", {
      maximumFractionDigits: 3,
    });
  };

  return (
    <>
      {data ? (
        <div className="bg-[var(--black0)] w-full p-6 min-[768px]:col-start-1 min-[768px]:col-end-3 min-[768px]:row-start-3 min-[1440px]:w-[387px] min-[1440px]:h-[326px] min-[1440px]:col-start-2 min-[1440px]:row-start-1 min-[1440px]:row-end-7 min-[1440px]:justify-self-center ">
          <Buttons action={action} setAction={setAction} />
          <ButtonsTabletAndPC action={action} setAction={setAction} />
          <div className="mt-1.5">
            {isPending ? (
              ""
            ) : (
              <div className="flex justify-between">
                <div className="">
                  <button
                    type="button"
                    onClick={prevToken}
                    disabled={tokenMarket == 0}
                    className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft />
                  </button>
                </div>
                <div className="">
                  {" "}
                  <h4 className="mts">{data[tokenMarket].name} Price</h4>
                  <p>${tokenPrice(data[tokenMarket].current_price)}</p>
                </div>
                <div className="">
                  <button
                    type="button"
                    onClick={nextToken}
                    disabled={tokenMarket == data.length}
                    className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
            )}
            <TradeForm
              action={action}
              money={money}
              setMoney={setMoney}
              token={token}
              setToken={setToken}
              data={data[tokenMarket]}
            />
          </div>
        </div>
      ) : (
        "No data"
      )}
    </>
  );
};

export default Trade;

{
  /* <button
  type="button"
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-[var(--black0)] rounded-full border border-[var(--black20)] text-[var(--primary100)]"
>
  <ArrowUpDown className="" />
</button> */
}
