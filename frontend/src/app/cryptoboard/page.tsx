import React from "react";
import Sidemenu from "./sidemenu";

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-purple-600 text-white flex items-center justify-center">
      cryptoboard
      <Sidemenu />
    </div>
  );
};

export default Page;
