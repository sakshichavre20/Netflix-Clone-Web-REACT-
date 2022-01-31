import React, { useState, useEffect } from "react";
import TopTab from "../Components.js/TopTab";
import { Colors, useWindowDimensions } from "../Constants/Constants";
import { gloabalStyles } from "../Styles/GlobalStyles";
import "../Styles/Home.css";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import CategoryList from "../Components.js/CategoryList";
import Requests from "../Requests/Requests";
function Home() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="homeContainer">
      <div
        style={{
          width: width,
          height: (width * 9) / 16,
          backgroundColor: "grey",
          // position: "absolute",
        }}
      >
        <h1 style={{ position: "absolute", zIndex: 20, top: width / 10 }}>
          hello
        </h1>
        <img
          src="https://image.tmdb.org/t/p/original//eG0oOQVsniPAuecPzDD1B1gnYWy.jpg"
          style={{
            objectFit: "contain",
            width: width,
            // position: "absolute"
          }}
        />

        <div
          className="poster_fade"
          style={{
            // backgroundColor: "rgba(0,0,0,0.5)",
            height: (width * 9) / 40,
            width: width,
            position: "relative",
            bottom: (width * 9) / 40 + 3,
            // zIndex: -20,
          }}
        ></div>
      </div>
      <div style={{ marginTop: -(width / 5), zIndex: 5 }}>
        <CategoryList
          title={"NETFLIX ORIGINALS"}
          fetchUrl={Requests.fetchNetflixOriginals}
        />
        <CategoryList
          title={"Trending Now"}
          fetchUrl={Requests.fetchTrending}
        />
      </div>
    </div>
  );
}

export default Home;
{
  /*
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
            //backgroundColor: "red",
            position: "relative",
            bottom: 30,
            height: "5vh",
          }}
        ></div>
       
        <CategoryList title={"Play on Netflix"} />*/
}
