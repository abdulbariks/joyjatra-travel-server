import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { checkAuth } from "../../middleware/checkAuth";
import { EventController } from "./event.controller";

const router = Router()

router.post("/create", checkAuth(Role.MODERATOR), EventController.CreateEvent)

export const EventRoutes = router