"use client";
import { useSelector } from "react-redux";
import { avatar, name } from "../../../redux/selectors";
import Link from "next/link";
import { Bell, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCrypto } from "../../dashboard/request";
import Image from "next/image";
import SearchBarComponent from "./SearchBarComponent";

const Header = () => {
  const username = useSelector(name);
  const useravatar = useSelector(avatar);
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
          <SearchBarComponent
            search={search}
            setSearch={setSearch}
            filteredCoins={filteredCoins}
          />
          <Bell className="size-6 hidden min-[768px]:block" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="flex gap-1 items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden ">
                {/* bg-green-500 */}
                {useravatar && (
                  <Image
                    src={useravatar}
                    alt={`${username}'s avatar`}
                    fill
                    className="object-cover !w-10 h-10 rounded-full overflow-hidden"
                  />
                )}
              </div>

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
        </div>
      </div>
    </div>
  );
};

export default Header;
