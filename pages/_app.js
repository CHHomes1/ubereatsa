import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
function MyApp({ Component, pageProps }) {
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("/k.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 25vh;
    width: 100vw;
    margin: 10px 0 10px 0;
  `;
  const [Browser, setBrowser] = useState("");
  useEffect(() => {
    function detectBrowser() {
      let userAgent = navigator.userAgent;
      let browserName;
      if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
      } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
      } else if (userAgent.match(/safari/i)) {
        browserName = "Safari";
      } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
      } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
      } else if (userAgent.match(/android/i)) {
        browserName = "Android";
      } else if (userAgent.match(/iphone/i)) {
        browserName = "iPhone";
      } else {
        browserName = "Unknown";
      }
      setBrowser(browserName);
    }
    // detectBrowser();
  }, []);
  useEffect(() => {
    function getMobileOperatingSystem() {
      let userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
      }
      if (/android/i.test(userAgent)) {
        setBrowser("Android");
        return "Android";
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        setBrowser("iOS");
        return "iOS";
      }
      return "unknown";
    }
    getMobileOperatingSystem();
  }, []);
  console.log(Browser);
  return (
    <div
      className="overflow-x-hidden"
      // style={{ zIndex: 0 }}
      style={{ fontFamily: "Poppins,serif" }}
    >
      {Browser == "iOS" && (
        <div className="flex items-center justify-center my-12 flex-col">
          {/* <Image src="/a.webp" height={2} width={2} /> */}
          <FeaturedBackground1 />
          <Image src="/logo.png" height={200} width={200} />
          <div className="flex">
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
          </div>
          <p className="text-gray-400 text-xs my-4">
            5 stars from 2.9M ratings
          </p>
          <h2 className="font-semibold text-3xl text-center my-8">
            Great Deals are in the app
          </h2>
          <Link href="/">
            <button className="bg-black px-8 py-2 hover:opacity-[0.85] text-white rounded my-3">
              Continue in app
            </button>
          </Link>
          <button
            onClick={() => setBrowser("")}
            className=" px-8 py-2 hover:border-black border-b-2 border-transparent  my-1"
          >
            Continue in browser
          </button>
        </div>
      )}
      {Browser == "Android" && (
        <div className="flex items-center justify-center my-12 flex-col">
          {/* <Image src="/a.webp" height={2} width={2} /> */}
          <FeaturedBackground1 />
          <Image src="/logo.png" height={200} width={200} />
          <div className="flex">
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
            <AiFillStar className="text-amber-400" />
          </div>
          <p className="text-gray-400 text-xs my-4">
            5 stars from 2.9M ratings
          </p>
          <h2 className="font-semibold text-3xl text-center my-8">
            Great Deals are in the app
          </h2>
          <Link href="/">
            <button className="bg-black px-8 py-2 hover:opacity-[0.85] text-white rounded my-3">
              Continue in app
            </button>
          </Link>

          <button
            onClick={() => setBrowser("")}
            className=" px-8 py-2 hover:border-black border-b-2 border-transparent  my-1"
          >
            Continue in browser
          </button>
        </div>
      )}
      {Browser !== "iOS" && Browser !== "Andriod" && (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export default MyApp;
