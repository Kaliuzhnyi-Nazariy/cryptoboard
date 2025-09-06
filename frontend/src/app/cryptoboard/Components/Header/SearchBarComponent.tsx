"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";

const SearchBarComponent = ({
  filteredCoins,
  search,
  setSearch,
}: {
  filteredCoins: false | any[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div>
      <div
        className="min-[1440px]:hidden min-[768px]:ml-auto flex
          gap-4 items-center"
      >
        {showSearchBar && (
          <SearchBar
            search={search}
            setSearch={setSearch}
            filteredCoins={filteredCoins}
          />
        )}
        <button onClick={() => setShowSearchBar((prev) => !prev)}>
          <Search className="size-6 min-[1440px]:hidden " />
        </button>
      </div>
      <div className="hidden min-[1440px]:flex">
        <SearchBar
          search={search}
          setSearch={setSearch}
          filteredCoins={filteredCoins}
        />
      </div>
    </div>
  );
};

export default SearchBarComponent;
