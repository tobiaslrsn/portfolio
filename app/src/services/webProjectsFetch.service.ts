import axios from "axios";
import { IWebProjects } from "../models/IWebProjects";

export async function getWebProjects(): Promise<IWebProjects[]> {
  let response = await axios.get<IWebProjects[]>(
    "http://localhost:8080/web-development"
  );
  console.log("WEB PROJECTS =", response.data);
  return response.data;
}
