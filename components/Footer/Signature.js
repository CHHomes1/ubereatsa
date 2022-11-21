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
    "flex flex-col md:flex-row items-start md:items-start md:mt-16 md:mb-24 md:w-[100%] border-t-2 border-gray-200 py-7 md:p-7",
  social: "flex md:w-[30%]",
  nav: " md:w-[50%]",
  list: "mr-8 md:mx-5 text-xs text-stone-800 decoration-none list-none my-7 cursor-pointer hover:border-stone-800 border-b-[1px]  border-transparent max-w-fit",
  para: "text-xs text-stone-800 text-start md:text-end",
  infoNav: "flex flex-col items-end justify-around  md:w-[15%] my-5 md:my-2",
  info: "text-xs text-stone-800",
};
const Signature = () => {
  return (
    <div className={style.wrapper}>
      {/* adding the social icons */}
      <div className={style.social}>
        <Link href="">
          <AiFillFacebook
            className="text-2xl md:text-3xl mx-4 cursor-pointer"
            onClick={console.log("asdf")}
          />
        </Link>
        <Link href="">
          <AiFillTwitterCircle className="text-2xl md:text-3xl mx-4 cursor-pointer" />
        </Link>
        <Link href="">
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
        <h2 className={style.info}>© 2022 Uber Technologies Inc.</h2>
      </div>
    </div>
  );
};

export default Signature;
