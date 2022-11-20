import React from "react";
import RestaurantRegister from "../Modal/RestaurantRegister";
import DriverRegister from "../Modal/DriverRegister";

const style = {
  wrapper: "flex flex-col mx-auto my-8",
  buttonContainer: "my-6",
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
      <div className={style.buttonContainer}>
        <RestaurantRegister />
        <DriverRegister />
        {/* <button className={style.btn} onClick={handleDriverClick}>
          Driver
        </button>
        <button className={style.btn} onClick={handleRestaurantClick}>
          Restaurant
        </button> */}
      </div>
    </div>
  );
};

export default Join;
