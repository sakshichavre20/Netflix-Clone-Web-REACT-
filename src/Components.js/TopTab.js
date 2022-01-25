import React from "react";
import "../Styles/TopTab.css";

function TopTab() {
  return (
    <div
      style={{
        width: "100%",
        height: 60,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.0)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: "100%",
          alignItems: "center",
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
            alignItems: "center",
            height: 60,
            //justifyContent: "center",
          }}
        >
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
      </div>
    </div>
  );
}

export default TopTab;
