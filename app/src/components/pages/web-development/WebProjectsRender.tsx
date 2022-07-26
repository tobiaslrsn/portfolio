import { Link } from "react-router-dom";
import { IWebProjects } from "../../../models/IWebProjects";

import scss from "./styles/webprojects.module.scss";
interface IRenderWebProject {
  webProject: IWebProjects;
}

export const WebProjectsRender = (props: IRenderWebProject) => {
  /*   let filter = props.webProject.builtWith.filter((builtWith) =>
    builtWith.includes("node")
  ); */

  return (
    <>
      <Link to={"/web-development/" + props.webProject._id}>
        <h2 className={scss.webTitle}>{props.webProject.projectName}</h2>
      </Link>

      {/* <h3>BUILT WITH:</h3> */}
      <ul className={scss.builtWithContainer}>
        {props.webProject.builtWith.map((builtWith, i) => {
          return <li key={i}>{builtWith}</li>;
        })}
      </ul>
      <div>{props.webProject.shortDescription}</div>
      {/* 
      <h3>IMAGE GALLERY URL</h3>
      {props.webProject.imageGalleryUrl.map((imageGalleryUrl) => {
        return (
          <>
            <ul key={props.webProject.description}>
              <li>{imageGalleryUrl}</li>
            </ul>
          </>
        );
      })}

      <h3>RESPONSIVE IMAGES URL</h3>
      {props.webProject.responsiveImagesUrl.map((responsiveImagesUrl) => {
        return (
          <>
            <ul key={props.webProject.projectName}>
              <li>{responsiveImagesUrl}</li>
            </ul>
          </>
        );
      })}
      <p>{props.webProject.websiteUrl}</p> */}
    </> /* 
    <>
      {filter.map(() => {
        return (
          <>
            <h3>{props.webProject.projectName}</h3>
            {props.webProject.builtWith.map((builtWith, index) => {
              return (
                <>
                  <ul>
                    <li key={index}>{builtWith}</li>
                  </ul>
                </>
              );
            })}
          </>
        );
      })}
    </> */
  );
};
