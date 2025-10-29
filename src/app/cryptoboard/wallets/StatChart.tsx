"use client";

import { transactions } from "@/app/redux/transaction/selector";
import { wallet } from "@/app/redux/wallet/selector";
import { useSelector } from "react-redux";
// import { AreaChart, Area, ResponsiveContainer } from "recharts";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const StatChart = ({
  name,
  value,
}: {
  name: "Spending" | "Balance" | "Returns";
  value: number;
}) => {
  const transactionList = useSelector(transactions);

  const spendingStat = transactionList
    .filter((t) => t.transaction === "buy")
    .slice(
      Math.max(
        transactionList.filter((t) => t.transaction === "buy").length - 5
      )
    );

  const shortenTransactions = transactionList.slice(
    Math.max(transactionList.length - 9)
  );

  const boolColorValue = value < 0;

  const colorByValue = boolColorValue ? "var(--error80)" : "var(--success80)";

  const data = () => {
    if (name === "Balance") {
      return shortenTransactions;
    } else if (name === "Spending") {
      return spendingStat;
    } else {
      return [
        { amount: 0 },
        {
          amount: 20,
        },
        { amount: 53 },
        {
          amount: 37,
        },
      ];
    }
  };

  // console.log(data);

  // const data = {}

  return (
    <div className="w-10 h-10">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={40} height={40} data={data()}>
          <Area
            type="monotone"
            dataKey="amount"
            stroke={`var(--${value && value < 0 ? "error100" : "success100"})`}
            fill={colorByValue || "#ff00d4"}
          />
        </AreaChart>
      </ResponsiveContainer>
      {/* <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={40} height={40} data={spendingStat}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="60%"
                stopColor={`var(--${
                  value && value < 0 ? "error80" : "success0"
                })`}
                stopOpacity={1}
              />
              <stop offset="100%" stopColor="var(--black0)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="amount"
            stroke={`var(--${value && value < 0 ? "error100" : "success100"})`}
            // stroke="var(--error100)"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div
        className={`size-3 bg-[var(--${
          value && value < 0 ? "error100" : "success100"
        })]`}
      >
        a
      </div> */}
    </div>
  );
};

export default StatChart;

{
  /* <stop
                offset="60%"
                stopColor={`var(--${value < 0 ? "error80" : "success80"})`}
                stopOpacity={1}
              /> */
}
{
  /* {value < 0 ? (
                <stop offset="60%" stopColor="var(--error80)" stopOpacity={1} />
              ) : (
                <stop
                  offset="60%"
                  stopColor="var(--success80)"
                  stopOpacity={1}
                />
              )} */
}
