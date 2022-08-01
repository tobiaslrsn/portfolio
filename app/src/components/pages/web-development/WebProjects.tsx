import { useEffect, useState } from "react";
import { IWebProjects } from "../../../models/IWebProjects";
import { getWebProjects } from "../../../services/webProjectsFetch.service";
import { WebProjectsRender } from "./WebProjectsRender";
import scss from "./styles/webprojects.module.scss";

import { WebProjectFilterButtons } from "./WebProjectFilterButtons";

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

  const filterByBuiltWith = (category: string) => {
    const copy: IWebProjects[] = [...defaultList];
    const filteredCopy: IWebProjects[] = copy.filter((i) =>
      i.builtWith.includes(category)
    );
    setWebProjectsList(filteredCopy);
  };

  return (
    <>
      <WebProjectFilterButtons
        filterByBuiltWith={filterByBuiltWith}
      ></WebProjectFilterButtons>

      <div className={scss.listItems}>
        {webProjectsList.map((webProject, idx) => {
          return (
            <div
              key={webProject._id}
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
