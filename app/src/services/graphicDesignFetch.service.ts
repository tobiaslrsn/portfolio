import { IExtGraphicDesign } from "../models/IExtGraphicDesign";
import { IGraphicDesign } from "../models/IGraphicDesign";
import { get } from "./handleRequest.service";

export async function getGraphicDesigns(): Promise<IGraphicDesign[]> {
  const response = `${process.env.REACT_APP_GRAPHIC_DESIGN_URI}`;
  return (await get<IGraphicDesign[]>(response)).data;
}

export async function getGraphicDesignById(
  id: string
): Promise<IExtGraphicDesign> {
  const response = `${process.env.REACT_APP_GRAPHIC_DESIGN_URI}` + id;
  return (await get<IExtGraphicDesign>(response)).data;
}
