import React, { useState } from "react";
import "../Styles/TopTab.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotifications, MdOutlineAccountBox } from "react-icons/md";
import { Colors, useWindowDimensions } from "../Constants/Constants";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import { gloabalStyles } from "../Styles/GlobalStyles";

function TopTab(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const { width, height } = useWindowDimensions();
  const drawerHandler = () => {
    if (width > 845) {
      setOpenMenu(false);
    }
    setOpenMenu(!openMenu);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",

        height: "6vh",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.1)",
        // backgroundColor: "grey",
        zIndex: 100,

        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: "10px",
      }}
    >
      <div
        style={{
          //  backgroundColor: "orange",
          display: "flex",
          alignItems: "center",
        }}
        className="right-Toptab"
      >
        <img
          src={require("../Assests/netflixpng.png")}
          style={{
            width: "8vw",
            height: "6vh",
            minWidth: 120,
            marginLeft: width / 100,
            cursor: "pointer",
          }}
        />
        {width > 845 ? (
          <>
            <a
              style={{
                marginLeft: width / 100,
                // fontSize:  16px + (24 - 16) * (100vw - 400px) / (800 - 400) ,
              }}
              className="text"
              href="/home"
            >
              Home
            </a>
            <a
              style={{
                marginLeft: width / 100,
                // fontSize: width / 70,
              }}
              className="text"
              href="/tvShows"
            >
              TVShows
            </a>
            <a
              style={{
                marginLeft: width / 100,
                //  fontSize: width / 70,
              }}
              className="text"
              href="/tvShows"
            >
              Movies
            </a>
            <a
              style={{
                marginLeft: width / 100,
                // fontSize: width / 70,
              }}
              className="text"
            >
              News & Popular
            </a>
            <a
              style={{
                marginLeft: width / 100,
                //  fontSize: width / 70,
              }}
              className="text"
            >
              My List
            </a>
          </>
        ) : null}
      </div>
      {width > 845 ? (
        <div
          style={{
            //  backgroundColor: "grey",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaSearch color={Colors.white} size={24} className="icon" />
          <MdOutlineNotifications
            color={Colors.white}
            size={30}
            className="icon"
          />
          <MdOutlineAccountBox
            color={Colors.white}
            size={26}
            style={{ marginRight: 10 }}
            className="icon"
          />
          <AiFillCaretDown color={Colors.white} size={20} className="icon" />
        </div>
      ) : (
        <div
          style={{
            //  backgroundColor: "grey",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => drawerHandler()}
        >
          <AiOutlineMenu
            color={Colors.white}
            size={26}
            style={{ marginRight: 10 }}
            className="icon"
          />
        </div>
      )}
      {openMenu && (
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "30vw",
            minWidth: 200,
            height: "90vh",
            // backgroundColor: "white",
            // alignItems: "center",
            // justifyContent: "center",
            right: 0,
            top: "6vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 1,
            flexDirection: "column",
            overflowX: "hidden",
          }}
          className="Drawer"
        >
          <div className="menuOption_div">
            <a
              style={{
                marginLeft: width / 100,
                // fontSize:  16px + (24 - 16) * (100vw - 400px) / (800 - 400) ,
              }}
              className="Drawertext"
              href="/"
            >
              Home
            </a>
          </div>
          <div className="menuOption_div">
            <a
              style={{
                marginLeft: width / 100,
                //  fontSize: width / 70,
              }}
              className="Drawertext"
            >
              Search
            </a>
          </div>
          <div className="menuOption_div">
            <a
              style={{
                marginLeft: width / 100,
                // fontSize: width / 70,
              }}
              className="Drawertext"
              href="/tvShows"
            >
              TVShows
            </a>
          </div>
          <div className="menuOption_div">
            <a
              style={{
                marginLeft: width / 100,
                //  fontSize: width / 70,
              }}
              className="Drawertext"
              href="/tvShows"
            >
              Movies
            </a>
          </div>
          <div className="menuOption_div">
            <a
              style={{
                marginLeft: width / 100,
                // fontSize: width / 70,
              }}
              className="Drawertext"
            >
              News & Popular
            </a>
          </div>
          <div className="menuOption_div">
            <a
              style={{
                marginLeft: width / 100,
                //  fontSize: width / 70,
              }}
              className="Drawertext"
            >
              My List
            </a>
          </div>
          <div className="menuOption_div">
            <a
              style={{
                marginLeft: width / 100,
                //  fontSize: width / 70,
              }}
              className="Drawertext"
            >
              Notifications
            </a>
          </div>
          <div className="menuOption_div">
            <a
              style={{
                marginLeft: width / 100,
                //  fontSize: width / 70,
              }}
              className="Drawertext"
            >
              Account
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopTab;
