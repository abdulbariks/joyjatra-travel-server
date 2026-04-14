import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { checkAuth } from "../../middleware/checkAuth";
import { EventController } from "./event.controller";
import { multerUpload } from "../../config/multer.config";

const router = Router()

router.post("/create", multerUpload.single("image"), checkAuth(Role.MODERATOR), EventController.CreateEvent)
router.get("/", EventController.getAllEvents)

export const EventRoutes = router