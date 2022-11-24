import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";

import NavDrawer from "./NavDrawer";
import Image from "next/image";
const HomeNav = ({ Visibility }) => {
  const style = {
    wrapper: `fixed flex items-center   ${
      !Visibility ? "justify-center md:justify-between" : "justify-between"
    }   w-[100%] h-[10vh] md:px-12 ${
      Visibility ? "bg-transparent" : "bg-white"
    }`,
    nameContainer: `${
      !Visibility ? "hidden sm:flex" : "flex"
    }  items-center justify-center mx-4 md:mx-0 mr-4 md:mr-0`,
    logo: `${
      !Visibility ? "hidden sm:flex" : "flex"
    }  items-center justify-center mx-4 md:mx-0 mr-4 md:mr-0`,
    uber: "text-xl md:text-3xl",
    eats: "font-semibold",
    btnContainer: "flex items-end justify-end w-[50%]",
    addressContainer: "",
    addressTab: `mx-4 flex w-auto md:w-[45vw] z-40 px-4  bg-white   items-center bg-gray-200 rounded flex `,
    input:
      "placeholder:text-gray-800 outline-none py-2 md:py-3 bg-gray-200 mx-12 md:mx-2",
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
      style={{ fontFamily: "Poppins,serif", zIndex: 5 }}
    >
      {/* adding the logo */}
      <div className={style.logo}>
        <Image width={220} height={220} src="/logo.png" />
      </div>
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
      <div className={style.nameContainer}>
        <NavDrawer />
      </div>
    </div>
  );
};

export default HomeNav;
