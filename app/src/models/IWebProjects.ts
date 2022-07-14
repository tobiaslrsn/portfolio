export interface IWebProjects {
  projectName: string;
  githubRepo: string;
  projectImageUrl: string;
  builtWith: [string];
  description: string;
  _id: string;
  imageGalleryUrl: [string];
  responsiveImagesUrl: [string];
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
  _id: "",
  imageGalleryUrl: [""],
  responsiveImagesUrl: [""],
};
