import Link from "next/link";
import Form from "./Form";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-3">
      <Form />
      <div className="text-center mb-5">
        <Link href={"/auth/signup"} className="min-[768px]:mb-10">
          Don&apos;t have account? <span className="underline">Sign up!</span>
        </Link>
      </div>
    </div>
  );
};

export default page;
