import { Link } from "react-router-dom";
import scss from "./navbar.module.scss";
import { NavbarHamburger } from "./NavbarHamburger";
export const Navbar = () => {
  return (
    <>
      <nav className={scss.container}>
        <h3 className={scss.logo}>TOBIAS LARSSON</h3>
        <Link to="/" className={scss.navbarLink}>
          STARTPAGE
        </Link>
        <Link to="/web-development" className={scss.navbarLink}>
          WEB DEVELOPMENT
        </Link>
        <Link to="/graphic-design" className={scss.navbarLink}>
          GRAPHIC DESIGN
        </Link>
        <div className={scss.containerRight}>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <NavbarHamburger></NavbarHamburger>
      </nav>
    </>
  );
};
