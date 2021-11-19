import "../Css/pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

function Pagination({ moviesPerPage, totalMovies, paginate }) {
  const pageNumbers = [];
  for (let p = 0; p <= Math.ceil(totalMovies / moviesPerPage); p++) {
    pageNumbers.push(p);
  }
  pageNumbers.shift();

  return (
    <article className="block-pagination">
      <ul>
        <li>
          <a href={"#page=" + 1}>
            <button onClick={() => paginate(1)}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </button>
          </a>
        </li>
        {pageNumbers.map((n) => (
          <li key={n}>
            <a onClick={() => paginate(n)} href={"#page=" + n}>
              <button>{n}</button>
            </a>
          </li>
        ))}
        <li>
          <a href={"#page=" + pageNumbers[pageNumbers.length - 1]}>
            <button
              onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
            >
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
          </a>
        </li>
      </ul>
    </article>
  );
}
export default Pagination;
