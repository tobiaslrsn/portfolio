import mongoose from "mongoose";

export interface IWebProjects {
  projectName: string;
  builtWith: [string];
  projectImageUrl: string;
  imageGalleryUrl: [string];
  responsiveImagesUrl: [string];
  description: string;
  shortDescription: string;
  githubRepo: string;
  websiteUrl: string;
}

const webProjectsSchema = new mongoose.Schema<IWebProjects>({
  projectName: {
    type: String,
  },
  builtWith: [
    {
      type: String,
    },
  ],
  projectImageUrl: {
    type: String,
  },
  imageGalleryUrl: [
    {
      type: String,
    },
  ],
  responsiveImagesUrl: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  githubRepo: {
    type: String,
  },
  websiteUrl: {
    type: String,
  },
});

export const WebProjectsModel = mongoose.model<IWebProjects>(
  "webprojects-typescript",
  webProjectsSchema
);
