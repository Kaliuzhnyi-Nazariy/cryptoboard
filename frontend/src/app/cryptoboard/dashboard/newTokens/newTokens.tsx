import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const NewTokens = () => {
  return (
    <div className="w-full bg-[var(--black0)] p-6 min-[768px]:col-start-1 min-[768px]:row-start-5 min-[768px]:w-[280px] min-[768px]:px-5 min-[768px]:py-4 min-[768px]:h-[252px] min-[1440px]:min-w-[387px] min-[1440px]:h-[240px] min-[1440px]:col-start-2 min-[1440px]:row-start-12 min-[1440px]:row-end-16 min-[1440px]:justify-self-center ">
      <div className="flex w-full justify-between">
        <h3 className="lts font-semibold">New Cryptoccurency</h3>
        <Link href="/" className="text-[var(--primary100)]">
          See all
        </Link>
      </div>
      <ul className="mt-6 flex flex-col gap-4 min-[768px]:mt-4 min-[768px]:gap-6 ">
        <li className="border border-[var(--black20)] rounded-md px-4 py-3 justify-between items-center flex min-[768px]:p-0 min-[768px]:border-transparent">
          <div className="flex gap-3 justify-start">
            <div className="size-10 bg-purple-900 rounded-full"></div>
            <div className="">
              <h4 className="mts font-semibold">BNB</h4>
              <p className="ests text-[var(--black60)]">Added 2 days ago</p>
            </div>
          </div>
          <ChevronRight size={16} />
        </li>
        <li className="border border-[var(--black20)] rounded-md px-4 py-3 justify-between items-center flex min-[768px]:p-0 min-[768px]:border-transparent">
          <div className="flex gap-3 justify-start">
            <div className="size-10 bg-purple-900 rounded-full"></div>
            <div className="">
              <h4 className="mts font-semibold">BNB</h4>
              <p className="ests text-[var(--black60)]">Added 2 days ago</p>
            </div>
          </div>
          <ChevronRight size={16} />
        </li>{" "}
        <li className="border border-[var(--black20)] rounded-md px-4 py-3 justify-between items-center flex min-[768px]:p-0 min-[768px]:border-transparent ">
          <div className="flex gap-3 justify-start">
            <div className="size-10 bg-purple-900 rounded-full"></div>
            <div className="">
              <h4 className="mts font-semibold">BNB</h4>
              <p className="ests text-[var(--black60)]">Added 2 days ago</p>
            </div>
          </div>
          <ChevronRight size={16} />
        </li>{" "}
        <li className="border border-[var(--black20)] rounded-md px-4 py-3 justify-between items-center flex min-[768px]:hidden">
          <div className="flex gap-3 justify-start">
            <div className="size-10 bg-purple-900 rounded-full"></div>
            <div className="">
              <h4 className="mts font-semibold">BNB</h4>
              <p className="ests text-[var(--black60)]">Added 2 days ago</p>
            </div>
          </div>
          <ChevronRight size={16} />
        </li>{" "}
      </ul>
    </div>
  );
};

export default NewTokens;
