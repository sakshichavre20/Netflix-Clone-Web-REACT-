import React from "react";
import "../Styles/TopTab.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineNotifications, MdOutlineAccountBox } from "react-icons/md";
import { Colors } from "../Constants/Constants";
import { AiFillCaretDown } from "react-icons/ai";

function TopTab() {
  return (
    <div
      style={{
        width: "100%",
        height: 60,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.1)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          // alignItems: "flex-end",
        }}
      >
        <img
          src={require("../Assests/netflixpng.png")}
          style={{
            width: 120,
            height: 60,
            marginLeft: 30,
            position: "absolute",
            cursor: "pointer",
          }}
        />
        <div
          style={{
            display: "flex",
            // backgroundColor: "pink",
            alignItems: "flex-end",
            height: 50,
            justifyContent: "space-between",
            width: "100vw",
          }}
        >
          <div>
            <a
              style={{
                marginLeft: 180,
              }}
              className="text"
            >
              Home
            </a>
            <a
              style={{
                marginLeft: 30,
              }}
              className="text"
            >
              TVShows
            </a>
            <a
              style={{
                marginLeft: 30,
              }}
              className="text"
            >
              Movies
            </a>
            <a
              style={{
                marginLeft: 30,
              }}
              className="text"
            >
              News & Popular
            </a>
            <a
              style={{
                marginLeft: 30,
              }}
              className="text"
            >
              My List
            </a>
          </div>
          <div style={{ marginRight: 30 }}>
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
        </div>
      </div>
    </div>
  );
}

export default TopTab;
