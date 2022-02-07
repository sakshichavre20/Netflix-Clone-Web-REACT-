import axios from "axios";
import React, { useState, useEffect } from "react";
import { useWindowDimensions } from "../Constants/Constants";
import "../Styles/DetailModel.css";
import { ImCross } from "react-icons/im";
import { AiTwotoneStar } from "react-icons/ai";

function DetailModel({ id, movieDetail, setDetail }) {
  const { width, height } = useWindowDimensions();
  const API_KEY = "82129b20ece7b87e8bb55c46b129712e";
  const [data, setdata] = useState([]);
  const imgURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        console.log("notifications", res.data);
        setdata(res.data);
        //   setData(res.data.data);
        //   setLoading(false);
      })
      .catch((e) => console.log(e.response.data.message));
  }, []);
  console.log(id, "======", movieDetail);
  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "hr " + rminutes + "m";
  }
  return (
    <div
      className="DetailModelContainer"
      style={{
        elevation: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <ImCross
        color={"white"}
        style={{
          position: "absolute",
          right: 0,
          padding: 30,
          cursor: "pointer",
        }}
        onClick={() => setDetail(false)}
      />

      <img
        //src="https://image.tmdb.org/t/p/original//eG0oOQVsniPAuecPzDD1B1gnYWy.jpg"
        src={`${imgURL}${data.backdrop_path}`}
        style={{
          objectFit: "contain",
          width: "100%",
        }}
      />
      <div
        className="poster_fade"
        style={{
          // backgroundColor: "red",
          height: ((width / 2) * 9) / 40,
          width: width,
          position: "relative",
          bottom: ((width / 2) * 9) / 40 + 3,
        }}
      ></div>
      <div
        className="Content"
        style={{ position: "relative", bottom: ((width / 2) * 9) / 40 + 3 }}
      >
        <a style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>
          {data.original_title}
        </a>
        <div style={{ display: "flex", alignItems: "center", paddingTop: 20 }}>
          <AiTwotoneStar color="yellow" style={{ paddingRight: 5 }} />
          <a style={{ color: "white", paddingRight: 10 }}>
            {data.vote_average}
          </a>
          <a style={{ color: "white", paddingRight: 10 }}>
            {data.release_date}
          </a>
          <a style={{ color: "white", paddingRight: 10 }}>
            {timeConvert(data.runtime)}
          </a>
        </div>
        <a style={{ color: "white", paddingTop: 20 }}>
          Description : {data.overview}
        </a>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            // backgroundColor: "pink",
            paddingTop: 20,
          }}
        >
          {data.genres?.map((genres) => (
            <div
              key={genres.id}
              style={{
                borderRadius: 20,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 5,
                paddingBottom: 5,
                borderWidth: 1,
                border: "solid 1px #2d2d2d",
                //  backgroundColor: "red",
                margin: 2,
              }}
            >
              <a style={{ color: "white" }}>{genres.name}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailModel;
