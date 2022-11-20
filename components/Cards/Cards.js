import React from "react";
import SingleCard from "./SingleCard";
const style = {
  wrapper: "flex items-center justify-around my-5 md:my-24 flex-wrap",
};
const Cards = () => {
  return (
    <div className={style.wrapper}>
      <SingleCard image={'/3.png'} heading={'Feed your employees'} line={'Create a business account'}/>
      <SingleCard image={'/2.png'} heading={'Your restaurant, delivered'} line={'Add your restaurant'}/>
      <SingleCard image={'/1.png'} heading={'Deliver with Uber Eats'} line={'Sign up to deliver'}/>
    </div>
  );
};

export default Cards;
