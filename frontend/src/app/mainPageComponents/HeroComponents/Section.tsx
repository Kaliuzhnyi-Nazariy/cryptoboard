import React from "react";

const Section = ({
  children,
  extraStyles,
}: {
  children: React.ReactNode;
  extraStyles?: string;
}) => {
  return (
    <section
      className={`px-6 min-[768px]:px-10 min-[1440px]:px-[120px] ${
        extraStyles && extraStyles
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
