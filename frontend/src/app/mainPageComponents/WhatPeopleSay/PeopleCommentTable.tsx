import React from "react";
import comments from "./Comments.json";
import Comment from "./Comment";

const PeopleCommentTable = () => {
  const extraStyles = (ind: number) => {
    if (ind == 0 || ind == 2 || ind == 3) {
      return "row-start-1 row-end-2";
    } else if (ind == 1) {
      return "row-start-1 row-end-3";
    } else if (ind == 4) {
      return "row-start-2 row-end-3";
    } else if (ind == 5) {
      return "row-start-3 row-end-4 col-start-2";
    } else if (ind == 6) {
      return "row-start-2 row-end-4 col-start-3";
    } else if (ind == 7) {
      return "row-start-2 row-end-4 col-start-4";
    } else if (ind == 8) {
      return "row-start-4 row-end-5 col-start-4";
    } else if (ind === 9) {
      return "row-start-4 row-end-6 col-start-2";
    } else if (ind == 10) {
      return "col-start-3";
    } else if (ind == 11) {
      return "row-start-3 row-end-5 col-start-1";
    }
  };

  //   const styleBefore =
  //     "before:bg-[linear-gradient(to_bottom,transparent,var((--primary100))] before:content-[''] before:w-full before:h-full ";

  const styleBefore =
    "before:absolute before:inset-0 before:content-[''] before:w-full before:h-full  before:bg-[linear-gradient(to_bottom,transparent_35%,var(--black0)_100%)] before:z-10";

  return (
    <ul
      className={`hidden min-[1440px]:grid grid-cols-4 grid-rows-5 gap-6 relative ${styleBefore} `}
    >
      {comments.map((com, ind) => {
        //   {comments.map((com, ind) => {
        return (
          <li
            key={ind}
            className={`min-w-[200px] w-[200px] max-w-[200px] min-[375px]:w-[282px] min-[375px]:min-w-[282px] min-[375px]:max-w-[282px] bg-[var(--black0)] h-fit border border-[var(--black20)] rounded-[10px] px-5 py-4 justify-self-center self-center ${extraStyles(
              ind
            )}`}
          >
            <Comment com={com} />
          </li>
        );
      })}
    </ul>
  );
};

export default PeopleCommentTable;
