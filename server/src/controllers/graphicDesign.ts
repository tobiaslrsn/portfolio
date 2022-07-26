import { Request, Response } from "express";
import {
  GraphicDesignModel,
  IGraphicDesign,
} from "../models/GraphicDesign.models";

export const get_graphicDesignsController = async (
  _: Request,
  res: Response
) => {
  try {
    const graphicDesigns = await GraphicDesignModel.find();

    res.status(200).json({
      status: "Success",
      message: "GET graphic designs working.",
      data: graphicDesigns,
    });
  } catch (err: any) {
    res.status(500).json({
      status: "GET failed",
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
      category: req.body.category,
    });

    const saveGraphicDesign = await postGraphicDesign.save();

    res.status(201).json({
      status: "Success",
      message: "POST new design working.",
      data: saveGraphicDesign,
    });
  } catch (err: any) {
    res.status(500).json({
      status: "POST failed",
      message: err,
    });
  }
};

export const get_graphicDesignByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const graphicDesignById = await GraphicDesignModel.findById(req.params.id);

    res.status(200).json({
      status: "Success",
      message: "GET graphic design by id works",
      data: graphicDesignById,
    });
  } catch (err: any) {
    res.status(500).json({
      status: "GET graphic design by id failed",
      message: err,
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
    editGraphicDesign.category = req.body.category;

    await editGraphicDesign.save();

    res.status(201).json({
      status: "Success",
      message: "UPDATE new design working.",
      data: { editGraphicDesign },
    });
  } catch (err: any) {
    res.status(500).json({
      status: "UPDATE failed",
      message: err,
    });
  }
};

export const delete_graphicDesignController = async (
  req: Request,
  res: Response
) => {
  try {
    const deleteGraphicDesign: IGraphicDesign =
      await GraphicDesignModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Success",
      message: "DELETE working",
      data: { deleteGraphicDesign },
    });
  } catch (err: any) {
    res.status(500).json({
      status: "DELETE failed",
      message: err,
    });
  }
};
