import { useEffect, useState } from "react";
import { IWebProjects } from "../../../models/IWebProjects";
import { getWebProjects } from "../../../services/webProjectsFetch.service";
import { WebProjectsRender } from "./WebProjectsRender";

export const WebProjects = () => {
  const [webProjectsList, setWebProjectsList] = useState<IWebProjects[]>([]);

  useEffect(() => {
    if (webProjectsList.length !== 0) return;
    getWebProjects().then((response) => {
      setWebProjectsList(response);

      console.log(response);
    });
  });

  return (
    <>
      {webProjectsList.map((webProject) => {
        return (
          <WebProjectsRender
            webProject={webProject}
            key={webProject._id}
          ></WebProjectsRender>
        );
      })}
    </>
  );
};
