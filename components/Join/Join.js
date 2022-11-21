import React from "react";
import RestaurantRegister from "../Modal/RestaurantRegister";
import DriverRegister from "../Modal/DriverRegister";
import Image from "next/image";
import Link from "next/link";
const style = {
  wrapper: "flex w-[90%] md:w-[50%] mx-auto justify-between items-center my-7",
  left: "",
  right: "",
  btnContainer: "flex md:flex-row mb-7 mt-7 justify-around",
  heading:'text-3xl md:text-4xl font-semibold text-center my-3',
  para:'w-[80%] md:w-[60%] mx-auto'
};
const Join = () => {
  const handleDriverClick = () => {};
  const handleRestaurantClick = () => {};
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <h2 className={style.heading}>Design your Perfect Day</h2>
        <p className={style.para}>
          Get the best of the food all in one place. Download the app today.
        </p>
        <div className={style.btnContainer}>
          <Link href="https://play.google.com/store/apps/details?id=com.restaurants.netdelivery">
            <div className="my-2 mr-7">
              <Image height={10} width={160} src="/playstore.png" />
            </div>
          </Link>
          <Link href="https://apps.apple.com/us/app/netdelivery/id1641589963">
            <div className="my-2 mr-4">
              <Image height={10} width={160} src="/appstore.svg" />
            </div>
          </Link>
        </div>
      </div>
      <div className={style.right}>
        <Image src="/im.png" height={300} width={300} />
      </div>
    </div>
  );
};

export default Join;
