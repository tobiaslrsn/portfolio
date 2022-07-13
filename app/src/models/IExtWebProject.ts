export interface IExtWebProject {
  projectName: string;
  githubRepo: string;
  projectImageUrl: string;
  builtWith: [string];
  description: string;
  _id: string;
  imageGalleryUrl: [string];
  responsiveImagesUrl: [string];
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
};
