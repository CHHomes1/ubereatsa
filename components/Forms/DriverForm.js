import React, { useState } from "react";

const style = {
  wrapper: "flex flex-col bg-amber-400",
  singleInputContainer: "flex flex-col items-start my-2",
  input:
    "outline-none w-[95%] md:w-[80%] px-3 py-2 md:px-5 md:py-2 rounded placeholder:italic placeholder:text-xs",
  btn: "bg-black px-3 py-2 md:px-5 md:py-2 text-white  my-4  w-[95%] md:w-[80%]  hover:opacity-[0.85]",
};
const DriverForm = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Id, setId] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [CV, setCV] = useState("");
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleIdChange = (e) => {
    setId(e.target.value);
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
        <label htmlFor="fisrt" className="text-sm">
          First Name
        </label>
        <input
          type="text"
          className={style.input}
          placeholder="First Name..."
          onChange={handleFirstNameChange}
          value={FirstName}
        />
      </div>
      <div className={style.singleInputContainer}>
        <label htmlFor="last" className="text-sm">
          Last Name
        </label>
        <input
          type="text"
          className={style.input}
          placeholder="Last Name..."
          onChange={handleLastNameChange}
          value={LastName}
        />
      </div>
      <div className={style.singleInputContainer}>
        <label htmlFor="id" className="text-sm">
          ID No.
        </label>
        <input
          type="text"
          className={style.input}
          placeholder="Id No..."
          onChange={handleIdChange}
          value={Id}
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
      <div className={style.singleInputContainer}>
        {/* <label
          htmlFor="fisrt"
          className="text-sm border-white border-2 bg-black"
        ></label> */}
        {/* Upload ID/Passport */}
        {/* <input
          type="file"
          className={style.input}
          onChange={handleCVChange}
          value={CV}
        /> */}
        <input class="custom-file-input" type="file" id="file" />
      </div>
      <button className={style.btn}>Submit</button>
    </div>
  );
};

export default DriverForm;
