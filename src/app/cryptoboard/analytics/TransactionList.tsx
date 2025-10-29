"use client";

import { useAppDispatch } from "@/app/redux/hooks";
import { getTransaction } from "@/app/redux/requests/transactions";
import {
  transactionLoading,
  transactions,
} from "@/app/redux/transaction/selector";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { X } from "lucide-react";
import { Transaction } from "@/app/redux/transaction/transactionType";
import {
  sortDateDown,
  sortDateUp,
  sortNameDown,
  sortNameUp,
  sortPriceDown,
  sortPriceUp,
} from "./sortsFuncs";

const TransactionList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTransaction());
  }, [dispatch]);

  const loading = useSelector(transactionLoading);
  const transactionsList = useSelector(transactions);

  // console.log({ transactionsList });
  type FilterType = "money" | "date" | "name" | null;

  const [chosenFilter, setFilter] = useState<FilterType>(null);

  const [filteredList, setFilteredList] = useState([] as Transaction[]);

  const [nameArrow, setNameArrow] = useState<"down" | "up">("down");
  const [moneyArrow, setMoneyArrow] = useState<"down" | "up">("down");
  const [dateArrow, setDateArrow] = useState<"down" | "up">("down");

  useEffect(() => {
    setFilteredList(transactionsList);
  }, [transactionsList]);

  const setFilterFn = (filterVal: FilterType) => {
    setFilter(filterVal);

    if (filterVal === "name") {
      setNameArrow((prev) => {
        const newDirection = prev === "down" ? "up" : "down";

        if (newDirection === "down") {
          setFilteredList(sortNameDown(transactionsList));
        } else {
          setFilteredList(sortNameUp(transactionsList));
        }

        return newDirection;
      });
      setMoneyArrow("down");
      setDateArrow("down");
    }

    if (filterVal === "money") {
      setMoneyArrow((prev) => {
        const newDirection = prev === "down" ? "up" : "down";

        if (newDirection === "down") {
          setFilteredList(sortPriceDown(transactionsList));
        } else {
          setFilteredList(sortPriceUp(transactionsList));
        }

        return newDirection;
      });
      setNameArrow("down");
      setDateArrow("down");
    }

    if (filterVal === "date") {
      setDateArrow((prev) => {
        const newDirection = prev === "down" ? "up" : "down";

        if (newDirection === "down") {
          setFilteredList(sortDateDown(transactionsList));
        } else {
          setFilteredList(sortDateUp(transactionsList));
        }

        return newDirection;
      });
      setNameArrow("down");
      setMoneyArrow("down");
    }

    if (filterVal == null) {
      setFilteredList(transactionsList);
    }

    // console.log({ filteredList });

    // if (chosenFilter === filterVal) {
    //   // console.log(filteredList.sort((a, b) => b.amount - a.amount));
    //   console.log(filteredList.sort((a, b) => b.amount - a.amount));
    // }
    // filteredList = transactionsList;
  };

  // console.log({ filteredList });

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const liStyle = `px-2 py-0.5 rounded-md border border-[var(--black40)] text-[var(--black60)] flex justify-between w-full`;

  const chosenFilterStyle = "border-[var(--success100)] text-[var(--black100)]";

  const activeReset = "border-[var(--error100)] text-[var(--error100)]";

  return (
    <div className=" w-full h-full">
      <div className="w-full flex flex-col min-[768px]:flex-row gap-3 items-center mb-3">
        <p>Sort by: </p>
        <ul className="grid grid-cols-2 grid-rows-2 min-[768px]:flex gap-3">
          <li>
            <button
              type="button"
              className={`${liStyle} ${
                chosenFilter === "money" && chosenFilterStyle
              }`}
              onClick={() => setFilterFn("money")}
            >
              <span>money</span>{" "}
              <ArrowDropDownIcon
                className={`${
                  moneyArrow == "down" ? "rotate-0" : "rotate-180"
                }`}
              />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`${liStyle} ${
                chosenFilter === "date" && chosenFilterStyle
              }`}
              onClick={() => setFilterFn("date")}
            >
              <span>date</span>{" "}
              <ArrowDropDownIcon
                className={`${dateArrow == "down" ? "rotate-0" : "rotate-180"}`}
              />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`${liStyle} ${
                chosenFilter === "name" && chosenFilterStyle
              }`}
              onClick={() => setFilterFn("name")}
            >
              <span>name</span>{" "}
              <ArrowDropDownIcon
                className={`${nameArrow == "down" ? "rotate-0" : "rotate-180"}`}
              />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`${liStyle} ${chosenFilter !== null && activeReset}`}
              onClick={() => setFilterFn(null)}
            >
              <span>reset</span> <X />
            </button>
          </li>
        </ul>
      </div>
      {transactionsList.length > 0 ? (
        <ul className="grid min-[992px]:grid-cols-2 gap-3 min-[992px]:gap-4 min-[1440px]:grid-cols-3 min-[1920px]:grid-cols-4 h-64 pb-6 ">
          {filteredList.map((t) => {
            // {transactionsLfilteredListist.map((t) => {
            return (
              <li
                key={t._id.toString()}
                className={`p-6 rounded-md border border-[var(--black40)] text-[var(--black0)] ${
                  t.transaction === "buy" || t.transaction === "withdraw"
                    ? "bg-[var(--error100)]"
                    : "bg-[var(--success100)]"
                }  `}
              >
                <div className="flex w-full max-[424px]:flex-col max-[424px]:items-start min-[425px]:justify-between items-center">
                  <h4 className="uppercase">{t.transaction}</h4>
                  <p>{new Date(t.createdAt).toLocaleDateString("en-GB")}</p>
                </div>
                <p className="flex justify-start">${t.moneyAmount}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default TransactionList;
