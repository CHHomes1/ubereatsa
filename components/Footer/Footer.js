import React from "react";
import Image from "next/image";
import Link from "next/link";
import Signature from "./Signature";
import ContactUs from "../Modal/ContactUs";
import DriverRegister from "../Modal/DriverRegister";
import RestaurantRegister from "../Modal/RestaurantRegister";
import Help from "../Modal/Help";
const style = {
  wrapper: "border-t-2 border-gray-200 ml-0",
  footerNav: "flex flex-col md:flex-row mt-8 md:mt-24 w-[100%] p-3",
  uber: "text-2xl md:text-4xl my-8 md:my-2",
  eats: "font-semibold",
  btnContainer: "flex md:flex-row mb-7 mt-7 justify-around",
  left: "flex flex-col items-center md:items-start justify-between md:w-[50%] mx-3 md:mx-12",
  right:
    "flex flex-col md:flex-row md:w-[50%] md:items-start md:justify-center",
  col1: "md:w-[50%] flex flex-col items-start justify-start",
  col2: "md:w-[50%] flex flex-col items-start justify-start",
  list: "text-stone-800 decoration-none list-none my-2 cursor-pointer  ",
  list1: "text-stone-800 decoration-none list-none my-2 cursor-pointer     ",
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
          <Image width={190} height={190} src="/logo.png" />

          {/* adding the play store and apps store buttons */}
          <div className={style.btnContainer}>
            <Link href="https://play.google.com/store/apps/details?id=com.restaurants.netdelivery">
              <div className="my-2 mr-7">
                <Image height={10} width={150} src="/playstore.png" />
              </div>
            </Link>
            <Link href="https://apps.apple.com/us/app/netdelivery/id1641589963">
              <div className="my-2 mr-4">
                <Image height={10} width={150} src="/appstore.svg" />
              </div>
            </Link>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.col1}>
            <li className={style.list}>
              <RestaurantRegister footer={true} />
            </li>
            <li className={style.list}>
              <DriverRegister footer={true} />
            </li>
            <li className={style.list}>
              <ContactUs footer={true} />
            </li>
          </div>
          <div className={style.col2}>
            <Link href="https://netdelivery.co.za/admin/privacy-policy">
              <li className={style.list1}>Privacy Policy</li>
            </Link>
            <li className={style.list1}>
              <Help footer={true}/>
            </li>
          </div>
        </div>
      </div>
      {/* adding the signature */}
      <Signature />
    </div>
  );
};

export default Footer;
