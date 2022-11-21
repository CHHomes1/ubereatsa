import React from "react";
import Popup from "reactjs-popup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import RestaurantForm from "../Forms/RestaurantForm";
import Image from "next/image";
const style = {
  btn: " underline",
  modalWrapper:
    "flex flex-col md:flex-row px-3 py-8 md:px-7 md:py-6 w-[100%] justify-between",
  header: "",
  content: "",
  left: "w-[100%] md:w-[100%] flex flex-col",
  right: "w-[100%] md:w-[100%]",
  heading: "text-lg md:text-3xl font-semibold my-4",
  para: "text-sm md:text-md self-end my-4",
};
const RestaurantRegister = () => (
  <Popup
    trigger={<button className={style.btn}> Add your restaurant </button>}
    modal
    nested
  >
    {(close) => (
      <div
        style={{ zIndex: 10 }}
        className=" my-12 bg-amber-400 flex-col flex w-[90vw] md:w-[30vw] items-start rounded-2xl"
      >
        <button className="self-end" onClick={close}>
          <AiOutlineCloseCircle className="text-2xl md:text-3xl m-1 md:m-4 text-white" />
        </button>
        <div
          className={style.modalWrapper}
          style={{ fontFamily: "Poppins,serif" }}
        >
          <div className={style.right}>
            <RestaurantForm />
          </div>
        </div>
      </div>
    )}
  </Popup>
);
export default RestaurantRegister;
