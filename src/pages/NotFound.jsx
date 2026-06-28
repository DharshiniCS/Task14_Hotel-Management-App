import { Link } from "react-router-dom";
import "../css/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <Link to="/" className="home-btn">
        Go Back Home
      </Link>

    </div>
  );
}