import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/movieItem.css";
import { useLocation } from "react-router-dom";
function MoviesItem() {
  const [movie, setMoviesState] = useState(null);
  const location = useLocation();

  const urlSearch = new URLSearchParams(location.search);
  const getSearch = urlSearch.get("id");
  async function getMovies() {
    const response = await axios.get(
      `https://backendmovies.herokuapp.com/api/movies/info/${getSearch}`
    );
    setMoviesState(response.data);
  }
  useEffect(() => {
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
        <div>
          <iframe
            src={"https://www.youtube-nocookie.com/embed/" + movie.trailer}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </article>
    </section>
  );
}
export default MoviesItem;
