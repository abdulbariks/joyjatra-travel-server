import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { EventRoutes } from "../modules/event/event.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { ModeratorRoutes } from "../modules/moderator/moderator.route";
import { BlogRoutes } from "../modules/blog/blog.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/moderator", ModeratorRoutes);
router.use("/event", EventRoutes);
router.use("/blog", BlogRoutes);
router.use("/review", ReviewRoutes);

export const IndexRoutes = router;
