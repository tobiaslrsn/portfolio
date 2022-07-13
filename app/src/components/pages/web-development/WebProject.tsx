import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  extWebProjectDefaultValues,
  IExtWebProject,
} from "../../../models/IExtWebProject";

export const WebProject = () => {
  const [project, setProject] = useState<IExtWebProject>(
    extWebProjectDefaultValues
  );
  let params = useParams();

  useEffect(() => {
    axios
      .get<IExtWebProject>("http://localhost:8080/web-development/" + params.id)
      .then((response) => {
        setProject(response.data);
        console.log(response.data);
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
