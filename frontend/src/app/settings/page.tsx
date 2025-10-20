import React from "react";
import DeleteButton from "./DeleteButton";

const page = () => {
  return (
    <div className="w-full h-full bg-[var(--black0)]">
      <h3 className="mx-auto w-full mt-5">Settings</h3>
      <ul className="mt-3">
        <li>
          <DeleteButton>
            <div className="flex flex-col">
              <h5>Delete account</h5>
              <small className="ests">
                If you will delete your account everything gonna be lost!
              </small>
            </div>
          </DeleteButton>
        </li>
      </ul>
    </div>
  );
};

export default page;
