import { useEffect, useState } from "react";
import { IGraphicDesign } from "../../../models/IGraphicDesign";
import { getGraphicDesigns } from "../../../services/graphicDesignFetch.service";
import { GraphicDesignsRender } from "./GraphicDesignsRender";

export const GraphicDesigns = () => {
  const [graphicDesignsList, setGraphicDesignsList] = useState<
    IGraphicDesign[]
  >([]);

  useEffect(() => {
    if (graphicDesignsList.length !== 0) return;
    getGraphicDesigns().then((response) => {
      setGraphicDesignsList(response);

      console.log("hi", response);
    });
  });

  return (
    <>
      {graphicDesignsList.map((graphicDesign) => {
        return (
          <GraphicDesignsRender
            graphicDesigns={graphicDesign}
            key={graphicDesign._id}
          ></GraphicDesignsRender>
        );
      })}
    </>
  );
};