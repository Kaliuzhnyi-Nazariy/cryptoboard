import React from "react";
import MenuButton from "./MenuButton";
import NavButtons from "./NavButtons";
import Image from "next/image";

const HeaderMain = () => {
  return (
    <header className="flex w-full justify-between px-6 h-[70px] items-center bg-[var(--black0)]">
      <Image src="/blackLogo.png" alt="urCrypto" width={129} height={32} />
      <NavButtons />
      <MenuButton />
    </header>
  );
};

export default HeaderMain;
