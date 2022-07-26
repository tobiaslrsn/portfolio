import { useEffect, useState } from "react";
import { IWebProjects } from "../../../models/IWebProjects";
import { getWebProjects } from "../../../services/webProjectsFetch.service";
import { WebProjectsRender } from "./WebProjectsRender";
import scss from "./styles/webprojects.module.scss";
import scssButtons from "../sortbuttons.module.scss";

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
  /* const onlyVue = (): void => {
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
  }; */

  /* FOUND IT! */
  const filterByBuiltWith = (category: string) => {
    const copy: IWebProjects[] = [...defaultList];
    const filteredCopy: IWebProjects[] = copy.filter((item) =>
      item.builtWith.includes(category)
    );
    setWebProjectsList(filteredCopy);
  };

  return (
    <>
      <div
        className={scssButtons.sortBtnContainer}
        style={{ animationDelay: `${300}ms` }}
      >
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByBuiltWith("")}
        >
          ALL PROJECTS
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByBuiltWith("vue" || "Vue")}
        >
          VUE
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByBuiltWith("react" || "React")}
        >
          REACT
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByBuiltWith("nodeJS" || "node" || "Node")}
        >
          NODEJS
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByBuiltWith("mongoDB" || "mongoDb" || "mongodb")}
        >
          MONGODB
        </button>
      </div>
      <div className={scss.listItems}>
        {webProjectsList.map((webProject, idx) => {
          return (
            <div
              className={scss.fadeListItems}
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
