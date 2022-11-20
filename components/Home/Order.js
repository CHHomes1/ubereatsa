import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
const Order = () => {
  const [Address, setAddress] = useState("");
  const [AddressClick, setAddressClick] = useState(false);
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  console.log(AddressClick);
  const style = {
    wrapper: "h-[88vh] flex flex-col md:justify-center mx-3 md:mx-12 z-0 my-12 md:my-0",
    heading: "text-4xl md:text-5xl font-semibold my-4 md:mb-8 text-amber-400",
    orderTab: ` flex mb-3 flex-col md:flex-row`,
    addressTab: `z-40 px-4 border-b-2 border-black bg-white flex  items-center ${
      AddressClick ? " border-amber-400" : "border-none"
    }`,
    input: "placeholder:text-gray-300 outline-none py-5 md:py-3 w-[40vw]",
    btn: "hover:opacity-[0.89] bg-amber-400 px-4 py-5 md:px-5 md:py-3 text-black rounded md:mx-3 text-lg my-3 md:my-0",
    signin: "underline cursor-pointer text-white",
  };
  return (
    <div
      className={style.wrapper}
      style={{ fontFamily: "Poppins,serif" }}
      //   onClick={() => setAddressClick(false)}
    >
      <h2 className={style.heading}>Order food to your door</h2>
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
        <button className={style.btn}>Find Food</button>
      </div>
      <h3 className="text-white">
        <Link href="/signin">
          <span className={style.signin}>Sign In</span>{" "}
        </Link>{" "}
        for your recent addresses
      </h3>
    </div>
  );
};

export default Order;
