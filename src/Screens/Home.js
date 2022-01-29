import React from "react";
import TopTab from "../Components.js/TopTab";
import { Colors, useWindowDimensions } from "../Constants/Constants";
import { gloabalStyles } from "../Styles/GlobalStyles";
import "../Styles/Home.css";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import CategoryList from "../Components.js/CategoryList";
function Home() {
  const { width, height } = useWindowDimensions();

  return (
    <>
      <div className="homeContainer">
        <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1322/441322-h"
          className="firstMovie"
        />
        <div className="imgBackdrop">
          <div className="MovieDetail">
            <a
              style={{ color: "white", fontSize: width / 25 }}
              className="movieName"
            >
              {" "}
              JUNGLEE
            </a>
            <a
              style={{
                fontSize: width / 60,
                maxWidth: "40vw",
                color: "white",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </a>
            <div
              style={{ marginTop: 30, flexDirection: "row", display: "flex" }}
            >
              <div className="button">
                <FaPlay />
                <a className="ButtonText" style={{ color: "black" }}>
                  Play
                </a>
              </div>
              <div
                className="button"
                style={{
                  marginLeft: 30,
                  backgroundColor: "rgba(225,225,225,0.3)",
                }}
              >
                <BiInfoCircle color={Colors.white} />
                <a className="ButtonText" style={{ color: "white" }}>
                  More Info
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="poster_fade"
          style={{
            // backgroundColor: "red",
            position: "relative",
            bottom: 30,
            height: "5vh",
          }}
        ></div>
        {/* <div style={{}}>
          <a style={{ color: "white" }}>Play on Netflix</a>
          <div style={{ display: "flex", width: "100vw", marginTop: 10 }}>
            <img
              src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1322/441322-h"
              style={{ height: 150, width: 220 }}
              className="categoryImg"
              resizeMode="contain"
            />
          </div>
        </div> */}
        <CategoryList title={"Play on Netflix"} />
      </div>
    </>
  );
}

export default Home;
