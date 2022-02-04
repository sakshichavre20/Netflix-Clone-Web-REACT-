import React, { useState, useEffect } from "react";
import TopTab from "../Components.js/TopTab";
import { Colors, useWindowDimensions } from "../Constants/Constants";
import { gloabalStyles } from "../Styles/GlobalStyles";
import "../Styles/Home.css";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import CategoryList from "../Components.js/CategoryList";
import Requests from "../Requests/Requests";
import instance from "./../Requests/axios";
import TopTen from "./../Components.js/TopTen";
import DetailModel from "../Components.js/DetailModel";

function Home() {
  const { width, height } = useWindowDimensions();
  const [movies, setMovies] = useState({});
  const [detail, setDetail] = useState(false);
  const [detailID, setDetailID] = useState("");
  const [movieDetail, setMovieDetail] = useState({});
  const id = Math.floor(Math.random() * 20);
  const imgURL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchMovies = async () => {
      instance.get(Requests.fetchTrending).then((response) => {
        console.log(response.data.results[id]);
        setMovies(response.data.results[id]);
      });
    };
    fetchMovies();
  }, []);

  return (
    <div className="homeContainer">
      {detail && (
        <DetailModel
          id={detailID}
          movieDetail={movieDetail}
          setDetail={setDetail}
        />
      )}
      <div
        style={{
          width: width,
          height: (width * 9) / 16,
          backgroundColor: "#000000",
        }}
      >
        <img
          //src="https://image.tmdb.org/t/p/original//eG0oOQVsniPAuecPzDD1B1gnYWy.jpg"
          src={`${imgURL}${movies.backdrop_path}`}
          style={{
            objectFit: "contain",
            width: width,
            // position: "absolute",
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
        <div
          style={{
            position: "relative",
            // backgroundColor: "pink",
            zIndex: 100,
            display: "flex",

            flexDirection: "column",
            top: -width / 1.5,
            paddingLeft: width / 30,
          }}
        >
          <a
            style={{
              zIndex: 20,

              fontSize: width / 25,
              color: "white",
              fontWeight: "bold",
              fontFamily: "DM Sans",
              left: width / 30,
            }}
          >
            {movies.original_name
              ? movies.original_name
              : movies.original_title}
          </a>
          <a
            style={{
              zIndex: 20,

              maxWidth: "45vw",
              fontSize: width / 55,
              color: "white",

              fontFamily: "DM Sans",
              left: width / 30,
              textOverflow: "ellipsis",
              webkitlineclamp: 3,
            }}
            className="description"
          >
            {movies.overview}
          </a>
          <div style={{ flexDirection: "row", display: "flex", marginTop: 20 }}>
            <div
              style={{
                // alignItems: "center",
                backgroundColor: "white",
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 10,
                paddingTop: 8,
                paddingBottom: 8,
                cursor: "pointer",
                diplay: "flex",
              }}
            >
              <FaPlay size={15} />
              <a
                style={{ color: "black", marginLeft: 5, fontSize: width / 75 }}
              >
                Play
              </a>
            </div>
            <div
              style={{
                // alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 10,
                paddingTop: 8,
                paddingBottom: 8,
                cursor: "pointer",
                diplay: "flex",
                marginLeft: 8,
              }}
            >
              <BiInfoCircle color={Colors.white} size={20} />
              <a
                style={{ color: "white", marginLeft: 5, fontSize: width / 75 }}
              >
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: -(width / 6),
          zIndex: 5,
          left: width / 30,
          marginBottom: 70,
        }}
      >
        <CategoryList
          title={"NETFLIX ORIGINALS"}
          fetchUrl={Requests.fetchNetflixOriginals}
          setDetail={setDetail}
          setDetailID={setDetailID}
          setMovieDetail={setMovieDetail}
        />
        <TopTen title={"Top 10 in India"} fetchUrl={Requests.fetchTopTen} />
        <CategoryList
          title={"Action"}
          fetchUrl={Requests.fetchAction}
          setDetail={setDetail}
          setDetailID={setDetailID}
        />
        <CategoryList
          title={"Crime"}
          fetchUrl={Requests.fetchCrime}
          setDetail={setDetail}
          setDetailID={setDetailID}
        />
        <CategoryList
          title={"Staff Picks"}
          subTitle={"Selected by our India curation specialist"}
          fetchUrl={Requests.fetchTopRated}
          setDetail={setDetail}
          setDetailID={setDetailID}
        />
        <CategoryList
          title={"Drama"}
          fetchUrl={Requests.fetchDrama}
          setDetail={setDetail}
          setDetailID={setDetailID}
        />
        <CategoryList
          title={"Fantasy"}
          fetchUrl={Requests.fetchFantasy}
          setDetail={setDetail}
          setDetailID={setDetailID}
        />
        <CategoryList
          title={"Upcomming Movies"}
          fetchUrl={Requests.fetchUpcomming}
          setDetail={setDetail}
          setDetailID={setDetailID}
        />
      </div>
    </div>
  );
}

export default Home;
