"use client";
import { email, name } from "@/app/redux/selectors";
import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";

const UpdForm = () => {
  const username = useSelector(name);
  const useremail = useSelector(email);

  const [nameVal, setNameVal] = useState(username);
  const [emailVal, setEmailVal] = useState(useremail);

  const [showPassword, setShowPassword] = useState(false);

  async function updSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event?.currentTarget);
    const username = formData.get("name");
    const useremail = formData.get("email");
    const userpassword = formData.get("password");

    console.log({ username, useremail, userpassword });
  }

  return (
    <div className="flex flex-col items-center bg-[var(--black0)] px-6 py-4 ">
      <h2>Update user data!</h2>
      <form onSubmit={updSubmit} className="flex flex-col gap-4">
        <input
          value={nameVal}
          type="text"
          name="name"
          onChange={(e) => setNameVal(e.currentTarget.value)}
          required
          className="px-2 py-1 border-[1px] border-[var(--primary40)] focus-within:outline-[var(--primary100)]"
        />
        <input
          value={emailVal}
          type="email"
          name="email"
          onChange={(e) => setEmailVal(e.currentTarget.value)}
          required
          className="px-2 py-1 border-[1px] border-[var(--primary40)] focus-within:outline-[var(--primary100)]"
        />

        <div className="flex flex-col w-full">
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              className="w-full px-2 py-1 border-[1px] border-[var(--primary40)] focus-within:outline-[var(--primary100)]"
            />
            <button
              type="button"
              className="size-5 bg-red-200 absolute -translate-1/2 top-1/2 right-1"
              onClick={() => setShowPassword(!showPassword)}
            ></button>
          </div>
          <small className="ests text-[var(--black60)]">
            If you want to stay with your password just rewrite it!
          </small>
        </div>

        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default UpdForm;
