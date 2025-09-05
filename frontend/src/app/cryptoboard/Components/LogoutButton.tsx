"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../redux/hooks";
import { signout } from "../../redux/requests/authRequests";
import { LogOut, LogOutIcon } from "lucide-react";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();

  return (
    <button
      onClick={async () => {
        await dispatch(signout())
          .then(() => {
            navigate.push("/auth/signin");
          })
          .catch((err: any) => {
            console.log(err);
          });
      }}
      className="cursor-pointer flex gap-3"
    >
      <LogOut className="size-5" />
      Log out
    </button>
  );
};

export default LogoutButton;
