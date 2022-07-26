import { useEffect, useState } from "react";
import { IGraphicDesign } from "../../../models/IGraphicDesign";
import { getGraphicDesigns } from "../../../services/graphicDesignFetch.service";

import { GraphicDesignsRender } from "./GraphicDesignsRender";
import "./Graph.scss";
import scssButtons from "../sortbuttons.module.scss";
export const GraphicDesigns = () => {
  const [graphicDesignsList, setGraphicDesignsList] = useState<
    IGraphicDesign[]
  >([]);
  const [defaultList, setDefaultList] = useState<IGraphicDesign[]>([]);

  useEffect(() => {
    if (graphicDesignsList.length && defaultList.length !== 0) return;
    getGraphicDesigns()
      .then((response) => {
        setGraphicDesignsList(response.data);
        setDefaultList(response.data);
        console.log("hi", response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const filterByToolsUsed = (tools: string) => {
    const copy: IGraphicDesign[] = [...defaultList];
    const filteredCopy: IGraphicDesign[] = copy.filter((i) =>
      i.toolsUsed.includes(tools)
    );
    setGraphicDesignsList(filteredCopy);
  };

  return (
    <>
      <div
        className={scssButtons.sortBtnContainer}
        style={{ animationDelay: `${300}ms` }}
      >
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByToolsUsed("")}
        >
          ALL PROJECTS
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByToolsUsed("photoshop")}
        >
          Photoshop
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByToolsUsed("illustrator")}
        >
          Illustrator
        </button>
      </div>
      {graphicDesignsList.map((graphicDesign, idx) => {
        return (
          <div
            className="fade-graph-item"
            style={{ animationDelay: `${200 * idx}ms` }}
          >
            <GraphicDesignsRender
              graphicDesigns={graphicDesign}
              key={graphicDesign._id}
            ></GraphicDesignsRender>
          </div>
        );
      })}
    </>
  );
};
