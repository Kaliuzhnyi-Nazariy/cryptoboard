"use client";
import { useAppDispatch } from "@/app/redux/hooks";
import { updateUser } from "@/app/redux/requests/userRequests";
import { avatarLink, email, name } from "@/app/redux/selectors";
import { Eye, EyeClosed } from "lucide-react";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";

const UpdForm = () => {
  const username = useSelector(name);
  const useremail = useSelector(email);
  const useravatar = useSelector(avatarLink);
  // const useravatar = useSelector(avatarLink);

  const [photo, setPhoto] = useState<string | null>(null);

  const [nameVal, setNameVal] = useState(username);
  const [emailVal, setEmailVal] = useState(useremail);
  const [passwordVal, setPasswordVal] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();

  async function updSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event?.currentTarget);
    const usernameForm = formData.get("name");
    const useremailForm = formData.get("email");
    const userpasswordForm = formData.get("password");
    const useravatarForm = formData.get("avatar");

    // console.log({
    //   usernameForm,
    //   useremailForm,
    //   userpasswordForm,
    //   useravatarForm,
    // });

    // console.log({
    //   usernameForm,
    //   useremailForm,
    //   userpasswordForm,
    //   useravatar,
    // });

    if (!usernameForm || !useremailForm || !useravatarForm || !userpasswordForm)
      return;

    // if (useravatarForm) {
    //   console.log("Avatar is a File:", useravatarForm);
    // } else {
    //   console.log("No file selected");
    // }

    dispatch(updateUser(formData));
  }

  const photoValidator = (file: File | any) => {
    const validFormats = ["image/webp", "image/svg", "image/png", "image/jpg"];

    const isFormatValid = validFormats.includes(file[0].type);

    if (!isFormatValid) throw new Error("Wrong format!");

    const maxSize = 1 * 1024 * 1024;

    if (file[0].size > maxSize) throw new Error("File is too large!");

    const previewUrl = URL.createObjectURL(file[0]);

    setPhoto(`${previewUrl}`);
    return file[0];
  };

  return (
    <div className="flex flex-col items-center min-[768px]:justify-center bg-[var(--black0)] w-full h-full px-6 py-4 ">
      <h2 className="mb-4 min-[768px]:mb-5 min-[1440px]:mb-6 uppercase  ">
        Update your info!
      </h2>
      <form
        onSubmit={updSubmit}
        className="flex flex-col gap-4 min-[768px]:gap-5 min-[1440px]:gap-6 min-[1440px]:w-full min-[1440px]:flex-row min-[1440px]:justify-around "
      >
        <div className="size-20  rounded-full relative mx-auto group min-[1440px]:w-1/2 min-[1440px]:flex min-[1440px]:justify-center min-[1440px]:items-center min-[1440px]:h-full">
          <input
            type="file"
            accept=".webp, .svg, .png, .jpeg"
            name="avatar"
            className={`absolute  w-20 h-20 rounded-full border border-[var(--primary60)] bg-[var(--black100)]/10 z-10 ${
              useravatar || photo ? "hidden" : "block"
            } group-hover:block group-active:block cursor-pointer transition-all min-[1440px]:w-40 min-[1440px]:h-40 min-[1440px]:top-1/2 min-[1440px]:left-1/2 min-[1440px]:-translate-1/2 `}
            onChange={(e) => photoValidator(e.currentTarget.files)}
          />
          {photo ?? useravatar ? (
            <Image
              src={(photo || useravatar)!}
              alt={`${username}'s avatar`}
              width={80}
              height={80}
              sizes="(min-width: 1440px) 160px, 80px"
              className="rounded-full object-center min-[1440px]:size-40 "
            />
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col gap-3 min-[1440px]:w-1/2 min-[1440px]:flex min-[1440px]:flex-col min-[1440px]:gap-6">
          <div className="relative w-full">
            <p className="absolute px-2 py-0.5 -top-2.5 left-1 bg-[var(--black0)] ests">
              Name
            </p>
            <input
              value={nameVal}
              type="text"
              name="name"
              onChange={(e) => setNameVal(e.currentTarget.value)}
              required
              className="px-2 py-1 min-[1440px]:px-3 min-[1440px]:py-1.5 border-[1px] border-[var(--primary40)] focus-within:outline-[var(--primary100)] w-full"
            />
          </div>
          <div className="relative w-full">
            <p className="absolute px-2 py-0.5 -top-2.5 left-1 bg-[var(--black0)] ests">
              Email
            </p>
            <input
              value={emailVal}
              type="email"
              name="email"
              onChange={(e) => setEmailVal(e.currentTarget.value)}
              required
              className="px-2 py-1 border-[1px] border-[var(--primary40)] focus-within:outline-[var(--primary100)] w-full"
            />
          </div>

          <div className="flex flex-col w-full">
            <div className="relative w-full">
              <p className="absolute px-2 py-0.5 -top-2.5 left-1 bg-[var(--black0)] ests">
                Password
              </p>
              <input
                type={showPassword ? "text" : "password"}
                onChange={(e) => setPasswordVal(e.currentTarget.value)}
                value={passwordVal}
                name="password"
                required
                className=" px-2 py-1 border-[1px] border-[var(--primary40)] focus-within:outline-[var(--primary100)] w-full"
              />
              <button
                type="button"
                className="absolute -translate-1/2 top-1/2 right-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </button>
            </div>
            <small className="ests text-[var(--black60)]">
              If you want to stay with your password just rewrite it!
            </small>
          </div>

          <button
            type="submit"
            disabled={!nameVal || !emailVal || !passwordVal}
            className="px-2 py-1 bg-[var(--primary100)] text-[var(--black0)] disabled:opacity-50 uppercase "
          >
            update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdForm;
