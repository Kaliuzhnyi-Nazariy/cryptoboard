import Link from "next/link";
import React from "react";

const NavButtons = () => {
  const hoverStyles =
    "hover:bg-[var(--primary100)] hover:border-[var(--primary20)] hover:text-[var(--black0)] ";

  const focusStyles =
    "focus:bg-[var(--primary100)] focus:border-[var(--primary20)] focus:text-[var(--black0)] ";

  return (
    <nav className="hidden min-[576px]:block ">
      <ul className="flex gap-7">
        <li>
          <Link
            href="/auth/signin"
            className="hover:underline transition-transform duration-250"
          >
            Sign in
          </Link>
        </li>
        <li>
          <Link
            href="/auth/signup"
            className={`text-[var(--primary100)] border border-[var(--primary100)] px-6 py-3 rounded-[10px] ${hoverStyles} ${focusStyles} `}
          >
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavButtons;
