import Link from "next/link";
import React from "react";
import Form from "./Form";

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-3">
      <Form />
      <Link href={"/auth/signin"} className="mt-2 min-[768px]:mt-5">
        You already have account? <span className="underline">Sign in!</span>
      </Link>
    </div>
  );
};

export default page;
