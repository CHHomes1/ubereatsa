import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeNav from "../Nav/HomeNav";
import Order from "./Order";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Join from "../Join/Join";
import Andriod from "../App/Andriod";
import IPhone from "../App/IPhone";
import client from '../../pages/api/client'
const style = {
  wrapper: "",
};
const Home = () => {
  const [Browser, setBrowser] = useState("");

  const [View, setView] = useState(0);
  const [Visibility, setVisibility] = useState(false);
  useEffect(() => {
    setView(window.innerWidth);
  }, []);
  const [FeaturedData, setFeaturedData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const p = await client.fetch(`*[_type == "locations"]`);
      setFeaturedData(p);
    };
    fetchData();
  }, []);
  useEffect(() => {
    function getMobileOperatingSystem() {
      let userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/windows phone/i.test(userAgent)) {
      }
      if (/android/i.test(userAgent)) {
        setBrowser("Android");
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        setBrowser("iOS");
      }
      return "unknown";
    }
    getMobileOperatingSystem();
  }, []);
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url(${(View < 500 && "/bg1.jpg") ||
      (View > 500 && View < 1000 && "/bg1.jpg") ||
      (View > 1000 && "/bg1.jpg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: 100vh;
    width: 100vw;
  `;
  // function onChange(isVisible) {
  //   setVisibility(isVisible);
  //   console.log(isVisible);
  // }
  const handleVis = (value) => {
    setVisibility(value);
  };
  return (
    <FeaturedBackground1 className={style.wrapper}>
      {/* adding the nav */}
      <div className="flex flex-col">
        <HomeNav Visibility={Visibility} FeaturedData={FeaturedData}/>
        <Order handleVis={handleVis} FeaturedData={FeaturedData}/>
        {/* <VisibilitySensor onChange={onChange}></VisibilitySensor> */}
        {Browser == "iOS" && <IPhone />}
        {Browser == "Android" && <Andriod />}
        <Cards />
        <Join />
        <Footer />
      </div>
    </FeaturedBackground1>
  );
};

export default Home;
