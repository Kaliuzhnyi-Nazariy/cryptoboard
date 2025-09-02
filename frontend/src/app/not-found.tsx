"use client";

import { redirect } from "next/navigation";
import React from "react";

const NotFound = () => {
  return (
    <div>
      NotFound
      <button
        onClick={() => {
          redirect("/");
        }}
        className="cursor-pointer px-2 py-1"
      >
        Home
      </button>
    </div>
  );
};

export default NotFound;
