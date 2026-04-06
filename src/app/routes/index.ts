import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { EventRoutes } from "../modules/event/event.route";
import { ReviewRoutes } from "../modules/review/review.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/event", EventRoutes);
router.use("/review", ReviewRoutes);

export const IndexRoutes = router;
