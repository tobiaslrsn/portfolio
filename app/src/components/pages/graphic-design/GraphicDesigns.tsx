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
