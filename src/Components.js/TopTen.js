import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import { Colors, useWindowDimensions } from "../Constants/Constants";
import instance from "../Requests/axios";
import axios from "axios";

function TopTen({ title, fetchUrl }) {
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
  // console.log(title, "+", movies);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: width / 30,
      }}
    >
      <h2 style={{ color: "white" }}>{title}</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          overflowX: "scroll",
          overflowY: "hidden",
        }}
        className="row_container"
      >
        {movies.slice(0, 10).map((movie, index) => (
          <div
            style={{
              display: "flex",
              margin: 10,
              // position: "relative",
              height: 100 * 1.5,
              alignItems: "center",
            }}
          >
            <h1
              style={{
                //position: "absolute",
                color: "white",
                fontSize: 150,
                fontFamily: "Londrina Outline",
                fontWeight: "200",
                zIndex: -20,
                color: "rgb(89, 89, 89)",
                // color: "white",
                WebkitTextStroke: 4,
                //   bottom: 10,
              }}
            >
              {index + 1}
            </h1>
            {/* <svg
              width="100%"
              height="100%"
              viewBox="0 0 80 154"
              className="SvgIcon"
            >
              <path
                stroke="#595959"
                stroke-linejoin="square"
                stroke-width="4"
                d="M3.809 41.577h33.243c1.3-2.702 3.545-4.947 6.674-6.72 3.554-2.015 7.83-3.01 12.798-3.01 5.555 0 10.14 1.11 13.723 3.376 3.839 2.427 5.782 6.283 5.782 11.315 0 4.553-1.853 8.395-5.473 11.38-3.547 2.926-8.18 4.37-13.821 4.37H41.44v28.366h16.77c5.572 0 10.275 1.227 14.068 3.711 4.02 2.633 6.071 6.581 6.071 11.616 0 5.705-1.943 9.975-5.853 12.562-3.658 2.42-8.292 3.61-13.863 3.61-5.205 0-9.82-.94-13.827-2.836-3.698-1.75-6.32-4.272-7.785-7.529H2.33c2.096 12.089 7.761 21.65 17.028 28.78C29.242 148.175 42.594 152 59.476 152c10.706 0 20.175-1.783 28.42-5.337 8.185-3.528 14.575-8.486 19.208-14.884 4.595-6.346 6.896-13.938 6.896-22.837 0-6.952-1.93-13.494-5.81-19.666-3.815-6.07-9.68-10.367-17.683-12.908l-5.46-1.735 5.353-2.04c6.659-2.538 11.667-6.338 15.083-11.412 3.431-5.096 5.142-10.806 5.142-17.181 0-8.471-2.262-15.778-6.787-21.985-4.574-6.275-10.7-11.17-18.408-14.696C77.683 3.775 69.109 2 59.687 2 44.084 2 31.515 5.816 21.91 13.415c-9 7.119-15.025 16.486-18.101 28.162z"
              ></path>
            </svg> */}
            <img
              src={`${imgURL}${movie.poster_path}`}
              alt={movie.name}
              key={movie.id}
              style={{
                height: 100 * 1.5,
                width: 120,
                position: "relative",
                right: 12,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopTen;
