import React from "react";

const MyWalletHelp = () => {
  return (
    <>
      <h3 className="elts">My Wallet Overview</h3>
      <p>
        Your wallet is required to make transactions within urCryptoboard.
        Creating one takes just a single click.
      </p>
      <p>From this page, you can:</p>
      <ul className="list-disc ml-5">
        <li>Top up your wallet</li>
        <li>Withdraw funds</li>
        <li>Delete your wallet</li>
      </ul>
      <p>
        ⚠️ Deleting your wallet will permanently remove all associated data.
      </p>
    </>
  );
};

export default MyWalletHelp;
