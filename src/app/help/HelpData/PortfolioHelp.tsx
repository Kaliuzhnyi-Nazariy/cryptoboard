import React from "react";

const PortfolioHelp = () => {
  return (
    <>
      <h3 className="elts">My Portfolio Overview</h3>
      <p>On this page, you can review all the tokens you’ve purchased.</p>
      <p>Each token entry displays:</p>
      <ul className="list-disc ml-5 mt-2">
        <li>The amount you paid</li>
        <li>The number of tokens you own</li>
        <li>Your current gains or losses</li>
      </ul>
      <p>
        Click any token to view a detailed breakdown of how its value has
        changed across each purchase.
      </p>
    </>
  );
};

export default PortfolioHelp;
