import React from "react";
import advantages from "./advantages.json";
import Section from "../HeroComponents/Section";
import Image from "next/image";

const Advantages = () => {
  return (
    <Section extraStyles="bg-[var(--black0)] p-6 min-[768px]:py-20 min-[1440px]:py-24 ">
      <ul className="flex flex-col gap-10 min-[1440px]:gap-20">
        {advantages.map((adv, index) => {
          return (
            <li
              key={index}
              className="flex flex-col gap-8 min-[768px]:flex-row min-[768px]:even:flex-row-reverse "
            >
              <div className="relative w-full h-[278px] min-[375px]:w-[327px] min-[375px]:h-[334px] mx-auto min-[768px]:w-1/2 min-[1440px]:h-[600px] min-[1440px]:max-w-[587px] ">
                <Image src={adv.photo} alt={adv.title} fill className="" />
              </div>
              <div className="text-center min-[768px]:w-1/2 min-[768px]:flex min-[768px]:flex-col min-[768px]:justify-center min-[768px]:ml-auto min-[768px]:text-start min-[768px]:max-w-[502px]">
                <h2 className="min-[768px]:max-w-[484px]">{adv.title}</h2>
                <article className="mt-3 lts text-[var(--black80)]">
                  {adv.text}
                </article>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Advantages;
