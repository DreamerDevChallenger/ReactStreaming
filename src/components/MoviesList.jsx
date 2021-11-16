import React, { useState, useEffect } from "react";
import "../Css/moviesList.css";
import Search from "./Search";
import axios from "axios";

function MoviesList() {
  const [movies, setMoviesState] = useState([]);

  useEffect(() => {
    function getMovies() {
      setTimeout(async () => {
        const response = await axios.get(
          `http://localhost:3003/api/movies/result/?dsearch=${""}`
        );
        setMoviesState(response.data);
      });
    }
    getMovies();
  }, []);

  console.log();
  return (
    <section>
      <article>
        <form action="/result" method="GET">
          <input type="text" placeholder="Search..." name="dsearch"></input>
        </form>
      </article>
      <ul>
        {movies.map((m) => (
          <li key={m._id}>
            <div className="picture">
              <img src={m._img} alt={m.title + "picture"} />
            </div>
            <h3>{m.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default MoviesList;
