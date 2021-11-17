import React, { useState, useEffect } from "react";
import "../Css/moviesList.css";
import Pagination from "./Pagination";
import axios from "axios";

function MoviesList() {
  const [movies, setMoviesState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);

  const indexOfLastPage = currentPage * moviesPerPage;
  const indexOfFirstPage = indexOfLastPage - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    function getMovies() {
      setTimeout(async () => {
        const response = await axios.get(`http://localhost:3003/api/movies/`);
        setMoviesState(response.data);
      });
    }
    getMovies();
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <section>
      <ul>
        {currentMovies.map((m) => (
          <li key={m._id}>
            <div className="picture">
              <img src={m._img} alt={m.title + "picture"} />
            </div>
            <h3>{m.title}</h3>
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
