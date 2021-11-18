import React, { useState, useEffect } from "react";
import "../Css/moviesList.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Pagination from "./Pagination";
import axios from "axios";

function MoviesList() {
  Aos.init({ duration: 1000 });
  const [movies, setMoviesState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);

  const indexOfLastPage = currentPage * moviesPerPage;
  const indexOfFirstPage = indexOfLastPage - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(`http://localhost:3003/api/movies/`);
      setMoviesState(response.data);
    }
    getMovies();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section>
      <ul className="block-movies">
        {currentMovies.map((m) => (
          <li key={m._id}>
            <div id="movie" data-aos="zoom-in">
              <div className="picture">
                <div className="movie-title-block">
                  <h2>
                    <a href={"#" + m._id}>Résumé du film: {m.title}</a>
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
