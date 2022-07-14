import { Link } from "react-router-dom";
import { IGraphicDesign } from "../../../models/IGraphicDesign";

interface IRenderGraphicDesigns {
  graphicDesigns: IGraphicDesign;
}

export const GraphicDesignsRender = (props: IRenderGraphicDesigns) => {
  return (
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
      })}
    </>
  );
};
