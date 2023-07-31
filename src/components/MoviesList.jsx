import React, { useState, useEffect } from "react";
import "../Css/moviesList.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

function MoviesList() {
  Aos.init({ duration: 1000 });

  const [movies, setMoviesState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);

  const indexOfLastPage = currentPage * moviesPerPage;
  const indexOfFirstPage = indexOfLastPage - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(
        `https://backend-react-streaming.vercel.app/api/movies/`
      );
      setMoviesState(response.data);
    }
    getMovies();
  }, []);
  if (movies.length === 0) {
    return (
      <div className="loading-spinner-block">
        <FontAwesomeIcon icon={faSpinner} size="5x" spin></FontAwesomeIcon>
        <h2>Chargements des films</h2>
      </div>
    );
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section id="Home">
      <ul className="block-movies">
        {currentMovies.map((m) => (
          <li key={m._id}>
            <div id="movie" data-aos="zoom-in">
              <div className="picture">
                <div className="movie-title-block">
                  <h2>
                    <Link to={"../resume/?id=" + m._id}>
                      Résumé du film: {m.title}
                    </Link>
                  </h2>
                </div>
                <img src={m._img} alt={m.title + "picture"} />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
        setMoviesPerPage={setMoviesPerPage}
      />
    </section>
  );
}
export default MoviesList;
