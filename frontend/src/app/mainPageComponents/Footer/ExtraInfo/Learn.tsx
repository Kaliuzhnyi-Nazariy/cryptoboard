import React from "react";

const Learn = () => {
  return (
    <>
      <p className="elts font-semibold mb-3">Learn</p>
      <ul className="flex flex-col gap-2 text-[var(--black80)] lts">
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Watch Trending
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Product News
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Events
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          University
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Research
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          MarketUpdates
        </li>
      </ul>
    </>
  );
};

export default Learn;
