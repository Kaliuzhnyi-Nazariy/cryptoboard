import Image from "next/image";
import React from "react";

const Comment = ({
  com,
}: {
  com: { photo: string; name: string; job: string; comment: string };
}) => {
  return (
    <>
      <div className="flex gap-1">
        <div className="size-10 relative z-[5]">
          <Image
            src={com.photo}
            alt={com.name}
            fill
            className="object-cover object-center rounded-full"
          />
        </div>
        <div className="">
          <h2 className="mts">{com.name}</h2>
          <p className="text-[var(--black60)] sts">{com.job}</p>
        </div>
      </div>
      <article className="mt-3 mts text-[var(--black80)]">
        {com.comment}
      </article>
    </>
  );
};

export default Comment;
