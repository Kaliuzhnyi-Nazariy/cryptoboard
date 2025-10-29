import React, { Dispatch, SetStateAction } from "react";

const Buttons = ({
  action,
  setAction,
}: {
  action: string;
  setAction: Dispatch<SetStateAction<"buy" | "sell">>;
}) => {
  const buttonStyle = "px-10 min-[370px]:px-[60px] rounded-md  py-2 lts";

  return (
    <ul className="flex w-full justify-between min-[768px]:hidden ">
      <li>
        <button
          className={`${buttonStyle} ${
            action === "buy"
              ? "border border-[var(--primary100)] bg-[var(--primary100)] text-[var(--black0)] "
              : "border border-[var(--black80)] rounded-md lts"
          } `}
          type="button"
          onClick={() => setAction("buy")}
        >
          Buy
        </button>
      </li>
      <li>
        <button
          type="button"
          className={`${buttonStyle} ${
            action === "sell"
              ? "border border-[var(--primary100)] bg-[var(--primary100)] text-[var(--black0)] "
              : "border border-[var(--black80)] rounded-md lts"
          } `}
          onClick={() => setAction("sell")}
        >
          Sell
        </button>
      </li>
    </ul>
  );
};

export default Buttons;
