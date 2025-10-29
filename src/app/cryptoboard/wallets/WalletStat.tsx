"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useContext, useEffect, useState } from "react";
import Stat from "./Stat";
import { HandCoins, TrendingDown, WalletMinimal } from "lucide-react";
import { useSelector } from "react-redux";
import { wallet } from "@/app/redux/wallet/selector";
import { useAppDispatch } from "@/app/redux/hooks";
import { getWallet } from "@/app/redux/requests/walletRequests";
import { getTransaction } from "@/app/redux/requests/transactions";
import { transactions } from "@/app/redux/transaction/selector";
import { userTokens } from "@/app/redux/selectors";
import { tokenContext } from "@/app/context";

const WalletStat = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // console.log(currentSlide === 0);

  const [slideRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      origin: "auto",
      perView: "auto",
      spacing: 16,
    },
    loop: true,
    breakpoints: {
      "(min-width: 1440px)": {
        slides: {
          origin: "auto",
          perView: "auto",
          spacing: 24,
        },
      },
    },
    // focus:
  });

  const sliderStyle =
    "min-w-[227px] w-[227px] max-w-[227px] h-[144px] bg-[var(--black0)]  border border-[var(--black20)] rounded-md px-5 py-4";

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWallet());
    dispatch(getTransaction());
  }, [dispatch]);

  const walletBalance = useSelector(wallet);
  const transactionList = useSelector(transactions);

  const spending = transactionList
    .filter((t) => t.transaction === "buy")
    .reduce((spending, t) => {
      return spending + t.moneyAmount;
    }, 0);

  const spendingProcent = () => {
    const anotherTransactions = transactionList
      .filter((t) => t.transaction !== "buy" && t.transaction !== "withdraw")
      .reduce((spending, t) => {
        return (spending += t.moneyAmount);
      }, 0);

    return (spending / anotherTransactions) * 100;
  };

  const balancePercent = () => {
    const allTopups = transactionList
      .filter((t) => t.transaction === "topup")
      .reduce((acc, val) => {
        return (acc += val.moneyAmount);
      }, 0);

    return ((walletBalance?.balance || 0 - allTopups) / allTopups) * 100;
  };

  const userTokensList = useSelector(userTokens);
  const tokensList = useContext(tokenContext);

  if (!tokensList) {
    throw new Error("SomeComponent must be used within MyProvider");
  }

  const { tokens } = tokensList;

  const userTokensPrice = () => {
    let result = 0;
    userTokensList.map((ut) => {
      return tokens.some((t) => {
        if (t.symbol == ut.name) {
          const allTokensAmount = ut.purchases.reduce((acc, amount) => {
            return (acc += amount.amount);
          }, 0);
          result += t.current_price * allTokensAmount;
        }
      });
    });
    return result;
  };

  const returns =
    spending -
    transactionList
      .filter((t) => t.transaction === "sell")
      .reduce((spending, t) => {
        return spending + t.moneyAmount;
      }, 0);

  const percentageReturns = () => {
    return ((returns + userTokensPrice() - spending) / spending) * 100;
  };

  //make it depnce on spending (percentage), try to do spending the same by subtraction returns ?

  // console.log(spendingProcent());

  return (
    <div
      className="w-full p-6 bg-[var(--black0)] min-[768px]:bg-transparent min-[768px]:p-0 min-[768px]:col-span-2 min-[768px]:row-start-1 min-[1440px]:row-end-4 min-[1440px]:min-w-[729px] min-[1440px]:max-w-1/2 min-[1440px]:col-start-1 keen-slider min-[1440px]:justify-self-center min-[1440px]:col-end-2"
      ref={slideRef}
    >
      <div
        className={`keen-slider__slide ${sliderStyle} ${
          currentSlide === 0 && "bg-[var(--primary100)] text-[var(--black0)] "
        } `}
        style={{ width: "227px", minWidth: "227px", maxWidth: "227px" }}
      >
        {/* <BalanceStat IsFocused={currentSlide === 0} /> */}
        <Stat
          isFocused={currentSlide === 0}
          Icon={WalletMinimal}
          name="Balance"
          value={walletBalance?.balance || 0}
          procents={balancePercent()}
        />
      </div>
      {/* <div
        className={`keen-slider__slide ${sliderStyle} ${
          currentSlide === 3 && "bg-[var(--primary100)] text-[var(--black0)] "
        } `}
        style={{ width: "227px", minWidth: "227px", maxWidth: "227px" }}
      >
        <StatChart />
      </div> */}
      <div
        className={`keen-slider__slide ${sliderStyle} ${
          currentSlide === 1 && "bg-[var(--primary100)] text-[var(--black0)] "
        } `}
        style={{ width: "227px", minWidth: "227px", maxWidth: "227px" }}
      >
        {/* <SpendingStat isFocused={currentSlide === 1} /> */}{" "}
        <Stat
          isFocused={currentSlide === 1}
          Icon={TrendingDown}
          name="Spending"
          value={-spending}
          procents={-spendingProcent()}
        />
      </div>
      <div
        className={`keen-slider__slide ${sliderStyle} ${
          currentSlide === 2 && "bg-[var(--primary100)] text-[var(--black0)] "
        } `}
        style={{ width: "227px", minWidth: "227px", maxWidth: "227px" }}
      >
        <Stat
          isFocused={currentSlide === 2}
          Icon={HandCoins}
          name="Returns"
          value={returns + userTokensPrice()}
          procents={percentageReturns()}
        />
      </div>
    </div>
  );
};

export default WalletStat;
