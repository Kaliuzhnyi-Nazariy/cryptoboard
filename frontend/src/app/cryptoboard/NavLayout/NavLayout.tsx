import React from "react";
import Header from "../Components/Header/Header";
import Sidemenu from "../Components/sidemenu";

const NavLayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex flex-1 w-full h-auto">
        <Sidemenu />
        <div className="flex flex-2 w-full h-full items-center justify-center text-center flex-col min-[768px]:p-4 min-[1440px]:p-6 ">
          {children}
        </div>
      </div>
    </>
  );
};

export default NavLayoutComponent;
