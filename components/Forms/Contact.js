import React, { useState,useEffect } from "react";

const style = {
  wrapper: "flex flex-col bg-amber-400",
  singleInputContainer: "flex flex-col items-start my-2",
  input:
    "outline-none w-[95%] md:w-[80%] px-3 py-2 md:px-5 md:py-2 rounded placeholder:italic placeholder:text-xs",
    btn: "bg-black px-3 py-2 md:px-5 md:py-2 text-white  my-4  w-[95%] md:w-[80%]  hover:opacity-[0.85]",
};
const Contact = () => {
  const [Name, setName] = useState("");
  const [Message, setMessage] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [CV, setCV] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const handleContactChange = (e) => {
    setContact(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCVChange = (e) => {
    setCV(e.target.value);
  };
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <div className={style.singleInputContainer}>
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <input
          type="text"
          className={style.input}
          placeholder="Name..."
          onChange={handleNameChange}
          value={Name}
        />
      </div>
      <div className={style.singleInputContainer}>
        <label htmlFor="id" className="text-sm">
          Message
        </label>
        <input
          type="text"
          className={style.input}
          placeholder="Message..."
          onChange={handleMessageChange}
          value={Message}
        />
      </div>
      <div className={style.singleInputContainer}>
        <label htmlFor="contact" className="text-sm">
          Contact No.
        </label>
        <input
          type="text"
          className={style.input}
          placeholder="Contact..."
          onChange={handleContactChange}
          value={Contact}
        />
      </div>
      <div className={style.singleInputContainer}>
        <label htmlFor="fisrt" className="text-sm">
          Email
        </label>
        <input
          type="text"
          className={style.input}
          placeholder="Email..."
          onChange={handleEmailChange}
          value={Email}
        />
      </div>
      {/* <div className={style.singleInputContainer}>
        <label htmlFor="fisrt" className="text-sm">
          Upload ID/Passport
        </label>
        <input
          type="file"
          className={style.input}
          placeholder="CV"
          onChange={handleCVChange}
          value={CV}
        />
      </div> */}
      <button className={style.btn}>Submit</button>
    </div>
  );
};

export default Contact;
