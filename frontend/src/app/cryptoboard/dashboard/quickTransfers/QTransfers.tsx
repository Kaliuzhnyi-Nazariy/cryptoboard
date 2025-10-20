import { MoveRight } from "lucide-react";
import React from "react";

const QTransfers = () => {
  return (
    <div className="p-6 bg-[var(--black0)] w-full min-[768px]:col-start-2 min-[768px]:row-start-5 min-[768px]:w-[228px] min-[768px]:px-5 min-[768px]:justify-self-end min-[768px]:py-4 min-[768px]:h-[252px] min-[1440px]:w-[387px] min-[1440px]:h-[268px] min-[1440px]:col-start-2 min-[1440px]:row-start-7 min-[1440px]:row-end-12 min-[1440px]:justify-self-center ">
      <h3 className="lts font-semibold">Quick Transfers</h3>
      <ul className="flex gap-[21px] mt-4 min-[768px]:gap-[9px] ">
        <li className="size-10 rounded-full bg-purple-500"></li>
        <li className="size-10 rounded-full bg-purple-500"></li>
        <li className="size-10 rounded-full bg-purple-500"></li>
        <li className="size-10 rounded-full bg-purple-500 min-[768px]:hidden"></li>
        <li className="size-10 rounded-full bg-[var(--black100)] text-[var(--black0)] flex justify-center items-center">
          +
        </li>
      </ul>
      <div className="mt-3">
        <label className="flex justify-start flex-col">
          <p className="mts text-[var(--black60)] mr-auto">Amount</p>
          <input
            type="text"
            className="w-full h-11 px-4  border border-[var(--black40)] rounded-sm mts font-semibold focus-within:outline-2 focus-within:border-transparent focus-within:outline-[var(--primary100)] text-[var(--black80)] focus-within:text-[var(--black100)] mt-2 min-[768px]:h-10 "
            placeholder="0.1824"
          />{" "}
        </label>
        <button
          type="button"
          className="w-full h-[58px] rounded-sm text-center bg-[var(--primary100)] text-[var(--black0)] flex gap-3 justify-center items-center mt-3 min-[768px]:h-11 "
        >
          Transfer <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default QTransfers;
