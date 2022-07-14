import { IExtWebProject } from "../models/IExtWebProject";
import { IWebProjects } from "../models/IWebProjects";
import { get } from "./handleRequest.service";

export async function getWebProjects(): Promise<IWebProjects[]> {
  const response = `${process.env.REACT_APP_WEBDEV_URI}`;
  return (await get<IWebProjects[]>(response)).data;
}

export async function getWebProjectById(id: string): Promise<IExtWebProject> {
  const response = `${process.env.REACT_APP_WEBDEV_URI}` + id;
  return (await get<IExtWebProject>(response)).data;
}
