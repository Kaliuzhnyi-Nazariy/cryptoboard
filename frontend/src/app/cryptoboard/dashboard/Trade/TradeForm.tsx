"use client";

import React, { useEffect } from "react";
import { Coin } from "../trendingMarket/type";
import {
  buyTransaction,
  sellTransaction,
} from "@/app/redux/requests/transactions";
import { getWallet } from "@/app/redux/requests/walletRequests";
import { getTokens } from "@/app/redux/requests/userRequests";
import { useAppDispatch } from "@/app/redux/hooks";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { transactionError } from "@/app/redux/transaction/selector";

const TradeForm = ({
  action,
  data,
  // tokenMarket,
  money,
  token,
  setToken,
  setMoney,
}: {
  action: "sell" | "buy";
  data: Coin;
  // tokenMarket: number;
  money: number | null;
  token: number | null;
  setToken: React.Dispatch<React.SetStateAction<number | null>>;
  setMoney: React.Dispatch<React.SetStateAction<number | null>>;
  // setMoneyVal
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTokenVal(Number(money));
  }, [data]);

  const setTokenVal = (moneyVal: number) => {
    setToken(moneyVal / data.current_price);
  };

  const setMoneyVal = (tokenAmount: number) => {
    setMoney(data.current_price * tokenAmount);
  };

  const error = useSelector(transactionError);

  const transactionFn = async () => {
    if (action === "buy" && money !== null) {
      const res = await dispatch(
        buyTransaction({
          moneyAmount: money,
          tokenSymbol: data.symbol,
          price: data.current_price,
          tokenAmount: token,
        })
      );

      await dispatch(getWallet());

      if (res.meta.requestStatus == "rejected") {
        toast.error(error || res.payload?.message);
      } else {
        toast.success("Token bought!");
      }
      setMoney(null);
      setToken(null);
      await dispatch(getTokens());
    } else if (action === "sell" && money !== null) {
      const res = await dispatch(
        sellTransaction({
          moneyAmount: money,
          tokenAmount: token,
          tokenSymbol: data.symbol,
          price: data.current_price,
        })
      );
      await dispatch(getWallet());
      if (res.meta.requestStatus == "rejected") {
        toast.error(error || res.payload?.message);
      } else {
        toast.success("Token sold!");
      }

      setMoney(null);
      setToken(null);
      await dispatch(getTokens());
    } else {
      return;
    }
  };

  return (
    <div className="mt-3 flex flex-col gap-3 relative">
      <form
        className="relative flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          transactionFn();
        }}
      >
        <label className="relative">
          <p className="ests absolute left-4 -top-2.5 bg-[var(--black0)] px-1 py-0.5">
            Money
          </p>
          <input
            type="number"
            pattern="/^\d+$/"
            className="w-full h-12 px-4  border border-[var(--black40)] rounded-sm mts font-semibold focus-within:outline-2 focus-within:border-transparent focus-within:outline-[var(--primary100)] text-[var(--black80)] focus-within:text-[var(--black100)] "
            placeholder="0.1824"
            value={(money && Math.abs(Number(money))) ?? ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              // console.log(e.target.value);
              setMoney(Number(e.target.value));
              setTokenVal(Number(e.target.value));
            }}
          />
        </label>
        <label className="relative">
          <p className="ests absolute left-4 -top-2.5 bg-[var(--black0)] px-1 py-0.5">
            Token
          </p>{" "}
          <input
            type="number"
            step="any"
            className="w-full h-12 px-4 border border-[var(--black40)] rounded-sm mts font-semibold
               focus-within:outline-2 focus-within:border-transparent focus-within:outline-[var(--primary100)]
               text-[var(--black80)] focus-within:text-[var(--black100)]"
            placeholder="0.1824"
            value={(token && Math.abs(Number(token))) ?? ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val = Number(e.target.value);
              setToken(val);
              setMoneyVal(val);
            }}
          />
        </label>

        <button
          className="w-full h-[58px] text-center bg-[var(--primary100)] text-[var(--black0)] lts "
          type="submit"
        >
          {action === "buy" ? "Buy" : "Sell"}{" "}
          <span className="uppercase">{data.symbol}</span>
        </button>
      </form>
    </div>
  );
};

export default TradeForm;
