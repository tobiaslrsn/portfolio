import mongoose from "mongoose";

export interface IGraphicDesign {
  title: string;
  imageUrl: string;
  description: string;
  toolsUsed: [string];
}

const graphicDesignSchema = new mongoose.Schema<IGraphicDesign>({
  title: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  toolsUsed: [
    {
      type: String,
    },
  ],
});

export const GraphicDesignModel = mongoose.model<IGraphicDesign>(
  "graphic-design-typescript",
  graphicDesignSchema
);
