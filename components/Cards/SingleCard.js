import React from "react";
import Image from "next/image";
const style = {
  wrapper: "mx-5 md:mx-1 my-4",
  heading: "font-semibold text-2xl md:text-2xl mt-2",
  line: "underline cursor-pointer",
};
const SingleCard = ({ line, heading, image }) => {
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <Image height={420} width={420} src={image} />
      <h2 className={style.heading}>{heading}</h2>
      <h2 className={style.line}>{line}</h2>
    </div>
  );
};

export default SingleCard;
