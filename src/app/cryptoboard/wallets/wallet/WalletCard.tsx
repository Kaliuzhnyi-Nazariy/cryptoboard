"use client";

import { name } from "@/app/redux/selectors";
import { useSelector } from "react-redux";

const WalletCard = ({ balance }: { balance: number | undefined }) => {
  const username = useSelector(name);

  const walletBalance = Math.abs(balance || 0).toLocaleString("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });

  return (
    <div className="w-full py-3 flex items-center justify-center bg-[var(--black0)] text-[var(--black0)]">
      <div className="w-[80%] h-[175px] min-[425px]:h-[200px] min-[425px]:w-[350px] min-[1024px]:w-[500px] min-[1024px]:h-[300px] bg-[var(--primary80)] p-5 rounded-lg flex flex-col justify-between ">
        <div className="w-full flex justify-between">
          <h5>
            {username}
            {"'"}s card
          </h5>
          <span>urCrypto</span>
        </div>
        <div className="flex w-full items-center justify-center  ">
          <p>
            <b>Balance:</b> $ {walletBalance}
            {/* <b>Balance:</b> {`$${balance}` || "No data"} */}
          </p>
        </div>
        <small className="mr-auto text-[var(--black20)] ests ">
          Card can be used only within app*
        </small>
      </div>
    </div>
  );
};

export default WalletCard;
