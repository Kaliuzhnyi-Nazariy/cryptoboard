"use client";

import { useEffect, useState } from "react";

const InputAuth = ({
  type = "email",
  name,
  placeholder,
  required = false,
  value,
}: {
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
}) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value) {
      if (name === "email") {
        setInputValue(value);
      } else if (name === "name") {
        if (value.split("").includes("@")) {
          const nameValue = value.split("@")[0];
          setInputValue(nameValue);
          localStorage.removeItem("address");
        } else {
          setInputValue(value);
          localStorage.removeItem("address");
        }
      }
    }
  }, [name, value]);

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required ?? required}
      className="px-2 py-1 border-[1px] border-[var(--primary40)] focus-within:outline-[var(--primary100)] w-full min-[768px]:w-[500px] min-[768px]:mx-auto min-[768px]:px-3 min-[768px]:py-1.5 min-[1440px]:w-[700px] relative "
      value={inputValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
      }}
    />
  );
};

export default InputAuth;
