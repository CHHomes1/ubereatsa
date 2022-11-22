import React from "react";
import SingleCard from "./SingleCard";
const style = {
  wrapper: "flex items-center justify-around my-8 md:my-48 flex-wrap",
};
const Cards = () => {
  return (
    <div className={style.wrapper}>
      <SingleCard image={'/3.png'} heading={'Offer best support'} line={'Contact us'} check={1}/>
      <SingleCard image={'/2.png'} heading={'Cook, and we will deliver'} line={'Signup as a restaurant partner'}check={2}/>
      <SingleCard image={'/1.png'} heading={'Earn money deliver with NetDelivery'} line={'Signup as courier partner'} check={3}/>
    </div>
  );
};

export default Cards;
