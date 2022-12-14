import React from "react";
import Popup from "reactjs-popup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DriverForm from "../Forms/DriverForm";
import Image from "next/image";
const DriverRegister = ({footer}) => {
  const style = {
    btn: ` ${!footer&&'underline'}`,
    modalWrapper:
      "flex flex-col md:flex-row px-3 py-8 md:px-7 md:py-8 w-[100%] justify-between",
    header: "",
    content: "",
    left: "w-[100%] md:w-[100%] flex flex-col",
    right: "w-[100%] md:w-[100%]",
    heading: "text-lg md:text-3xl font-semibold my-4",
    para: "text-sm md:text-md self-end my-4",
  };
  return(
  <Popup
    trigger={<button className={style.btn}> Signup as courier partner </button>}
    modal
    nested
    style={{ zIndex: 200 }}

  >
    {(close) => (
      <div
      style={{ zIndex: 200 }}
      className="bg-amber-400 flex flex-col w-[90vw] md:w-[30vw] items-start rounded-2xl"
      >
        <button className="self-end" onClick={close}>
          <AiOutlineCloseCircle className="text-2xl md:text-3xl m-1 md:m-4 text-white" />
        </button>
        <div
          className={style.modalWrapper}
          style={{ fontFamily: "Poppins,serif" }}
        >
          <div className={style.right}>
            <DriverForm />
          </div>
        </div>
      </div>
    )}
  </Popup>
)};
export default DriverRegister;
