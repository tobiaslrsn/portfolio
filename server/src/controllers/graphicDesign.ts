import { Request, Response } from "express";
import { GraphicDesignModel } from "../models/GraphicDesign.models";

export const get_graphicDesignsController = async (
  _: Request,
  res: Response
) => {
  try {
    const graphicDesigns = await GraphicDesignModel.find();
    return res.send(graphicDesigns);
  } catch (error: any) {
    console.log(error);
    return res.sendStatus(404) && res.send(404);
  }
};

export const post_newGraphicDesignController = async (
  req: Request,
  res: Response
) => {
  try {
    const postGraphicDesign = new GraphicDesignModel({
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
      toolsUsed: req.body.toolsUsed,
    });
    const saveGraphicDesign = await postGraphicDesign.save();
    return res.send(saveGraphicDesign);
  } catch (error: any) {
    console.log(error);
    return res.sendStatus(500);
  }
};

export const get_graphicDesignByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const graphicDesignById = await GraphicDesignModel.findById(req.params.id);
    res.send(graphicDesignById);
  } catch (error: any) {
    console.log(error);
    return res.sendStatus(404) && res.send(404);
  }
};

export const edit_graphicDesignController = async (
  req: Request,
  res: Response
) => {
  try {
    const editGraphicDesign = await GraphicDesignModel.findByIdAndUpdate(
      req.params.id
    );
    editGraphicDesign.title = req.body.title;
    editGraphicDesign.imageUrl = req.body.imageUrl;
    editGraphicDesign.description = req.body.description;
    editGraphicDesign.toolsUsed = req.body.toolsUsed;

    await editGraphicDesign.save();
    res.sendStatus(200);
  } catch (error: any) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const delete_graphicDesignController = async (
  req: Request,
  res: Response
) => {
  try {
    await GraphicDesignModel.findByIdAndDelete(req.params.id);
    res.send("DELETED");
  } catch (error: any) {
    console.log(error);
    res.sendStatus(500);
  }
};
