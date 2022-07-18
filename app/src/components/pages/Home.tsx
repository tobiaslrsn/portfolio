import { Link } from "react-router-dom";
import { getGraphicDesigns } from "../../services/graphicDesignFetch.service";
import { getWebProjects } from "../../services/webProjectsFetch.service";

import "./Home.scss";
export const Home = () => {
  getWebProjects();
  getGraphicDesigns();

  return (
    <>
      <h1>WELCOME TO HOME.TSX</h1>

      <h2>
        <Link to="/web-development">WEB</Link>
      </h2>
      <h2>
        <Link to="/graphic-design">GRAPHIC</Link>
      </h2>
      <img
        className="background"
        src={`${process.env.PUBLIC_URL}/the_fall_of_phaeton_1990.1.1.jpg`}
        alt=""
      />
    </>
  );
};
