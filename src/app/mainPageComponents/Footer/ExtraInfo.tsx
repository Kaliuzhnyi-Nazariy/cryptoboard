import React from "react";
import Company from "./ExtraInfo/Company";
import Learn from "./ExtraInfo/Learn";
import Products from "./ExtraInfo/Products";
import Support from "./ExtraInfo/Support";
import Resources from "./ExtraInfo/Resources";

const ExtraInfo = () => {
  return (
    <ul className="grid grid-cols-2 w-full gap-y-6 mt-6 min-[768px]:grid-cols-3 min-[1440px]:grid-cols-5">
      <li>
        <Company />
      </li>
      <li>
        <Learn />
      </li>
      <li>
        <Products />
      </li>
      <li>
        <Support />
      </li>
      <li>
        <Resources />
      </li>
    </ul>
  );
};

export default ExtraInfo;
