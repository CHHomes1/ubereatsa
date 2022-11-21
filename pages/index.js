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
        <title>Uber Eats Website</title>
        <meta name="description" content="An website for ubereats" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Home />
    </div>
  );
}
