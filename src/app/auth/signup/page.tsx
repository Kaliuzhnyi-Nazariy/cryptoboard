import Link from "next/link";
import React from "react";
import Form from "./Form";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-3">
      <Form />
      <div className="text-center mb-5 ">
        <Link href={"/auth/signin"} className="min-[768px]:mb-10">
          You already have account? <span className="underline">Sign in!</span>
        </Link>
      </div>
    </div>
  );
};

export default page;
