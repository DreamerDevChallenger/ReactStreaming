import axios from "axios";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../Css/moviesList.css";
import "../Css/search.css";

function Search() {
  Aos.init({ duration: 1000 });
  const [search, setSearch] = useState([]);
  const urlSearch = new URLSearchParams(window.location.search);
  const getSearch = urlSearch.get("search");
  useEffect(() => {
    const urlSearch = new URLSearchParams(window.location.search);
    const getSearch = urlSearch.get("search");
    axios
      .get(
        `https://backendmovies.herokuapp.com/api/movies/result/?search=${getSearch}`
      )
      .then((res) => {
        setSearch(res.data);
      });
  }, []);

  return (
    <section>
      <form action={process.env.PUBLIC_URL + "/result/"}>
        <input
          type="text"
          name="search"
          placeholder={getSearch}
          minLength="2"
          required
        />
      </form>
      <ul>
        {search.map((m) => (
          <li key={m._id}>
            <div id="movie" data-aos="fade-down">
              <div className="picture">
                <img src={m._img} alt={m.title + "picture"} />
                <div className="movie-title-block">
                  <h2>
                    <Link to={"../resume/?id=" + m._id}>
                      Résumé du film: {m.title}
                    </Link>
                  </h2>
                </div>
              </div>
              <div>
                <h3>{m.title}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Search;
