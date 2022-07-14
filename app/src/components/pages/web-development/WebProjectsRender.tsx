import { Link } from "react-router-dom";
import { IWebProjects } from "../../../models/IWebProjects";

interface IRenderWebProject {
  webProject: IWebProjects;
}

export const WebProjectsRender = (props: IRenderWebProject) => {
  return (
    <>
      <Link to={"/web-development/" + props.webProject._id}>
        <h2>{props.webProject.projectName}</h2>
      </Link>

      {/* MAP BUILT WITH */}
      <h3>BUILT WITH:</h3>
      {props.webProject.builtWith.map((builtWith, i) => {
        return (
          <div key={i}>
            <ul>
              <li>{builtWith}</li>
            </ul>
          </div>
        );
      })}
      <div>{props.webProject.description}</div>

      {/* MAP IMAGE GALLERY */}
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
      {/* MAP RESPONSIVE IMAGES */}
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
    </>
  );
};
