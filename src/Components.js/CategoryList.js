import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import { Colors, useWindowDimensions } from "../Constants/Constants";
import instance from "../Requests/axios";
import axios from "axios";
import requests from "../Requests/Requests";
import {
  AiFillStar,
  AiOutlinePlusCircle,
  AiFillDislike,
  AiFillLike,
  AiOutlineDownCircle,
  AiFillPlayCircle,
} from "react-icons/ai";
import { BsPlayCircle, BsFillPlayCircleFill } from "react-icons/bs";

function CategoryList({
  title,
  fetchUrl,
  subTitle,
  setDetail,
  setDetailID,
  setMovieDetail,
}) {
  const { width, height } = useWindowDimensions();
  const imgURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [hover, setHover] = useState("");
  const [hoverclick, setHoverClick] = useState(false);
  const API_KEY = "82129b20ece7b87e8bb55c46b129712e";
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(title, "+", movies);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        //   paddingLeft: hoverclick ? width / 10 : 20,
        paddingTop: 20,
      }}
    >
      <a style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        {title}
      </a>
      {fetchUrl === requests.fetchTopRated && (
        <a style={{ color: "white", position: "relative", bottom: 5 }}>
          {subTitle}
        </a>
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          overflowX: "scroll",
          paddingTop: hoverclick ? 30 : 10,
          paddingLeft: hoverclick ? width / 25 : 20,
          paddingBottom: hoverclick ? 50 : null,
        }}
        className="row_container"
      >
        {movies.map((movie) => (
          <div
            onMouseOver={() => {
              setHover(movie.id);
              setHoverClick(true);
            }}
            onMouseOut={() => {
              setHover("");
              setHoverClick(false);
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              margin: 10,
              // paddingLeft: hoverclick ? width / 10 : 20,
            }}
            className="imageStyle"
            onClick={() => {
              // fetchMovie(item.id);
              setDetail(true);
              setDetailID(movie.id);
              setMovieDetail(movie);
            }}
          >
            <img
              src={`${imgURL}${movie.backdrop_path}`}
              alt={movie.name}
              key={movie.id}
              style={{
                height: (200 * 9) / 16,
                width: 200,
                cursor: "pointer",
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
              }}
            />
            {hover === movie.id ? (
              <div
                style={{
                  backgroundColor: "rgb(35, 35, 35)",
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  flexDirection: "column",
                  display: "flex",
                  // borderRadius: 3,
                }}
              >
                <div
                  style={{
                    justifyContent: "space-between",
                    // paddingLeft: 10,
                    display: "flex",
                  }}
                >
                  <div style={{ alignItems: "center" }}>
                    <BsFillPlayCircleFill
                      color="white"
                      style={{ margin: 2, cursor: "pointer" }}
                      size={20}
                    />
                    <AiOutlinePlusCircle
                      color="white"
                      style={{ margin: 2, cursor: "pointer" }}
                      size={20}
                    />
                    <AiFillLike
                      color="white"
                      style={{ margin: 2, cursor: "pointer" }}
                      size={20}
                    />
                    <AiFillDislike
                      color="white"
                      style={{ margin: 2, cursor: "pointer" }}
                      size={20}
                    />
                  </div>
                  <div>
                    <AiOutlineDownCircle
                      color="white"
                      size={20}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            {fetchUrl === requests.fetchTopRated && (
              <div
                style={{
                  backgroundColor: "rgb(35, 35, 35)",
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  flexDirection: "column",
                  display: "flex",
                  // borderRadius: 3,
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2",
                    display: "flex",
                    alignItems: "center",
                    // padding: 2,
                    borderRadius: 20,
                    width: "50%",
                    paddingLeft: 5,
                  }}
                >
                  <AiFillStar color="white" />
                  <a
                    style={{
                      color: "white",
                      marginLeft: 5,
                      fontSize: width / 105,
                    }}
                  >
                    Staff Pick
                  </a>
                </div>
                <a
                  style={{ color: "white", fontSize: width / 95, marginTop: 5 }}
                  className="description"
                >
                  "{movie.overview}"
                </a>
              </div>
            )}
            {fetchUrl === requests.fetchUpcomming ? (
              <div
                style={{
                  backgroundColor: "rgb(35, 35, 35)",
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 15,
                  paddingRight: 15,
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  flexDirection: "column",
                  display: "flex",
                  minHeight: 90,
                }}
              >
                <a style={{ color: "white", fontWeight: "bold" }}>
                  {movie.original_title}
                </a>
                <a style={{ color: "white" }}>
                  {`Releasing On :    \n ${movie.release_date}`}
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
