import React, { useState } from "react";
import Popup from "reactjs-popup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import axios from "axios";
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
  const tokenWithWriteAccess =
    "skewFnihxAOUsF0fDKevgE6ORGcr9RsNKPtTf7ZNE9BQhtuJ2xgxe5lVLHihBWE4uoUjF0BzhzPxkTOesPNNf2kwo55oxVSnM5KvKDL9Ia0DgnqoysrX5HvCMgRQTZqg8y9JGgAH3IE1vd1goOnt4HbORhWH84xvQyJTitN5pxD3F5kjAukR";
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const sendData = async () => {
      const { data } = await axios.post(
        `https://k4ves9h0.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "area",
                createdAt: new Date().toISOString(),
                name: Name,
                email: Email,
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
    };
    sendData();
    setName("");
    setEmail("");
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
              value={Name}
              onChange={handleNameChange}
            />
            <input
              type="text"
              className={style.input}
              placeholder="Your Email"
              value={Email}
              onChange={handleEmailChange}
            />
            <button className={style.btn} onClick={submitHandler}>SUBSCRIBE NOW</button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AddressNotFound;
