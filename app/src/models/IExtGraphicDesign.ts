export interface IExtGraphicDesign {
  title: string;
  imageUrl: string;
  description: string;
  toolsUsed: [string];
  _id: string;
}

export interface IExtGraphicDesignResponse {
  data: IExtGraphicDesign;
}

export const extGraphicDesignsDefaultValues: IExtGraphicDesign = {
  title: "",
  imageUrl: "",
  description: "",
  toolsUsed: [""],
  _id: "",
};
