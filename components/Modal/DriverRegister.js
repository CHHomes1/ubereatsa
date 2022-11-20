import React from "react";
import Popup from "reactjs-popup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DriverForm from "../Forms/DriverForm";
import Image from "next/image";
const style = {
  btn: "bg-amber-400 text-white font-semibold tracking-wide  px-4 py-3 md:px-5 md:px-6 mx-3 rounded w-[30vw]  md:w-[10vw] hover:opacity-[0.85]",
  modalWrapper:
    "flex flex-col md:flex-row px-3 py-8 md:px-7 md:py-16 w-[100%] justify-between",
  header: "",
  content: "",
  left: "w-[90%] md:w-[40%] flex flex-col",
  right: "w-[90%] md:w-[40%]",
  heading: "text-lg md:text-3xl font-semibold my-4",
  para: "text-sm md:text-md self-end my-4",
};
const DriverRegister = () => (
  <Popup trigger={<button className={style.btn}> Driver </button>} modal nested>
    {(close) => (
      <div
        style={{ zIndex: 10 }}
        className="bg-amber-400   flex w-[90vw] md:w-[70vw] items-start rounded-2xl"
      >
        <div
          className={style.modalWrapper}
          style={{ fontFamily: "Poppins,serif" }}
        >
          <div className={style.left}>
            <h2 className={style.heading}>
              Sign up as a driver with Net Delivery
            </h2>
            <p className={style.para}>
              At Net Dlivery we’re all about super fast food delivery! We make
              getting food effortless by delivering a wide range of food in 15
              mins. 
            </p>
            <div className="hidden md:flex">
              <Image src="/boy2.png" width={300} height={300} />
            </div>
          </div>
          <div className={style.right}>
            <DriverForm />
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
