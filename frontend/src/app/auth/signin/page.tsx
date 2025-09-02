import Link from "next/link";
import Form from "./Form";

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-3">
      <Form />
      <Link href={"/auth/signup"} className="mt-2 min-[768px]:mt-5">
        Don&apos;t have account? <span className="underline">Sign up!</span>
      </Link>
    </div>
  );
};

export default page;
