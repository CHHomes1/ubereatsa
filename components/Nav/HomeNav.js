import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";

import NavDrawer from "./NavDrawer";
import Image from "next/image";
const HomeNav = ({ Visibility }) => {
  const style = {
    wrapper: `fixed flex items-center  w-[100%] h-[12vh] md:px-12 ${
      Visibility ? "bg-transparent" : "bg-white"
    }`,
    nameContainer:
      "flex items-center justify-start mx-4 md: mx-0 md:mr-12",
    uber: "text-xl md:text-3xl",
    eats: "font-semibold",
    btnContainer: "flex items-end justify-end w-[50%]",
    addressContainer: "",
    addressTab: `hidden md:flex w-auto md:w-[28vw] z-40 px-4  bg-white   items-center bg-gray-200 rounded`,
    input: "placeholder:text-gray-800 outline-none py-5 md:py-3 bg-gray-200",
    loginContainer:
      "cursor-pointer hover:opacity-[0.9] flex items-center justify-center bg-white px-3 py-[0.7rem] md:px-5 py-[1.1rem] rounded-full mx-2 text-sm md:text-md md:mx-5",
    login: "",
    signup:
      " hover:opacity-[0.9] bg-black text-white px-4 py-[0.7rem] md:px-5 py-[1.1rem] rounded-full mx-2 text-sm md:text-md md:mx-3",
  };
  // sending the state of menu
  // props.isMenuClicked(MenuClick)
  const [Address, setAddress] = useState("");
  const [AddressClick, setAddressClick] = useState(false);
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins,serif", zIndex: 20 }}
    >
      {/* adding the logo */}
      <div className={style.nameContainer}>
        {/* <GiHamburgerMenu
          className="mr-3 text-xl md:text-3xl cursor-pointer"
          onClick={handleMenuClick}
        /> */}
        <NavDrawer />
        {/* <h2 className={style.uber}>
          Uber <span className={style.eats}>Eats</span>
        </h2> */}
        <Image width={180} height={180} src="/logo.png" />
      </div>
      {/* adding the button */}
      <div className={style.addressContainer}>
        {/* <div className={style.loginContainer}>
          <RiAccountCircleFill className="mr-3 text-xl md:text-xl" />
          <h1 className={style.login}>Log in</h1>
        </div>
        <button className={style.signup}>Sign up</button> */}
        {!Visibility && (
          <div
            className={style.addressTab}
            onClick={() => setAddressClick(true)}
          >
            <HiLocationMarker className="text-black text-2xl mr-3" />
            <input
              type="text"
              value={Address}
              placeholder="Enter delivery address"
              onChange={handleAddressChange}
              className={style.input}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeNav;
