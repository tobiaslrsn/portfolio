import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/" className="navbar-link">
          HOME
        </Link>
        <Link to="/web-development" className="navbar-link">
          WEB
        </Link>
        <Link to="/graphic-design" className="navbar-link">
          GRAPHIC
        </Link>
        <Link to="/about" className="navbar-link">
          ABOUT
        </Link>
        <Link to="/contact" className="navbar-link">
          CONTACT
        </Link>
      </nav>
    </>
  );
};
