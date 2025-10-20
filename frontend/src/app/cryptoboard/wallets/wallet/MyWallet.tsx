"use client";

import { useSelector } from "react-redux";
import Actions from "./Actions";
import WalletCard from "./WalletCard";
import { wallet } from "@/app/redux/wallet/selector";
import { useEffect } from "react";
import { getWallet } from "@/app/redux/requests/walletRequests";
import { useAppDispatch } from "@/app/redux/hooks";

const MyWallet = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWallet());
  }, [dispatch]);

  const walletData = useSelector(wallet);

  // console.log({ walletData });
  // console.log("is hidden: ", Boolean(walletData));
  // console.log("is hidden 2: ", Boolean(walletData) ? "flex" : "hidden");

  return (
    <div
      className={` ${
        Boolean(walletData) ? "flex" : "hidden"
      }  w-full h-full flex-col items-center bg-[var(--black0)] min-[1440px]:justify-center`}
    >
      <WalletCard balance={walletData?.balance} />
      <Actions />
    </div>
  );
};

export default MyWallet;
