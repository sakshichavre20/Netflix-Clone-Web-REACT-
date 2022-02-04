import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import { Colors, useWindowDimensions } from "../Constants/Constants";
import instance from "../Requests/axios";
import axios from "axios";
import requests from "../Requests/Requests";
import { AiFillStar } from "react-icons/ai";

function CategoryList({ title, fetchUrl, subTitle }) {
  const { width, height } = useWindowDimensions();
  const imgURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
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
  console.log(title, "+", movies);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: width / 30,
      }}
    >
      <h2 style={{ color: "white" }}>{title}</h2>
      {fetchUrl === requests.fetchTopRated && (
        <a style={{ color: "white", position: "relative", bottom: 15 }}>
          {subTitle}
        </a>
      )}
      <div
        style={{ width: "100%", display: "flex", overflowX: "scroll" }}
        className="row_container"
      >
        {movies.map((movie) => (
          <div
            style={{ display: "flex", flexDirection: "column", margin: 10 }}
            className="imageStyle"
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
