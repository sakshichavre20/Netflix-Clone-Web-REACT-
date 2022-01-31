import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import { Colors, useWindowDimensions } from "../Constants/Constants";
import instance from "../Requests/axios";
import axios from "axios";

function CategoryList({ title, fetchUrl }) {
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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ color: "white" }}>{title}</h2>
      <div
        style={{ width: "100%", display: "flex", overflowX: "scroll" }}
        className="row_container"
      >
        {movies.map((movie) => (
          <div style={{ display: "flex", flexDirection: "column", margin: 5 }}>
            <img
              src={`${imgURL}${movie.backdrop_path}`}
              alt={movie.name}
              key={movie.id}
              style={{ height: (200 * 9) / 16, width: 200 }}
            />
            <h6 style={{ color: "white" }}>
              {movie.original_name ? movie.original_name : movie.original_title}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
