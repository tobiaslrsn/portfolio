import express, { Router } from "express";
import {
  delete_graphicDesignController,
  edit_graphicDesignController,
  get_graphicDesignByIdController,
  get_graphicDesignsController,
  post_newGraphicDesignController,
} from "../controllers/graphicDesign";

const router: Router = express.Router();

router.get("/", get_graphicDesignsController);
router.post("/new", post_newGraphicDesignController);
router.get("/:id", get_graphicDesignByIdController);
router.put("/:id/edit", edit_graphicDesignController);
router.delete("/:id/delete", delete_graphicDesignController);

export default router;
