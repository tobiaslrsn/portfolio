import {
  IExtGraphicDesign,
  IExtGraphicDesignResponse,
} from "../models/IExtGraphicDesign";
import {
  IGraphicDesign,
  IGraphicDesignResponse,
} from "../models/IGraphicDesign";
import { get } from "./handleRequest.service";

export async function getGraphicDesigns(): Promise<IGraphicDesignResponse> {
  const response = `${process.env.REACT_APP_GRAPHIC_DESIGN_URI}`;
  return (await get<IGraphicDesignResponse>(response)).data;
}

export async function getGraphicDesignById(
  id: string
): Promise<IExtGraphicDesignResponse> {
  const response = `${process.env.REACT_APP_GRAPHIC_DESIGN_URI}` + id;
  return (await get<IExtGraphicDesignResponse>(response)).data;
}
