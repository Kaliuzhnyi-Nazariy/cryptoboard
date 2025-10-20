import React from "react";

const Modal = ({
  isModalOpen,
  closeModal,
  children,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`${
        isModalOpen ? "fixed" : "hidden"
      } w-full h-full bg-black/20 top-0 right-0`}
      onClick={closeModal}
    >
      <div className="absolute top-1/2 left-1/2 -translate-1/2 ">
        <div
          className="w-[250px] h-[400px] min-[425px]:w-[400px] min-[425px]:h-[550px] min-[1024px]:w-[500px] min-[1440px]:w-[600px] min-[1440px]:h-[700px] bg-white flex justify-center items-center px-3 "
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
