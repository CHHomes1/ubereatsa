import React from "react";
import SingleCard from "./SingleCard";
const style = {
  wrapper: "flex items-center justify-around my-8 md:my-48 flex-wrap",
};
const Cards = () => {
  return (
    <div className={style.wrapper}>
      <SingleCard image={'/3.png'} heading={'Feed your employees'} line={'Create a business account'} check={1}/>
      <SingleCard image={'/2.png'} heading={'Your restaurant, delivered'} line={'Add your restaurant'}check={2}/>
      <SingleCard image={'/1.png'} heading={'Deliver with Uber Eats'} line={'Sign up to deliver'} check={3}/>
    </div>
  );
};

export default Cards;
