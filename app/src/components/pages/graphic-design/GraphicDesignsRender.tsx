import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IGraphicDesign } from "../../../models/IGraphicDesign";

interface IRenderGraphicDesigns {
  graphicDesigns: IGraphicDesign;
}

export const GraphicDesignsRender = (props: IRenderGraphicDesigns) => {
  const [filterCat, setFilterCat] = useState(true);

  let filter = props.graphicDesigns.toolsUsed.filter((toolsUsed) =>
    toolsUsed.includes("Illustrator" || "illustrator")
  );

  return (
    <>
      {/*  {filterCat ? (
        <>
          <h2>TITLE</h2>
          <Link to={"/graphic-design/" + props.graphicDesigns._id}>
            {props.graphicDesigns.title}
          </Link>
          <h2>IMAGE URL</h2>
          {props.graphicDesigns.imageUrl}
          <h2>DESCRIPTION</h2>
          {props.graphicDesigns.description}
          <h2>TOOLS USED</h2>
          {props.graphicDesigns.toolsUsed.map((toolsUsed, i) => {
            return (
              <div key={i}>
                <ul>
                  <li>{toolsUsed}</li>
                </ul>
              </div>
            );
          })}{" "}
        </>
      ) : ( */}
      <>
        {filter.map(() => {
          return (
            <>
              <h2> {props.graphicDesigns.title}</h2>
              <h6>TOOLS USED: </h6>
              {props.graphicDesigns.toolsUsed.map((toolsUsed, i) => {
                return (
                  <>
                    <ul>
                      <li>{toolsUsed}</li>
                    </ul>
                  </>
                );
              })}

              <hr></hr>
            </>
          );
        })}
      </>
      {/* )} */}
    </>
  );
};
