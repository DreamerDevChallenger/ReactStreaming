import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/movieItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
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
    return (
      <div className="loading-spinner-block">
        <FontAwesomeIcon icon={faSpinner} size="5x" spin></FontAwesomeIcon>
        <h2>Chargement du film</h2>
      </div>
    );
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
