"use client";
import { useAppDispatch } from "@/app/redux/hooks";
import { createWallet } from "@/app/redux/requests/walletRequests";
import {
  wallet,
  walletError,
  walletLoading,
} from "@/app/redux/wallet/selector";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const CreateWalletButton = () => {
  const dispatch = useAppDispatch();

  const error = useSelector(walletError);

  const createWalletFn = async () => {
    const res = await dispatch(createWallet());
    if (res.meta.requestStatus == "fulfilled") {
      toast.success("Wallet created!");
    } else {
      toast.error(error);
    }
  };

  const walletData = useSelector(wallet);
  const isWalletLoading = useSelector(walletLoading);

  return (
    <>
      {Boolean(walletData) ? (
        <></>
      ) : (
        <>
          {isWalletLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <div className="loading-spinner loading-xl loading text-[var(--primary100)] "></div>
            </div>
          ) : (
            <button
              type="button"
              className={`px-5 py-2 bg-[var(--primary100)] text-[var(--black0)] rounded-md ${
                Boolean(walletData) ? "hidden" : "block"
              }`}
              onClick={() => {
                createWalletFn();
                // setCreated(true);
              }}
            >
              Create wallet
            </button>
          )}
        </>
      )}
    </>
  );
};

export default CreateWalletButton;
