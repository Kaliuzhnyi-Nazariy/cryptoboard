import { useAppDispatch } from "@/app/redux/hooks";
import { withdrawTransaction } from "@/app/redux/requests/transactions";
import { getWallet } from "@/app/redux/requests/walletRequests";
import { transactionLoading } from "@/app/redux/transaction/selector";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Withdraw = ({ closeModal }: { closeModal: () => void }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiredDate, setExpiredDate] = useState("");
  const [cvc, setCVC] = useState("");
  const [topupAmount, setTopup] = useState("");

  const dispatch = useAppDispatch();

  const isLoading = useSelector(transactionLoading);

  return (
    <div>
      <h3>Withdraw</h3>
      <form
        onSubmit={async (e: React.FormEvent) => {
          e.preventDefault();
          const res = await dispatch(
            withdrawTransaction({
              moneyAmount: Number(topupAmount),
            })
          );
          await dispatch(getWallet());
          closeModal();
          setCardNumber("");
          setExpiredDate("");
          setCVC("");
          setTopup("");

          if (res.meta.requestStatus === "rejected") {
            toast.error(res.payload?.message);
          } else {
            toast.success("Money are withdrawn successfully!");
          }
        }}
        className="flex flex-col gap-3 mt-2 "
      >
        <label className="flex flex-col items-start gap-1">
          <span>Card number:</span>
          <input
            type="text"
            inputMode="numeric"
            minLength={16}
            maxLength={19}
            pattern="\d{4}\s\d{4}\s\d{4}\s\d{4}"
            size={16}
            className="border border-[var(--primary60)] rounded-md px-2 py-1 mts w-full"
            placeholder="1111 2222 3333 4444"
            onInput={(e) => {
              let value = e.currentTarget.value.replace(/\D/g, "");
              value = value.replace(/(.{4})/g, "$1 ").trim();
              setCardNumber(value);
              e.currentTarget.value = value;
            }}
            value={cardNumber}
          />
        </label>
        <label className="flex flex-col items-start gap-1">
          <span>Expired:</span>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            placeholder="mm/yy"
            className="border border-[var(--primary60)] rounded-md px-2 py-1 mts"
            onInput={(e) => {
              let value = e.currentTarget.value.replace(/\D/g, "");

              if (value.length >= 2) {
                let month = parseInt(value.slice(0, 2), 10);

                if (month < 1) month = 1;
                if (month > 12) month = 12;

                value = month.toString().padStart(2, "0") + value.slice(2);
              }

              if (value.length > 2) {
                value = value.slice(0, 2) + "/" + value.slice(2, 4);
              }
              setExpiredDate(value);
              e.currentTarget.value = value;
            }}
            value={expiredDate}
          />
        </label>
        <label className="flex flex-col items-start gap-1">
          <span>CVC:</span>
          <input
            type="password"
            inputMode="numeric"
            maxLength={3}
            placeholder="***"
            className="border border-[var(--primary60)] rounded-md px-2 py-1 mts"
            value={cvc}
            onChange={(e) => setCVC(e.currentTarget.value)}
          />
        </label>
        <label className="flex flex-col items-start gap-1">
          <span>Deposit:</span>
          <input
            type="text"
            inputMode="numeric"
            className="border border-[var(--primary60)] rounded-md px-2 py-1 mts"
            placeholder="$3000.00"
            onInput={(e) => {
              const eVal = e.currentTarget.value
                .split("")
                .filter((n) => n != "$")
                .join("");

              setTopup(eVal);
            }}
            value={`${topupAmount && `$${topupAmount}`}`}
          />
        </label>
        <button
          className="bg-[var(--primary100)] text-[var(--black0)] px-6 py-1 rounded-sm disabled:opacity-50"
          disabled={
            !cardNumber ||
            cardNumber.length < 16 ||
            !expiredDate ||
            expiredDate.length < 5 ||
            !cvc ||
            cvc.length < 3 ||
            !topupAmount
          }
        >
          {isLoading ? (
            <div className="loading loading-dots loading-md"></div>
          ) : (
            "Withdraw"
          )}
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
