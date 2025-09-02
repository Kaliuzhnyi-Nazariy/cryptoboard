"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import InputAuth from "../components/InputAuth";
import { useAppDispatch } from "@/app/redux/hooks";
import { signup } from "@/app/redux/requests/authRequests";
import { SignupUser } from "@/app/types";

const Form = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    console.log({ email, name, password, confirmPassword });

    const res = await dispatch(
      signup({ email, name, password, confirmPassword } as SignupUser)
    );

    console.log(res);

    //   const response = await fetch("/api/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (response.ok) {
    //     router.push("/profile");
    //   } else {
    //     // Handle errors
    //   }
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-5">
      <h2>Sign up</h2>
      <form
        onSubmit={handleSubmit}
        className="gap-3 flex flex-col w-full min-[768px]:gap-5"
      >
        <InputAuth type="email" name="email" placeholder="Email" required />
        <InputAuth type="text" name="name" placeholder="Name" required />
        <div className="relative min-[768px]:w-[500px] min-[768px]:mx-auto min-[1440px]:w-[700px] ">
          <InputAuth
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-1 w-5 h-5 bg-red-500 -translate-1/2"
            onClick={() => setShowPassword(!showPassword)}
          ></button>
        </div>
        <div className="relative min-[768px]:w-[500px] min-[768px]:mx-auto min-[1440px]:w-[700px] ">
          <InputAuth
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            required
          />
          <button
            type="button"
            className="absolute top-1/2 right-1 w-5 h-5 bg-red-500 -translate-1/2"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          ></button>
        </div>
        <button
          type="submit"
          className="mt-2 uppercase bg-[var(--primary80)] px-6 py-1.5 flex shrink justify-center items-center text-[var(--black0)] hover:bg-[var(--primary20)] hover:text-[var(--primary100)] border-[1px] hover:border-[var(--primary100)] active:bg-[var(--primary20)] active:text-[var(--primary100)] active:border-[var(--primary100)] mx-auto w-fit leading-normal min-[1440px]:px-10 min-[1440px]:py-2 min-[1440px]:mt-3 "
        >
          sign up
        </button>
      </form>
    </div>
  );
};

export default Form;
