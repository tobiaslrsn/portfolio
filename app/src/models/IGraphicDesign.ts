export interface IGraphicDesign {
  title: string;
  imageUrl: string;
  description: string;
  toolsUsed: [string];
  _id: number;
}

export interface IGraphicDesignResponse {
  data: IGraphicDesign[];
}

export const graphicDesignsDefaultValues: IGraphicDesign = {
  title: "",
  imageUrl: "",
  description: "",
  toolsUsed: [""],
  _id: 0,
};
