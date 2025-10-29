import Image from "next/image";
import React from "react";

const Trusted = () => {
  return (
    <section className="bg-[var(--black0)] min-[768px]:flex min-[768px]:flex-row-reverse border-transparent">
      <div className="relative w-full min-h-[396px] min-[768px]:w-1/2 min-[768px]:max-h-[806px]">
        <Image src="/TrustedPhoto.png" alt="Trading picture" fill />
      </div>
      <div className="min-[768px]:w-1/2 min-[1024px]:w-[488px] min-[768px]:mx-auto px-6 text-center max-[767px]:mt-8 max-[767px]:pb-14 min-[768px]:py-8 min-[1440px]:py-24 ">
        <h2 className="text-start">The Most Trusted Cryptocurrency Platform</h2>
        <ul className="mt-8 flex flex-col gap-6 min-[1024px]:w-[426px]">
          <li className="text-start">
            <h5 className="text-[var(--primary40)] mb-4">01</h5>
            <h5 className="mb-2">Sync between plantforms</h5>
            <article className="lts text-[var(--black80)]">
              No matter if you{"'"}re using our web interface or mobile app —
              your data is always synced. Just one account for all our services.
            </article>
          </li>
          <li className="w-full h-[1px] bg-[var(--black20)]"></li>
          <li className="text-start">
            <h5 className="text-[var(--primary40)] mb-4">02</h5>
            <h5 className="mb-2">More focus, less clutter</h5>
            <article className="lts text-[var(--black80)]">
              No ads, just the crypto and content you love.
            </article>
          </li>
          <li className="w-full h-[1px] bg-[var(--black20)]"></li>
          <li className="text-start">
            <h5 className="text-[var(--primary40)] mb-4">03</h5>
            <h5 className="mb-2">Security by default</h5>
            <article className="lts text-[var(--black80)]">
              Enable privacy mode and app locking to protect your data.
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Trusted;
