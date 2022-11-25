import React from "react";
import Popup from "reactjs-popup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";

const style = {
  wrapper: "bg-amber-400 flex flex-col py-4 px-6 rounded",
  heading:
    "text-xl md:text-xl font-semibold w-[80%] md:w-[60%] mx-auto text-center",
  para: "text-center my-5 text-lg font-normal",
  formContainer: "",
  input: "",
  btnContainer: "flex md:flex-row mb-7 mt-7 justify-around",
  formContainer: "flex flex-col items-center justify-center",
  input: "rounded px-3 py-2 md:px-4 md:py-2 my-1 w-[90%]",
  btn: "bg-white w-[90%] font-semibold my-3 px-1 py-2 rounded",
};
const AddressNotFound = (props) => {
  const closeModal = () => {
    props.close();
  };
  return (
    <Popup
      open={props.Open}
      modal
      nested
      closeOnDocumentClick="false"
      style={{ zIndex: 200 }}
      onClose={closeModal}
    >
      {(close) => (
        <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
          <button className="self-end" onClick={close}>
            <AiOutlineCloseCircle className="text-2xl md:text-3xl m-1 md:m-4 text-white" />
          </button>
          <h2 className={style.heading}>Oops, your area is not covered.</h2>
          <p className={style.para}>Please vote for it subscribe</p>
          <div className={style.formContainer}>
            <input
              type="text"
              className={style.input}
              placeholder="Your Name"
            />
            <input
              type="text"
              className={style.input}
              placeholder="Your Email"
            />
            <button className={style.btn}>SUBSCRIBE NOW</button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AddressNotFound;
