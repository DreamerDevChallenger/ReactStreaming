import { Link } from "react-router-dom";
import "../Css/header.css";
function Header() {
  return (
    <header className="header">
      <h1>
        <em>Movies App</em>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="link" onClick={(e) => {}}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="link">
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
