import React, { ComponentType } from "react";
import StatChart from "./StatChart";

const Stat = ({
  isFocused,
  Icon,
  name,
  value,
  procents,
}: {
  isFocused: boolean;
  Icon: ComponentType<{ className?: string }>;
  name: "Spending" | "Returns" | "Balance";
  value: number;
  procents: number;
}) => {
  const mainVal = Math.abs(value).toLocaleString("en-US", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });

  const procentValue = Math.abs(procents).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex flex-col justify-between h-full ">
      <div className="flex justify-between">
        <div className=" flex gap-3 items-center">
          <div
            className={`size-8 bg-[var(--${
              isFocused ? "black0" : "primary40"
            })] rounded-full flex justify-center items-center`}
          >
            <Icon className="size-4 text-[var(--primary100)]" />
          </div>
          <h4 className="mts">{name}</h4>
        </div>
        {/* <StatChart  value={procents} /> */}
        <StatChart name={name} value={procents} />
        {/* <StatChart /> */}
        {/* <div
          className={`size-10 bg-[var(--${
            name !== "Spending" ? "success100" : "error100"
          })]`}
        ></div> */}
      </div>
      <div className="mt-auto flex flex-col items-start">
        <p>{value < 0 ? `-$${mainVal}` : `$${mainVal}`}</p>
        <p
          className={`text-[var(--${
            procents > 0 ? "success100" : "error100"
          })]`}
        >
          +{procentValue}%
        </p>
      </div>
    </div>
  );
};

export default Stat;
