import React, { useState, useEffect } from "react";

import axios from "axios";

function MoviesList() {
  const [movies, moviesState] = useState([]);
  useEffect(() => {
    function getMovies() {
      setTimeout(async () => {
        const response = await axios.get("http://localhost:3003/api/movies/");
        moviesState(response.data);
      }, 200);
    }
    getMovies();
  }, []);

  return (
    <div>
      {movies.map((m) => (
        <li key={m._id}>
          <img src={m._img} alt={m.title} />
          <h3>{m.title}</h3>
        </li>
      ))}
    </div>
  );
}
export default MoviesList;
