import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import AddressFound1 from "../Modal/AddressFound";
import AddressNotFound1 from "../Modal/AddressNotFound";
import NavDrawer from "./NavDrawer";
import Image from "next/image";
const HomeNav1 = ({ Visibility, FeaturedData }) => {
  const style = {
    wrapper: ` fixed flex items-center   ${
      !Visibility ? "justify-between md:justify-between" : "justify-between"
    }   w-[100%] h-[10vh] md:px-12 ${
      Visibility ? "bg-white" : "bg-white"
    }`,
    nameContainer: `${
      !Visibility ? "flex" : "flex"
    }  items-center justify-center mx-4 md:mx-0 mr-4 md:mr-0`,
    logo: `${
      !Visibility ? "flex" : "flex"
    }  items-center justify-center mx-4 md:mx-0 mr-4 md:mr-0`,
    uber: "text-xl md:text-3xl",
    eats: "font-semibold",
    btnContainer: "flex items-end justify-end w-[50%]",
    addressContainer: "",
    addressTab: ` mx-4 flex w-auto md:w-[45vw] z-40 px-4 items-center justify-center bg-gray-200 rounded  `,
    input:
      "placeholder:text-gray-800 outline-none py-2 md:py-3 bg-gray-200 mx-12 md:mx-2 w-[100%]",
    loginContainer:
      "cursor-pointer hover:opacity-[0.9] flex items-center justify-center bg-white px-3 py-[0.7rem] md:px-5 py-[1.1rem] rounded-full mx-2 text-sm md:text-md md:mx-5",
    login: "",
    signup:
      " hover:opacity-[0.9] bg-black text-white px-4 py-[0.7rem] md:px-5 py-[1.1rem] rounded-full mx-2 text-sm md:text-md md:mx-3",
  };

  const [Address, setAddress] = useState("");
  const [AddressClick, setAddressClick] = useState(false);
  const [IsFormClicked, setIsFormClicked] = useState(false);
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const [AddressFound, setAddressFound] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAddressFound(false);
    setIsFormClicked((prev) => !prev);
    FeaturedData[0].array.map((one) => {
      let a = one.toUpperCase();
      let b = Address.toUpperCase();
      if (a === b) {
        setAddressFound(true);
      }
    });
  };
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins,serif", zIndex: 5 }}
    >
      {/* adding the logo */}
      {/* <AddressFound1
        close={() => setIsFormClicked(false)}
        Open={IsFormClicked && AddressFound}
      />
      <AddressNotFound1
        close={() => setIsFormClicked(false)}
          Open={IsFormClicked && !AddressFound}
      /> */}
      <div className={style.logo}>
        <Image width={150} height={150} src="/logo.png" />
      </div>
      {/* <div className={style.addressContainer}>
        {!Visibility && (
          <form
            className={style.addressTab}
            onClick={() => setAddressClick(true)}
            onSubmit={handleFormSubmit}
          >
            <HiLocationMarker className="text-black text-2xl mr-3 bg-gray-200" />
            <input
              type="text"
              value={Address}
              placeholder="Enter delivery address"
              onChange={handleAddressChange}
              className={style.input}
            />
          </form>
        )}
      </div> */}
      <div className={style.nameContainer}>
        <NavDrawer />
      </div>
    </div>
  );
};

export default HomeNav1;
