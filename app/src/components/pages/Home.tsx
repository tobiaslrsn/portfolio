import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGraphicDesigns } from "../../services/graphicDesignFetch.service";
import { getWebProjects } from "../../services/webProjectsFetch.service";
import { Loader } from "../misc/Loader";

import "./Home.scss";
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    setIsLoading(false);
    // }, 1000);
  }, []);

  getWebProjects();
  getGraphicDesigns();

  return (
    <>
      <div className="start-container">
        <div className="presentation">
          <h1>TOBIAS LARSSON</h1>
          <h5>Front end developer</h5>
        </div>
        <div className="startpage-links">
          <h2>
            <Link to="/web-development" className="cat-links">
              WEB
            </Link>
          </h2>
          <h2>
            <Link to="/graphic-design" className="cat-links">
              GRAPHIC
            </Link>
          </h2>
        </div>

        {isLoading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <img
              className="background"
              src={`${process.env.PUBLIC_URL}/the_fall_of_phaeton_1990.1.1.jpg`}
              alt=""
            />
          </>
        )}
      </div>
    </>
  );
};
