import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  extGraphicDesignsDefaultValues,
  IExtGraphicDesign,
} from "../../../models/IExtGraphicDesign";
import { getGraphicDesignById } from "../../../services/graphicDesignFetch.service";

export const GraphicDesign = () => {
  const [design, setDesign] = useState<IExtGraphicDesign>(
    extGraphicDesignsDefaultValues
  );

  let params = useParams();

  useEffect(() => {
    getGraphicDesignById(params.id!)
      .then((response) => {
        setDesign(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h2>{design.title}</h2>
      <h3>{design.description}</h3>
      <p>{design.imageUrl}</p>

      {design.toolsUsed.map((toolsUsed) => {
        return (
          <>
            <ul key={design._id}>
              <li>{toolsUsed}</li>
            </ul>
          </>
        );
      })}

      <></>
    </>
  );
};
