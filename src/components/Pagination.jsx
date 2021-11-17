import "../Css/pagination.css";
import "../../node_modules/font-awesome/css/font-awesome.css";

function Pagination({ moviesPerPage, totalMovies, paginate }) {
  const pageNumbers = [];
  for (let p = 0; p <= Math.ceil(totalMovies / moviesPerPage); p++) {
    pageNumbers.push(p);
  }
  pageNumbers.shift();
  return (
    <article>
      <ul>
        <button onClick={() => paginate(1)}>first</button>
        {pageNumbers.map((n) => (
          <li key={n}>
            <a onClick={() => paginate(n)} href={"#!"}>
              {n}
            </a>
          </li>
        ))}
        <button onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}>
          <i className="far fa-thumbs-down"></i>
        </button>
      </ul>
    </article>
  );
}
export default Pagination;
