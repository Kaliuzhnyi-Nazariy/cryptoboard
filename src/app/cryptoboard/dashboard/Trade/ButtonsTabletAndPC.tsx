import React, { Dispatch, SetStateAction } from "react";

const ButtonsTabletAndPC = ({
  action,
  setAction,
}: {
  action: string;
  setAction: Dispatch<SetStateAction<"buy" | "sell">>;
}) => {
  const buttonStyle = "w-1/2 font-semibold text-[var(--black60)]";

  return (
    <div>
      <div className="hidden w-full justify-between min-[768px]:flex ">
        <button
          className={`${buttonStyle} ${
            action === "buy" && "text-[var(--primary100)]"
          }
             `}
          type="button"
          onClick={() => setAction("buy")}
        >
          Buy
        </button>
        <button
          type="button"
          className={`${buttonStyle} ${
            action === "sell" && "text-[var(--primary100)]"
          }
             `}
          onClick={() => setAction("sell")}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default ButtonsTabletAndPC;
