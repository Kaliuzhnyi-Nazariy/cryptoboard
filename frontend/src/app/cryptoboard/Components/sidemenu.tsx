import React from "react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { Home } from "lucide-react";

const Sidemenu = () => {
  const liStyle = "w-full h-10 flex justify-center items-center ";
  const linkStyle =
    "flex justify-center items-center gap-3 text-[var(--primary100)] w-full";

  return (
    <nav className="hidden min-[768px]:block bg-[var(--black0)] mts text-[var(--black60)] h-auto flex-0 py-6 px-[26px] min-[1440px]:px-[30px] ">
      <ul className="w-40 flex flex-col gap-4 mb-8 min-[1440px]:w-48 ">
        <li
          // className={`${liStyle} rounded-[10px] bg-[var(--primary20)] relative `}
          className={`${liStyle} rounded-[10px] bg-[var(--primary20)] relative `}
        >
          {/* <div className=" absolute h-full w-1 bg-[var(--primary100)] border rounded-l-[10px] left-0"></div> */}
          <Link href={"/cryptoboard"} className={linkStyle}>
            <Home className="size-5" />
            Dashboard
          </Link>
        </li>
        <li className={liStyle}>Analytics</li>
        <li className={liStyle}>My Portfolio</li>
        <li className={liStyle}>My wallets</li>
        <li className={liStyle}>Exchanges</li>
      </ul>
      <hr />
      <ul className="w-40 flex flex-col gap-4 mt-8 min-[1440px]:w-48 ">
        <li className={liStyle}>Settings</li>
        <li className={liStyle}>Help</li>
        <li className={liStyle}>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default Sidemenu;
