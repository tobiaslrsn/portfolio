/* projectName: {
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
  githubRepo: {
    type: String,
  }, */

import mongoose from "mongoose";

export interface IWebProjects extends Document {
  projectName: string;
  builtWith: [string];
  projectImageUrl: string;
  imageGalleryUrl: [string];
  responsiveImagesUrl: [string];
  description: string;
  githubRepo: string;
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
  githubRepo: {
    type: String,
  },
});

export const WebProjectsModel = mongoose.model<IWebProjects>(
  "webprojects-typescript",
  webProjectsSchema
);
