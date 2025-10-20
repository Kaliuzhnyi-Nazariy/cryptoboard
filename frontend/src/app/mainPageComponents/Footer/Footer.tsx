import React from "react";
import Section from "../HeroComponents/Section";
import Image from "next/image";
import SocialMedia from "./SocialMedia";
import ExtraInfo from "./ExtraInfo";

const Footer = () => {
  return (
    <Section extraStyles="bg-[var(--black0)] pt-14 pb-10 flex flex-col items-center">
      <div className="flex flex-col items-center w-full min-[1440px]:flex-row min-[1440px]:items-start min-[1440px]:justify-between">
        <div className="min-[1440px]:mr-[61px] min-[1440px]:w-[300px] min-[1440px]:items-start flex flex-col items-center">
          <Image src="/Logo.png" alt="urCrypto" width={250} height={60} />
          <p className="lts text-[var(--black80)] mt-1">
            Take your crypto to the next level
          </p>
          <SocialMedia />
        </div>
        <ExtraInfo />
      </div>
    </Section>
  );
};

export default Footer;
