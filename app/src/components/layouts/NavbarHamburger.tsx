import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import scss from "./NavbarHamburger.module.scss";

export const NavbarHamburger = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      document.getElementById("close-menu")?.click();
    }
  }, [open]);

  return (
    <>
      <input type="checkbox" id={scss.active} />
      <label htmlFor={scss.active} className={scss.menuBtn}>
        <span></span>
      </label>
      <label
        htmlFor={scss.active}
        className={scss.close}
        id="close-menu"
        onClick={() => setOpen(true)}
      ></label>
      <div className={scss.wrapper}>
        <ul>
          <li>
            <Link onClick={() => setOpen(false)} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={() => setOpen(false)} to="/web-development">
              Web development
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/graphic-design">
              Graphic design
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
