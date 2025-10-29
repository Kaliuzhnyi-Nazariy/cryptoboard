import React from "react";

const AppStats = () => {
  return (
    <ul className="py-10 rounded-[20px] bg-[var(--black0)] flex flex-col items-center gap-7 min-[768px]:flex-row min-[768px]:justify-around min-[768px]:py-8 z-1 ">
      <li className="flex flex-col items-center min-[768px]:w-1/3 min-[768px]:text-center ">
        <h1>99k</h1>
        <p className="elts">People have joined</p>
      </li>

      <li className="w-[120px] min-[768px]:w-[1px] h-[1px] min-[768px]:h-[120px] bg-[var(--black40)]"></li>

      <li className="flex flex-col items-center min-[768px]:w-1/3 min-[768px]:text-center ">
        <h1>50k</h1>
        <p className="elts">VVIP users have joined</p>
      </li>

      <li className="w-[120px] min-[768px]:w-[1px] h-[1px] min-[768px]:h-[120px] bg-[var(--black40)]"></li>

      <li className="flex flex-col items-center min-[768px]:w-1/3 min-[768px]:text-center ">
        <h1>100+</h1>
        <p className="elts">Big Companies have joined</p>
      </li>
    </ul>
  );
};

export default AppStats;
