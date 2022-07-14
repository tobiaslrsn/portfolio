import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/web-development">WEB</Link>
        <Link to="/graphic-design">GRAPHIC</Link>
      </div>
    </>
  );
};
