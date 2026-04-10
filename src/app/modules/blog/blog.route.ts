import { Router } from "express";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { BlogController } from "./blog.controller";
import { createBlogZodSchema } from "./blog.validation";
import { validateRequest } from "../../middleware/validateRequest";

const router = Router();

router.post(
  "/create",
  checkAuth(Role.MODERATOR),
  multerUpload.single("image"),
  validateRequest(createBlogZodSchema),
  BlogController.createBlog,
);

export const BlogRoutes = router;
