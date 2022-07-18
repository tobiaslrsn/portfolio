import { useEffect, useState } from "react";
import { IWebProjects } from "../../../models/IWebProjects";
import { getWebProjects } from "../../../services/webProjectsFetch.service";
import { WebProjectsRender } from "./WebProjectsRender";
import "./web.scss";
export const WebProjects = () => {
  const [webProjectsList, setWebProjectsList] = useState<IWebProjects[]>([]);

  useEffect(() => {
    if (webProjectsList.length !== 0) return;
    getWebProjects()
      .then((response) => {
        setWebProjectsList(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <div className="bg-color">
        {webProjectsList.map((webProject, idx) => {
          return (
            <div
              className="fade-list-item"
              style={{ animationDelay: `${200 * idx}ms` }}
            >
              <WebProjectsRender
                webProject={webProject}
                key={webProject._id}
              ></WebProjectsRender>
            </div>
          );
        })}
      </div>
    </>
  );
};
