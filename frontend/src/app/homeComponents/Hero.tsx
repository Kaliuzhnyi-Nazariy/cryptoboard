import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      Hero
      <Link href={"/auth/signin"}>Signin</Link>
    </div>
  );
};

export default Hero;
