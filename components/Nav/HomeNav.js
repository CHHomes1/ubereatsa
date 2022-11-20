import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import NavDrawer from "./NavDrawer";
import Image from "next/image";
const style = {
  wrapper: "flex w-[100%] h-[12vh] items-center justify-center ",
  nameContainer: "flex items-center justify-start w-[40%] mx-4 md:mx-12",
  uber: "text-xl md:text-3xl",
  eats: "font-semibold",
  btnContainer: "flex items-end justify-end w-[50%]",
  loginContainer:
    "cursor-pointer hover:opacity-[0.9] flex items-center justify-center bg-white px-3 py-[0.7rem] md:px-5 py-[1.1rem] rounded-full mx-2 text-sm md:text-md md:mx-5",
  login: "",
  signup:
    " hover:opacity-[0.9] bg-black text-white px-4 py-[0.7rem] md:px-5 py-[1.1rem] rounded-full mx-2 text-sm md:text-md md:mx-3",
};
const HomeNav = (props) => {
  const [MenuClick, setMenuClick] = useState(false);
  const handleMenuClick = () => {
    setMenuClick(true);
  };
  // sending the state of menu
  // props.isMenuClicked(MenuClick)
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
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
        <Image width={300} height={300} src="/logo.png" />
      </div>
      {/* adding the button */}
      <div className={style.btnContainer}>
        {/* <div className={style.loginContainer}>
          <RiAccountCircleFill className="mr-3 text-xl md:text-xl" />
          <h1 className={style.login}>Log in</h1>
        </div>
        <button className={style.signup}>Sign up</button> */}
      </div>
    </div>
  );
};

export default HomeNav;
