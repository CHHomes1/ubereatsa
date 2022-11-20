import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "next/link";
import Image from "next/image";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
const NavDrawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        color: "rgb(0,0,0)",
        backgroundColor: "rgb(255, 255, 255)",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: 1200,
        letterSpacing: "1px",
      }}
      //   role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* heading of the website */}
        <div
          className="text-center text-3xl tracking-widest"
          style={{ fontFamily: "Poppins, serif" }}
        >
          {/* <img src={`${signature}`} alt="" /> */}
        </div>
        <div
          className="h-[10vh] flex my-2 text-xl w-[100%] justify-center"
          style={{ fontFamily: "Poppins, serif" }}
        >
          <p className="font-bold text-amber-400">Net Delivery</p>
        </div>
        {/* BELOEW ARRAY HAS THE LIST OF THE TEXTS THAT IS RENDERED AS A LIST */}
        {/* {[
          "Sign up",
          "Log in",
          "Create a business account",
          "Add your Restaurant",
          "Sign up to driver",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <div className="py-2 bg-black px-4 py-3 md:px-5 md:py-3 text-white">asdf</div>
              <div className="py-2">{text === "Login"}</div>
              <div className="py-2">{text === "Create a business account"}</div>
              <div className="py-2">{text === "Add your Restaurant"}</div>
              <div className="py-2">{text === "Sign up to driver"}</div>
            </ListItemIcon>
            <div className="">
              <ListItemText
                primary={text}
                onClick={() => {
                  handleNavClick(text);
                }}
              />
            </div>
          </ListItem>
        ))} */}
        <div className="h-[70vh]">
          <div className="cursor-pointer hover:opacity-[0.85] py-2 bg-amber-400 px-4 py-3 md:px-5 md:py-3 text-white text-center mx-5 rounded my-2">
            Sign up
          </div>
          <div className="cursor-pointer hover:opacity-[0.85] py-2 bg-gray-200 px-4 py-3 md:px-5 md:py-3 text-black mx-5 rounded text-center my-2">
            Login
          </div>
          <div className="cursor-pointer py-2 mx-5 text-xs hover:border-black border-b-[1px] border-transparent max-w-fit ">Create a business account</div>
          <div className="cursor-pointer py-2 mx-5 text-xs hover:border-black border-b-[1px] border-transparent max-w-fit ">Add your Restaurant</div>
          <div className="cursor-pointer py-2 mx-5 text-xs hover:border-black border-b-[1px] border-transparent max-w-fit ">Sign up to driver</div>
        </div>
        {/* adding the logo */}
        <div className="mt-auto">
          <div className="mx-4">
            <Image width={200} height={200} src="/logo.png" />
          </div>
          {/* adding the store button container */}
          <div className="flex my-8">
            <div className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-2 md:px-4 md:py-2 mx-1 hover:opacity-[0.75] cursor-pointer">
              <AiFillApple className="" />
              <button className="">iPhone</button>
            </div>

            <div className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-2 md:px-4 md:py-2 mx-1 hover:opacity-[0.75] cursor-pointer">
              <AiFillAndroid className="" />
              <button className="">Andriod</button>
            </div>
          </div>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      {/* below string will set the location of the drawer */}
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className="p-2 rounded-xl mx-4 my-1"
          >
            {
              <svg
                viewBox="0 0 100 80"
                width="30"
                height="20"
                style={{ fill: "rgb(251,191,36)" }}
              >
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            }
          </button>
          <div className="">
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default NavDrawer;
