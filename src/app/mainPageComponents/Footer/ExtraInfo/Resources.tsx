import React from "react";

const Resources = () => {
  return (
    <>
      <p className="elts font-semibold mb-3">Resources</p>
      <ul className="flex flex-col gap-2 text-[var(--black80)] lts">
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Prices
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Site Widgets
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Tax
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Support
        </li>
      </ul>
    </>
  );
};

export default Resources;
