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
          <button onClick={() => paginate(1)}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
        </li>
        {pageNumbers.map((n) => (
          <li key={n}>
            <button onClick={() => paginate(n)}>{n}</button>
          </li>
        ))}
        <li>
          <button onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </li>
      </ul>
    </article>
  );
}
export default Pagination;
