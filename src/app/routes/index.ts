import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { EventRoutes } from "../modules/event/event.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/event", EventRoutes);

export const IndexRoutes = router;