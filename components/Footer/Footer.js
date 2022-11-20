import React from "react";
import Image from "next/image";
import Link from "next/link";
import Signature from "./Signature";
const style = {
  wrapper: "border-t-2 border-gray-200 ml-5",
  footerNav: "flex flex-col md:flex-row mt-8 md:mt-24 w-[100%]",
  uber: "text-2xl md:text-4xl my-8 md:my-2",
  eats: "font-semibold",
  btnContainer: "flex flex-col md:flex-row mb-7 mt-7",
  left: "flex flex-col items-start justify-between md:w-[50%] mx-3 md:mx-12",
  right:
    "flex flex-col md:flex-row md:w-[50%] md:items-center md:justify-center",
  col1: "md:w-[50%]",
  col2: "md:w-[50%]",
  list: "text-stone-800 decoration-none list-none my-5 cursor-pointer hover:border-stone-800 border-b-[1px]  border-transparent max-w-fit",
};
const Footer = () => {
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <div className={style.footerNav}>
        {/* left side of the footer */}
        <div className={style.left}>
          {/* <h2 className={style.uber}>
            Uber <span className={style.eats}>Eats</span>
          </h2> */}
          <Image width={250} height={250} src="/logo.png" />

          {/* adding the play store and apps store buttons */}
          <div className={style.btnContainer}>
            <Link href="">
              <div className="my-2">
                <Image height={10} width={200} src="/playstore.png" />
              </div>
            </Link>
            <Link href="">
              <div className="my-2">
                <Image height={10} width={200} src="/appstore.svg" />
              </div>
            </Link>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.col1}>
            <li className={style.list}>Get help</li>
            <li className={style.list}>Buy gift cards</li>
            <li className={style.list}>Add your restaurant</li>
            <li className={style.list}>Sign up to deliver</li>
            <li className={style.list}>Create a business account</li>
            <li className={style.list}>Promotions</li>
          </div>
          <div className={style.col2}>
            <li className={style.list}>Restaurants Neat Me</li>
            <li className={style.list}>View all cities</li>
            <li className={style.list}>View all countries</li>
            <li className={style.list}>Pickup near me</li>
            <li className={style.list}>About Uber Eats</li>
            <li className={style.list}>English</li>
          </div>
        </div>
      </div>
      {/* adding the signature */}
      <Signature />
    </div>
  );
};

export default Footer;