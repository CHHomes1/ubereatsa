import React from "react";
import Popup from "reactjs-popup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import RestaurantForm from "../Forms/RestaurantForm";
import Image from "next/image";
const style = {
  btn: "bg-amber-400 text-white font-semibold tracking-wide  px-4 py-3 md:px-5 md:px-6 mx-3 rounded w-[30vw] md:w-[10vw] hover:opacity-[0.85]",
  modalWrapper:
    "flex flex-col md:flex-row px-3 py-8 md:px-7 md:py-16 w-[100%] justify-between",
  header: "",
  content: "",
  left: "w-[100%] md:w-[40%] flex flex-col",
  right: "w-[100%] md:w-[40%]",
  heading: "text-lg md:text-3xl font-semibold my-4",
  para: "text-sm md:text-md self-end my-4",
};
const RestaurantRegister = () => (
  <Popup
    trigger={<button className={style.btn}> Restaurant </button>}
    modal
    nested
  >
    {(close) => (
      <div style={{zIndex:10}} className="bg-amber-400   flex w-[90vw] md:w-[70vw] items-start rounded-2xl">
        <div
          className={style.modalWrapper}
          style={{ fontFamily: "Poppins,serif" }}
        >
          <div className={style.left}>
            <h2 className={style.heading}>
              Sign up as Shopper on Net Delivery
            </h2>
            <p className={style.para}>
              At Net Delivery we are all about super fast grocery delivery! We
              make getting groceries effortless by delivering a wide range of
              groceries in 15 mins. 
            </p>
            <div className="hidden md:flex">

            <Image src="/res.png" width={300} height={300}/>
            </div>
          </div>
          <div className={style.right}>
            <RestaurantForm />
          </div>
        </div>
        <button className="max-w-fit" onClick={close}>
          <AiOutlineCloseCircle className="text-2xl md:text-3xl m-1 md:m-4 text-white" />
        </button>
      </div>
    )}
  </Popup>
);
export default RestaurantRegister;
