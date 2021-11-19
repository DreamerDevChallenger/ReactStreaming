import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/movieItem.css";
function MoviesItem() {
  const [movie, setMoviesState] = useState(null);

  useEffect(() => {
    async function getMovies() {
      const urlSearch = new URLSearchParams(window.location.search);
      const getSearch = urlSearch.get("id");
      const response = await axios.get(
        `https://backendmovies.herokuapp.com/api/movies/info/${getSearch}`
      );
      setMoviesState(response.data);
    }
    getMovies();
  }, []);
  if (movie === null) {
    return <p>Chargement du résumé...</p>;
  }
  return (
    <section>
      <article key={movie._id} className="movie-block">
        <div className="block-img">
          <img
            src={movie._img}
            alt={movie.title + "picture"}
            className="movie-img"
          />
        </div>

        <div>
          <h2>{movie.title}</h2>
          <p>{movie.synopsis}</p>
        </div>
        <div></div>
      </article>
    </section>
  );
}
export default MoviesItem;
