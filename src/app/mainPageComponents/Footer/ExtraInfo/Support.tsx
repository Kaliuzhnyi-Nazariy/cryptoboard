import React from "react";

const Support = () => {
  return (
    <>
      <p className="elts font-semibold mb-3">Support</p>
      <ul className="flex flex-col gap-2 text-[var(--black80)] lts">
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Support center
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Contact Us
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          System Status
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Areas of Availability
        </li>
      </ul>
    </>
  );
};

export default Support;
