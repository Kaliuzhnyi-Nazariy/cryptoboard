"use client";

import { Search } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { useQuery } from "@tanstack/react-query";
import { getCrypto } from "../../dashboard/request";
import { tokenContext } from "@/app/context";

const SearchBarComponent = () =>
  //   {
  //   filteredCoins,
  //   search,
  //   setSearch,
  // }: {
  //   filteredCoins: false | any[];
  //   search: string;
  //   setSearch: React.Dispatch<React.SetStateAction<string>>;

  //     }
  {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [search, setSearch] = useState<string>("");

    const { data, isPending, isSuccess, isError } = useQuery({
      queryKey: ["getCryptocurencySearch"],
      queryFn: getCrypto,
      retryOnMount: false,
      retry: false,
    });

    const tokensContext = useContext(tokenContext);

    if (!tokensContext) {
      throw new Error("SomeComponent must be used within MyProvider");
    }

    const { tokens, setTokens } = tokensContext;

    useEffect(() => {
      if (data) {
        setTokens(data);
      }
    }, [data, setTokens]);

    const filteredCoins =
      Array.isArray(tokens) &&
      tokens.filter((coin: { id: string }) => coin.id.includes(search));
    // const filteredCoins =
    //   !isPending &&
    //   Array.isArray(data) &&
    //   data.filter((coin: { id: string }) => coin.id.includes(search));
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
