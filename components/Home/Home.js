import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeNav from "../Nav/HomeNav";
import Order from "./Order";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import Join from "../Join/Join";
const style = {
  wrapper: "",
};
const Home = () => {
  const [View, setView] = useState(0);
  useEffect(() => {
    setView(window.innerWidth);
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
  return (
    <FeaturedBackground1 className={style.wrapper}>
      {/* adding the nav */}
      <div className="flex flex-col">
        <HomeNav />
        <Order />
        <Cards />
        <Join />
        <Footer />
      </div>
    </FeaturedBackground1>
  );
};

export default Home;
