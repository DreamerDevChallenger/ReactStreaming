import axios from "axios";

function getMovies() {
  let response;
  axios.get("http://localhost:3003/api/movies/").then((res) => {
    response = res.data;
  });
  return response;
}

export default getMovies;
