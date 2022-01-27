import React, { useState } from "react";
import "../Styles/Home.css";
import { Colors, useWindowDimensions } from "../Constants/Constants";

function CategoryList({ title }) {
  const [onExpand, setonExpand] = useState();
  const { width, height } = useWindowDimensions();
  return (
    <div style={{}}>
      <a style={{ color: "white" }}>{title}</a>
      <div style={{ display: "flex", width: "100vw", marginTop: 10 }}>
        <div>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1322/441322-h"
            style={{
              height: width / 6 / 1.6,
              width: width / 6,
              minWidth: 200,
              minHeight: 200 / 1.6,
              objectFit: "contain",
            }}
            className="categoryImg"
            resizeMode="contain"
          />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
