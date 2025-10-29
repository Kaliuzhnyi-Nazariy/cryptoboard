import React from "react";

const Company = () => {
  return (
    <>
      <p className="elts font-semibold mb-3">Company</p>
      <ul className="flex flex-col gap-2 text-[var(--black80)] lts">
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          About us
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Blog
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Careers
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Student
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Security
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Trust and safeety
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Newsroom
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Videos
        </li>
      </ul>
    </>
  );
};

export default Company;
