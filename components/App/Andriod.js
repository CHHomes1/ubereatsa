import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
const style = {
  wrapper: "flex flex-col items-center jusitify-center w-[90%] mx-auto my-12",
  logo: "flex  items-center justify-center justify-between",
  heading: "text-2xl font-semibold mx-4",
  btnContainer: "bg-gray-200 text-md flex px-12 py-3 my-8 rounded-lg items-center justify-center w-[90vw]",
  para: "",
};
const Andriod = () => {
  return (
    <div className={style.wrapper}>
      {/* adding the logo */}
      <div className={style.logo}>
        <div>
          <Image src="/favicon.png" width={80} height={80} />
        </div>
        <h2 className={style.heading}>
          There's more to love in the Andriod app.
        </h2>
      </div>
      <Link href="https://play.google.com/store/apps/details?id=com.restaurants.netdelivery">
        <div className={style.btnContainer}>
          <AiFillAndroid className="text-xl mx-1" />
          <p className={style.para}>Get the app</p>
        </div>
      </Link>
    </div>
  );
};

export default Andriod;
