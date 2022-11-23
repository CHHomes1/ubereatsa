import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "next/link";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import ContactUs from "../Modal/ContactUs";
import RestaurantRegister from "../Modal/RestaurantRegister";
import DriverRegister from "../Modal/DriverRegister";
import { GiTriquetra } from "react-icons/gi";
const NavDrawer = () => {
  const { width } = useWindowSize();
  const [Contact, setContact] = React.useState(false);
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift"||event.key === "a"||event.key === "A" || event.key === "q"||event.key === "Q"||event.key === "w"||event.key === "W" || event.key === "e"||event.key === "E"||event.key === "t"||event.key === "T" || event.key === "y"||event.key === "Y"||event.key === "u"||event.key === "U" || event.key === "i"||event.key === "I" ||event.key === "p"||event.key === "P" || event.key === "s"||event.key === "S"||event.key === "d"||event.key === "D" || event.key === "f"||event.key === "F"||event.key === "g"||event.key === "G" || event.key === "h"||event.key === "H"||event.key === "j"||event.key === "J" || event.key === "k"||event.key === "K"||event.key === "l"||event.key === "L" || event.key === "z"||event.key === "Z"||event.key === "x"||event.key === "X" || event.key === "c"||event.key === "C"||event.key === "v"||event.key === "V" || event.key === "b"||event.key === "B"||event.key === "n"||event.key === "N" || event.key === "m"||event.key === "M"||event.key === "1"||event.key === "2" || event.key === "3"||event.key === "4"||event.key === "5"||event.key === "6" || event.key === "7"||event.key === "8"||event.key === "9"||event.key === "0" || event.key === "-"||event.key === "="||event.key === "]"||event.key === "]" || event.key === ";"||event.key === "'"||event.key === ","||event.key === "." || event.key === "/"||event.key === "Space"||event.key === "Alt"||event.key === "Window" || event.key === "Windows"||event.key === "Up"||event.key === "Down"||event.key === "Right" || event.key === "Left")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        zIndex: "0",
        color: "rgb(0,0,0)",
        backgroundColor: "rgb(255, 255, 255)",
        width:
          anchor === "top" || anchor === "bottom"
            ? "auto"
            : width < 500
            ? 240
            : width > 500 && width < 1000
            ? 380
            : 350,
        height: 1200,
        letterSpacing: "1px",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div
          className="text-center text-3xl tracking-widest"
          style={{ fontFamily: "Poppins, serif" }}
        ></div>
        <div
          className="h-[10vh] flex my-2 text-xl w-[100%] justify-center scale-y-[0.5] scale-x-[1] md:scale-x-[0.95] md:scale-y-[0.4]"
          style={{ fontFamily: "Poppins, serif" }}
        ></div>

        <div className="h-[60vh]" style={{ fontFamily: "Poppins, serif" }}>
          <div className="tracking-normal cursor-pointer py-0 my-3 mx-5 text-xs sm:text-lg md:text-md hover:border-black border-b-[1px] border-transparent max-w-fit ">
            {<RestaurantRegister footer={true} />}
          </div>
          <div className="tracking-normal cursor-pointer py-0 my-3 mx-5 text-xs sm:text-lg md:text-md hover:border-black border-b-[1px] border-transparent max-w-fit ">
            <p>
              <DriverRegister footer={true} />
            </p>
          </div>
          <div className="tracking-normal cursor-pointer py-0 my-3 mx-5 text-xs sm:text-lg md:text-md hover:border-black border-b-[1px] border-transparent max-w-fit ">
            <ContactUs footer={true} />
          </div>
        </div>
        {/* adding the logo */}
        <div className="mt-auto">
          <h2
            className="text-xs md:text-sm mx-auto text-center font-semibold"
            style={{ fontFamily: "Poppins, serif" }}
          >
            Download our app below
          </h2>
          <div className="flex md:flex-row mb-7 mt-7 items-center justify-around w-[90%] md:w-[70%] mx-auto">
            <Link href="https://play.google.com/store/apps/details?id=com.restaurants.netdelivery">
              <div className="my-2 mx-1">
                <Image height={10} width={120} src="/playstore.png" />
              </div>
            </Link>
            <Link href="https://apps.apple.com/us/app/netdelivery/id1641589963">
              <div className="my-2 mx-1">
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
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            onClick={toggleDrawer(anchor, true)}
            className="p-2 rounded-xl my-1 flex items-end justify-end"
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
              // hideBackdrop={true}
              style={{
                zIndex: 20,
              }}
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
