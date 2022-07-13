import { Link } from "react-router-dom";
import { getGraphicDesigns } from "../../services/graphicDesignFetch.service";
import { getWebProjects } from "../../services/webProjectsFetch.service";

export const Home = () => {
  getWebProjects();
  getGraphicDesigns();

  return (
    <>
      <div>
        <h1>WELCOME TO HOME.TSX</h1>
        <h2>
          <Link to="/web-development">WEB</Link>
        </h2>
        <h2>
          <Link to="/graphic-design">GRAPHIC</Link>
        </h2>
      </div>
    </>
  );
};
