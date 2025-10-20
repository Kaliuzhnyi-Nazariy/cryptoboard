"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../redux/hooks";
import { signout } from "../../redux/requests/authRequests";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";
const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  return (
    <button
      onClick={async () => {
        await dispatch(signout())
          .then(() => {
            toast.success("Successfully logged out!");
            navigate.push("/auth/signin");
            localStorage.setItem("page", "dashboard");
          })
          .catch((err: any) => {
            console.log(err);
            toast.error("Successfully logged out!");
          });
      }}
      className="cursor-pointer flex pl-6 items-center gap-3 w-full h-full hover:text-[var(--error100)] rounded-[10px] hover:bg-[var(--error20)] "
    >
      {" "}
      <LogOut className="size-5" /> Log out{" "}
    </button>
  );
};
export default LogoutButton;
