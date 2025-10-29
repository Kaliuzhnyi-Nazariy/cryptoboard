"use client";

import { redirect } from "next/navigation";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[var(--black0)]">
      <h2 className="mb-8">Page not found!</h2>
      <p className="lts text-center">
        We are so sorry! Unfortunately, that page is not found! 😢
      </p>
      <p className="mts mt-2 text-center">
        Click on the button below to go on home page
      </p>
      <button
        onClick={() => {
          redirect("/cryptoboard");
        }}
        className="cursor-pointer px-20 py-2 min-[768px]:px-40 min-[768px]:py-4.5 bg-[var(--primary100)] text-[var(--black0)] rounded-[10px] mt-10 border border-transparent hover:border-[var(--primary100)] hover:bg-[var(--black0)] hover:text-[var(--primary100)] active:border-[var(--primary100)] active:bg-[var(--black0)] active:text-[var(--primary100)] transition-colors duration-250 "
      >
        Home
      </button>
    </div>
  );
};

export default NotFound;
