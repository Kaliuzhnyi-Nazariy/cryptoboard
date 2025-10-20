import Link from "next/link";
import React from "react";

const NeedHelp = () => {
  return (
    <>
      <h3 className="elts">📩 Need Help?</h3>
      <span>
        If you encounter any issues or have feedback, please contact our support
        team at{" "}
        <Link href="/" className="hover:cursor-pointer">
          support@urcryptoboard.com
        </Link>
      </span>
    </>
  );
};

export default NeedHelp;
