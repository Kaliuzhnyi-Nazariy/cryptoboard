"use client";

import { useAppDispatch } from "@/app/redux/hooks";
import {
  deleteWallet,
  // deposit,
  // withdraw,
} from "@/app/redux/requests/walletRequests";
import { wallet, walletError } from "@/app/redux/wallet/selector";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modals/Modal";
import TopUp from "./Modals/TopUp";
import Withdraw from "./Modals/Withdraw";
import toast from "react-hot-toast";

const Actions = () => {
  const dispatch = useAppDispatch();

  const [isModalTopupOpen, setTopupModalOpen] = useState(false);
  const [isModalWithdrawOpen, setWithdrawModalOpen] = useState(false);

  const openModal = () => {
    setTopupModalOpen(true);
  };

  const closeModal = () => {
    setTopupModalOpen(false);
  };

  const openWothdrawModal = () => {
    setWithdrawModalOpen(true);
  };

  const closeWithdrawModal = () => {
    setWithdrawModalOpen(false);
  };

  // const topUp = async () => {
  //   await dispatch(transaction({ transaction: "topup", amount: 3000 }));
  //   await dispatch(getWallet());
  // };

  // const withdrawFn = async () => {
  //   await dispatch(transaction({ transaction: "withdraw", amount: 1200 }));
  //   await dispatch(getWallet());
  // };

  const walletData = useSelector(wallet);
  // console.log(walletData);

  const error = useSelector(walletError);

  const deleteWalletFn = async () => {
    const res = await dispatch(deleteWallet(walletData?._id as string));

    if (res.meta.requestStatus == "fulfilled") {
      toast.success("Wallet deleted!");
    } else {
      toast.error(error);
    }
    // console.log("wallet data after deleting: ", walletData);
  };

  //open modal and have a mockup of card form (info to nowhere) take only deposit money amount and withdraw and call functions.

  return (
    <div className="flex flex-col items-start w-full px-[10%]">
      <h3 className="mt-4">Actions: </h3>
      <ul className="flex flex-col items-start w-full">
        <li className="w-full flex items-start border-b border-b-[var(--black40)] px-3">
          <button
            type="button"
            className="w-full py-3 flex items-start h-full"
            onClick={() => openModal()}
            // onClick={() => topUp()}
          >
            Top-up
          </button>
        </li>
        <li className="w-full flex items-start border-b border-b-[var(--black40)] px-3">
          <button
            type="button"
            className="w-full py-3 flex items-start h-full"
            onClick={() => {
              openWothdrawModal();
              // withdrawFn();
            }}
          >
            Withdraw
          </button>
        </li>
        <li className="w-full flex items-start border-b border-b-[var(--black40)] px-3">
          <button
            type="button"
            className="w-full py-3 flex items-start h-full"
            onClick={() => deleteWalletFn()}
          >
            Delete
          </button>
        </li>
      </ul>
      <Modal isModalOpen={isModalTopupOpen} closeModal={closeModal}>
        <TopUp closeModal={closeModal} />
      </Modal>
      <Modal isModalOpen={isModalWithdrawOpen} closeModal={closeWithdrawModal}>
        <Withdraw closeModal={closeWithdrawModal} />
      </Modal>
    </div>
  );
};

export default Actions;
