"use client";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../redux/selectors";
import NavLayoutComponent from "../cryptoboard/NavLayout/NavLayout";
import { usePathname } from "next/navigation";

const protectedRoutes = [
  "/cryptoboard",
  "/cryptoboard/update",
  "/cryptoboard/coins",
];

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  const isUserLoggedIn = useSelector(isLoggedIn);
  const path = usePathname();
  const isProtectedRoute = protectedRoutes.includes(path);

  if (isUserLoggedIn && isProtectedRoute)
    return <NavLayoutComponent>{children}</NavLayoutComponent>;

  return <>{children}</>;
};

export default NavLayout;
