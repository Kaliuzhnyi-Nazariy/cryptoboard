"use client";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/hooks";
import { deleteUser } from "../redux/requests/userRequests";
import { name, userError } from "../redux/selectors";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const DeleteButton = ({ children }: { children: React.ReactNode }) => {
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  const nameUser = useSelector(name);
  const err = useSelector(userError);

  const handleDelete = async () => {
    // console.log("user deleted");
    await dispatch(deleteUser())
      .then(() => {
        navigate.push("/auth/signup");
        toast.success(`${nameUser}'s account deleted!`);
        localStorage.setItem("page", "dashboard");
      })
      .catch(() => {
        toast.error(err);
      });
  };

  return (
    <button
      type="button"
      className="w-4/5 border border-[var(--error100)] rounded-[10px] bg-[var(--error40)] text-[var(--black0)] text-start px-3 py-1 hover:cursor-pointer hover:scale-110  active:cursor-pointer active:scale-110 transition-transform duration-200"
      onClick={handleDelete}
    >
      {children}
    </button>
  );
};

export default DeleteButton;
