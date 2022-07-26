import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  extWebProjectDefaultValues,
  IExtWebProject,
} from "../../../models/IExtWebProject";
import { getWebProjectById } from "../../../services/webProjectsFetch.service";
import "./styles/webproject.scss";
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
  }, []);

  return (
    <>
      <div className="center-project">
        <div className="project-description">
          <img src={project.projectImageUrl} alt="" className="project-image" />
          <div className="flex-it">
            <h2>{project.projectName}</h2>
            <span>{project.description}</span>
            <ul className="built-with">
              {project.builtWith.map((builtWith) => {
                return (
                  <>
                    <li>{builtWith}</li>
                  </>
                );
              })}
            </ul>
            <a href={project.githubRepo}>GITHUB</a>
            <a href={project.websiteUrl} target="_blank">
              VISIT
            </a>
          </div>
        </div>
        <div className="display-row">
          {project.responsiveImagesUrl.map((responsiveImagesUrl) => {
            return (
              <>
                <img
                  src={responsiveImagesUrl}
                  alt="IMAGE ALT "
                  className="responsive-gallery"
                />
                <br />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
