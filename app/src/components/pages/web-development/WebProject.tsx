import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  extWebProjectDefaultValues,
  IExtWebProject,
} from "../../../models/IExtWebProject";
import { getWebProjectById } from "../../../services/webProjectsFetch.service";

export const WebProject = () => {
  const [project, setProject] = useState<IExtWebProject>(
    extWebProjectDefaultValues
  );
  let params = useParams();

  useEffect(() => {
    getWebProjectById(params.id!) // funktionen ligger i service, skickar med id till service
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2>{project.projectName}</h2>
      {project.builtWith.map((builtWith) => {
        return (
          <>
            <ul>
              <li>{builtWith}</li>
            </ul>
          </>
        );
      })}
    </>
  );
};
