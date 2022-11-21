import React from "react";
import RestaurantRegister from "../Modal/RestaurantRegister";
import DriverRegister from "../Modal/DriverRegister";
import Image from "next/image";
const style = {
  wrapper: "flex flex-col mx-auto my-8",
  buttonContainer: "my-6 flex flex-col mx-5 items-center justify-center",
  btn: "bg-amber-400 text-white px-4 py-3 md:px-5 md:px-6 mx-3 rounded w-[10vw] hover:opacity-[0.85]",
  heading: "text-xl md:text-3xl font-semibold text-center my-4",
  eats: "font-semibold",
};
const Join = () => {
  const handleDriverClick = () => {};
  const handleRestaurantClick = () => {};
  return (
    <div className={style.wrapper}>
      {/* adding the heading */}
      <h2 className={style.heading}>Join Net Delivery</h2>
      <div className="flex flex-col md:flex-row">
        <div className={style.buttonContainer}>
          <RestaurantRegister />
          <DriverRegister />
        </div>
        <Image src="/aaa.png" height={300} width={300} />
      </div>
    </div>
  );
};

export default Join;
