"use client";

import { userTokens } from "@/app/redux/selectors";
import { useSelector } from "react-redux";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useContext } from "react";
import { tokenContext } from "@/app/context";
import { token } from "@/app/redux/user/userType";

const TokenList = () => {
  const userTokensList = useSelector(userTokens);

  console.log({ userTokensList });

  const tokensMarket = useContext(tokenContext);

  if (!tokensMarket) throw new Error("no tokens data!");

  const { tokens } = tokensMarket;

  const costCalc = (purchases: { amount: number; price: number }[]) => {
    return purchases.reduce((acc, t) => {
      return (acc += t.price * t.amount);
    }, 0);
  };

  const priceView = (price: number) => {
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    });
  };

  const amountCalc = (pur: { amount: number }[]) => {
    return pur.reduce((acc: number, t: { amount: number }) => {
      return (acc += t.amount);
    }, 0);
  };

  const moneyDifference = (token: token) => {
    const tokenIndex = tokens.findIndex((tn) => tn.symbol === token.name);

    if (tokenIndex === -1) {
      return <></>;
      throw new Error("Token not found!");
    }

    const result = priceView(
      tokens[tokenIndex].current_price * amountCalc(token.purchases) -
        costCalc(token.purchases)
    );

    return (
      <p
        className={`${
          Number(result) > 0
            ? "text-[var(--success100)]"
            : Number(result) === 0
            ? "text-[var(--black60)]"
            : "text-[var(--error100)]"
        } font-bold`}
      >
        ${result}
      </p>
    );
  };

  const percentsDifference = (token: token) => {
    const tokenIndex = tokens.findIndex((tn) => tn.symbol === token.name);

    if (tokenIndex === -1) {
      return <></>;
      throw new Error("Token not found!");
    }

    const result = (
      ((tokens[tokenIndex].current_price * amountCalc(token.purchases) -
        costCalc(token.purchases)) /
        costCalc(token.purchases)) *
      100
    ).toFixed(2);

    if (Number(result) === 0) {
      return <p className="text-[var(--black60)]">0%</p>;
    }

    return (
      <p
        className={`${
          Number(result) < 0
            ? "text-[var(--error100)]"
            : "text-[var(--success100)]"
        }`}
      >
        {result + "%"}
      </p>
    );
  };

  // let checkRes = 0;

  const singularPriceDiff = (
    tokenName: string,
    userTokenAmounts: number,
    priceUserBought: number
  ) => {
    const tokenIndex = tokens.findIndex((t) => t.symbol === tokenName);

    if (tokenIndex === -1) {
      return <></>;
    }

    const result =
      tokens[tokenIndex].current_price * userTokenAmounts -
      priceUserBought * userTokenAmounts;

    return (
      <p
        className={`${
          result > 0
            ? "text-[var(--success100)]"
            : result == 0
            ? "text-[var(--black40)]"
            : "text-[var(--error100)]"
        }`}
      >
        ${priceView(result)}
      </p>
    );
  };

  const singularProcentageDiff = (
    tokenName: string,
    priceUserBought: number
  ) => {
    const tokenIndex = tokens.findIndex((t) => t.symbol === tokenName);

    if (tokenIndex === -1) {
      return <></>;
    }

    const res =
      ((tokens[tokenIndex].current_price - priceUserBought) / priceUserBought) *
      100;

    return (
      <p
        className={`${
          res < 0
            ? "text-[var(--error100)]"
            : res == 0
            ? "text-[var(--black40)]"
            : "text-[var(--success100)]"
        }`}
      >
        {res.toFixed(2)}%
      </p>
    );
  };

  return (
    <div className="h-[80%] w-full overflow-y-auto">
      {userTokensList?.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-[var(--black60)]">No tokens</p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3 w-full h-64">
          {userTokensList?.map((t) => {
            return (
              <li
                key={t._id.toString()}
                className="border border-[var(--black20)] rounded-md"
                id={t._id.toString()}
              >
                {" "}
                <Accordion style={{ borderRadius: "6px" }}>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography component="span" className="w-full">
                      {" "}
                      <div className="flex w-full justify-between items-center">
                        <div className="">
                          <h4>{t.name}</h4>
                          <p>All price: ${priceView(costCalc(t.purchases))}</p>
                          <p>
                            All amount:
                            {amountCalc(t.purchases)}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <>{moneyDifference(t)}</>
                          <span>{percentsDifference(t)}</span>
                        </div>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="border-t border-t-[var(--black40)] flex flex-col gap-3 bg-[var(--black20)] ">
                    {t.purchases.map((p, index) => {
                      return (
                        <React.Fragment key={index}>
                          <div className="text-start border border-[var(--black40)] px-3 py-1 bg-[var(--black0)] rounded-md flex justify-between items-center ">
                            <div className="">
                              <Typography>Price paid: ${p.price}</Typography>
                              <Typography>Amount bought: {p.amount}</Typography>
                            </div>
                            <div className="flex flex-col items-end">
                              {singularPriceDiff(t.name, p.amount, p.price)}
                              {singularProcentageDiff(t.name, p.price)}
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TokenList;
