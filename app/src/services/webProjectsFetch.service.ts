import {
  IExtWebProject,
  IExtWebProjectResponse,
} from "../models/IExtWebProject";
import { IWebProjectsResponse } from "../models/IWebProjects";
import { get } from "./handleRequest.service";

export async function getWebProjects(): Promise<IWebProjectsResponse> {
  const response = `${process.env.REACT_APP_WEBDEV_URI}`;
  return (await get<IWebProjectsResponse>(response)).data;
}

export async function getWebProjectById(
  id: string
): Promise<IExtWebProjectResponse> {
  const response = `${process.env.REACT_APP_WEBDEV_URI}` + id;
  return (await get<IExtWebProjectResponse>(response)).data;
}
