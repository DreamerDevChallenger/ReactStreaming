import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Css/moviesList.css";
function Search() {
  const [search, setSearch] = useState([]);
  const urlSearch = new URLSearchParams(window.location.search);
  const getSearch = urlSearch.get("search");
  useEffect(() => {
    const urlSearch = new URLSearchParams(window.location.search);
    const getSearch = urlSearch.get("search");
    axios
      .get(`http://localhost:3003/api/movies/result/?dsearch=${getSearch}`)
      .then((res) => {
        setSearch(res.data);
      });
  }, []);

  return (
    <section>
      <form action="/result/">
        <input type="search" name="search" placeholder={getSearch} />
      </form>
      <ul>
        {search.map((m) => (
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
export default Search;
