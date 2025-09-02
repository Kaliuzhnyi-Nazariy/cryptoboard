"use client";

import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { getMe } from "./redux/requests/userRequests";

const GetUserLayout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      const res = await dispatch(getMe());
      console.log(res);
    };

    getData();
  }, [dispatch]);

  return <>{children}</>;
};

export default GetUserLayout;
