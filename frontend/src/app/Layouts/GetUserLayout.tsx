"use client";

import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { getMe } from "../redux/requests/userRequests";
import { useSelector } from "react-redux";
import { isLoading } from "../redux/selectors";

const GetUserLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          Loadnig...
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default GetUserLayout;
