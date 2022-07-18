import { useEffect, useState } from "react";
import { IGraphicDesign } from "../../../models/IGraphicDesign";
import { getGraphicDesigns } from "../../../services/graphicDesignFetch.service";

import { GraphicDesignsRender } from "./GraphicDesignsRender";
import "./Graph.scss";

export const GraphicDesigns = () => {
  const [graphicDesignsList, setGraphicDesignsList] = useState<
    IGraphicDesign[]
  >([]);

  useEffect(() => {
    if (graphicDesignsList.length !== 0) return;
    getGraphicDesigns()
      .then((response) => {
        setGraphicDesignsList(response.data);
        console.log("hi", response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <div className="bg-color">
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
      </div>
    </>
  );
};
