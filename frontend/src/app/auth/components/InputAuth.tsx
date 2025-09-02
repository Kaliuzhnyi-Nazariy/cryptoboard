import React from "react";

const InputAuth = ({
  type = "email",
  name,
  placeholder,
  required = false,
}: {
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required ?? required}
      className="px-2 py-1 border-[1px] border-[var(--primary40)] focus-within:outline-[var(--primary100)] w-full min-[768px]:w-[500px] min-[768px]:mx-auto min-[768px]:px-3 min-[768px]:py-1.5 min-[1440px]:w-[700px] relative "
    />
  );
};

export default InputAuth;
