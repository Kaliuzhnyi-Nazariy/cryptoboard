import React from "react";

const AnalyticsHelp = () => {
  return (
    <>
      <h3 className="elts">Analytics Overview</h3>
      <ul className="list-decimal ml-5">
        <li>
          <h5 className="lts">Transaction History</h5>
          <p>
            This page lists all of your past transactions — including token
            purchases, sales, and wallet actions.
          </p>
        </li>
        <li>
          <h5 className="lts">Sorting Options</h5>
          <p className="mt-2">
            You can organize your transactions using the following filters:
          </p>
          <ul className="list-disc flex flex-col gap-1 mt-1">
            <li>
              <b>Name:</b> Sort by the transaction name.
            </li>
            <li>
              <b>Date:</b> Sort by the date of the transaction.
            </li>
            <li>
              <b>Amount:</b> Sort by the amount of money involved.
            </li>
          </ul>
          <p className="mt-2">
            Sorting can be toggled between ascending and descending order.
          </p>
        </li>
      </ul>
    </>
  );
};

export default AnalyticsHelp;
