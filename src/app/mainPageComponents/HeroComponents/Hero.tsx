"use client";
import React, { useState } from "react";
import Section from "./Section";
import Link from "next/link";
import Image from "next/image";
import PartnersList from "./PartnersList";
import AppStats from "./AppStat/AppStats";

const Hero = () => {
  const [inputEmailValue, setEmailValue] = useState("");

  return (
    <Section extraStyles="bg-[linear-gradient(var(--black0),var(--black20))] py-14 flex flex-col gap-14 relative min-[1440px]:py-24">
      {/* <Section extraStyles="bg-[var(--black0)] py-14 flex flex-col gap-14 "> */}
      <div className="min-[1440px]:w-[604px] mx-auto z-1">
        <h1 className="flex flex-col items-center text-center">
          <span className="text-[var(--primary100)]">One plataform </span>
          all things Crypto
        </h1>
        <article className="delts text-[var(--black80)] text-center mt-4">
          Open a free account in minutes right from your phone and make your
          money go further
        </article>
        {/* make input and button as link, however if user input sth in the field save it to localhost and set it as email, and split by @ and add left part as name if not add that as name */}
        <div className="flex flex-col gap-3 mt-8 min-[576px]:flex-row min-[576px]:h-[60px] min-[576px]:justify-center z-10 relative">
          <input
            type="text"
            className="border border-[var(--primary100)] px-6 py-4.5 rounded-[10px] lts min-[576px]:w-4/6 bg-[var(--black0)] z-10 "
            placeholder="Email Adress..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              localStorage.setItem("address", e.currentTarget.value);
              setEmailValue(e.currentTarget.value);
            }}
            value={inputEmailValue}
          />
          <Link
            href="/auth/signup"
            className="w-full py-4.5 bg-[var(--primary100)] text-[var(--black0)] rounded-[10px] text-center min-[576px]:!w-36 min-[1440px]:w-[169px] z-10 "
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="hidden w-[980px] h-[600px] bg-gray-800 mx-auto mt-10 min-[1440px]:block z-1">
        <Image src="/appMock.png" alt="mock of app" width={980} height={600} />
      </div>
      <PartnersList />

      {/* app stats */}

      <AppStats />

      {/* <div className="py-10 rounded-[20px] bg-[var(--black0)] flex flex-col items-center gap-7 ">
        <div className="flex flex-col items-center">
          <h1>99k</h1>
          <p className="elts">People have joined</p>
        </div>

        <div className="w-[120px] h-[1px] bg-[var(--black40)]"></div>
      </div> */}

      <div
        className="absolute w-full h-[423px] min-[1440px]:h-[1013px] -translate-x-1/2 left-1/2 -translate-y-[53%] min-[425px]:-translate-y-[50%] min-[576px]:-translate-y-[45%] min-[768px]:-translate-y-1/3 min-[1024px]:-translate-y-[30%] top-1/5 min-[1440px]:top-0 min-[1440px]:-translate-y-0 overflow-hidden
 "
      >
        <div
          className="z-20 w-[calc(100vw+50px)] h-16 
          bg-[var(--black0)] blur-[10px]
          absolute -top-3 -left-3 min-[1440px]:blur-[16px]"
        ></div>
        <div
          className="
    absolute top-[10%] left-0
    -translate-x-6/9
    min-[1440px]:-translate-x-4/9
    -translate-y-1/2
    min-[1440px]:-translate-y-[55%]
    size-[320px] min-[1440px]:size-[762px]
    border border-[var(--black20)] rounded-full
  "
        ></div>
        <div
          className="absolute top-0 right-0
            -translate-y-[41%]
            translate-x-[28%]
          size-[166.5px] min-[1440px]:size-[399px]
          border border-[var(--black20)] rounded-full select-none
         "
        ></div>
        <div
          className="absolute top-1/2 left-0
          -translate-x-1/2
          min-[1440px]:-translate-x-[32%]
          -translate-y-1/2 
          min-[1440px]:-translate-y-[48%]
          size-[104.5px] min-[1440px]:size-[387px] 
          border border-[var(--black20)] rounded-full select-none "
        ></div>
        <div
          className="absolute bottom-0 right-0 
          translate-x-[55%]
          min-[1440px]:translate-x-[22px]
          -translate-y-2/8
          min-[1440px]:-translate-y-2/9
          size-[121px] min-[1440px]:size-[399px] 
          border border-[var(--black20)] rounded-full select-none "
        ></div>
        {/* <div className="absolute size-[320px] min-h-[320px] border border-[var(--black100)] -translate-1/2 bottom-1/6 -left-[52px] rounded-full min-[1440px]:top-1/12 min-[1440px]:size-[762px] z-[0.5] select-none "></div> */}
        {/* <div className="absolute size-[166.5px] border border-[var(--black100)] -translate-1/2 top-5 -right-3/8 min-[576px]:-right-2/8 min-[768px]:-right-1/8 rounded-full min-[1440px]:translate-x-1/2 min-[1440px]:top-[5%] min-[1440px]:right-[5%] min-[1440px]:size-[399px] z-[0.5] select-none "></div> */}
        {/*<div className="absolute size-[104.5px] border border-[var(--black100)] -translate-1/2 top-[48%] left-0 rounded-full min-[1440px]:top-[40%] min-[1440px]:left-18 min-[1440px]:size-[387px] z-[0.5] select-none "></div>
        <div className="absolute size-[121px] border border-[var(--black100)] bottom-0 -right-[20%] rounded-full min-[1440px]:top-[30%] min-[1440px]:translate-x-1/2 min-[1440px]:translate-y-1/2 min-[1440px]:right-40 min-[1440px]:size-[399px] z-[0.5] select-none "></div> */}
        <div
          className="z-20 min-[1440px]:w-[calc(100vw+50px)] min-[1440px]:h-50 
        min-[1440px]:bg-[var(--black0)] min-[1440px]:blur-[10px]
        min-[1440px]:absolute min-[1440px]:bottom-10 min-[1440px]:-left-3 min-[1440px]:min-[1440px]:blur-[32px]"
        ></div>
      </div>
    </Section>
  );
};

export default Hero;
