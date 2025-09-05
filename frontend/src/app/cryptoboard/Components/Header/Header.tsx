"use client";
import { useSelector } from "react-redux";
import { name } from "../../../redux/selectors";
import Link from "next/link";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCrypto } from "../../dashboard/request";
import { Coin } from "../../dashboard/trendingMarket/type";

const Header = () => {
  const username = useSelector(name);
  const [search, setSearch] = useState<string>("");

  const { data, isPending, isSuccess, isError } = useQuery({
    queryKey: ["getCryptocurencySearch"],
    queryFn: getCrypto,
    retryOnMount: false,
    retry: false,
  });

  const filteredCoins =
    !isPending &&
    Array.isArray(data) &&
    data.filter((coin: { id: string }) => coin.id.includes(search));

  return (
    <div className="px-6 py-4.5 w-full flex items-center min-[768px]:px-0 min-[768px]:pr-4 min-[1440px]:pr-5 flex-0 bg-[var(--black0)] text-[var(--black100)] ">
      {/* <div className="w-8 h-8 bg-red-500 block min-[768px]:hidden"></div> */}
      <Menu className="size-8 block min-[768px]:hidden" />
      <div className="min-w-[212px] min-[1440px]:min-w-[251px] min-[768px]:flex justify-between items-center text-center hidden">
        <p>urCrupto</p>
      </div>
      <div className="ml-auto w-full min-[768px]:ml-9 flex gap-3 items-center min-[768px]:justify-between ">
        <div className="hidden min-[768px]:block ">
          <h3 className="elts">Welcome {username}!</h3>
          <p className="sts">Hope you are healthy and happy today...</p>
        </div>
        <div className="ml-auto flex gap-3 items-center">
          <Search className="size-6 min-[768px]:ml-auto min-[1440px]:hidden " />

          {/* <input
            type="text"
            className="w-60 py-1.5 rounded-[6px] outline outline-[var(--black40)] hidden min-[1440px]:block "
            placeholder="Search..."
          /> */}
          <label className="input w-60 py-1.5 rounded-[6px] outline outline-[var(--black40)] hidden min-[1440px]:flex bg-transparent">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              className="relative"
              onChange={(e) => setSearch(e.target.value)}
            />
            {search.length != 0 && (
              <div className="absolute top-10 left-0 w-60 h-[150px] bg-amber-600 overflow-hidden">
                <ul className="h-full overflow-y-scroll">
                  {Array.isArray(filteredCoins) &&
                    filteredCoins.map((coin: Coin) => {
                      return <li key={coin.id}>{coin.name}</li>;
                    })}

                  {/* <li className="h-12">1</li>
                  <li className="h-12">2</li>
                  <li className="h-12">3</li>
                  <li className="h-12">{search}</li>
                  <li className="h-12">{search} 1</li>
                  <li className="h-12">{search} 2</li>
                  <li className="h-12">{search} 3</li> */}
                </ul>
              </div>
            )}
          </label>
          {/* <div className="w-6 h-6 bg-pink-500 hidden min-[768px]:block"></div> */}
          <Bell className="size-6 hidden min-[768px]:block" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="flex gap-1 items-center">
              <div className="w-10 h-10 rounded-full bg-green-500"></div>
              {/* <div className="size-4 bg-yellow-500 hidden min-[768px]:block"></div> */}{" "}
              <ChevronDown className="size-4 hidden min-[768px]:block" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link href={"/cryptoboard/update"}>Update data</Link>
              </li>
            </ul>
          </div>
          {/* <div className="flex gap-1 items-center">
            <div className="w-10 h-10 rounded-full bg-green-500"></div>
            <div className="size-4 bg-yellow-500 hidden min-[768px]:block"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
