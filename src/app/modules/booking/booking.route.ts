import { Router } from "express";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { BookingController } from "./booking.controller";

const router = Router();

router.post(
  "/bookings",
  checkAuth(Role.TOURIST, Role.MODERATOR, Role.ADMIN),
  BookingController.bookEvent,
);
router.get(
  "/my-bookings",
  checkAuth(Role.TOURIST),
  BookingController.getMyBookings,
);
router.get(
  "/bookings",
  checkAuth(Role.MODERATOR, Role.ADMIN, Role.SUPER_ADMIN),
  BookingController.getBookings,
);
export const bookingRoute = router;
