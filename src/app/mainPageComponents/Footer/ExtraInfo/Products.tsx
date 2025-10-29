import React from "react";

const Products = () => {
  return (
    <>
      <p className="elts font-semibold mb-3">Products</p>
      <ul className="flex flex-col gap-2 text-[var(--black80)] lts">
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Stock & Fund
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Cash Card
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Crypto
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Options
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Gold
        </li>
        <li className="hover:cursor-pointer hover:text-[var(--black100)] focus:cursor-pointer focus:text-[var(--black100)]">
          Learn Snacks
        </li>
      </ul>
    </>
  );
};

export default Products;
