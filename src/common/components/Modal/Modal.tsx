import React from "react";
import Button from "../button/Button";
import { Outlet, useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/75 bg-opacity-50 flex  items-center justify-center z-50">
      <div
        className={`bg-primary  rounded-2xl shadow-lg w-full max-w-2xl  mx-4`}
      >
       
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Modal;
