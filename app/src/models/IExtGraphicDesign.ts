export interface IExtGraphicDesign {
  title: string;
  imageUrl: string;
  description: string;
  toolsUsed: [string];
  _id: string;
}

export const extGraphicDesignsDefaultValues: IExtGraphicDesign = {
  title: "",
  imageUrl: "",
  description: "",
  toolsUsed: [""],
  _id: "",
};
