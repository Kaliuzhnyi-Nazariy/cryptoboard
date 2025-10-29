import React from "react";
import Section from "./HeroComponents/Section";
import Link from "next/link";

const Join = () => {
  return (
    <Section extraStyles="max-[767px]:bg-[var(--primary100)] py-18 min-[768px]:bg-[var(--black0)] overflow-hidden">
      <div className="w-full h-full min-[768px]:bg-[var(--primary100)] min-[768px]:py-[70px] min-[768px]:rounded-[20px] relative min-[768px]:overflow-hidden z-20 ">
        <div className="flex flex-col text-center min-[768px]:w-[530px] min-[768px]:mx-auto min-[1440px]:ml-[104px] min-[1440px]:mx-0 min-[1440px]:text-start z-20 ">
          <h3 className="text-[var(--black0)] text-[40px] leading-[120px] z-20">
            Join a new generation of investors
          </h3>
          <Link
            href="/auth/signup"
            className="bg-[var(--black0)] rounded-[10px] py-4.5 px-10 mt-6 min-[768px]:w-[169px] lts min-[768px]:mx-auto min-[1440px]:ml-0 min-[1440px]:mt-8 z-20 text-center"
          >
            Get started
          </Link>
        </div>
        <div className="absolute size-[233px] rounded-full bg-[var(--primary80)] top-0 left-0 -translate-x-10/12 -translate-y-10/12 z-1 min-[768px]:-translate-1/2 min-[1440px]:-translate-5/11 opacity-60 "></div>
        <div className="absolute size-[921px] rounded-full bg-[#4B82EF] top-0 left-0 opacity-60 z-1 translate-x-1/8 -translate-y-3 min-[768px]:translate-x-3/8 min-[1440px]:-translate-y-8 min-[1440px]:translate-x-8/11 "></div>
        <div className="absolute size-[430px] rounded-full border border-[var(--primary60)] top-0 left-0 translate-y-3/7 z-1 min-[768px]:translate-x-4/11 min-[1440px]:translate-x-19/20 min-[1440px]:translate-y-3/9 "></div>
        <div
          className="absolute size-[120px] 
        bg-[radial-gradient(var(--primary60)_10%,transparent_10%)]  bg-position-[0px_0px,0px_0px] bg-size-[12px_12px] bg-repeat bottom-0 right-2.5 translate-y-4/10 min-[768px]:translate-y-0 min-[768px]:-translate-x-16"
        ></div>
      </div>
    </Section>
  );
};

export default Join;
