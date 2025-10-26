import React from "react";
import { Coin } from "../../dashboard/trendingMarket/type";

const SearchBar = ({
  filteredCoins,
  search,
  setSearch,
}: {
  filteredCoins: false | any[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <label className="input w-30 min-[1440px]:w-60 py-1.5 rounded-md border border-[var(--black40)] flex bg-transparent">
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
          <div className="absolute top-10 right-0 w-30 min-[768px]:w-36 min-[1024px]:w-42 min-[1440px]:w-60 max-h-[150px] bg-[var(--black40)]">
            <ul className="max-h-[150px] overflow-y-auto overflow-x-hidden">
              {Array.isArray(filteredCoins) && filteredCoins.length > 0 ? (
                <>
                  {filteredCoins.map((coin: Coin) => {
                    return (
                      <li
                        key={coin.id}
                        className="h-10 px-2 flex items-center transition-colors duration-150 hover:bg-[var(--primary80)] hover:text-[var(--black0)] justify-between mts"
                      >
                        <p className="w-3/6 min-[1024px]:w-4/6 overflow-ellipsis overflow-hidden">
                          {coin.name}
                        </p>
                        <p>${coin.current_price}</p>
                      </li>
                    );
                  })}
                </>
              ) : (
                <li className="h-10 px-2 flex items-center transition-colors duration-150 hover:bg-[var(--primary80)] hover:text-[var(--black0)] ">
                  No token
                </li>
              )}
            </ul>
          </div>
        )}
      </label>
    </>
  );
};

export default SearchBar;
