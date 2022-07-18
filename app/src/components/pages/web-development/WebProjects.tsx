import { useEffect, useState } from "react";
import { IWebProjects } from "../../../models/IWebProjects";
import { getWebProjects } from "../../../services/webProjectsFetch.service";
import { WebProjectsRender } from "./WebProjectsRender";
import "./web.scss";

export const WebProjects = () => {
  const [webProjectsList, setWebProjectsList] = useState<IWebProjects[]>([]);
  const [defaultList, setDefaultList] = useState<IWebProjects[]>([]);

  useEffect(() => {
    if (webProjectsList.length && defaultList.length !== 0) return;
    getWebProjects()
      .then((response) => {
        setWebProjectsList(response.data);
        setDefaultList(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  /* Find cleaner solution! */
  const onlyVue = (): void => {
    const copy: IWebProjects[] = [...defaultList];
    const filteredCopy: IWebProjects[] = copy.filter((item) =>
      item.builtWith.includes("vue")
    );
    setWebProjectsList(filteredCopy);
  };

  const showAll = (): void => {
    const copy: IWebProjects[] = [...defaultList];

    setWebProjectsList(copy);
  };
  const onlyReact = (): void => {
    const copy: IWebProjects[] = [...defaultList];
    const filteredCopy: IWebProjects[] = copy.filter((item) =>
      item.builtWith.includes("react")
    );
    setWebProjectsList(filteredCopy);
  };
  const onlyNode = (): void => {
    const copy: IWebProjects[] = [...defaultList];
    const filteredCopy: IWebProjects[] = copy.filter((item) =>
      item.builtWith.includes("node")
    );
    setWebProjectsList(filteredCopy);
  };

  const onlyMongoDb = (): void => {
    const copy: IWebProjects[] = [...defaultList];
    const filteredCopy: IWebProjects[] = copy.filter((item) =>
      item.builtWith.includes("mongoDB")
    );
    setWebProjectsList(filteredCopy);
  };

  return (
    <>
      <div className="sort-btn-container">
        <button
          className="sort-btn"
          style={{ animationDelay: `${300}ms` }}
          onClick={() => showAll()}
        >
          ALL PROJECTS
        </button>
        <button
          className="sort-btn"
          style={{ animationDelay: `${200}ms` }}
          onClick={() => onlyVue()}
        >
          VUE
        </button>
        <button
          className="sort-btn"
          style={{ animationDelay: `${200}ms` }}
          onClick={() => onlyReact()}
        >
          REACT
        </button>
        <button
          className="sort-btn"
          style={{ animationDelay: `${200}ms` }}
          onClick={() => onlyNode()}
        >
          NODEJS
        </button>
        <button
          className="sort-btn"
          style={{ animationDelay: `${200}ms` }}
          onClick={() => onlyMongoDb()}
        >
          MONGODB
        </button>
      </div>
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
    </>
  );
};
