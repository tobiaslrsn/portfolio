import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  extWebProjectDefaultValues,
  IExtWebProject,
} from "../../../models/IExtWebProject";
import { getWebProjectById } from "../../../services/webProjectsFetch.service";
import scss from "./styles/webproject.module.scss";

export const WebProject = () => {
  const [project, setProject] = useState<IExtWebProject>(
    extWebProjectDefaultValues
  );
  let params = useParams();

  useEffect(() => {
    getWebProjectById(params.id!) // funktionen ligger i service, skickar med id till service
      .then((response) => {
        setProject(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <div className={scss.centerProject}>
        <div className={scss.descriptionContainer}>
          <div className={scss.projectImage}>
            <img
              src={project.projectImageUrl}
              alt="Project"
              className="project-image"
            />
          </div>

          <div className={scss.projectDescription}>
            <h2>{project.projectName}</h2>
            <span>{project.description}</span>
            <ul className={scss.builtWithContainer}>
              <p>Built with: </p>
              {project.builtWith.map((builtWith, i) => {
                return (
                  <>
                    <li key={i} className={scss.builtWith}>
                      {builtWith}
                    </li>
                  </>
                );
              })}
            </ul>
            <a href={project.githubRepo}>GITHUB</a>
            <a href={project.websiteUrl}>VISIT</a>
          </div>
        </div>
        <div className={scss.imageGallery}>
          {project.responsiveImagesUrl.map((responsiveImagesUrl) => {
            return (
              <>
                <img
                  key={project._id}
                  src={responsiveImagesUrl}
                  alt="Responsive gallery"
                  className="responsive-gallery"
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
