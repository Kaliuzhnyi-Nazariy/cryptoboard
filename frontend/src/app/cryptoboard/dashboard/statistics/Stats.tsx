"use client";

import { userCreateYear } from "@/app/redux/selectors";
import { transactions } from "@/app/redux/transaction/selector";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const mS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const Stats = () => {
  // ================ set chart ==============//

  const [typeOfChart, setType] = useState<"spending" | "earning">("spending");

  useEffect(() => {
    const stored = localStorage.getItem("chartType");
    if (stored === "earning" || stored === "spending") {
      setType(stored);
    }
  }, []);

  // ================== set year ================ //

  const yearOfCreationAccount = useSelector(userCreateYear);

  const yearToStart = new Date().getFullYear();

  const [year, setYear] = useState(yearToStart);

  const numYears = Math.max(1, yearToStart - Number(yearOfCreationAccount) + 1);

  //========== Set transaction data according to some critireas =========//

  const userTransactions = useSelector(transactions);

  let sellDataTransaction;

  if (typeOfChart == "earning") {
    sellDataTransaction = userTransactions.filter((t) => {
      return (
        t.transaction === "sell" && new Date(t.createdAt).getFullYear() == year
      );
    });
  } else {
    sellDataTransaction = userTransactions.filter((t) => {
      return (
        t.transaction === "buy" && new Date(t.createdAt).getFullYear() == year
      );
    });
  }

  // ==================== prepare data for table ===================//

  const statData = [] as { amount: number; date: number; month: string }[];

  for (let i = 0; i < sellDataTransaction.length; i++) {
    if (i !== 0) {
      if (
        new Date(sellDataTransaction[i].createdAt).getMonth() ===
        new Date(sellDataTransaction[i - 1].createdAt).getMonth()
      ) {
        const updInd = statData.findIndex(
          (ct) =>
            ct.date === new Date(sellDataTransaction[i].createdAt).getMonth()
        );

        const newData = {
          ...statData[updInd],
          amount: statData[updInd].amount + sellDataTransaction[i].moneyAmount,
        };

        statData.splice(updInd, 1, newData);
      } else {
        statData.push({
          amount: sellDataTransaction[i].moneyAmount,
          date: new Date(sellDataTransaction[i].createdAt).getMonth(),
          month: mS[new Date(sellDataTransaction[i].createdAt).getMonth()],
        });
      }
    } else {
      statData.push({
        amount: sellDataTransaction[i].moneyAmount,
        date: new Date(sellDataTransaction[i].createdAt).getMonth(),
        month: mS[new Date(sellDataTransaction[i].createdAt).getMonth()],
      });
    }
  }

  return (
    <div className="bg-[var(--black0)] w-full h-[300px] flex flex-col items-center overflow-hidden p-6 min-[768px]:col-span-2 min-[768px]:row-start-2 min-[1440px]:row-start-4 min-[1440px]:row-end-10  min-[768px]:col-start-1 min-[1440px]:col-end-2 min-[768px]:justify-self-center min-[1440px]:h-[344px] relative ">
      {/* min-[1440px]:w-[729px] */}
      <div className="flex justify-between w-full">
        <h3 className="lts">Statistics</h3>
        <div className="flex gap-3">
          <select
            name="typeOfChart"
            value={typeOfChart}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setType(e.target.value as "spending" | "earning");
              localStorage.setItem("chartType", e.target.value);
            }}
          >
            <option value="spending">Spending</option>
            <option value="earning">Earning</option>{" "}
          </select>
          <select
            name="year"
            id=""
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setYear(new Date(e.target.value).getFullYear());
            }}
          >
            {Array.from({ length: numYears }, (_, i) => {
              const y = yearToStart - i;
              return (
                <option key={y} value={y}>
                  {y}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {statData.length === 0 && (
        <p className="absolute top-1/2 left-1/2 -translate-y-1/2 text-center">
          No data
        </p>
      )}
      <ResponsiveContainer>
        <BarChart width={300} height={320} data={statData}>
          <XAxis dataKey="month" stroke={`var(--primary100)`} />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke={`var(--black100)`} strokeDasharray="5 5" />
          <Bar
            dataKey="amount"
            fill={`var(--primary40)`}
            barSize={30}
            activeBar={{ fill: `var(--primary100)` }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
