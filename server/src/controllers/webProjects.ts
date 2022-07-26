import { Request, Response } from "express";
import { IWebProjects, WebProjectsModel } from "../models/webProjects.models";

let successful: string = "Success";

export const get_webProjectsController = async (_: Request, res: Response) => {
  try {
    const webProjects = await WebProjectsModel.find();

    res.status(200).json({
      status: successful,
      message: "GET web-projects working.",
      data: webProjects,
    });
  } catch (err: any) {
    res.status(500).json({
      status: "GET failed",
      message: err,
    });
  }
};

export const post_newWebProjectController = async (
  req: Request,
  res: Response
) => {
  try {
    const postWebProject = new WebProjectsModel({
      projectName: req.body.projectName,
      builtWith: req.body.builtWith,
      projectImageUrl: req.body.projectImageUrl,
      imageGalleryUrl: req.body.imageGalleryUrl,
      responsiveImagesUrl: req.body.responsiveImagesUrl,
      description: req.body.description,
      shortDescription: req.body.shortDescription,
      githubRepo: req.body.githubRepo,
      websiteUrl: req.body.websiteUrl,
    });

    const saveWebProject = await postWebProject.save();

    res.status(201).json({
      status: successful,
      message: "POST new web-project working.",
      data: saveWebProject,
    });
  } catch (err: any) {
    res.status(500).json({
      status: "POST failed",
      message: err,
    });
  }
};

export const get_webProjectByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const webProjectById = await WebProjectsModel.findById(req.params.id);

    res.status(200).json({
      status: successful,
      message: "GET web-project by id works.",
      data: webProjectById,
    });
  } catch (error: any) {
    res.status(500).json({
      status: "GET web-project by id failed.",
      message: error,
    });
  }
};

export const edit_webProjectController = async (
  req: Request,
  res: Response
) => {
  try {
    const editWebProject = await WebProjectsModel.findByIdAndUpdate(
      req.params.id
    );
    editWebProject.projectName = req.body.projectName;
    editWebProject.builtWith = req.body.builtWith;
    editWebProject.projectImageUrl = req.body.projectImageUrl;
    editWebProject.imageGalleryUrl = req.body.imageGalleryUrl;
    editWebProject.responsiveImagesUrl = req.body.responsiveImagesUrl;
    editWebProject.description = req.body.description;
    editWebProject.shortDescription = req.body.shortDescription;
    editWebProject.githubRepo = req.body.githubRepo;
    editWebProject.websiteUrl = req.body.websiteUrl;

    await editWebProject.save();
    res.status(200).json({
      status: successful,
      message: "UPDATE web-project working.",
      data: editWebProject,
    });
  } catch (err: any) {
    res.status(500).json({
      status: "UPDATE failed",
      message: err,
    });
  }
};

export const delete_webProjectController = async (
  req: Request,
  res: Response
) => {
  try {
    const deleteWebProject: IWebProjects =
      await WebProjectsModel.findByIdAndDelete(req.params.id);

    res.status(500).json({
      status: successful,
      message: "DELETE working",
      data: deleteWebProject,
    });
  } catch (err: any) {
    res.status(400).json({
      status: "DELETE failed",
      message: err,
    });
  }
};
