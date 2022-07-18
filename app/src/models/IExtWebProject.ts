export interface IExtWebProject {
  projectName: string;
  githubRepo: string;
  projectImageUrl: string;
  builtWith: [string];
  description: string;
  _id: string;
  imageGalleryUrl: [string];
  responsiveImagesUrl: [string];
  websiteUrl: "";
}
export interface IExtWebProjectResponse {
  data: IExtWebProject;
}

export const extWebProjectDefaultValues: IExtWebProject = {
  projectName: "",
  githubRepo: "",
  projectImageUrl: "",
  builtWith: [""],
  description: "",
  _id: "",
  imageGalleryUrl: [""],
  responsiveImagesUrl: [""],
  websiteUrl: "",
};
