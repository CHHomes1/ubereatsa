import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";
import AddressFound1 from "../Modal/AddressFound";
import AddressNotFound1 from "../Modal/AddressNotFound";
const Order = (props) => {
  const [Address, setAddress] = useState("");
  const [AddressClick, setAddressClick] = useState(false);
  const [Visibility, setVisibility] = useState(false);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const style = {
    wrapper:
      "h-[88vh] flex flex-col justify-center mx-3 md:mx-12 z-0 my-12 md:my-0",
    heading:
      "text-4xl sm:text-5xl md:text-4xl font-semibold my-9 md:mb-8 text-amber-400 md:w-[40vw] ",
    orderTab: ` flex mb-3 flex-col sm:flex-row`,
    addressTab: `w-auto sm:w-[40vw] md:w-[35vw] z-40 px-4 border-b-2 border-black bg-white flex  items-center ${
      AddressClick ? " border-amber-400" : "border-none"
    }`,
    input: "placeholder:text-gray-300 outline-none py-5 md:py-3 w-[100%]",
    btn: "hover:opacity-[0.89] bg-amber-400 px-4 py-5 md:px-5 md:py-3 text-black rounded sm:mx-3 text-lg my-3 sm:my-0 md:my-0",
    signin: "underline cursor-pointer text-white",
  };
  function onChange(isVisible) {
    props.handleVis(isVisible);
  }
  const [IsFormClicked, setIsFormClicked] = useState(false);
  const [AddressFound, setAddressFound] = useState(false);
  const handleFormSubmit = () => {
    setAddressFound(false);
    setIsFormClicked((prev) => !prev);
    props.FeaturedData[0].array.map((one) => {
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
      style={{ fontFamily: "Poppins,serif" }}
      //   onClick={() => setAddressClick(false)}
    >
      <AddressFound1
        close={() => setIsFormClicked(false)}
        Open={IsFormClicked && AddressFound}
      />
      <AddressNotFound1
        close={() => setIsFormClicked(false)}
          Open={IsFormClicked && !AddressFound}
      />
      <VisibilitySensor onChange={onChange}>
        <h3 className=" pb-12 bg-transparent w-[1vh] h-[1vw]"></h3>
      </VisibilitySensor>
      <h2 className={style.heading}>Check if your area is covered</h2>
      <div className={style.orderTab}>
        <div className={style.addressTab} onClick={() => setAddressClick(true)}>
          <HiLocationMarker className="text-black text-2xl mr-3" />
          <input
            type="text"
            value={Address}
            placeholder="Enter delivery address"
            onChange={handleAddressChange}
            className={style.input}
          />
        </div>
        <button className={style.btn} onClick={handleFormSubmit}>
          Check Coverage
        </button>
      </div>
    </div>
  );
};

export default Order;
