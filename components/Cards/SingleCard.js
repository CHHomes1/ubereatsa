import React from "react";
import Image from "next/image";
import ContactUs from "../Modal/ContactUs";
import DriverRegister from "../Modal/DriverRegister";
import RestaurantRegister from "../Modal/RestaurantRegister";
const style = {
  wrapper: "mx-5 md:mx-1 my-4",
  heading: "font-semibold text-2xl md:text-2xl mt-2",
  line: "underline cursor-pointer",
};
const SingleCard = ({ line, heading, image, check }) => {
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <Image height={420} width={420} src={image} />
      <h2 className={style.heading}>{heading}</h2>
      {check == 1 && (
        <h2 className={style.line}>
          <ContactUs />
        </h2>
      )}
      {check == 2 && (
        <h2 className={style.line}>
          <RestaurantRegister />
        </h2>
      )}
      {check == 3 && (
        <h2 className={style.line}>
          <DriverRegister />
        </h2>
      )}
    </div>
  );
};

export default SingleCard;
