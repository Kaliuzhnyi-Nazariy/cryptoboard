"use client";

import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import {
  ChartLine,
  ClipboardList,
  FileChartColumnIncreasing,
  Home,
  Info,
  Settings,
  Wallet,
  X,
} from "lucide-react";

const Sidemenu = ({
  isOpen = false,
  extraStyles,
  isMob = false,
  closeModal,
}: {
  isOpen?: boolean;
  extraStyles?: string;
  isMob?: boolean;
  closeModal?: () => void;
}) => {
  const liStyle = "w-full h-10 flex justify-center items-center relative ";

  const linkStyle = "flex pl-6 items-center gap-3 w-full";

  type PageStates =
    | "dashboard"
    | "wallets"
    | "analytics"
    | "myportfolio"
    | "settings"
    | "help";

  const localPage = localStorage.getItem("page") as PageStates | null;

  const [chosenPage, chosePage] = useState<PageStates>(
    localPage ?? "dashboard"
  );

  const setPage = (page: PageStates) => {
    chosePage(page);
    localStorage.setItem("page", page);
  };

  const clickHandle = () => {
    if (isMob && closeModal) {
      return closeModal();
    } else {
      //
    }
  };

  const chosenStyle =
    "text-[var(--primary100)] bg-[var(--primary20)] rounded-[10px] h-full sidemenuChosenItem";

  return (
    <nav
      className={`${
        isMob &&
        `max-[767px]:fixed max-[767px]:top-0 max-[767px]:left-0 justify-center z-10 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } `
      } w-full h-full flex flex-col  items-center min-[768px]:block bg-[var(--black0)] mts text-[var(--black60)] min-[768px]:h-auto flex-0 py-6 px-[26px] min-[1440px]:px-[30px] transition-transform duration-300 ${
        extraStyles && extraStyles
      }`}
    >
      <button
        type="button"
        className="absolute z-10 top-7 left-7 cursor-pointer block min-[768px]:hidden"
        onClick={clickHandle}
      >
        <X />
      </button>
      <ul className="w-40 flex flex-col gap-4 mb-8 min-[1440px]:w-48 ">
        <li className={`${liStyle} relative `} onClick={clickHandle}>
          <Link
            href={"/cryptoboard"}
            className={`${linkStyle} ${
              chosenPage === "dashboard" ? chosenStyle : ""
            } `}
            onClick={() => setPage("dashboard")}
          >
            <Home className="size-5" />
            Dashboard
          </Link>
        </li>
        <li className={`${liStyle} relative `} onClick={clickHandle}>
          <Link
            href={"/cryptoboard/analytics"}
            className={`${linkStyle} ${
              chosenPage === "analytics" ? chosenStyle : ""
            } `}
            onClick={() => setPage("analytics")}
          >
            <FileChartColumnIncreasing className="size-5" />
            Analytics
          </Link>
        </li>
        <li className={`${liStyle} relative `} onClick={clickHandle}>
          <Link
            href={"/cryptoboard/myportfolio"}
            className={`${linkStyle} ${
              chosenPage === "myportfolio" ? chosenStyle : ""
            } `}
            onClick={() => setPage("myportfolio")}
          >
            <ClipboardList className="size-5" />
            My portfolio
          </Link>
        </li>
        <li className={liStyle} onClick={clickHandle}>
          <Link
            href={"/cryptoboard/wallets"}
            className={`${linkStyle} ${
              chosenPage === "wallets" && chosenStyle
            }`}
            onClick={() => setPage("wallets")}
          >
            <Wallet className="size-5" />
            My wallets
          </Link>
        </li>
        <li className={liStyle} onClick={clickHandle}>
          <span className={`${linkStyle} cursor-not-allowed opacity-50`}>
            <ChartLine className="size-5" />
            Exchanges
          </span>
        </li>
      </ul>
      <hr />
      <ul className="w-40 flex flex-col gap-4 mt-8 min-[1440px]:w-48 ">
        <li className={liStyle} onClick={clickHandle}>
          <Link
            className={`${linkStyle} ${
              chosenPage === "settings" && chosenStyle
            }`}
            href={"/settings"}
            onClick={() => setPage("settings")}
          >
            <Settings className="szie-5" />
            Settings
          </Link>
        </li>
        <li className={liStyle} onClick={clickHandle}>
          <Link
            className={`${linkStyle} ${chosenPage === "help" && chosenStyle}`}
            href={"/help"}
            onClick={() => setPage("help")}
          >
            <Info className="size-5" />
            Help
          </Link>
        </li>
        <li className={liStyle} onClick={clickHandle}>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
};

export default Sidemenu;
