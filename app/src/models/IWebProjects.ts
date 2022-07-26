export interface IWebProjects {
  projectName: string;
  githubRepo: string;
  projectImageUrl: string;
  builtWith: [string];
  description: string;
  shortDescription: string;
  _id: string;
  imageGalleryUrl: [string];
  responsiveImagesUrl: [string];
  websiteUrl: string;
}

export interface IWebProjectsResponse {
  data: IWebProjects[];
}

export const webProjectsDefaultValues: IWebProjects = {
  projectName: "",
  githubRepo: "",
  projectImageUrl: "",
  builtWith: [""],
  description: "",
  shortDescription: "",
  _id: "",
  imageGalleryUrl: [""],
  responsiveImagesUrl: [""],
  websiteUrl: "",
};
