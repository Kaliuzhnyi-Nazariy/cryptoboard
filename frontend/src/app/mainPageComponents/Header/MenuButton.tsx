"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MenuButton = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const openMenu = () => {
    setMenuStatus(true);
  };

  const closeMenu = () => {
    setMenuStatus(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 bg-[var(--black0)] z-20 
        ${
          menuStatus ? " translate-x-0 " : " translate-x-full"
        } w-full h-screen transition-transform duration-300 min-[576px]:hidden`}
      >
        <button
          type="button"
          onClick={closeMenu}
          className="absolute top-6 right-6"
        >
          <X />
        </button>

        <ul className="w-full h-full flex flex-col items-center justify-center gap-5">
          <li>
            <Link href="/auth/signin">Sign in</Link>
          </li>
          <li>
            <Link href="/auth/signup">Get started</Link>
          </li>
        </ul>
      </div>

      <button
        type="button"
        onClick={openMenu}
        className={`h-full ${
          menuStatus ? "hidden" : "block"
        } min-[576px]:hidden`}
      >
        <Menu />
      </button>
    </>
  );
};

export default MenuButton;
