import React from "react";
import TopTab from "../Components.js/TopTab";
import { Colors } from "../Constants/Constants";
import { gloabalStyles } from "../Styles/GlobalStyles";
import "../Styles/Home.css";
function Home() {
  return (
    <>
      <TopTab />
      <div className="homeContainer">
        <img
          src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1322/441322-h"
          className="firstMovie"
        />
        <div className="imgBackdrop">
          <a style={{ color: "white" }}> JUNGLEE</a>
        </div>
      </div>
    </>
  );
}

export default Home;
