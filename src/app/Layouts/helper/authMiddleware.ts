import { useAppDispatch } from "@/app/redux/hooks";
import { getMe } from "@/app/redux/requests/userRequests";
import { userToken } from "@/app/redux/selectors";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const protectedRoutes = [
  "/cryptoboard",
  "/cryptoboard/update",
  "/cryptoboard/coins",
  "/cryptoboard/wallets",
  "/cryptoboard/analytics",
  "/cryptoboard/myportfolio",
  "/settings",
  "/help",
];

const restrictedRoutes = ["/auth/signin", "/auth/signup"];

const useAuthMiddleware = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [loadingUser, setLoadingUser] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoadingUser(true);
        await dispatch(getMe());
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingUser(false);
      }
    }

    fetchUser();
  }, [dispatch, pathname]);

  const token = useSelector(userToken);

  useEffect(() => {
    if (loadingUser) return;

    if (!token && protectedRoutes.includes(pathname)) {
      router.replace("/auth/signin");
      return;
    }

    if (token && restrictedRoutes.includes(pathname)) {
      router.replace("/cryptoboard");
      return;
    }
  }, [token, pathname, loadingUser, router]);

  return { loadingUser };
};

export default useAuthMiddleware;
