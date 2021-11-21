import axios from "axios";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";
import "../Css/moviesList.css";
import "../Css/search.css";

function Search() {
  Aos.init({ duration: 1000 });
  const [search, setSearch] = useState([]);
  const urlSearch = new URLSearchParams(window.location.search);
  const getSearch = urlSearch.get("search");
  function question() {
    let question = document.getElementById("question");
    if (search.length !== 0) {
      return (question.style.display = "none");
    }
  }
  console.log(search);
  function resultSearch() {
    let resultSearch = document.getElementById("result-search");
    if (search.length !== 0) {
      return (resultSearch.style.display = "block");
    }
  }
  useEffect(
    () => {
      let search = getSearch;
      axios
        .get(
          `https://backendmovies.herokuapp.com/api/movies/result/?search=${search}`
        )
        .then((res) => {
          setSearch(res.data);
        });
    },
    [],
    question(),
    resultSearch()
  );

  return (
    <section id="block-search">
      <h2 id="question" className="question">
        Quels films voulez vous consulter ?
      </h2>
      <h2 id="result-search" className="result-search">
        Vous-avez recherchez : "<em>{getSearch}</em>"
      </h2>
      <form action={process.env.PUBLIC_URL} method="get">
        <div>
          <input
            type="search"
            name="search"
            placeholder={getSearch}
            minLength="2"
            required
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
        </div>
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
