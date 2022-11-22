import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";
const style = {
  wrapper:
    "p-3 flex flex-col md:flex-row items-start md:items-start md:mt-16 mb-3 md:mb-6 md:w-[100%] border-t-2 border-gray-200 py-5 md:p-7",
  social: "flex md:w-[30%] mx-auto my-3",
  nav: " md:w-[50%]",
  list: "mr-8 md:mx-5 text-xs text-stone-800 decoration-none list-none my-7 cursor-pointer hover:border-stone-800 border-b-[1px]  border-transparent max-w-fit",
  para: "text-xs text-stone-800 text-start md:text-end",
  infoNav: "flex flex-col items-end justify-around  md:w-[15%] my-5 md:my-2",
  info: "text-md text-stone-800",
};
const Signature = () => {
  return (
    <div className={style.wrapper}>
      {/* adding the social icons */}
      <div className={style.social}>
        <Link href="https://www.facebook.com/NetDeliverySA">
          <AiFillFacebook
            className="text-2xl md:text-3xl mx-4 cursor-pointer"
          />
        </Link>
        <Link href="https://twitter.com/NetDeliverySA">
          <AiFillTwitterCircle className="text-2xl md:text-3xl mx-4 cursor-pointer" />
        </Link>
        <Link href="https://www.instagram.com/netdeliverysa/">
          <AiOutlineInstagram className="text-2xl md:text-3xl mx-4 cursor-pointer" />
        </Link>
      </div>
      <div className={style.nav}>
        {/* <div className="flex items-center justify-start md:justify-end">
          <Link href="">
            <li className={style.list}>Privacy Policy</li>
          </Link>
          <Link href="">
            <li className={style.list}>Terms</li>
          </Link>
          <Link href="">
            <li className={style.list}>Pricing</li>
          </Link>
        </div> */}
        {/* <p className={style.para}>
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p> */}
      </div>
      <div className={style.infoNav}>
        {/* <h2 className={style.info}>Do not sell my info (California)</h2> */}
        <h2 className={style.info}>© 2022 NetDelivery (Pty) Ltd</h2>
      </div>
    </div>
  );
};

export default Signature;
