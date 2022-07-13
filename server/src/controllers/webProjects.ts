import { Request, Response } from "express";
import { WebProjectsModel } from "../models/webProjects.models";

export const get_webProjectsController = async (_: Request, res: Response) => {
  try {
    const webProjects = await WebProjectsModel.find();
    return res.send(webProjects);
  } catch (error: any) {
    console.log(error);
    return res.sendStatus(404) && res.send(404);
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
      githubRepo: req.body.githubRepo,
    });

    const saveWebProject = await postWebProject.save();
    return res.send(saveWebProject);
  } catch (error: any) {
    console.log(error);
    return res.sendStatus(500), console.log(error);
  }
};

export const get_webProjectByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const webProjectById = await WebProjectsModel.findById(req.params.id);
    return res.send(webProjectById);
  } catch (error: any) {
    console.log(error);
    return res.sendStatus(404) && res.send(404);
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
    editWebProject.githubRepo = req.body.githubRepo;

    await editWebProject.save();
    res.sendStatus(200);
  } catch (error: any) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const delete_webProjectController = async (
  req: Request,
  res: Response
) => {
  try {
    await WebProjectsModel.findByIdAndDelete(req.params.id);
    res.send("DELETED");
  } catch (error: any) {
    console.log(error);
  }
};
