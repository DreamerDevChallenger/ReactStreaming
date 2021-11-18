import { Link } from "react-router-dom";
import "../Css/header.css";
function Header() {
  return (
    <header className="header">
      <h1>
        <em>Movies App</em>
      </h1>
      <nav>
        <Link to="/" className="link" onClick={(e) => {}}>
          Home
        </Link>
        <Link to="/result" className="link">
          Search
        </Link>
      </nav>
    </header>
  );
}
export default Header;
