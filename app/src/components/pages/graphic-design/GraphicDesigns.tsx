import { useEffect, useState } from "react";
import { IGraphicDesign } from "../../../models/IGraphicDesign";
import { getGraphicDesigns } from "../../../services/graphicDesignFetch.service";
import { GraphicDesignsRender } from "./GraphicDesignsRender";
import "./Graph.scss";
import { GraphicDesignFilterButtons } from "./GraphicDesignFilterButtons";

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
      <GraphicDesignFilterButtons
        filterByToolsUsed={filterByToolsUsed}
      ></GraphicDesignFilterButtons>

      {graphicDesignsList.map((graphicDesign, idx) => {
        return (
          <div
            key={graphicDesign._id}
            className="fade-graph-item"
            style={{ animationDelay: `${200 * idx}ms` }}
          >
            <GraphicDesignsRender
              graphicDesigns={graphicDesign}
            ></GraphicDesignsRender>
          </div>
        );
      })}
    </>
  );
};
