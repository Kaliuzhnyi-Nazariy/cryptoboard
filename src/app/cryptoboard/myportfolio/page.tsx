"use client";

import { useAppDispatch } from "@/app/redux/hooks";
import { getMe } from "../../redux/requests/userRequests";
import { user, userTokens } from "@/app/redux/selectors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import TokenList from "./TokenList";

const Page = () => {
  // const dispatch = useAppDispatch();

  // // useEffect(() => {
  // //   dispatch(getMe());
  // // }, [dispatch]);

  // const userTokensList = useSelector(userTokens);
  // const userData = useSelector(user);

  // console.log(userTokensList);
  // console.log("userData: ", { userData });

  return (
    // <div className="p-6 bg-[var(--black0)] w-full h-full">
    //   <h3>Your tokens: </h3>
    //   <TokenList />
    // </div>
    <div className="p-6 bg-[var(--black0)] w-full h-full flex flex-col">
      <h3 className="mb-4">Your tokens: </h3>
      <div className="flex-1 flex items-center justify-center w-full">
        <TokenList />
      </div>
    </div>
  );
};

export default Page;
