"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useState } from "react";
import comments from "./Comments.json";
import Image from "next/image";
import Comment from "./Comment";

const PeopleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // console.log(currentSlide === 0);

  const [slideRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      origin: "center",
      perView: "auto",
      spacing: 16,
    },
    loop: true,

    // focus:
  });

  const sliderStyle =
    " min-w-[200px] w-[200px] max-w-[200px] min-[375px]:w-[282px] min-[375px]:min-w-[282px] min-[375px]:max-w-[282px] bg-[var(--black0)] h-fit border border-[var(--black20)] rounded-[10px] px-5 py-4";

  return (
    <div
      className="w-full keen-slider mt-8 flex min-[1440px]:hidden "
      ref={slideRef}
    >
      {comments.map((com, ind) => {
        return (
          <div key={ind} className={`keen-slider__slide ${sliderStyle}`}>
            {/* <div className="flex gap-1">
              <div className="size-10 relative">
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
            </article> */}
            <Comment com={com} />
          </div>
        );
      })}
    </div>
  );
};

export default PeopleSlider;

// tomoko
// lukas, Noah, Marcus
