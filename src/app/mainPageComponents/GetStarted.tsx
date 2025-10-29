import React from "react";
import Section from "./HeroComponents/Section";
import Image from "next/image";

const GetStarted = () => {
  return (
    <Section extraStyles="bg-[var(--black0)] py-14">
      <div className="text-center w-4/5 min-[375px]:min-w-[327px] max-w-[574px] flex flex-col items-center mx-auto">
        <h2 className="max-w-[515px]">Get Started in Just Few Minute</h2>
        <p className="mt-3 elts text-[var(--black80)]">
          Has a variety of features that make it the best place to start trading
        </p>
      </div>
      <ul className="mt-8 flex flex-col gap-6 items-center min-[1200px]:flex-row min-[1440px]:justify-around">
        <li className="border border-[var(--black20)] rounded-[20px] px-5 py-10 flex flex-col items-center gap-3 w-4/5 min-[375px]:min-w-[327px] max-w-[383px]">
          <div className="relative w-[170px] min-[1440px]:w-50  h-[170px] min-[1440px]:h-50">
            <Image src="/StartedSign.png" alt="Sign Up" fill />
          </div>
          <div className="text-center">
            <h5>Sign Up</h5>
            <article className="lts mt-3 text-[var(--black80)]">
              Sign up for free wallet on web, IOS or Android and follow our easy
              process to set up your profile
            </article>
          </div>
        </li>
        <li className="border border-[var(--black20)] rounded-[20px] px-5 py-10 flex flex-col items-center gap-3 w-4/5 min-[375px]:min-w-[327px] max-w-[383px]">
          <div className="relative w-[170px] min-[1440px]:w-50  h-[170px] min-[1440px]:h-50">
            <Image src="/startedFund.png" alt="Fund" fill />
          </div>
          <div className="text-center">
            <h5>Fund</h5>
            <article className="lts mt-3 text-[var(--black80)]">
              Choose you preferred payment method such as bank transfer or
              credit card to top up your wallet
            </article>
          </div>
        </li>
        <li className="border border-[var(--black20)] rounded-[20px] px-5 py-10 flex flex-col items-center gap-3 w-4/5 min-[375px]:min-w-[327px] max-w-[383px]">
          <div className="relative w-[170px] min-[1440px]:w-50  h-[170px] min-[1440px]:h-50">
            <Image src="/startedBuy.png" alt="Buy crypto" fill />
          </div>
          <div className="text-center">
            <h5>Buy Crypto</h5>
            <article className="lts mt-3 text-[var(--black80)]">
              Buy Bitcoin or Ethereum, the securely store it in your wallet or
              send it on easily to friends
            </article>
          </div>
        </li>
      </ul>
    </Section>
  );
};

export default GetStarted;
