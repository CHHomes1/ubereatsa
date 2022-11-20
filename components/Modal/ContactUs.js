import React from "react";
import Popup from "reactjs-popup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DriverForm from "../Forms/DriverForm";
import Image from "next/image";
import Contact from "../Forms/Contact";
const style = {
  btn: "underline",
  modalWrapper:
    "flex flex-col px-3 py-8 md:px-7 md:py-16 ",
  header: "",
  content: "",
  left: "flex flex-col",
  right: "",
  heading: "text-3xl md:text-4xl font-semibold my-4",
  para: "text-sm md:text-md self-end my-4",
};
const DriverRegister = () => (
  <Popup
    trigger={<button className={style.btn}> Create a business account </button>}
    modal
    nested
  >
    {(close) => (
      <div
        style={{ zIndex: 10 }}
        className="bg-amber-400 flex f w-[90vw] md:w-[50vw] items-start rounded-2xl"
      >
        <div
          className={style.modalWrapper}
          style={{ fontFamily: "Poppins,serif" }}
        >
          <div className={style.left}>
            <h2 className={style.heading}>
              Contact Us
            </h2>
            <p className={style.para}>
              At Net Dlivery we’re all about super fast food delivery! We make
              getting food effortless by delivering a wide range of food in 15
              mins.
            </p>

          </div>
          <div className={style.right}>
            <Contact />
          </div>
        </div>
        <button className="max-w-fit" onClick={close}>
          <AiOutlineCloseCircle className="text-2xl md:text-3xl m-1 md:m-4 text-white" />
        </button>
      </div>
    )}
  </Popup>
);
export default DriverRegister;
