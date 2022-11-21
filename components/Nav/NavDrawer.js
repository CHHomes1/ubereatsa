import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "next/link";
import Image from "next/image";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import useWindowSize from "../../hooks/useWindowSize";
const NavDrawer = () => {
  const { width } = useWindowSize();
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
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : width < 500
            ? 260
            : width > 500 && width < 1000
            ? 380
            : 400,
        height: 1200,
        letterSpacing: "1px",
      }}
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
          className="h-[10vh] flex my-2 text-xl w-[100%] justify-center scale-y-[0.5] scale-x-[1] md:scale-x-[0.95] md:scale-y-[0.4]"
          style={{ fontFamily: "Poppins, serif" }}
        >
          <Image width={200} height={100} src="/logo.png" />
        </div>
        {/* BELOEW ARRAY HAS THE LIST OF THE TEXTS THAT IS RENDERED AS A LIST */}

        <div className="h-[60vh]">
          {/* <div className="cursor-pointer hover:opacity-[0.85] py-2 bg-amber-400 px-4 py-3 md:px-5 md:py-3 text-white text-center mx-5 rounded my-2">
            Sign up
          </div>
          <div className="cursor-pointer hover:opacity-[0.85] py-2 bg-gray-200 px-4 py-3 md:px-5 md:py-3 text-black mx-5 rounded text-center my-2">
            Login
          </div> */}
          <div className="cursor-pointer py-2 mx-5 text-xs hover:border-black border-b-[1px] border-transparent max-w-fit ">
            Signup as Restaurant Partner
          </div>
          <div className="cursor-pointer py-2 mx-5 text-xs hover:border-black border-b-[1px] border-transparent max-w-fit ">
            Signup as Courier Partner
          </div>
          <div className="cursor-pointer py-2 mx-5 text-xs hover:border-black border-b-[1px] border-transparent max-w-fit ">
            Sign up to driver
          </div>
        </div>
        {/* adding the logo */}
        <div className="mt-auto">
          {/* <div className="mx-4">
            <Image width={200} height={200} src="/logo.png" />
          </div> */}
          {/* adding the store button container */}
          <h2 className="text-xs mx-auto text-center font-semibold">
            Download our app below
          </h2>
          {/* <div className="flex my-8">
            <div className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-2 md:px-4 md:py-2 mx-1 hover:opacity-[0.75] cursor-pointer">
              <AiFillApple className="" />
              <button className="">iPhone</button>
            </div>

            <div className="flex items-center justify-center bg-gray-200 rounded-full px-3 py-2 md:px-4 md:py-2 mx-1 hover:opacity-[0.75] cursor-pointer">
              <AiFillAndroid className="" />
              <button className="">Andriod</button>
            </div>
          </div> */}
          {/* adding the play store and apps store buttons */}
          <div className="flex md:flex-row mb-7 mt-7 items-center justify-around">
            <Link href="">
              <div className="my-2">
                <Image height={10} width={120} src="/playstore.png" />
              </div>
            </Link>
            <Link href="">
              <div className="my-2">
                <Image height={10} width={120} src="/appstore.svg" />
              </div>
            </Link>
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
            className="p-2 rounded-xl mr-4 my-1"
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
