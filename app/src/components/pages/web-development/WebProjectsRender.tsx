import { Link } from "react-router-dom";
import { IWebProjects } from "../../../models/IWebProjects";

import scss from "./styles/webprojects.module.scss";
interface IRenderWebProject {
  webProject: IWebProjects;
}

export const WebProjectsRender = (props: IRenderWebProject) => {
  return (
    <>
      <Link to={"/web-development/" + props.webProject._id}>
        <h2 className={scss.webTitle}>{props.webProject.projectName}</h2>
      </Link>

      <ul className={scss.builtWithContainer}>
        {props.webProject.builtWith.map((builtWith, i) => {
          return <li key={i}>{builtWith}</li>;
        })}
      </ul>
      <div>{props.webProject.shortDescription}</div>
    </>
  );
};
