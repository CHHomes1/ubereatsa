import React from "react";
import Image from "next/image";
import { AiFillApple } from "react-icons/ai";
import Link from "next/link";

const style = {
  wrapper: "flex flex-col items-center jusitify-center w-[90%] mx-auto mt-16 mb-3",
  logo: "flex justify-between items-center justify-center",
  heading: "text-2xl font-semibold mx-4",
  btnContainer: "bg-gray-200 text-md flex px-12 py-3 my-8 rounded-lg items-center justify-center w-[90vw]",
  para: "",
};
const IPhone = () => {
  return (
    <div className={style.wrapper}>
      {/* adding the logo */}
      <div className={style.logo}>
        <div className="">
          <Image src="/favicon.png" width={80} height={80} />
        </div>
        <h2 className={style.heading}>
          There's more to love in the iPhone app.
        </h2>
      </div>
      <Link href="https://apps.apple.com/us/app/netdelivery/id1641589963">
        <div className={style.btnContainer}>
          <AiFillApple className="text-2xl mx-1" />
          <p className={style.para}>Get the app</p>
        </div>
      </Link>
    </div>
  );
};

export default IPhone;
