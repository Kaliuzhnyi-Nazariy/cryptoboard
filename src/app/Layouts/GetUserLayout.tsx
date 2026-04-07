"use client";

import { useSelector } from "react-redux";
import { isLoading } from "../redux/selectors";
import useAuthMiddleware from "./helper/authMiddleware";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getMe } from "../redux/requests/userRequests";

const GetUserLayout = ({ children }: { children: React.ReactNode }) => {
  const loading = useSelector(isLoading);

  const dispatch = useAppDispatch();
  // const { loadingUser } = useAuthMiddleware();
  useEffect(() => {
    dispatch(getMe());
  }, []);
  // if (loadingUser) {
  //   return <h1>loading...</h1>;
  // } else
  return (
    <>
      {loading ? (
        <div className="w-full  flex items-center justify-center">
          Loadnig...
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default GetUserLayout;
