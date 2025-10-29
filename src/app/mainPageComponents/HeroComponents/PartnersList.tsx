import Image from "next/image";
import Link from "next/link";
import React from "react";

const PartnersList = () => {
  return (
    <ul className="flex flex-wrap w-full gap-y-6 z-1">
      <li className="w-1/3 min-[1024px]:w-1/5 flex justify-center hover:scale-120 transition-transform duration-250">
        <Link href="https://www.binance.com/en" target="_blank">
          <Image
            src="/binanceLogo.png"
            alt="Bitcoin logo"
            width={95}
            height={20}
            className=""
          />
        </Link>
      </li>
      <li className="w-1/3 min-[1024px]:w-1/5 flex justify-center hover:scale-120 transition-transform duration-250">
        <Link href="https://www.coinbase.com/" target="_blank">
          <Image
            src="/coinbaseLogo.png"
            alt="Coinbase logo"
            width={84}
            height={15}
            className=""
          />
        </Link>
      </li>{" "}
      <li className="w-1/3 min-[1024px]:w-1/5 flex justify-center hover:scale-120 transition-transform duration-250">
        <Link href="https://www.bitcoin.com/" target="_blank">
          <Image
            src="/bitcoinLogo.png"
            alt="Bitcoin logo"
            width={74}
            height={16}
            className=""
          />
        </Link>
      </li>
      <li className="w-1/2 min-[1024px]:w-1/5 flex justify-center hover:scale-120 transition-transform duration-250">
        <Link href="https://tether.to/en/" target="_blank">
          <Image
            src="/tetherLogo.png"
            alt="Tether logo"
            width={74}
            height={20}
          />
        </Link>
      </li>
      <li className="w-1/2 min-[1024px]:w-1/5 flex justify-center hover:scale-120 transition-transform duration-250">
        <Link href="" target="_blank">
          <Image
            src="/bitmexLogo.png"
            alt="BitMEX logo"
            width={77}
            height={13}
          />
        </Link>
      </li>
    </ul>
  );
};

export default PartnersList;
