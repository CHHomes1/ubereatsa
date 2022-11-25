import React, { useState } from "react";
import Popup from "reactjs-popup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
const style = {
  wrapper: "bg-amber-400 flex flex-col py-4 px-6 rounded",
  heading:
    "text-xl md:text-xl font-semibold w-[80%] md:w-[60%] mx-auto text-center",
  para: "text-center my-5 text-lg font-normal",
  formContainer: "",
  input: "",
  btnContainer: "flex md:flex-row mb-7 mt-7 justify-around",
};
const AddressFound = (props) => {
  // const [IsOpen, setIsOpen] = useState(props.Open);
  // console.log(IsOpen)
  const closeModal = () => {
    props.close();
    // setIsOpen(false);
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
          <button className="self-end" onClick={closeModal}>
            <AiOutlineCloseCircle className="text-2xl md:text-3xl m-1 md:m-4 text-black" />
          </button>
          <h2 className={style.heading}>
            Great News. Your area is covered please
          </h2>
          <p className={style.para}>Download our app below</p>
          <div className={style.btnContainer}>
            <Link href="https://play.google.com/store/apps/details?id=com.restaurants.netdelivery">
              <div className="my-2 mr-7">
                <Image height={10} width={150} src="/playstore.png" />
              </div>
            </Link>
            <Link href="https://apps.apple.com/us/app/netdelivery/id1641589963">
              <div className="my-2 mr-4">
                <Image height={10} width={150} src="/appstore.svg" />
              </div>
            </Link>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default AddressFound;
