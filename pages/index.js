import Head from "next/head";
import Home from "../components/Home/Home";
import React, { useState, useEffect } from "react";
const style = {
  wrapper: "",
};
export default function Main() {
  
  return (
    <div className={style.container}>
      <Head>
        <title>NetDelivery | Food Delivery, Order and Enjoy</title>
        <meta name="description" content="NetDelivery | Food Delviery, Order and Enjoy" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Home />
    </div>
  );
}
