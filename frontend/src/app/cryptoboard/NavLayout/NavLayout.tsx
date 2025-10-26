import React from "react";
import Header from "../Components/Header/Header";
import Sidemenu from "../Components/sidemenu";

const NavLayoutComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {/* <div className="flex flex-1 w-full h-full">
        <Sidemenu extraStyles="hidden min-[768px]:flex " />
        {/* <div className="flex flex-2 w-full h-auto items-center justify-center text-center flex-col min-[768px]:p-4 min-[1440px]:p-6 ">
          {children}
        </div> */}
      <div className="flex flex-1 w-full h-screen">
        <Sidemenu extraStyles="hidden min-[768px]:flex " />
        {/* <div className="flex flex-col flex-2 w-full items-center justify-start text-center min-[768px]:p-4 min-[1440px]:p-6 overflow-y-auto bg-blue-900">
          {children}
        </div> */}
        <div className="flex flex-col flex-2 w-full h-auto items-center justify-start text-center min-[768px]:p-4 min-[1440px]:p-6 overflow-y-auto min-[768px]:h-[87vh] ">
          {children}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default NavLayoutComponent;
