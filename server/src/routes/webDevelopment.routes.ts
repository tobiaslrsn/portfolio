import express, { Router } from "express";
import {
  delete_webProjectController,
  edit_webProjectController,
  get_webProjectByIdController,
  get_webProjectsController,
  post_newWebProjectController,
} from "../controllers/webProjects";

const router: Router = express.Router();

router.get("/", get_webProjectsController);
router.post("/new", post_newWebProjectController);
router.get("/:id", get_webProjectByIdController);
router.put("/:id/edit", edit_webProjectController);
router.delete("/:id/delete", delete_webProjectController);

export default router;
