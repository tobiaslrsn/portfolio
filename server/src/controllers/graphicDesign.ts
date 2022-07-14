import { Request, Response } from "express";
import { nextTick } from "process";
import { stringify } from "querystring";
import { GraphicDesignModel } from "../models/GraphicDesign.models";

export const get_graphicDesignsController = async (
  _: Request,
  res: Response
) => {
  try {
    const graphicDesigns = await GraphicDesignModel.find();
    //
    res.status(200).json({
      status: "Success",
      message: "Get graphic designs working.",
      data: graphicDesigns,
    });
    // return res.send(graphicDesigns);
  } catch (err: any) {
    res.status(500).json({
      status: "Get failed",
      message: err,
    });
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

    // return res.send(saveGraphicDesign);
    res.status(201).json({
      status: "Success",
      message: "Post new design working.",
      data: {
        saveGraphicDesign,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: "failed",
      message: error,
    });
  }
};

export const get_graphicDesignByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const graphicDesignById = await GraphicDesignModel.findById(req.params.id);
    // res.send(graphicDesignById);
    res.status(200).json({
      status: "Success",
      message: "Get graphic design by id works",
      data: graphicDesignById,
    });
  } catch (error: any) {
    /*     console.log(error);
    return res.sendStatus(404) && res.send(404); */
    res.status(500).json({
      status: "Get by id failed",
      message: error,
    });
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
