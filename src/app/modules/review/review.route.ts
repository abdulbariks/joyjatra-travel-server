import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { checkAuth } from "../../middleware/checkAuth";
import { ReviewController } from "./review.controller";

const router = Router();

router.post("/create", checkAuth(Role.TOURIST), ReviewController.CreateReview);

export const ReviewRoutes = router;
