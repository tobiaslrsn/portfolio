import axios from "axios";
import { IGraphicDesign } from "../models/IGraphicDesign";

export async function getGraphicDesigns(): Promise<IGraphicDesign[]> {
  let response = await axios.get<IGraphicDesign[]>(
    "http://localhost:8080/graphic-design"
  );
  console.log("GRAPHIC DESIGN =", response.data);
  return response.data;
}
