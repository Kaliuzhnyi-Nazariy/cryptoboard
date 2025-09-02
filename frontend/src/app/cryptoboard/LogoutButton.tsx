"use client";

import { useAppDispatch } from "../redux/hooks";
import { signout } from "../redux/requests/authRequests";

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={async () => {
        await dispatch(signout());
      }}
      className="px-2 py-1.5 "
    >
      signout
    </button>
  );
};

export default LogoutButton;
