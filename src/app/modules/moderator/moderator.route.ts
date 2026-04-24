import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { createModeratorZodSchema } from "./moderator.validation";
import { ModeratorController } from "./moderator.controller";

const router = Router();

router.post(
  "/create-moderator",
  validateRequest(createModeratorZodSchema),
  checkAuth(Role.SUPER_ADMIN),
  ModeratorController.createModerator,
);

router.get(
  "/",
  checkAuth(Role.SUPER_ADMIN, Role.ADMIN),
  ModeratorController.getModerators,
);

export const ModeratorRoutes = router;
